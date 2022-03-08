import Container from "@mui/material/Container";
import ResponsiveAppBar from "./ResAppBar.js";
import StandardImageList from "./WorkGallery.js";

const Projects = () => {
  return (
    <div style={{ minHeight: "100vh", backgroundColor: 'black' }}>
      <Container>
        <ResponsiveAppBar />
        <StandardImageList />
      </Container>
    </div>
  );
};

export default Projects;
