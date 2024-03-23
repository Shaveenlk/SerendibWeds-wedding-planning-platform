import React from 'react';
import { Box, Grid, Avatar, Typography } from "@mui/material";
import { useParams } from 'react-router-dom';
import { useState, useEffect } from 'react';
import axios from 'axios';

const VendorProfileComp = ({ onBookUsClick }) => {

  const [vendorDetails, setVendorDetails] = useState("");
  const { id } = useParams();

  useEffect(() => {
    axios.get(`http://localhost:8000/api/vendors/${id}`)
      .then(response => {
        setVendorDetails(response.data); // Update vendor details state
      })
      .catch(error => {
        console.error('Error fetching vendor details:', error);
      });
  }, [id]);

  return (
    <div className="profile">
      <Box>
        <Grid container spacing={2}>
          {/* Profile Section */}
          <Grid
            container
            item
            xs={12}
            sm={8}
            md={9}
            lg={9}
            alignItems="center"
            justifyContent="center"
          >
            {/* Nested Grid container for Avatar and Typography */}
            <Grid container item alignItems="center" spacing={2}>
              <Grid item>
                <Avatar
                  src={vendorDetails.logo}
                  sx={{ width: 300, height: 300, margin: 3, ml: 20 }}
                />
              </Grid>
              <Grid item>
                <Typography variant="h3" component="div" sx={{ fontWeight: 'bold', marginLeft: 10 }}>
                  {vendorDetails.name}
                </Typography>
                <Typography variant="h5" component="div" sx={{ fontWeight: 'bold', marginLeft: 10 }}>
                  Since: 1959
                </Typography>
              </Grid>
            </Grid>
          </Grid>
          {/* Logout Button Section (now empty) */}
          <Grid
            item
            xs={12}
            sm={4}
            md={3}
            lg={3}
            alignItems="center"
            justifyContent="center"
          >
            {/* Buttons removed */}
          </Grid>
        </Grid>
      </Box>     
    </div>
  )
}

export default VendorProfileComp;
