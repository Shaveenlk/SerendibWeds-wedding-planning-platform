import React, { useState,useEffect } from 'react';
import { TextField, Button, Box, Typography, Container } from '@mui/material';
import axios from 'axios';
import { useParams } from 'react-router-dom';
import { v4 as uuidv4 } from 'uuid';
import Swal from 'sweetalert2';
import backendUrl from '../config/backendUrl';

const BookingForm = ({ firebaseUserId })  => {
  const [name, setName] = useState('');
    const [phone, setPhone] = useState('');
    const [email, setEmail] = useState('');
    const [bookingDate, setBookingDate] = useState('');
    const [bookingTime, setBookingTime] = useState('');
    const [specialRequests, setSpecialRequests] = useState('');
    
  
    const { id } = useParams();
  const handleSubmit = async (event) => {
    event.preventDefault();
    const appointmentId = uuidv4();
    console.log(appointmentId); // Generate UUID here

    // Construct the booking object
    const bookingDetails = {
      appointments: [
        { 
          name,
          phone,
          email,
          bookingDate,
          bookingTime,
          specialRequests,
          appointmentId,
        }
      ],
      
      firebaseUserId: firebaseUserId
    };

    console.log(firebaseUserId)

    try {
      // Make a POST request to the backend API using Axios
      const response = await axios.post(`${backendUrl}/api/vendors/${id}/booking`, bookingDetails);
  
      // Handle the successful response
      console.log('Booking created successfully:', response.data);

      // Display success message
      Swal.fire({
        title: 'Success!',
        text: 'Your booking has been successfully submitted!',
        icon: 'success',
        confirmButtonText: 'Great!'
      });
  
      // Reset form fields
      setName('');
      setPhone('');
      setEmail('');
      setBookingDate('');
      setBookingTime('');
      setSpecialRequests('');
    } catch (error) {
      console.error('Error creating booking:', error.message);
      // Display error message
      Swal.fire({
        title: 'Oops...',
        text: 'Something went wrong with your booking. Please try again.',
        icon: 'error',
        confirmButtonText: 'OK'
      });
    }
  };

  return (
    <Container>
        <Typography variant="h5" sx={{ mb: 2, fontWeight: 'bold', textAlign: 'left', color: 'text.primary' }}>
          Book Your Appointment
        </Typography>
        
      <Box
        component="form"
        sx={{
          '& .MuiTextField-root': { m: 1 },
          display: 'flex',
          flexDirection: 'column',
          alignItems: 'left',
          padding: '20px'
        }}
        noValidate
        autoComplete="off"
        onSubmit={handleSubmit}
      >

        <TextField
          id="name"
          label="Name"
          type="text"
          value={name}
          onChange={(e) => setName(e.target.value)}
          sx={{ width: 250 }}
          required
        />
        <TextField
          id="phone"
          label="Phone"
          type="text"
          value={phone}
          onChange={(e) => setPhone(e.target.value)}
          sx={{ width: 250 }}
          required
        />
        <TextField
          id="email"
          label="E-Mail"
          type="text"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          sx={{ width: 250 }}
          required
        />

        <TextField
          id="date"
          label="Booking Date"
          type="date"
          value={bookingDate}
          onChange={(e) => setBookingDate(e.target.value)}
          InputLabelProps={{
            shrink: true,
          }}
          sx={{ width: 250 }} // Control the width here
          required
        />
        <TextField
          id="time"
          label="Booking Time"
          type="time"
          value={bookingTime}
          onChange={(e) => setBookingTime(e.target.value)}
          InputLabelProps={{
            shrink: true,
          }}
          inputProps={{
            step: 300, // 5 min
          }}
          sx={{ width: 250 }} // Control the width here
          required
        />
        <TextField
          id="special-requests"
          label="Special Requests"
          type="text"
          multiline
          rows={4}
          value={specialRequests}
          onChange={(e) => setSpecialRequests(e.target.value)}
          sx={{ width: 250 }} // Control the width here
        />
        
        <Button type="submit" variant="contained" sx={{ mt: 2, width: '250px',borderRadius: 5 }}>Submit Booking</Button>
      </Box>
    </Container>
  );
}

export default BookingForm;