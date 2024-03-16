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
        
        // Add the new appointment to the vendor's appointments array
        vendor.appointments.push({...appointments,appointmentId });

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
             appointmentId: appointmentId[0].appointmentId
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
         
        res.status(200).json(updatedVendor);

        
        
    }catch (error) {
        console.error('Error creating user:', error);
        res.status(500).json({ message: 'Internal server error' });
    } 
};

