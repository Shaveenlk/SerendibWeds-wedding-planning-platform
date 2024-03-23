import React, { useEffect, useState } from 'react';
import axios from 'axios';
import { Grid } from '@mui/material';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import Typography from '@mui/material/Typography';
import CardMedia from '@mui/material/CardMedia';
import CardActionArea from '@mui/material/CardActionArea';
import { useNavigate } from "react-router-dom";

const VendorInfoTile = ({ vendor, onClick }) => {

  const navigate = useNavigate();

  const handleClick = () => {
    onClick(vendor._id);
    // history.push(`/vendorprofile/${vendor._id}`);
    navigate(`/vendorprofile/${vendor._id}`);
  };

  return (
    <Grid item lg={4}>
      <Card sx={{ maxWidth: 345 }} onClick={handleClick}>
        <CardActionArea>
          <CardMedia
            component="img"
            height="240"
            image={vendor.logo}
            alt={`${vendor.name} profile`}
          />
          <CardContent>
            <Typography variant="h6" sx={{ fontWeight: 'bold' }}>
              {vendor.name}
            </Typography>
            <Typography  sx={{ fontWeight: 'bold' }}>
              {vendor.description}
            </Typography>
          </CardContent>
        </CardActionArea>
      </Card>
    </Grid>
  );
};

const VendorInfocomp = ( {category} ) => {
  const [vendors, setVendors] = useState([]);
  const [selectedVendor, setSelectedVendor] = useState(null);

  useEffect(() => {
    axios.get('http://localhost:8000/api/vendors')
      .then(response => {
        if (Array.isArray(response.data.vendors)) { // Check if vendors is an array
          // Filter vendors based on category
          const filteredVendors = response.data.vendors.filter(vendor => vendor.category === category);
          setVendors(filteredVendors);
        } else {
          console.error('Vendors data is not an array');
        }
      })
      .catch(error => {
        console.error('Error data :', error)
      })
  }, [category]); // Include category in the dependency array

  const handleVendorClick = (vendorId) => {
    // Retrieve vendor details based on vendorId and set selected vendor
    setSelectedVendor(vendors.find(vendor => vendor._id === vendorId));
  };

  return (
    <Grid container spacing={2}>
      {vendors.map((vendor) => (
        // vendor.category === category &&
        <VendorInfoTile key={vendor._id} vendor={vendor} onClick={handleVendorClick} />
       ))}
    </Grid>
  );
};

export default VendorInfocomp;

