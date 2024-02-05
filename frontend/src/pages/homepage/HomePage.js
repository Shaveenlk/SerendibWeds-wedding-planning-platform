import React from 'react'
import Descriptioncomp from '../../components/Descriptioncomp';
import Topvendorscomp from '../../components/Topvendorscomp';
import Navbarcomp from '../../components/Navbarcomp';
import Footercomp from '../../components/Footercomp';


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
      <Descriptioncomp {...descriptionData[0]} />
      <Topvendorscomp />
      <Footercomp />
    </div>
  )
}

export default HomePage;
