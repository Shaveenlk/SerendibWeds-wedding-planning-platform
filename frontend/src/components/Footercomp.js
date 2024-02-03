import React from "react";
import { createTheme, ThemeProvider } from "@mui/material/styles";
import { Box, Container, Grid, Typography } from "@mui/material";

// Define your custom color
const customColor = "#DDBEA9"; // Replace this with your desired color code

// Create a custom theme
const theme = createTheme({
  palette: {
    custom: {
      main: customColor,
    },
  },
});

const Footercomp = () => {
  return (
    <ThemeProvider theme={theme}>
      <Box
        sx={{
          width: "100%",
          height: "auto",
          backgroundColor: "custom.main", // Use the custom color in the theme
          paddingTop: "1rem",
          paddingBottom: "1rem",
          borderTop: "1px solid #000",
        }}
      >
        <Container maxWidth="lg">
          <Grid container direction="column" alignItems="flex-start">
            <Grid item xs={12}>
              <Typography color="black" variant="h5" sx={{ textAlign: 'left' }}>
                Serendib Weds
              </Typography>
            </Grid>
            <Grid item xs={12}>
              <Typography color="textSecondary" variant="subtitle1" sx={{ textAlign: 'left' }}>
                {`Join with us to experience smooth and efficient wedding planning`}
              </Typography>
            </Grid>
          </Grid>
        </Container>
      </Box>
    </ThemeProvider>
  );
};

export default Footercomp;
