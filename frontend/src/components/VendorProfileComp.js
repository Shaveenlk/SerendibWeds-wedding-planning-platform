import React from 'react'
import { Box, Grid, Avatar, Typography, Button } from "@mui/material";
import { useParams } from 'react-router-dom';
import { useState,useEffect } from 'react';
import axios from 'axios';


const VendorProfileComp = ({vendorDetails}) => {
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
                  sx={{ width: 300, height: 300, margin: 3, ml:20 }}
                />
              </Grid>
              <Grid item>
                <Typography variant="h3" component="div" sx={{ fontWeight: 'bold' }}>
                {vendorDetails.name}
                </Typography>
                <Typography variant="h5" component="div" sx={{ fontWeight: 'bold' }}>
                  Since: 1959
                </Typography>
              </Grid>
            </Grid>
          </Grid>
          {/* Logout Button Section */}
          <Grid
            item
            xs={12}
            sm={4}
            md={3}
            lg={3}
            alignItems="center"
            justifyContent="center"
          >
          </Grid>
            <Button variant="contained" sx={{
              borderRadius: 5,
              marginLeft: { xs: 8, sm: 25 },
              marginBottom: { xs: 3, sm: 0 },
            }}>
              Book Us
            </Button>
            <Button variant="contained" sx={{
              borderRadius: 5,
              marginLeft: { xs: 8, sm: 5 },
              marginBottom: { xs: 3, sm: 0 },
            }}>
                Contact Us            
            </Button>
        </Grid>
      </Box>
    </div>
  )
}

export default VendorProfileComp
