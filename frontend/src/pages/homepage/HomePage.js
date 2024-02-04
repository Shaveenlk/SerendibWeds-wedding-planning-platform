import React from 'react'
import Descriptioncomp from '../../components/Descriptioncomp';
import Topvendorscomp from '../../components/Topvendorscomp';
import Navbarcomp from '../../components/Navbarcomp';
import Footercomp from '../../components/Footercomp';


const HomePage = () => {
  return (
    <div>
      <Navbarcomp />
      <Descriptioncomp />
      <Topvendorscomp />
      <Footercomp />
    </div>
  )
}

export default HomePage;
