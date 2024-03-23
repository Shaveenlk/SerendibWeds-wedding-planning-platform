import React, { useState, useEffect } from 'react';
import axios from 'axios';
import Modal from '@mui/material/Modal';
import Box from '@mui/material/Box';
import TextField from '@mui/material/TextField';
import { Button } from '@mui/material';
import Accordion from '@mui/material/Accordion';
import AccordionSummary from '@mui/material/AccordionSummary';
import AccordionDetails from '@mui/material/AccordionDetails';
import Typography from '@mui/material/Typography';
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';
import { useParams } from 'react-router-dom';
import backendUrl from '../config/backendUrl';

const Serviceprofilecomp = () => {
  const [serviceDetails, setServiceDetails] = useState({});
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [newService, setNewService] = useState({
    name: '',
    description: '',
  });
  const { id } = useParams();

  useEffect(() => {
    axios.get(`${backendUrl}/api/vendors/${id}/services`)
      .then(response => {
        setServiceDetails(response.data);
      })
      .catch(error => {
        console.error('Error fetching vendor details:', error);
      });
  }, [id]);

  const openModal = () => {
    setIsModalOpen(true);
  };

  const closeModal = () => {
    setIsModalOpen(false);
  };

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setNewService((prevService) => ({
      ...prevService,
      [name]: value,
    }));
  };

  const handleAddService = () => {
    const newServiceData = {
      service: {
        name: newService.name,
        description: newService.description,
      }
    };

    axios.post(`${backendUrl}/api/vendors/${id}/services`, newServiceData)
      .then(response => {
        const addedService = response.data;
        setServiceDetails(prevDetails => ({
          ...prevDetails,
          services: [...prevDetails.services, addedService],
        }));
        closeModal();
      })
      .catch(error => {
        console.error('Error adding service:', error);
      });
  };

  const handleDeleteService = (index) => {
    const serviceId = serviceDetails.services[index]._id;
    axios.delete(`${backendUrl}/api/vendors/${id}/services/${serviceId}`)
      .then(response => {
        const updatedServices = serviceDetails.services.filter((service, idx) => idx !== index);
        setServiceDetails(prevDetails => ({
          ...prevDetails,
          services: updatedServices,
        }));
      })
      .catch(error => {
        console.error('Error deleting service:', error);
      });
  };

  const accordionStyle = {
    padding: '10px',
    margin: '10px 100px',
  };

  return (
    <div>
      <Button variant="contained" onClick={openModal}>Add Service</Button>

      <Modal
        open={isModalOpen}
        onClose={closeModal}
        aria-labelledby="modal-modal-title"
        aria-describedby="modal-modal-description"
      >
        <Box sx={{ position: 'absolute', top: '50%', left: '50%', transform: 'translate(-50%, -50%)', width: 400, bgcolor: 'background.paper', boxShadow: 24, p: 4 }}>
          <TextField
            fullWidth
            label="Service Name"
            name="name"
            value={newService.name}
            onChange={handleInputChange}
            variant="outlined"
            margin="normal"
          />
          <TextField
            fullWidth
            label="Description"
            name="description"
            value={newService.description}
            onChange={handleInputChange}
            variant="outlined"
            margin="normal"
          />
          <Button
  variant="contained"
  onClick={handleAddService}
  sx={{ mr: 2, mt: 2, bgcolor: '#4caf50', color: 'white', '&:hover': { bgcolor: '#388e3c' } }}
>
  Add
</Button>
<Button
  variant="contained"
  onClick={closeModal}
  sx={{ mt: 2, bgcolor: '#f44336', color: 'white', '&:hover': { bgcolor: '#d32f2f' } }}
>
  Cancel
</Button>
        </Box>
      </Modal>

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
            <Button onClick={() => handleDeleteService(index)}>Delete</Button>
          </AccordionDetails>
        </Accordion>
      ))}
    </div>
  );
};

export default Serviceprofilecomp;
