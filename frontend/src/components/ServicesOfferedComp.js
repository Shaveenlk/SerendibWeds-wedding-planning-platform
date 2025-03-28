import * as React from "react";
import Accordion from "@mui/material/Accordion";
import AccordionSummary from "@mui/material/AccordionSummary";
import AccordionDetails from "@mui/material/AccordionDetails";
import Typography from "@mui/material/Typography";
import ExpandMoreIcon from "@mui/icons-material/ExpandMore";
import { useParams } from 'react-router-dom';
import { useState,useEffect } from 'react';
import axios from 'axios';
import backendUrl from "../config/backendUrl";


const ServicesOfferedComp = () => {

  const [serviceDetails,setServiceDetails] = useState({});
  const {id} =useParams();

  useEffect(() => {
    // Fetch vendor details when selectedVendor changes
  
      axios.get(`${backendUrl}/api/vendors/${id}/services`)
        .then(response => {
          setServiceDetails(response.data); // Update vendor details state
        })
        .catch(error => {
          console.error('Error fetching vendor details:', error);
        });
    },[id]);

  const accordionStyle = {
    padding: "10px",
    margin: "10px 100px",
  };

  const servicesData = [
    {
      service: "Photography",
      details:
        "Will be providing cinematic photographs and cinematic footage to record memories of your special day.",
    },
    {
      service: "Videography",
      details:
        "Capturing the essence of your event through high-quality video footage, ensuring every moment is preserved beautifully.",
    },
    {
      service: "Event Planning",
      details:
        "From conceptualization to execution, we take care of every detail to make your event a seamless and memorable experience.",
    },
    {
      service: "Floral Design",
      details:
        "Creating stunning floral arrangements to add elegance and charm to your venue, tailored to your theme and preferences.",
    },
    {
      service: "Catering",
      details:
        "Offering a delectable array of cuisines to tantalize your taste buds and leave a lasting impression on your guests.",
    },
  ];

  return (
    <div>
        <Typography variant="h5" sx={{ mb: 2, fontWeight: 'bold', textAlign: 'left', color: 'text.primary',margin: "30PX 100px" }}>
        Services Offered
      </Typography>
      {serviceDetails.services && serviceDetails.services.map((serviceItem, index) => (
        <Accordion key={index} style={accordionStyle}>
            <AccordionSummary
              expandIcon={<ExpandMoreIcon />}
              aria-controls={`panel${index + 1}-content`}
              id={`panel${index + 1}-header`}
            >
              {serviceItem.name}
            </AccordionSummary>
            <AccordionDetails>
              <Typography>{serviceItem.description}</Typography>
            </AccordionDetails>
          </Accordion>
      ))}
    </div>
  );
};

export default ServicesOfferedComp;