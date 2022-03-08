import { useState } from "react";
import Box from "@mui/material/Box";
import Stack from "@mui/material/Stack";
import Typography from "@mui/material/Typography";
import ReactPlayer from "react-player";
import NavGrid from "./NavGrid";
import dylanvid from "../Assets/outputvid.mp4";
import mobdylanvid from "../Assets/iphone.mp4";
import Link from "@mui/material/Link"

const Homepage = () => {
  const [videoHeight, setVideoHeight] = useState(window.innerWidth);
  let video = dylanvid;
  let width = "100%";
  let height = "100%";
  if (window.innerWidth <= 500) {
    video = mobdylanvid;
    width = "100%";
    height = "120%";
  }

  return (
    <div style={{ backgroundColor: "black", minHeight: "100vh" }}>
      <div className="video-div">
        <ReactPlayer
          // className="react-player"
          style={{ backgroundColor: "black" }}
          url={video}
          //url="https://vimeo.com/668809608"
          playing
          loop
          muted
          playsinline
          //width={videoHeight <= 500 ? "380%" : window.innerWidth}
          // width={window.innerWidth}
          // height={window.innerHeight}
          height={height}
          width={width}
          //height={videoHeight <= 500 ? "150%" : window.innerWidth}
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
        <Stack direction="column">
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
          <Link
            href="https://elijahsilverman.com/"
            target="_blank"
            rel="noopener noreferrer"
            sx={{
              width: "100vw",
              textAlign: "center",
              position: "absolute",
              left: 0,
              bottom: 10,
              color: "rgb(237, 245, 225)",
              fontFamily: "Montserrat",
            }}
          >
            Website Designed and Created by Elijah Silverman
          </Link>
        </Stack>
      </Box>
    </div>
  );
};

export default Homepage;
