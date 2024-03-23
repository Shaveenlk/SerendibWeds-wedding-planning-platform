import Card from "@mui/material/Card";
import CardContent from "@mui/material/CardContent";
import Typography from "@mui/material/Typography";
import { Grid } from "@mui/material";

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
  },
  {
    title: "Vendor Booking",
    content: "Effortlessly book vendors directly through our wedding planner app. Browse a curated selection of top-rated vendors and secure your favorites with just a few clicks."
  },
  {
    title: "Browse Past Weddings",
    content: "Get inspired by browsing through past weddings organized using our wedding planner app. Explore real-life examples, gather ideas, and envision your dream wedding day."
  },
  {
    title: "Search Past Weddings",
    content: "Looking for specific themes or ideas? Use our search feature to find past weddings that match your preferences. Refine your search by location, theme, or any other criteria."
  },
  {
    title: "To-Do List Generation",
    content: "Our wedding planner app generates personalized to-do lists tailored to your wedding timeline and preferences. Stay organized and on track with tasks, deadlines, and reminders."
  },
  {
    title: "Vendor Profile",
    content: "View detailed profiles of vendors available on our platform. Learn more about their services, read reviews from past clients, and make informed decisions for your special day."
  },
  {
    title: "Vendor Profile",
    content: "View detailed profiles of vendors available on our platform. Learn more about their services, read reviews from past clients, and make informed decisions for your special day."
  }
];

const FeaturesTile = ({ title, content }) => {
  return (
    <Card style={{ borderRadius: '12px' }}>
      <CardContent>
        <Typography variant="body1" sx={{ margin: '15px' }}>
          <b>{title}</b>
        </Typography>
        <Typography variant="body2" sx={{ margin: "15px" }}>
          {content}
        </Typography>
      </CardContent>
    </Card>
  );
};

const TopFeaturescomp = () => {
  return (
    <Grid
      container
      gap={2}
      padding={2}
      style={{ overflowWrap: 'break-word' }}
    >
      {featuresData.map((feature, index) => (
        <Grid
          margin={'auto'}
          borderRadius={3}
          xs={12}
          sm={6}
          md={3}
          lg={3}
          key={index}
          sx={{ width: "100%", border: 'solid lightgrey' }}
        >
          <FeaturesTile title={feature.title} content={feature.content} /> 
        </Grid>
      ))}
    </Grid>
  );
};

export default TopFeaturescomp;