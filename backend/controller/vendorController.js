import Vendors from "../model/vendorModel.js";
import nodemailer from 'nodemailer';

// Create a transporter object using the default SMTP transport
const transporter = nodemailer.createTransport({
    service: 'gmail',
    auth: {
      user: 'serendibweds2@gmail.com', // Your Gmail address
      pass: 'fvum olga mabt acyc', // Your Gmail password or app password
    },
  });


export const getVendors = async (req, res) => {
    try {
        const vendors = await Vendors.find();
        res.json({ vendors });
    } catch (error) {
        console.error('Error fetching vendors:', error);
        res.status(500).send('Internal Server Error');
    }
};

export const getVendor = async (req, res) => {
    try {
        // Access the vendorId from req.params
        const vendorId  = req.params.id;
        const vendor = await Vendors.findById(vendorId);
        if (!vendor) {
            return res.status(404).json({ message: 'Vendor not found' });
        }

        // Send the entire vendor object in the response
        res.json(vendor);
    } catch (error) {
        console.error('Error fetching vendor data:', error);
        res.status(500).send('Internal Server Error');
    }
};

export const checkVendor = async (req, res) => {
    const { firebaseUserId } = req.params;
    try {
        const existingUser = await Vendors.findOne({ firebaseUserId });
  
        if (existingUser) {
          res.status(200).json({ exists: true, _id: existingUser._id });
        } else {
          res.status(200).json({ exists: false });
        }
    } catch (error) {
        console.error('Error checking user in the database:', error);
        res.status(500).json({ message: 'Internal server error' });
      }
}

//fetch appointments for a vendor       
export const getVendorAppointments = async (req, res) => {
    try {
        const { id } = req.params; // MongoDB Object ID of the vendor
        console.log(id);
        const vendor = await Vendors.findById(id);
        console.log(vendor);

        if (!vendor) {
            return res.status(404).json({ message: 'Vendor not found' });
        }

        res.json(vendor.appointments);
    } catch (error) {
        console.error('Error fetching vendor appointments:', error);
        res.status(500).send('Internal Server Error');
    }
};

export const registerNewVendor = async (req, res) => {
    const vendorDetails = req.body; // Assuming vendor details are sent in request body
  
    const mailOptions = {
      from: 'serendibweds2@gmail.com', // sender address
      to: 'serendibweds2@gmail.com', // list of receivers (your own email for notification)
      subject: 'New Vendor Registration Notification', // Subject line
      html: `
        <h1>New Vendor Registration</h1>
        <p>A new vendor has registered with the following details:</p>
        <ul>
          <li>Business Name: ${vendorDetails.businessName}</li>
          <li>Services Provided: ${vendorDetails.servicesProvided.join(", ")}</li>
          <li>Years of Experience: ${vendorDetails.yearsOfExperience}</li>
          <li>Business License: ${vendorDetails.hasBusinessLicense}</li>
          <li>Contact Number: ${vendorDetails.contactNumber}</li>
          <li>Email Address: ${vendorDetails.emailAddress}</li>
          <li>Business Location: ${vendorDetails.businessLocation}</li>
          <li>Online Portfolio: ${vendorDetails.onlinePortfolio}</li>
        </ul>
        <p>Please review and add the vendor to the system as needed.</p>
      `, // html body
    };
  
    transporter.sendMail(mailOptions, function (error, info) {
      if (error) {
        console.log(error);
        res.status(500).json({ error: 'Error sending email' });
      } else {
        console.log('Email sent: ' + info.response);
        res.status(200).json({ message: 'Vendor registration email sent successfully' });

      }
    });
  };