import Vendors from "../model/vendorModel.js";
import Users from "../model/userModel.js";
import nodemailer from 'nodemailer';

// Create a transporter object using the default SMTP transport
const transporter = nodemailer.createTransport({
    service: 'gmail',
    auth: {
      user: 'serendibweds2@gmail.com', // Your Gmail address
      pass: 'fvum olga mabt acyc', // Your Gmail password or app password
    },
  });



// Create a new booking
export const createVendorBooking = async (req, res) => {
    try {
        const { id } = req.params; 
        const {appointments,firebaseUserId,appointmentId } =req.body;

        console.log(req.body)

        // Find the vendor by _id
        const vendor = await Vendors.findOne({ _id: id });
        console.log(vendor.name)
        
        if (!vendor) {
            return res.status(404).json({ message: "Vendor not found" });
        }
        
        // Add each new appointment to the vendor's appointments array
        appointments.forEach(appointment => {
          vendor.appointments.push(appointment);
          });

        // Save the updated vendor document
        const updatedVendor = await vendor.save();
        // Assuming there is a User model with name and email fields
        const user = await Users.findOne({ firebaseUserId: firebaseUserId });
         if (!user) {
             return res.status(404).json({ message: "User not found" });
         }
 
         // Create a booking document with vendor name, email, and other relevant information
         const booking = {
             vendorname: vendor.name,
             bookingDate: appointments[0].bookingDate,
             bookingTime: appointments[0].bookingTime,
             email: vendor.email,
             appointmentId: appointments[0].appointmentId
         };
 
         // Add the booking to the user's bookings array
         user.appointments.push(booking);
 
         // Save the updated user document
         await user.save();

         // Send an email to the vendor
        const mailOptions = {
            from: 'serendibweds2@gmail.com', // The email address sending the email
            to: vendor.email, // Vendor's email from the database
            
            subject: 'New Booking Appointment',
            // text: Dear ${vendor.name}, you have a new booking. Details: Date - ${appointments[0].bookingDate}, Time - ${appointments[0].bookingTime}. Special Requests: ${appointments[0].specialRequests}, // Customize this message
            html: `<div style="font-family: Arial, sans-serif; color: #333;">
            <h2 style="color: #007bff;">New Booking Appointment</h2>
            <p>Dear ${vendor.name},</p>
            <p>You have a new booking from <strong>${appointments[0].name}</strong>. Here are the details:</p>
            <ul>
              <li>Date: <strong>${appointments[0].bookingDate}</strong></li>
              <li>Time: <strong>${appointments[0].bookingTime}</strong></li>
              <li>Special Requests: <strong>${appointments[0].specialRequests || 'None'}</strong></li>
              <li>Contact Email: <strong>${appointments[0].email}</strong></li>
              <li>Contact Phone: <strong>${appointments[0].phone}</strong></li>
            </ul>
            <p>Please review the details and prepare accordingly. If you have any questions or need to reach out to the customer, feel free to use the contact information provided.</p>
            <p><a href="vendor_dashboard_link_here">Click here to view this booking in your dashboard.</a></p>
            <p>Thank you for your attention to this booking!</p>
            <hr>
            <footer>
              <p>If you have any questions, feel free to contact us at <a href="mailto:serendibweds2@gmail.com">support@example.com</a>.</p>
            </footer>
            
          </div>
          `, // html body
          };
  
          transporter.sendMail(mailOptions, function(error, info){
            if (error) {
              console.log('Error sending email:', error);
            } else {
              console.log('Email sent: ' + info.response);
            }
          });


          // Determine the user's name(s) to use in the email
          const userName = user.groom_name && user.bride_name ? `${user.groom_name} and ${user.bride_name}`: user.groom_name || user.bride_name;
          // Send a confirmation email to the user
          const userEmailOptions = {
              from: 'serendibweds2@gmail.com', // The email address sending the email
              to: user.email, // User's email from the database
              subject: 'Your Booking Confirmation',
              html: `
              <div style="font-family: Arial, sans-serif; color: #333;">
                  <h2 style="color: #007bff;">Booking Confirmation</h2>
                  <p>Dear ${userName},</p>
                  <p>Your appointment with <strong>${vendor.name}</strong> has been successfully booked. Here are the details:</p>
                  <ul>
                  <li>Date: <strong>${booking.bookingDate}</strong></li>
                  <li>Time: <strong>${booking.bookingTime}</strong></li>
                  <li>Special Requests: <strong>${appointments[0].specialRequests || 'None'}</strong></li>
                  </ul>
                  <p>If you need to cancel or reschedule your appointment, please contact us at least 24 hours in advance.</p>
                  <p>Thank you for choosing us. We look forward to serving you!</p>
                  <hr>
                  <footer>
                  <p>For any questions, feel free to contact <a href="mailto:${vendor.email}">${vendor.name}</a> or call us at <strong>${vendor.phone_number}</strong>.</p>
                  </footer>
              </div>
              `,
          };
          
          transporter.sendMail(userEmailOptions, function(error, info){
              if (error) {
              console.log('Error sending email to user:', error);
              } else {
              console.log('Confirmation email sent to user: ' + info.response);
              }
          });
         
        res.status(200).json(updatedVendor);

        
        
    }catch (error) {
        console.error('Error creating user:', error);
        res.status(500).json({ message: 'Internal server error' });
    } 
};


// Retrieve the appointments of a specific user
export const getAppointmentsByUser = async (req, res) => {
    try {
        const { firebaseUserId } = req.params; // Extract firebaseUserId from the request parameters
        const user = await Users.findOne({ firebaseUserId }); // Find the user by firebaseUserId
        console.log(user);

        if (!user) {
            return res.status(404).json({ message: 'User not found' });
        }

        // Extract and send the appointments array from the user document
        res.status(200).json(user.appointments);
    } catch (error) {
        console.error('Error fetching user appointments:', error);
        res.status(500).json({ message: 'Internal server error' });
    }
};


// Delete the selected appointment from database
export const deleteAppointment = async (req, res) => {
  try {
      const { firebaseUserId, appointmentId } = req.params;

      // Find the user and the appointment
      const user = await Users.findOne({ firebaseUserId });
      if (!user) {
          return res.status(404).json({ message: "User not found." });
      }
      
      // Find the appointment to remove and its corresponding vendor email
      
      const vendorEmail = user.appointments[appointmentId].email;
      console.log(vendorEmail);
      
      // Remove the appointment from the user's document and save
      user.appointments.splice(appointmentId, 1);
      console.log(appointmentId)
      await user.save();
      
      // Find the corresponding vendor based on the email
      const vendor = await Vendors.findOne({ email: vendorEmail });
      vendor.appointments.splice(appointmentId, 1);
      console.log(appointmentId)
      await vendor.save();
     
      res.status(200).json({ message: "Appointment successfully deleted from both user and vendor records." });
  } catch (error) {
      console.error('Error deleting appointment:', error);
      res.status(500).json({ message: 'Internal server error' });
  }
};