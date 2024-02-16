import React from 'react'
import { Box, Grid, Avatar, Typography, Button } from "@mui/material";

const VendorProfileComp = () => {
  return (
    <div className="profile">
      <Box>
        <Grid container spacing={2}>
          {/* Profile Section */}
          <Grid
            container
            item
            xs={12}
            sm={8}
            md={9}
            lg={9}
            alignItems="center"
            justifyContent="center"
          >
            {/* Nested Grid container for Avatar and Typography */}
            <Grid container item alignItems="center" spacing={2}>
              <Grid item>
                <Avatar
                  // src="https://images.pexels.com/photos/415829/pexels-photo-415829.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"
                  sx={{ width: 300, height: 300, margin: 3, ml:20 }}
                />
              </Grid>
              <Grid item>
                <Typography variant="h3" component="div" sx={{ fontWeight: 'bold' }}>
                  Elegance Captured
                </Typography>
                <Typography variant="h5" component="div" sx={{ fontWeight: 'bold' }}>
                  Since: 1999
                </Typography>
              </Grid>
            </Grid>
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
          >
            {/* <Button variant="contained" sx={{
              borderRadius: 5,
              marginLeft: { xs: 8, sm: 0 },
              marginBottom: { xs: 3, sm: 0 },
            }}>
              Log Out
            </Button> */}
          </Grid>
            <Button variant="contained" sx={{
              borderRadius: 5,
              marginLeft: { xs: 8, sm: 25 },
              marginBottom: { xs: 3, sm: 0 },
            }}>
              Book Us
            </Button>
            <Button variant="contained" sx={{
              borderRadius: 5,
              marginLeft: { xs: 8, sm: 5 },
              marginBottom: { xs: 3, sm: 0 },
            }}>
                Contact Us            
            </Button>
        </Grid>
      </Box>
    </div>
  )
}

export default VendorProfileComp
