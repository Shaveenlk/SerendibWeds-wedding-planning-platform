import Vendors from "../model/vendorModel.js";

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
          res.status(200).json({ exists: true });
        } else {
          res.status(200).json({ exists: false });
        }
    } catch (error) {
        console.error('Error checking user in the database:', error);
        res.status(500).json({ message: 'Internal server error' });
      }
}
