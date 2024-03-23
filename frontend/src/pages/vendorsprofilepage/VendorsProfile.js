import React, { useEffect, useState } from 'react'
import Navbarcomp from '../../components/Navbarcomp';
import Footercomp from '../../components/Footercomp';
import Tabcomp from '../../components/Tabcomp';
import ServicesOfferedComp from '../../components/ServicesOfferedComp';
import Profilecomp from '../../components/Profilecomp';
import VendorProfileComp from '../../components/VendorProfileComp';
import Savedweddings from '../savedweddings/Savedweddings';
import VendorProfileCarousel from '../../components/VendorProfileCarousel';
import BookingForm from '../../components/BookingForm' 
import { useParams } from 'react-router-dom';
import axios from 'axios';
import backendUrl from '../../config/backendUrl';

const VendorsProfile = ({ firebaseUserId }) => {
  const [vendorDetails,setVendorDetails]=useState("");
  const {id} =useParams();
  useEffect(() => {  
      axios.get(`${backendUrl}/api/vendors/${id}`)
        .then(response => {
          setVendorDetails(response.data); // Update vendor details state
        })
        .catch(error => {
          console.error('Error fetching vendor details:', error);
        });
    },[id]);
    
  return (
    <div>
      <Navbarcomp />
      <VendorProfileComp vendorDetails={vendorDetails} />
      <VendorProfileCarousel id={vendorDetails.vendorId} />
      <ServicesOfferedComp serviceDetails={vendorDetails}/>
      <BookingForm firebaseUserId={firebaseUserId} />
      <Footercomp />
    </div>
  )
}

export default VendorsProfile;