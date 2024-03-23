import CardHeader from '@mui/material/CardHeader';
import Avatar from '@mui/material/Avatar';
import Card from "@mui/material/Card";
import CardContent from "@mui/material/CardContent";
import Typography from "@mui/material/Typography";
import { Grid } from "@mui/material";

const featuresData = [
  {
    title: "Jacob Warnhalter & Alice Walker",
    content: "To-Do Lists simplify progress tracking, optimizing productivity. Digital versions offer easy task management across devices, while AI ensures efficient time utilization."
  },
  {
    title: "Emily Rodriguez & Brian Mitchell",
    content: "Wedding Bliss Achieved! Thanks to our wedding planner app, organizing our special day was a breeze. Seamless task management and timely reminders ensured a stress-free journey to 'I do'!"
  },
  {
    title: "Sophia Chang & Michael Thompson",
    content: "Our Dream Wedding Realized! The wedding planner app guided us through every detail. From venue selection to guest RSVPs, it made planning a joyous experience. Highly recommend for a picture-perfect day!"
  },
  {
    title: "David Foster & Jessica Simmons",
    content: "Forever Grateful! Our wedding planner app turned our vision into reality. The app's tools for budgeting and vendor management made the process smooth, allowing us to focus on creating beautiful memories."
  },
  {
    title: "Daniel Liu & Olivia Turner",
    content: "Tech-Empowered Love Story! Thanks to our wedding planner app, coordinating with vendors and staying on budget was a breeze. It played a crucial role in making our special day unforgettable."
  },
  {
    title: "Aiden Murphy & Isabella Taylor",
    content: "Culmination of Love! Our wedding planner app added a magical touch to our wedding journey. From choosing the perfect menu to managing RSVPs, it ensured a flawless celebration of love."
  },
  {
    title: "Gabriel Sanchez & Natalie Carter",
    content: "Financially Wise Wedding! The wedding planner app made budgeting stress-free. Tracking expenses and managing payments was a breeze, allowing us to focus on the joyous moments of our big day."
  },
  {
    title: "Mia Anderson & Liam Evans",
    content: "Language of Love Perfected! Our wedding planner app made communication with vendors and guests effortless. It spoke the language of love, ensuring every detail of our wedding day was perfect."
  },
  {
    title: "Elena Martinez & Christopher Clark",
    content: "Parenting Our Wedding! The wedding planner app felt like a supportive friend throughout our planning journey. Daily tips, milestone checklists, and a helpful community made the process enjoyable and stress-free."
  }
];

const FeaturesTile = ({ title, content }) => {
  return (
    <Card style={{ borderRadius: '12px' }}>
      <CardHeader
        avatar={
          <Avatar sx={{ bgcolor:"#C19C76" }} aria-label="recipe">
            {title[0]}
          </Avatar>
        }
        title={title}
      />
      <Typography variant="body2" sx={{ margin: "25px" }}>
        {content}
      </Typography>
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