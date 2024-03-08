import React from 'react'
import Navbarcomp from '../../components/Navbarcomp';
import Footercomp from '../../components/Footercomp';
import Tabcomp from '../../components/Tabcomp';
import ServicesOfferedComp from '../../components/ServicesOfferedComp';
import Profilecomp from '../../components/Profilecomp';
import VendorProfileComp from '../../components/VendorProfileComp';
import Savedweddings from '../savedweddings/Savedweddings';
import VendorProfileCarousel from '../../components/VendorProfileCarousel';

const VendorsProfile = () => {
  return (
    <div>
      <Navbarcomp />
      <VendorProfileComp />
      <VendorProfileCarousel />
      <ServicesOfferedComp />
      <Footercomp />
    </div>
  )
}

export default VendorsProfile;
