import Homepage from "./Homepage";
import Contact from "./Contact";
import About from "./About";
import { Route, Routes } from "react-router-dom";
import Projects from "./Projects"

function App() {
  return (
    <Routes>
      <Route path="/projects" element={<Projects />} />
      <Route path="/connect" element={<Contact />} />
      <Route path="/about" element={<About />} />
      <Route exact path="/" element={<Homepage />} />
    </Routes>
  );
}

export default App;
