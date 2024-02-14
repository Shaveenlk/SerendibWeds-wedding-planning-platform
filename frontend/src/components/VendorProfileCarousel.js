import React from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Typography from '@mui/material/Typography';
import { CardActionArea, Grid } from '@mui/material';


const VendorProfileCarousel = () => {

  const settings = {
    dots: true,
    infinite: true,
    speed: 1500,
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 2000
  };

  return (
    <div>
      <Slider {...settings}>
        <div>
          <Card sx={{
            margin:2, // Adjust the value to control the gap
          }}>
            <CardActionArea>
              <CardMedia
                component="img"
                height="140"
                image="/path/to/image1.jpg"
                alt="Image 1"
              />
              <CardContent>
                <Typography gutterBottom variant="h5" component="div">
                  Title 1
                </Typography>
                <Typography variant="body2" color="text.secondary">
                  Description for slide 1.
                </Typography>
              </CardContent>
            </CardActionArea>
          </Card>
        </div>
        <div>
        <Card sx={{
            margin:2, // Adjust the value to control the gap
          }}>
            <CardActionArea>
              <CardMedia
                component="img"
                height="140"
                image="/path/to/image2.jpg"
                alt="Image 2"
              />
              <CardContent>
                <Typography gutterBottom variant="h5" component="div">
                  Title 2
                </Typography>
                <Typography variant="body2" color="text.secondary">
                  Description for slide 2.
                </Typography>
              </CardContent>
            </CardActionArea>
          </Card>
        </div>
        {/* Add more slides as needed */}
      </Slider>
    </div>
  );
};

export default VendorProfileCarousel;
