import Vendors from "../model/vendorModel.js";

export const getServices = async (req, res) => {
    try {
        const id =req.params.id;
        const serviceslist = await Vendors.findById(id);
        const {services} =serviceslist
        res.json({ services });
    } catch (error) {
        console.error('Error fetching services:', error);
        res.status(500).send('Internal Server Error');
    }
}
