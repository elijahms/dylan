import Box from "@mui/material/Box";
import Link from "@mui/material/Link";
import Stack from "@mui/material/Stack";
import socialObj from "./contact_info.js";
import Container from "@mui/material/Container"
import ResponsiveAppBar from "./ResAppBar.js";

const Contact = () => {
  let screenSize = window.innerWidth;

  const SocialLinks = () => {
    return socialObj.map((s) => {
      return (
        <Box key={s.name} className="contact-icons">
          <Link href={s.link} target="_blank" rel="noopener noreferrer">
            <s.icon
              sx={{
                fontSize: s.fontSize,
                color: "white",
                "&:hover": {
                  color: s.color,
                },
              }}
            />
          </Link>
        </Box>
      );
    });
  };

  return (
    <div style={{backgroundColor:"black"}}>
      <Container sx={{minHeight: '100vh'}}>
        <ResponsiveAppBar />
        <Box sx={{ display: "flex", mt: '30vh' }}>
          <Stack
            direction={screenSize < 500 ? "column" : "row"}
            alignItems="center"
            spacing={{ xs: 2, md: 3, lg: 20 }}
            sx={{ margin: "auto" }}
          >
            <SocialLinks />
          </Stack>
        </Box>
      </Container>
    </div>
  );
};

export default Contact;
