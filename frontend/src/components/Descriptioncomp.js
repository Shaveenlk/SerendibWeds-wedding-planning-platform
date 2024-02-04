import { Box, Container } from "@mui/material";
import React from "react";

const Descriptioncomp = () => {

  const Data = {
      title: "Top Vendors",
      subheading:
        "Visit our top performing vendors in 2023 and dive into their work",
      content:
        "To-Do Lists simplify progress tracking, optimizing productivity. Digital versions offer easy task management across devices, while AIensures efficient time utilization. Visit our top performing vendors in 2023 and dive into their work",
    };


  return (
    <div>
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
            padding: "2px",
            width: "300px",
            backgroundColor: "#C19C76",
            borderRadius: "30px", // Set border radius for rounded corners
            textAlign: "center", // Center text horizontally
          }}
        >
          <h2>{Data.title}</h2>
        </Container>

        <Container sx={{ textAlign: "center" }}>
          <h1>{Data.subheading}</h1>
        </Container>

        <Container sx={{ textAlign: "center" }}>
          <h4>{Data.content}</h4>
        </Container>
      </Box>
    </div>
  );
};

export default Descriptioncomp;
