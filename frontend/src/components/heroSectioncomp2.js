import React from 'react';
import { Box, Button, Typography } from '@mui/material';
import { useNavigate } from 'react-router-dom';
import './heroSectioncomp2.css';

export default function HeroSectioncomp() {
    const navigate = useNavigate();

    return (
        <div className="heroContainer">
            <Typography 
                variant="h2" 
                component="h1" 
                sx={{ 
                    color: '#FFF', 
                    mb: 2,
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
                    fontFamily: "'Philosopher', sans-serif" // Apply Philosopher font for other texts
                }}
            >
                Your captivating wedding starts here
            </Typography>
            <Button 
                variant="contained" 
                onClick={() => navigate('/login')} 
                sx={{ 
                    margin: 1,
                    fontFamily: "'Philosopher', sans-serif" // Apply Philosopher font to button text as well
                }}
            >
                Plan with us
            </Button>
            <Button 
                variant="outlined" 
                onClick={() => navigate('/signup')} 
                sx={{ 
                    margin: 1, 
                    borderColor: '#FFF', 
                    color: '#FFF',
                    fontFamily: "'Philosopher', sans-serif" // Apply Philosopher font to button text as well
                }}
            >
                Add your services
            </Button>
        </div>
    );
}
