import { useState } from "react";
import { Typography, Box, Stack } from "@mui/material";
import ReactPlayer from "react-player";
import NavGrid from "./NavGrid";
import dylanvid from "../Assets/dylanvid.mp4";
import surfer from "../Assets/hero.mp4";

const Homepage = () => {
  const [videoHeight, setVideoHeight] = useState(window.innerWidth);

  return (
    <div>
      {/* <Box sx={{ height: "100vh", border: "2px solid red" }}> */}
      <ReactPlayer
        className="react-player"
        url={dylanvid}
        playing
        loop
        muted
        width={videoHeight <= 500 ? "385%" : "113%"}
        height="100%"
      />
      {/* </Box> */}
      <Box
        className="overlay"
        sx={{
          justifyContent: "center",
          alignItems: "center",
          display: "flex",
          height: "100vh",
        }}
      >
        <Stack>
          <Typography
            variant="h1"
            sx={{
              color: "white",
              textAlign: "center",
              fontFamily: "Acier",
              fontSize: "7.5rem",
              "@media only screen and (max-width: 500px)": {
                fontSize: "3.5rem",
              },
            }}
          >
            Dylan <span style={{ color: "#880808" }}>Dube</span>
          </Typography>
          <Typography
            variant="h4"
            sx={{
              color: "#880808",
              textAlign: "center",
              fontFamily: "Montserrat",
              "@media only screen and (max-width: 500px)": {
                fontSize: "3.5rem",
              },
            }}
          >
            | Director |
          </Typography>
          <Box sx={{ mt: 5 }}>
            <NavGrid />
          </Box>
        </Stack>
      </Box>
    </div>
  );
};

export default Homepage;
