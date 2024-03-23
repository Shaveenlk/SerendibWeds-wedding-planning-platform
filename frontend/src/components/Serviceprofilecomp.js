import * as React from "react";
import Accordion from "@mui/material/Accordion";
import AccordionSummary from "@mui/material/AccordionSummary";
import AccordionDetails from "@mui/material/AccordionDetails";
import Typography from "@mui/material/Typography";
import ExpandMoreIcon from "@mui/icons-material/ExpandMore";
import Button from '@mui/material/Button';
import { useParams } from 'react-router-dom';
import { useState, useEffect } from 'react';
import axios from 'axios';

const Serviceprofilecomp = () => {

  const [serviceDetails, setServiceDetails] = useState({});
  const [isAddingService, setIsAddingService] = useState(false);
  const [newService, setNewService] = useState({
    name: "",
    description: "",
  });
  const { id } = useParams();
  console.log(id)

  useEffect(() => {
    // Fetch vendor details when selectedVendor changes
    axios.get(`http://localhost:8000/api/vendors/${id}/services`)
      .then(response => {
        setServiceDetails(response.data); // Update vendor details state
      })
      .catch(error => {
        console.error('Error fetching vendor details:', error);
      });
  }, [id]);

  const accordionStyle = {
    padding: "10px",
    margin: "10px 100px",
  };

  const handleAddService = () => {
    setIsAddingService(true);
  };

  const handleCancelAddService = () => {
    setIsAddingService(false);
  };

  const handleSaveService = () => {
    // Make an API call to add the new service
    axios.post(`http://localhost:8000/api/vendors/${id}/services`, newService)
      .then(response => {
        // Handle the response and update the UI as needed
        setServiceDetails(response.data);
        setIsAddingService(false);
        setNewService({ name: "", description: "" });
      })
      .catch(error => {
        console.error('Error adding service:', error);
      });
  };

  const handleEditService = (serviceItem) => {
    // Display the service details in a form for editing
    setNewService({
      name: serviceItem.name,
      description: serviceItem.description,
    });
    setIsAddingService(true);
  };

  // const handleDelete = (serviceId) => {
  //   // Implement the logic to confirm deletion and make an API call to delete the service
  //   if (window.confirm('Are you sure you want to delete this service?')) {
  //     axios.delete(`http://localhost:8000/api/vendors/${id}/services/${serviceId}`)
  //       .then(response => {
  //         // Update the state or perform any other necessary actions
  //         console.log('Service deleted successfully');
  //       })
  //       .catch(error => {
  //         console.error('Error deleting service:', error);
  //       });
  //   }
  // };

  const handleUpdateService = () => {
    // Make an API call to update the service details
    axios.put(`http://localhost:8000/api/vendors/${id}/services/${serviceDetails._id}`, newService)
      .then(response => {
        // Handle the response and update the UI as needed
        setServiceDetails(response.data);
        setIsAddingService(false);
        setNewService({ name: "", description: "" });
      })
      .catch(error => {
        console.error('Error updating service:', error);
      });
  };

  const handleDeleteService = (index) => {
    // Make an API call to delete the service
    const serviceId = serviceDetails.services[index]._id;
    axios.delete(`http://localhost:8000/api/vendors/${id}/services/${serviceId}`)
    .then(response => {
      // Update the UI by removing the deleted service from serviceDetails
      const updatedServices = [...serviceDetails.services];
      updatedServices.splice(index, 1); // Remove the service at the specified index
      setServiceDetails({ ...serviceDetails, services: updatedServices });
    })
    .catch(error => {
      console.error('Error deleting service:', error);
    });
  };

  return (
    <div>
      <Typography variant="body2" sx={{ textAlign: "left", margin: "30PX 50px", fontSize: "20px", fontWeight: 'bold' }}>
        Services Offered
      </Typography>
      {serviceDetails.services && serviceDetails.services.map((serviceItem, index) => (
        <Accordion key={serviceItem._id} style={accordionStyle}>
          <AccordionSummary
            expandIcon={<ExpandMoreIcon />}
            aria-controls={`panel${index + 1}-content`}
            id={`panel${index + 1}-header`}
          >
            {serviceItem.name}
          </AccordionSummary>
          <AccordionDetails>
            <Typography>{serviceItem.description}</Typography>
            <Button onClick={() => handleEditService(serviceItem)}>Edit</Button>
            <Button onClick={() => handleDeleteService(index)}>Delete</Button>
          </AccordionDetails>
        </Accordion>
      ))}
      <Button onClick={handleAddService}>Add Service</Button>
      {isAddingService && (
        <div>
          <input
            type="text"
            placeholder="Service Name"
            value={newService.name}
            onChange={(e) => setNewService({ ...newService, name: e.target.value })}
          />
          <input
            type="text"
            placeholder="Service Description"
            value={newService.description}
            onChange={(e) => setNewService({ ...newService, description: e.target.value })}
          />
          <Button onClick={handleSaveService}>Save</Button>
          <Button onClick={handleCancelAddService}>Cancel</Button>
        </div>
      )}
    </div>
  );
};

export default Serviceprofilecomp;
