import React from "react";
import { createTheme, ThemeProvider } from "@mui/material/styles";
import { Box, Container, Grid, Typography } from "@mui/material";
import "./Footercomp.css"
import { Link } from 'react-router-dom';


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
    <footer>
      <div className="content">
        <div className="top">
          <div className="logo-details">
            <span className="logo_name">SerendibWeds</span>
          </div>
        </div>
        <div className="link-boxes">
          <ul className="box">
            <li className="link_name">Company</li>
            <li><Link to="/">Home</Link></li>
            <li><Link to="/aboutus">About us</Link></li>
            <li><Link to="/contact">Contact us</Link></li> {/* Assuming you'll add a route for this */}
          </ul>
          <ul className="box">
            <li className="link_name">Features</li>
            <li><Link to="/dreamsearch">DreamSearch</Link></li>
            <li><Link to="/profile">My Profile</Link></li>
            <li><Link to="/testimonials">Testimonials</Link></li> {/* Assuming you'll add a route for this */}
          </ul>
          <ul className="box">
            <li className="link_name">Contributions</li>
            <li><Link to="/testimonials">Testimonials</Link></li> {/* Assuming you'll add a route for this */}
            <li><Link to="/feedback">Feedback</Link></li> {/* Assuming you'll add a route for this */}
          </ul>
          <ul className="box">
            <li className="link_name">Socials</li>
            {/* External links can remain as <a> but ensure they have valid href attributes */}
            <li><a href="https://www.instagram.com/serendibweds__/">Instagram</a></li>
            <li><a href="https://www.facebook.com/profile.php?viewas=100000686899395&id=61557243077413">Facebook</a></li>
          </ul>
          {/* <ul className="box input-box">
            <li className="link_name">Subscribe to newsletter</li>
          
            <li><input type="text" placeholder="Enter your email" /></li>
            <li><input type="button" value="Subscribe" /></li>
          </ul> */}
        </div>
      </div>
      <div className="bottom-details">
        <div className="bottom_text">
          {/* Keep external links or route to a dedicated privacy/terms component */}
          <span className="copyright_text">Copyright © 2023 <Link to="/">SerendibWeds</Link> All rights reserved</span>
          <span className="policy_terms">
            <Link to="/privacy-policy">Privacy policy</Link> {/* Assuming you'll add a route for this */}
            <Link to="/terms-conditions">Terms & conditions</Link> {/* Assuming you'll add a route for this */}
          </span>
        </div>
      </div>
    </footer>
  );
};


export default Footercomp;