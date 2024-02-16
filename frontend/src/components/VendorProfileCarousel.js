import React from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Typography from '@mui/material/Typography';
import { CardActionArea, Grid } from '@mui/material';
import  image  from '../assets/heroSectionImg.png'; // Import image from correct path


const VendorProfileCarousel = () => {

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
    },
    {
      image: image,
      title: "Title 4",
      description: "Description for slide 4."
    },
    {
      image: image,
      title: "Title 5",
      description: "Description for slide 5."
    },
    {
      image: "/path/to/image6.jpg",
      title: "Title 6",
      description: "Description for slide 6."
    },
    {
      image: "/path/to/image7.jpg",
      title: "Title 7",
      description: "Description for slide 7."
    },
    {
      image: "/path/to/image8.jpg",
      title: "Title 8",
      description: "Description for slide 8."
    },
    {
      image: "/path/to/image9.jpg",
      title: "Title 9",
      description: "Description for slide 9."
    }
    // Add more card data as needed
  ];  

  const settings = {
    dots: true,
    infinite: true,
    speed: 1500,
    slidesToShow: 3,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 2000
  };

  return (
    <div>
      <Slider {...settings}>
        {cardData.map((card, index) => (
          <div key={index}>
            <Card sx={{ margin: '60px 60px' }}>
              <CardActionArea>
                <CardMedia
                  component="img"
                  height="240"
                  image={card.image}
                  alt={`Image ${index + 1}`}
                />
                <CardContent>
                  <Typography gutterBottom variant="h5" component="div">
                    {card.title}
                  </Typography>
                  <Typography variant="body2" color="text.secondary">
                    {card.description}
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
