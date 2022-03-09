import Container from "@mui/material/Container";
import ResponsiveAppBar from "./ResAppBar.js";
import SocialLinks from "./SocialLinks.js";
import { useSpring, animated, config } from "@react-spring/web";
import { about_par } from "./contact_info.js";

const Contact = ({ mainBackColor }) => {
  const Main = useSpring({
    to: { opacity: 1 },
    from: { opacity: 0 },
    delay: 800,
    config: config.molasses,
  });
  return (
    <div style={{ backgroundColor: mainBackColor, minHeight: "100vh" }}>
      <Container>
        <ResponsiveAppBar />
        <animated.div style={Main}>
        <SocialLinks marginDesk={35} marginMob={12} initialIconCol="white" />
        </animated.div>
      </Container>
    </div>
  );
};

export default Contact;
