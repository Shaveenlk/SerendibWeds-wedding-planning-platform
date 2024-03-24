import vendordata from "../model/vendorModel.js";

export const getVendors = async (req, res) => {
    try {
        const vendors = await vendordata.find();
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
        const vendor = await vendordata.findById(vendorId);
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
        const existingUser = await vendordata.findOne({ firebaseUserId });
  
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
        const vendor = await vendordata.findById(id);
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
