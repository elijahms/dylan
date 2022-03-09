import Box from "@mui/material/Box";
import Stack from "@mui/material/Stack";
import NavGrid from "./NavGrid";
import { useSpring, animated, config } from "@react-spring/web";
import Footer from "./Footer";
import Name from "./Name";
import VideoPlayer from "./VideoPlayer";
import NameTitle from "./NameTitle";

const Homepage = () => {

  //Slowly bring the content into view
  const MainText = useSpring({
    to: { opacity: 1 },
    from: { opacity: 0 },
    delay: 1500,
    config: config.molasses,
  });

  return (
    <div className="homepage-main-div">
      <VideoPlayer />
      <Box className="overlay">
        <animated.div style={MainText}>
          <Stack direction="column">
            <Name first_name={"Dylan"} last_name={"Dube"} />
            <NameTitle title={"| Director |"} />
            <NavGrid />
            <Footer />
          </Stack>
        </animated.div>
      </Box>
    </div>
  );
};

export default Homepage;
