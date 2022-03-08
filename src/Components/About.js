import React from "react";
import Container from "@mui/material/Container";
import { Typography, Grid } from "@mui/material";
import ResponsiveAppBar from "./ResAppBar";
import dylanpic from "../Assets/B&WME.png";

const About = () => {
  let about_par =
    "Dylan Dubé is a Director, Editor and Cinematographer based in Toronto, Ontario. A graduate of the Film Studies program at Ryerson University, Dylan has been actively building his portfolio since 2008, directing short films, commercials and music videos. \n\n As a cinematographer, Dylan has shot both documentary and narrative material. His approach with each project is to tell engaging, often personal stories with a raw sense of authenticity, brought to life through beautiful images.";

  return (
    <div style={{ backgroundColor: "black" }}>
      <Container sx={{ backgroundColor: "black", minHeight: "100vh", pb: 10 }}>
        <ResponsiveAppBar />
        <Grid container sx={{ mt: 20 }}>
          <Grid lg={6}>
            <img className="about-pic" alt="Dylan Dube" src={dylanpic}></img>
          </Grid>
          <Grid lg={6}>
            <Typography
              variant="h5"
              sx={{
                mt: "10%",
                pl: 3,
                color: "white",
                textAlign: "left",
                fontFamily: "Montserrat",
                whiteSpace: "pre-line",
              }}
            >
              {about_par}
            </Typography>
          </Grid>
        </Grid>
      </Container>
    </div>
  );
};

export default About;
