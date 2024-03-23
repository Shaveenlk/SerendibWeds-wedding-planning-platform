import { Box, Grid, Avatar, Typography, Button } from "@mui/material";
import React,{useState,useEffect} from "react";
import axios from 'axios';
import { useParams } from 'react-router-dom';
import { useNavigate } from 'react-router-dom';
import auth from "../config/firebase-config"; // Import Firebase
import backendUrl from "../config/backendUrl";



const Vendorcomp = ({vendorId}) => {
  const navigate = useNavigate();
  const [userData, setUserData] = useState(null);
  const {id} =useParams();

  useEffect(() => {
    // Replace 'YOUR_BACKEND_BASE_URL' with the actual URL of your backend
    axios.get(`${backendUrl}/api/vendors/${id}`)
      .then(response => {
        console.log('API response:', response);
        setUserData(response.data);
      })
      .catch(error => {
        console.error('Error fetching user data:', error);
        // Handle the error or set appropriate state to indicate the error
      });
  }, [vendorId]); // The empty dependency array ensures that the effect runs once when the component mounts


  const handleLogout = () => {
    auth.signOut().then(() => {
      // Sign-out successful.
      console.log('Sign-out successful.');
      navigate('/'); 
    }).catch((error) => {
      // An error happened.
      console.log('Error during sign-out:', error);
    });
  }

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
              src={userData?.logo}
              sx={{ width: 100, height: 100,marginTop: 2, ml: 2, mb: 2 }}
      
            />
            <Typography variant="h5" component="div" sx={{ ml: 2, p: 2,fontWeight: 'bold' }}>
            {userData?.name} <br/> {userData?.category}  <br />  {userData?.email}
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
            <Button variant="contained" onClick={handleLogout}  sx={{borderRadius: 5 ,
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

export default Vendorcomp;
