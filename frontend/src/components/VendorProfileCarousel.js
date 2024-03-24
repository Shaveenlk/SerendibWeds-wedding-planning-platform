import React, { useEffect, useState } from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Typography from '@mui/material/Typography';
import { CardActionArea, Grid } from '@mui/material';
import  image  from '../assets/heroSectionImg.png'; // Import image from correct path
import axios from "axios";
import backendUrl from "../config/backendUrl";


const VendorProfileCarousel = ({id}) => {

  const [VendorWeddingDetails,setVendorWeddingDetails]=useState("");
  // const {id} =useParams();
  useEffect(() => {  
      axios.get(`${backendUrl}/api/vendorsEvents/${id}`)
        .then(response => {
          console.log(response); // Update vendor details state
        })
        .catch(error => {
          console.error('Error fetching vendor details:', error);
        });
    },[id]);

  const settings = {
    dots: true,
    infinite: true,
    speed: 1500,
    slidesToShow: 3,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 2000
  };

  const cardData = [
    {
      image: image,
      title: "Title 1",
      description: "Description for slide 1."
    },
    {
      image: image,
      title: "Title 2",
      description: "Description for slide 2."
    },
    {
      image: image,
      title: "Title 3",
      description: "Description for slide 3."
    }
  ];

  return (
    <div>
      <Slider {...settings}>
        {cardData.map((card, index) => (
          <div key={index}>
            <Card sx={{ margin: '60px 60px', width: '60%' }}>
              <CardActionArea>
                <CardMedia
                  component="img"
                  height="240"
                  image="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRu3PuBLzidgn1VMZTgQFmDlMkmJZV3uKI7ww&usqp=CAU"
                  alt={`Image ${index + 1}`}
                />
                <CardContent>
                  <Typography gutterBottom variant="h5" component="div">
                  GEORGE & TINA
                  </Typography>
                  <Typography variant="body2" color="text.secondary">
                  Date: 12/12/2022
                  </Typography>
                  <Typography variant="body2" color="text.secondary">
                  Venue: Hilton Colombo
                  </Typography>
                  <Typography variant="body2" color="text.secondary">
                  Theme: Nature
                  </Typography>
                </CardContent>
              </CardActionArea>
            </Card>
          </div>
        ))}
      </Slider>
    </div>
  );
};

export default VendorProfileCarousel;
