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
         
        res.status(200).json(updatedVendor);
        
    }catch (error) {
        console.error('Error creating user:', error);
        res.status(500).json({ message: 'Internal server error' });
    } 
};

