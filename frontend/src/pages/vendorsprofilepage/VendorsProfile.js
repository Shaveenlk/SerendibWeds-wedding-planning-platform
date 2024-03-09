import React, { useRef } from 'react';
import Navbarcomp from '../../components/Navbarcomp';
import Footercomp from '../../components/Footercomp';
import Tabcomp from '../../components/Tabcomp';
import ServicesOfferedComp from '../../components/ServicesOfferedComp';
import Profilecomp from '../../components/Profilecomp';
import VendorProfileComp from '../../components/VendorProfileComp';
import Savedweddings from '../savedweddings/Savedweddings';
import VendorProfileCarousel from '../../components/VendorProfileCarousel';
import axios from 'axios';
import BookingForm from '../../components/BookingForm' // Import the BookingForm component
import { Snackbar } from '@mui/material';


const VendorsProfile = () => {

  const bookingFormRef = useRef(null);
  const scrollToBookingForm = () => {
    bookingFormRef.current?.scrollIntoView({ behavior: 'smooth' });
  };
  
  return (
    <div>
      <Navbarcomp />
      <VendorProfileComp onBookUsClick={scrollToBookingForm} />
      <VendorProfileCarousel />
      <ServicesOfferedComp />
      <BookingForm onSubmit={handleBookingSubmit} />
      <Footercomp />
    </div>
  )
}

// Function to handle form submission
const handleBookingSubmit = async (bookingDetails) => {
  try {
    // Make an API call to your backend to create the booking
    const response = await axios.post('/api/bookings', bookingDetails);
    // Show success message to user
    alert('Booking successfully created!');
  } catch (error) {
    // Handle errors (e.g., show error message)
    console.error('Error creating booking:', error);
    alert('Error creating booking.');
  }
};

export default VendorsProfile;
