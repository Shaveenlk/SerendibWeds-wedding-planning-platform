import React from 'react'
import { Grid } from '@mui/material';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import Typography from '@mui/material/Typography';
import CardHeader from '@mui/material/CardHeader';

const vendors = [
    {
      name: "Joseph Rodrigo",
      email: "josephrodrigo42@gmail.com",
      role: "Wedding Director",
      profileImageUrl: "/assets/heroSection.png",
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

const VendorInfoTile = ({name, profileImageUrl }) => {
    return (
      <div>
        <Card sx={{ maxWidth: 345 }}>
          <CardContent>
            <Typography variant="h6" sx={{ fontWeight: 'bold'}}>
              {name}
            </Typography>
            <Typography variant="body2" sx={{ margin: '15px' }}>
              {profileImageUrl} 
            </Typography>
          </CardContent>
        </Card>
      </div>
    );
};
  

const VendorInfocomp = () => {
  return (
    <Grid container spacing={2} sx={{ 
        margin: '20px 80px 20px 80px', 
      }}>
        {vendors.map((vendors, index) => (
          <Grid item lg={4} key={index}>
            <VendorInfoTile name={vendors.name} profileImageUrl={vendors.profileImageUrl} />
          </Grid>
        ))}
      </Grid>
  );
};

export default VendorInfocomp
