import React from "react";
import { Grid, Typography, CssBaseline, Stack, Button } from "@mui/material";
import { createTheme, ThemeProvider } from "@mui/material/styles";
import { NavLink } from 'react-router-dom';


const HeroTextcomp = () => {
  // const theme = createTheme({
  //     typography: {
  //       fontFamily: 'Times New Roman, Times, serif',
  //     },
  // });

  const texts = [
    "From Vision to Vows: Celebrate Love in Style with Us.",
    "\"Say 'Yes!' to Stress-Free Wedding Planning\"",
    "Vendor Market - comprehensive database of different wedding-related vendors",
    "User Profiles - keeping track of the progress using TO-DO list for each user",
  ];

  return (
    // <ThemeProvider theme={theme}>
    // <CssBaseline />
    <div>
      <Grid container direction="column" alignItems="flex-start">
        <Grid item>
          <Typography variant="h2" sx={{ padding: "60px 20px 20px 20px" }}>
            {texts[0]}
          </Typography>
        </Grid>
        <Grid item>
          <Typography variant="h4" sx={{ padding: "20px" }}>
            {texts[1]}
          </Typography>
        </Grid>
        <Grid item>
          <Typography component="ul" sx={{ padding: "20px 20px 20px 70px " }}>
            <li>{texts[2]}</li>
            <li>{texts[3]}</li>
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
    // </ThemeProvider>
  );
};

export default HeroTextcomp;
