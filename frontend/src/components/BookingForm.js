import React, { useState } from 'react';
import { TextField, Button, Box, Typography, Container } from '@mui/material';

const BookingForm = React.forwardRef(({ onSubmit }, ref) =>  {
  const [bookingDate, setBookingDate] = useState('');
  const [bookingTime, setBookingTime] = useState('');
  const [specialRequests, setSpecialRequests] = useState('');
  

  const handleSubmit = (event) => {
    event.preventDefault();
    // Construct the booking object
    const bookingDetails = {
      bookingDate,
      bookingTime,
      specialRequests,
    };
    // Call the onSubmit handler passed down from the parent component
    onSubmit(bookingDetails);
    // Reset form fields
    setBookingDate('');
    setBookingTime('');
    setSpecialRequests('');
  };

  return (
    <Container ref={ref}>
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
});

export default BookingForm;
