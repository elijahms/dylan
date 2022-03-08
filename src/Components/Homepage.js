import { useState } from "react";
import Box from "@mui/material/Box";
import Stack from "@mui/material/Stack";
import Typography from "@mui/material/Typography";
import ReactPlayer from "react-player";
import NavGrid from "./NavGrid";
import dylanvid from "../Assets/outputvid.mp4";

const Homepage = () => {
  const [videoHeight, setVideoHeight] = useState(window.innerWidth);

  return (
    <div>
      <div className="video-div">
        <ReactPlayer
          // className="react-player"
          style={{ backgroundColor: "black" }}
          url={dylanvid}
          // url="https://vimeo.com/668809608"
          playing
          loop
          muted
          playsinline
          width={videoHeight <= 500 ? "442%" : window.innerWidth}
          //width={window.innerWidth}
          height={window.innerHeight}
          //height={videoHeight <= 500 ? "100%" : "100%"}
        />
        {/* <video playsinline autoplay muted loop src={dylanvid} type="video/mp4"/> */}
        {/* <source src={dylanvid} type="video/mp4" />
        </video> */}
      </div>
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
                fontSize: "3.8rem",
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
                fontSize: "2rem",
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
