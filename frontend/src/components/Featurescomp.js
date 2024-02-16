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



const featuresData = [
  {
    title: "Progress Tracking",
    content: "To-Do Lists simplify progress tracking, optimizing productivity. Digital versions offer easy task management across devices, while AI ensures efficient time utilization."
  },
  {
    title: "User Profiles",
    content: "Wedding Bliss Achieved! Thanks to our wedding planner app, organizing our special day was a breeze. Seamless task management and timely reminders ensured a stress-free journey to 'I do'!"
  },
  {
    title: "Vendor Market",
    content: "Our Dream Wedding Realized! The wedding planner app guided us through every detail. From venue selection to guest RSVPs, it made planning a joyous experience. Highly recommend for a picture-perfect day!"
  }
];

const FeaturesTile = ({ title, content }) => {
  return (
    <div>
      <Card sx={{ maxWidth: 345 }}>
        <CardHeader 
          title={<Typography variant="h6" sx={{ fontWeight: 'bold'}}>
            {title}
          </Typography>}
        />
        <CardContent>
          <Typography variant="body2" sx={{ margin: '15px' }}>
            {content} 
          </Typography>
        </CardContent>
      </Card>
    </div>
  )
}

const Featurescomp = () => {
  return (
    <Grid container spacing={2} sx={{ 
      margin: '20px 80px 20px 80px', 
    }}>
      {featuresData.map((feature, index) => (
        <Grid item lg={4} key={index}>
          <FeaturesTile title={feature.title} content={feature.content} />
        </Grid>
      ))}
    </Grid>
  );
};

export default Featurescomp;