import React, { useEffect, useState } from 'react';
import axios from 'axios';
import { Grid } from '@mui/material';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import Typography from '@mui/material/Typography';
import CardMedia from '@mui/material/CardMedia';
import CardActionArea from '@mui/material/CardActionArea';

const VendorInfoTile = ({ name, logo, description }) => {
  return (
    <Grid item lg={4}>
      <Card sx={{ maxWidth: 345 }}>
        <CardActionArea>
          <CardMedia
            component="img"
            height="240"
            image={logo}
            alt={`${name} profile`}
          />
          <CardContent>
            <Typography variant="h6" sx={{ fontWeight: 'bold' }}>
              {name}
            </Typography>
            <Typography  sx={{ fontWeight: 'bold' }}>
              {description}
            </Typography>
          </CardContent>
        </CardActionArea>
      </Card>
    </Grid>
  );
};

const VendorInfocomp = ( category ) => {
  const [vendors, setVendors] = useState([]);

  useEffect(() => {
    axios.get('http://localhost:8000/api/vendors')
    .then(response => {
      if (Array.isArray(response.data.vendors)) { // Check if vendors is an array
        setVendors(response.data.vendors);
      } else {
        console.error('Vendors data is not an array');
      }
    })
    .catch(error => {
      console.error('Error data :', error)
    })
  }, []); // Empty dependency array to run only once on mount

  return (
    <Grid container spacing={2}>
      {vendors.map((vendor) => (
        <VendorInfoTile key={vendor._id} name={vendor.name} logo={vendor.logo} description={vendor.description}/>
      ))}
    </Grid>
  );
};

export default VendorInfocomp;

