import React from "react";
import { Grid } from '@mui/material';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import Typography from '@mui/material/Typography';
import CardHeader from '@mui/material/CardHeader';
import Avatar from '@mui/material/Avatar';
import { blue, red } from '@mui/material/colors';
import IconButton from '@mui/material/IconButton';
import MoreVertIcon from '@mui/icons-material/MoreVert';

const TestimonialTile = () => {

  const testimonialData = [
    {
      title: "Jacob Warnhalter & Alice Walker",
      time: "10 minutes ago",
      content: "To-Do Lists simplify progress tracking, optimizing productivity. Digital versions offer easy task management across devices, while AI ensures efficient time utilization."
    },
    {
      title: "Emily Rodriguez & Brian Mitchell",
      time: "15 minutes ago",
      content: "Wedding Bliss Achieved! Thanks to our wedding planner app, organizing our special day was a breeze. Seamless task management and timely reminders ensured a stress-free journey to 'I do'!"
    },
    {
      title: "Sophia Chang & Michael Thompson",
      time: "20 minutes ago",
      content: "Our Dream Wedding Realized! The wedding planner app guided us through every detail. From venue selection to guest RSVPs, it made planning a joyous experience. Highly recommend for a picture-perfect day!"
    },
    {
      title: "David Foster & Jessica Simmons",
      time: "25 minutes ago",
      content: "Forever Grateful! Our wedding planner app turned our vision into reality. The app's tools for budgeting and vendor management made the process smooth, allowing us to focus on creating beautiful memories."
    },
    {
      title: "Daniel Liu & Olivia Turner",
      time: "30 minutes ago",
      content: "Tech-Empowered Love Story! Thanks to our wedding planner app, coordinating with vendors and staying on budget was a breeze. It played a crucial role in making our special day unforgettable."
    },
    {
      title: "Aiden Murphy & Isabella Taylor",
      time: "35 minutes ago",
      content: "Culmination of Love! Our wedding planner app added a magical touch to our wedding journey. From choosing the perfect menu to managing RSVPs, it ensured a flawless celebration of love."
    },
    {
      title: "Gabriel Sanchez & Natalie Carter",
      time: "40 minutes ago",
      content: "Financially Wise Wedding! The wedding planner app made budgeting stress-free. Tracking expenses and managing payments was a breeze, allowing us to focus on the joyous moments of our big day."
    },
    {
      title: "Mia Anderson & Liam Evans",
      time: "45 minutes ago",
      content: "Language of Love Perfected! Our wedding planner app made communication with vendors and guests effortless. It spoke the language of love, ensuring every detail of our wedding day was perfect."
    },
    {
      title: "Elena Martinez & Christopher Clark",
      time: "50 minutes ago",
      content: "Parenting Our Wedding! The wedding planner app felt like a supportive friend throughout our planning journey. Daily tips, milestone checklists, and a helpful community made the process enjoyable and stress-free."
    },
    {
      title: "Oscar Ramirez & Grace Foster",
      time: "55 minutes ago",
      content: "Artistry in Matrimony! Our wedding planner app added an artistic flair to our wedding planning. From creative ideas to tracking the progress of our vision, it truly elevated our celebration."
    },
    {
      title: "Lily Baker & Samuel Wright",
      time: "1 hour ago",
      content: "Navigating Love's Journey! Our wedding planner app was our compass in the adventure of wedding planning. From choosing venues to managing RSVPs, it ensured a seamless and joyous travel towards our wedding day."
    }
  ];
  
  return (
    <div>
        <Card sx={{ maxWidth: 345 }}>
      <CardHeader
        avatar={
          <Avatar sx={{ bgcolor:"#C19C76" }} aria-label="recipe">
            R
          </Avatar>
        }
        title="Shrimp and Chorizo Paella"
        subheader="September 14, 2016"
      />
      <Typography variant="body2" sx={{margin: '15px'}}>
            To-Do Lists simplify progress tracking, optimizing productivity. 
            Digital versions offer easy task management across devices, 
            while AI ensures efficient time utilization. 
          </Typography>
      </Card>
    </div>
  )
}

const Testimonialcomp = () => {
  return (
    <Grid container spacing={2} sx={{ 
      margin: '20px 80px 20px 80px', 
    }}>
      <Grid item lg={4}><TestimonialTile /></Grid>
      <Grid item lg={4}><TestimonialTile /></Grid>
      <Grid item lg={4}><TestimonialTile /></Grid>
      <Grid item lg={4}><TestimonialTile /></Grid>
      <Grid item lg={4}><TestimonialTile /></Grid>
      <Grid item lg={4}><TestimonialTile /></Grid>
    </Grid>
  );
};

export default Testimonialcomp;