import React from "react";
import Box from "@mui/material/Box";
import Card from "@mui/material/Card";
import CardActions from "@mui/material/CardActions";
import CardContent from "@mui/material/CardContent";
import Button from "@mui/material/Button";
import Typography from "@mui/material/Typography";
import { Avatar, Stack } from "@mui/material";
import { Grid } from "@mui/material";

const bull = (
  <Box
    component="span"
    sx={{ display: "inline-block", mx: "2px", transform: "scale(0.8)" }}
  >
    •
  </Box>
);

const VendorTile = ({ vendor }) => {
  const { name, email, role, profileImageUrl } = vendor;

  return (
    <>
        <Card
      style={{ borderRadius:'12px'}}
        >
        <CardContent>
          <Stack spacing={4} alignItems="center">
            <Avatar sx={{ width: 100, height: 100, fontSize: 40 }}>
              {name[0]}
            </Avatar>
          </Stack>
          <Typography
            variant="body2"
            sx={{ textAlign: "center",margin:'auto'  }}
          >
            <b>{name}</b>
          </Typography>
          <Typography
            variant="body2"
            sx={{ textAlign: "center", margin: "5px" }}
          >
            {email}
          </Typography>
          <Typography
            variant="body2"
            sx={{ textAlign: "center", margin: "5px" }}
          >
            {role}
          </Typography>
        </CardContent>
        <CardActions sx={{ justifyContent: "center" }}>
          <Button
            size="small"
            sx={{
              backgroundColor: "#C19C76",
              color: "white",
              padding: "10px",
              borderRadius: "10px",
            }}
          >
            View Profile
          </Button>
        </CardActions>
      </Card>
    </>
  );
};

const shuffleArray = (array) => {
  // Fisher-Yates shuffle algorithm
  for (let i = array.length - 1; i > 0; i--) {
    const j = Math.floor(Math.random() * (i + 1));
    [array[i], array[j]] = [array[j], array[i]];
  }
  return array;
};

const Topvendorscomp = () => {
  // Example vendor data list
  const vendors = [
    {
      name: "Joseph Rodrigo",
      email: "josephrodrigo42@gmail.com",
      role: "Wedding Director",
      profileImageUrl: "url_to_image",
    },
    {
      name: "Emma Smith",
      email: "emma.smith@example.com",
      role: "Caterer",
      profileImageUrl: "url_to_image",
    },
    {
      name: "John Johnson",
      email: "john.johnson@example.com",
      role: "Photographer",
      profileImageUrl: "url_to_image",
    },
    {
      name: "Sophie Davis",
      email: "sophie.davis@example.com",
      role: "Florist",
      profileImageUrl: "url_to_image",
    },
    {
      name: "Michael White",
      email: "michael.white@example.com",
      role: "DJ",
      profileImageUrl: "url_to_image",
    },
    {
      name: "Olivia Taylor",
      email: "olivia.taylor@example.com",
      role: "Event Planner",
      profileImageUrl: "url_to_image",
    },
    {
      name: "David Brown",
      email: "david.brown@example.com",
      role: "Venue Manager",
      profileImageUrl: "url_to_image",
    },
    {
      name: "Isabella Martin",
      email: "isabella.martin@example.com",
      role: "Makeup Artist",
      profileImageUrl: "url_to_image",
    },
    {
      name: "William Anderson",
      email: "william.anderson@example.com",
      role: "Baker",
      profileImageUrl: "url_to_image",
    },
    {
      name: "Ava Wilson",
      email: "ava.wilson@example.com",
      role: "Entertainer",
      profileImageUrl: "url_to_image",
    },
    {
      name: "Ethan Miller",
      email: "ethan.miller@example.com",
      role: "Videographer",
      profileImageUrl: "url_to_image",
    },
    {
      name: "Sophia Harris",
      email: "sophia.harris@example.com",
      role: "Graphic Designer",
      profileImageUrl: "url_to_image",
    },
    {
      name: "Liam Jackson",
      email: "liam.jackson@example.com",
      role: "Chef",
      profileImageUrl: "url_to_image",
    },
    // Add more vendor data as needed
  ];

  // Shuffle the array of vendors
  const shuffledVendors = shuffleArray([...vendors]);

  // Select the first 6 vendors
  const displayedVendors = shuffledVendors.slice(0,10);

  return (
    <Grid  
   container
   gap={2}
  //  backgroundColor={'green'}
 padding={2}
 style={{overflowWrap:'break-word'}}
   
      // spacing={2}
      // margin={'auto'}
      // sx={{ margin: "auto"}}
    >
      {displayedVendors.map((vendor, index) => (
      <Grid margin={'auto'}
       borderRadius={3}
           xs={12}
           sm={6}
           md={3}
           lg={3}
          
           sx={{ width: "100%",border:'solid lightblue'}}
           >
      
          <VendorTile vendor={vendor}  key={index} />
       </Grid>
      ))}
    </Grid>
  );
};

export default Topvendorscomp;
