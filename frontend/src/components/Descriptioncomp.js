import { Box, Container } from "@mui/material";
import React from "react";

const Descriptioncomp = ({ title, subheading, content }) => {

  return (
    <div style={{fontFamily: "'Philosopher', sans-serif"}}>
      <Box
        sx={{
          width: "100%",
          height: "auto",
          backgroundColor: "#fff", // Use the custom color in the theme
          borderTop: "1px solid #000",
          paddingTop: "1rem",
          paddingBottom: "1rem",
        }}
      >
        <Container
          sx={{
            padding: "10px",
            width: "300px",
            backgroundColor: "#C19C76",
            borderRadius: "30px", // Set border radius for rounded corners
            textAlign: "center", // Center text horizontally
          }}
        >
          <h2>{title}</h2>
        </Container>

        <Container sx={{ 
          textAlign: "center",
          paddingTop: "0.5rem",
          paddingBottom: "0.5rem",
          }}>
          <h1>{subheading}</h1>
        </Container>

        <Container sx={{ 
          textAlign: "center",
          paddingTop: "0.3rem",
          paddingBottom: "0.3rem",
          }}>
          <h4>{content}</h4>
        </Container>
      </Box>
    </div>
  );
};

export default Descriptioncomp;
