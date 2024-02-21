import React from 'react'
import { Grid } from '@mui/material';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import Typography from '@mui/material/Typography';
import CardMedia from '@mui/material/CardMedia';
import CardActionArea from '@mui/material/CardActionArea';
import image from '../assets/heroSectionImg.png';

const vendors = [
  {
    name: "Joseph Rodrigo",
    email: "josephrodrigo42@gmail.com",
    profileImageUrl: image,
  },
  {
    name: "Emma Smith",
    email: "emma.smith@example.com",
    profileImageUrl: "url_to_image",
  },
  {
    name: "John Johnson",
    email: "john.johnson@example.com",
    profileImageUrl: "url_to_image",
  },
  {
    name: "Sophie Davis",
    email: "sophie.davis@example.com",
    profileImageUrl: "url_to_image",
  },
  {
    name: "Michael White",
    email: "michael.white@example.com",
    profileImageUrl: "url_to_image",
  },
  {
    name: "Olivia Taylor",
    email: "olivia.taylor@example.com",
    profileImageUrl: "url_to_image",
  },
  {
    name: "David Brown",
    email: "david.brown@example.com",
    profileImageUrl: "url_to_image",
  },
  {
    name: "Isabella Martin",
    email: "isabella.martin@example.com",
    profileImageUrl: "url_to_image",
  },
  {
    name: "William Anderson",
    email: "william.anderson@example.com",
    profileImageUrl: "url_to_image",
  },
  {
    name: "Ava Wilson",
    email: "ava.wilson@example.com",
    profileImageUrl: "url_to_image",
  },
  {
    name: "Ethan Miller",
    email: "ethan.miller@example.com",
    profileImageUrl: "url_to_image",
  },
  {
    name: "Sophia Harris",
    email: "sophia.harris@example.com",
    profileImageUrl: "url_to_image",
  },
  {
    name: "Liam Jackson",
    email: "liam.jackson@example.com",
    profileImageUrl: "url_to_image",
  },
];

const VendorInfoTile = ({ name, profileImageUrl }) => {
    return (
      <Grid item lg={4}>
        <Card sx={{ maxWidth: 345 }}>
          <CardActionArea>
            <CardMedia
              component="img"
              height="240"
              image={profileImageUrl}
              alt={`${name} profile`}
            />
            <CardContent>
              <Typography variant="h6" sx={{ fontWeight: 'bold' }}>
                {name}
              </Typography>
            </CardContent>
          </CardActionArea>
        </Card>
      </Grid>
    );
};

const VendorInfocomp = () => {
  return (
    <Grid container spacing={2} sx={{ margin: '20px 80px' }}>
      {vendors.map((vendor, index) => (
        <VendorInfoTile key={index} {...vendor} />
      ))}
    </Grid>
  );
};

export default VendorInfocomp;
