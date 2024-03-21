import React from "react";
import { createTheme, ThemeProvider } from "@mui/material/styles";
import { Box, Container, Grid, Typography } from "@mui/material";
import "./Footercomp.css"

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
            <li><a href="#">Home</a></li>
            <li><a href="#">About us</a></li>
            <li><a href="#">Contact us</a></li>
          </ul>
          <ul className="box">
            <li className="link_name">Features</li>
            <li><a href="#">DreamSearch</a></li>
            <li><a href="#">My Profile</a></li>
            <li><a href="#">Testomonials</a></li>
          </ul>
          <ul className="box">
            <li className="link_name">Contributions</li>
            <li><a href="#">Testomonials</a></li>
            <li><a href="#">Feedback</a></li>
          </ul>
          <ul className="box">
            <li className="link_name">Socials</li>
            <li><a href="#">Instragram</a></li>
            <li><a href="#">Facebook</a></li>
          </ul>
          <ul className="box input-box">
            <li className="link_name">Subscribe to newsletter</li>
            <li><input type="text" placeholder="Enter your email" /></li>
            <li><input type="button" value="Subscribe" /></li>
          </ul>
        </div>
      </div>
      <div className="bottom-details">
        <div className="bottom_text">
          <span className="copyright_text">Copyright © 2023 <a href="#">SerendibWeds</a> All rights reserved</span>
          <span className="policy_terms">
            <a href="#">Privacy policy</a>
            <a href="#">Terms & conditions</a>
          </span>
        </div>
      </div>
    </footer>
  );
};

export default Footercomp;