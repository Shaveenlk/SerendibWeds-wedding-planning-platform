import React from 'react';
import { Box, Button, Typography,Stack } from '@mui/material';
import { useNavigate } from 'react-router-dom';
import './heroSectioncomp2.css';
import auth from '../config/firebase-config';
import { NavLink } from 'react-router-dom';

export default function HeroSectioncomp() {
    const navigate = useNavigate();
    const currentUser = auth.currentUser;

    return (
        <div className="heroContainer">
            <Typography 
                variant="h2" 
                component="h1" 
                sx={{ 
                    color: '#FFF', 
                    mb: 2,
                    fontWeight: 'bold',
                    fontFamily: "'Petit Formal Script', sans-serif" // Apply Petit Formal Script font
                }}
            >
                Welcome to SerendibWeds
            </Typography>
            <Typography 
                variant="h5" 
                sx={{ 
                    color: '#FFF', 
                    mb: 5,
                    fontFamily: "'Philosopher', sans-serif", // Apply Philosopher font for other texts
                    fontWeight: 'bold' // Make the text bold
                }}
            >
                Your captivating wedding starts here
            </Typography>
            {currentUser ? null : (
        <Stack spacing={2} direction="row" sx={{ padding: "10px 50px 10px 50px" }}>
          <Button
            variant="contained"
            sx={{  fontFamily: "'Philosopher', sans-serif" }}
            component={NavLink}
            to="/login"
          >
            Plan With Us
          </Button>{" "}
          <Button
            variant="outlined"
            sx={{  borderColor: '#FFF',color: '#FFF', }}
            component={NavLink}
            to="/vendorlogin"
          >
             Add your services
          </Button>
        </Stack>
      )}
        </div>
    );
}
