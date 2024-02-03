import { Box, Grid, Avatar, Typography, Button } from "@mui/material";
import React from "react";



const Profilecomp = () => {
  return (
    <div className="profile">
      <Box>
        <Grid container spacing={2}>
          {/* Profile Section */}
          <Grid
            item
            xs={12}
            sm={8}
            md={9}
            lg={9}
            alignItems="center"
            justifyContent="center"
            display="flex"
      
          >
            <Avatar
              src="https://images.pexels.com/photos/415829/pexels-photo-415829.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"
              sx={{ width: 100, height: 100,marginTop: 2, ml: 2, mb: 2 }}
      
            />
            <Typography variant="h5" component="div" sx={{ ml: 2, p: 2,fontWeight: 'bold' }}>
              Hazel & Lucas <br /> lucas@gmail.com
            </Typography>
          </Grid>
          {/* Logout Button Section */}
          <Grid
            item
            xs={12}
            sm={4}
            md={3}
            lg={3}
            alignItems="center"
            justifyContent="center"
            display="flex"
          >
            <Button variant="contained"  sx={{borderRadius: 5 ,
                  marginLeft: { xs: 8, sm: 0 },
                  marginBottom: { xs: 3, sm: 0 }, // 3px margin on xs (extra small) screens, no margin on sm (small) screens and above
                   // Adjust this value based on your design preferences
                }}>
              Log Out
            </Button>
          </Grid>
        </Grid>
      </Box>
    </div>
  );
};

export default Profilecomp;
