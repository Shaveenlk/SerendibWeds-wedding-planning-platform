import React from "react";
import { Grid } from '@mui/material';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import Typography from '@mui/material/Typography';

const TestimonialTile = () => {
  return (
    <div>
      <Card sx={{ maxWidth: 275 }}>
        <CardContent>
          <Typography variant="body2" sx={{margin: '20px 5px 5px 5px'}}>
            <b>Progress Tracking</b>
          </Typography>
          <Typography variant="body2" sx={{margin: '5px'}}>
            To-Do Lists simplify progress tracking, optimizing productivity. 
            Digital versions offer easy task management across devices, 
            while AI ensures efficient time utilization. 
          </Typography>
        </CardContent>
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