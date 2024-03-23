import React from 'react'
import Descriptioncomp from '../../components/Descriptioncomp';
import Topvendorscomp from '../../components/Topvendorscomp';
import Navbarcomp from '../../components/Navbarcomp';
import Footercomp from '../../components/Footercomp';
// import HeroSection from '../../components/heroSectioncomp';
import HeroSection from '../../components/heroSectioncomp2';
import Testimonialcomp from '../../components/Testimonialcomp';
import Featurescomp from '../../components/Featurescomp';


const HomePage = () => {

  const descriptionData = [
    {
      title: "Top Vendors",
      subheading:
        "Visit our top performing vendors in 2023 and dive into their work",
      content:
        "To-Do Lists simplify progress tracking, optimizing productivity. Digital versions offer easy task management across devices, while AI ensures efficient time utilization. Visit our top performing vendors in 2023 and dive into their work",
    },
    {
      title: "Features We Offer",
      subheading:
        "Effortless Planning and Organizing with Serendib Weds",
      content:
        "To-Do Lists simplify progress tracking, optimizing productivity. Digital versions offer easy task management across devices, while AI ensures efficient time utilization.",
    },
    {
      title: "Customer Testimonials",
      subheading:
        "Listen to what our customer has to say about Serendib Weds",
      content:
        "To-Do Lists simplify progress tracking, optimizing productivity. Digital versions offer easy task management across devices, while AI ensures efficient time utilization.",
    },
  ];


  return (
    <div>
      <Navbarcomp />
      {/* <HeroSection /> */}
      <Descriptioncomp {...descriptionData[1]} />
      <Featurescomp />
      <Descriptioncomp {...descriptionData[0]} />
      <Topvendorscomp />
      <Descriptioncomp {...descriptionData[2]} />
      <Testimonialcomp />
      <Footercomp />
    </div>
  )
}

export default HomePage;
