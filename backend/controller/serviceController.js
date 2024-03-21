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

export const addServices = async (req, res) => {
    try {
      const { id } = req.params; // Extracting the vendor ID from the URL parameter
      const { services } = req.body;
      console.log(req.body);
  
      // Find the vendor by id
      const vendor = await Vendors.findOne({ _id: id });
  
      if (!vendor) {
        return res.status(404).json({ error: "Vendor not found" });
      }
  
      // Add services to the vendor's services array
      vendor.services.push(...services);
  
      // Save the updated vendor
      const updatedVendor = await vendor.save();
  
      res.status(200).json(updatedVendor);
    } catch (error) {
      console.error(error);
      res.status(500).json({ error: "Internal Server Error" });
    }
  };

  export const deleteService = async (req, res) => {
    try {
      const { id, serviceId } = req.params;
      console.log(req.params); // Extracting vendor ID and service ID from URL parameters
  
      // Find the vendor by id
      const vendor = await Vendors.findOne({ _id: id });
  
      if (!vendor) {
        return res.status(404).json({ error: "Vendor not found" });
      }
  
      // Check if the service exists in the vendor's services array
      const serviceIndex = vendor.services.findIndex(
        (service) => service._id.toString() === serviceId
      );
  
      if (serviceIndex === -1) {
        return res
          .status(404)
          .json({ error: "Service not found for the given vendor" });
      }
  
      // Remove the service from the vendor's services array
      vendor.services.splice(serviceIndex, 1);
  
      // Save the updated vendor
      const updatedVendor = await vendor.save();
  
      res.status(200).json(updatedVendor);
    } catch (error) {
      console.error(error);
      res.status(500).json({ error: "Internal Server Error" });
    }
  };

  export const updateService = async (req, res) => {
    try {
      const { id, serviceId } = req.params;
      console.log(req.params)
      const { service } = req.body;
      console.log(service)
      const vendor = await Vendors.findOne({ _id: id });
      if (!vendor) {
        return res.status(404).json({ error: "Vendor not found" });
      }
  
      // Check if the service exists in the vendor's services array
      const serviceIndex = vendor.services.findIndex(
        (service) => service._id.toString() === serviceId
      );
  
      if (serviceIndex === -1) {
        return res
          .status(404)
          .json({ error: "Service not found for the given vendor" });
      }
  
      // Update the service details
      vendor.services[serviceIndex] = {
        ...vendor.services[serviceIndex],
        ...service,
      };
  
      // Save the updated vendor
      const updatedVendor = await vendor.save();
      res.status(200).json(updatedVendor);
    } catch (error) {
      res.status(500).json({ error: "Internal Server Error" });
    }
  }