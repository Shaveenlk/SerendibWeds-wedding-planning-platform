import React from "react";
import { Grid, Typography, CssBaseline, Stack, Button } from "@mui/material";
import { createTheme, ThemeProvider } from "@mui/material/styles";
import { NavLink } from 'react-router-dom';


const HeroTextcomp = () => {

  const texts = [
    "Vendor Market - comprehensive database of different wedding-related vendors",
    "User Profiles - keeping track of the progress using TO-DO list for each user",
  ];

  return (
    <div>
      <Grid container direction="column" alignItems="flex-start">
        <Grid item>
          <Typography component="ul" sx={{ padding: "10px 10px 10px 40px " }}>
            <li>{texts[0]}</li>
            <li>{texts[1]}</li>
          </Typography>
        </Grid>
      </Grid>
      <Stack
        spacing={2}
        direction="row"
        sx={{ padding: "10px 50px 10px 50px" }}
      >
        {/* <Button variant='contained'>Plan With Us</Button>
                <Button variant='contained'>Add your Service</Button> */}
        <Button
          variant="contained"
          sx={{ backgroundColor: "#C19C76", color: "black" }}
          component={NavLink}
          to="/login"
        >
          Plan With Us
        </Button>{" "}
        <Button
          variant="contained"
          sx={{ backgroundColor: "#C19C76", color: "black" }}
          component={NavLink}
          to="/vendorlogin"
        >
          Are You a vendor ?
        </Button>
      </Stack>
    </div>
  );
};

export default HeroTextcomp;
