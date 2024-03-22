import React, { useEffect, useState } from 'react';
import axios from 'axios';
import { useHistory } from 'react-router-dom';
import { useNavigate } from "react-router-dom";
import Box from "@mui/material/Box";
import Card from "@mui/material/Card";
import CardActions from "@mui/material/CardActions";
import CardContent from "@mui/material/CardContent";
import Button from "@mui/material/Button";
import Typography from "@mui/material/Typography";
import { Avatar, Stack } from "@mui/material";
import { Grid } from "@mui/material";

const VendorTile = ({ vendor, handleVendorClick }) => {
  const { _id, name, email, category } = vendor;

  return (
    <Card style={{ borderRadius: '12px' }}>
      <CardContent>
        <Stack spacing={4} alignItems="center">
          <Avatar sx={{ width: 100, height: 100, fontSize: 40 }}>
            {name[0]}
          </Avatar>
        </Stack>
        <Typography variant="body2" sx={{ textAlign: "center", margin: 'auto' }}>
          <b>{name}</b>
        </Typography>
        <Typography variant="body2" sx={{ textAlign: "center", margin: "5px" }}>
          {email}
        </Typography>
        <Typography variant="body2" sx={{ textAlign: "center", margin: "5px" }}>
          {category}
        </Typography>
      </CardContent>
      <CardActions sx={{ justifyContent: "center" }}>
        <Button
          size="small"
          sx={{
            backgroundColor: "#C19C76",
            color: "white",
            padding: "10px",
            borderRadius: "10px",
          }}
          onClick={() => handleVendorClick(_id)} // Attach handleVendorClick to the "View Profile" button click event
        >
          View Profile
        </Button>
      </CardActions>
    </Card>
  );
};

const shuffleArray = (array) => {
  // Fisher-Yates shuffle algorithm
  for (let i = array.length - 1; i > 0; i--) {
    const j = Math.floor(Math.random() * (i + 1));
    [array[i], array[j]] = [array[j], array[i]];
  }
  return array;
};

const Topvendorscomp = () => {
  const [vendors, setVendors] = useState([]);
  // const history = useHistory();
  const navigate = useNavigate();


  useEffect(() => {
    axios.get('http://localhost:8000/api/vendors')
      .then(response => {
        if (Array.isArray(response.data.vendors)) {
          setVendors(response.data.vendors);
        } else {
          console.error('Vendors data is not an array');
        }
      })
      .catch(error => {
        console.error('Error data:', error)
      })
  }, []);

  const handleVendorClick = (vendorId, vendor) => { // Changed function signature to accept vendor as a parameter
    // history.push(`/vendorprofile/${vendorId}`);
    navigate(`/vendorprofile/${vendor._id}`); // Accessing vendor._id instead of vendorId
  };

  const shuffledVendors = shuffleArray([...vendors]);
  const displayedVendors = shuffledVendors.slice(0, 9);

  return (
    <Grid
      container
      gap={2}
      padding={2}
      style={{ overflowWrap: 'break-word' }}
    >
      {displayedVendors.map((vendor, index) => (
        <Grid
          margin={'auto'}
          borderRadius={3}
          xs={12}
          sm={6}
          md={3}
          lg={3}
          key={index}
          sx={{ width: "100%", border: 'solid lightgrey' }}
        >
          <VendorTile vendor={vendor} handleVendorClick={(vendorId) => handleVendorClick(vendorId, vendor)} /> 
        </Grid>
      ))}
    </Grid>
  );
};

export default Topvendorscomp;
