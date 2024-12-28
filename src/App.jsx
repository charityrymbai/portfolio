import NavigationBar from "./components/NavigationBar";
import { Routes, Route, Navigate } from "react-router-dom";
import Home from "./pages/Home";
import About from "./pages/About";
import Projects from "./pages/Projects";
import Certifications from "./pages/Certifications";
import Contact from "./pages/Contact";

const App = () => {
  return (
    <div>  
      <NavigationBar />
      <Routes>
          <Route path="/portfolio/" element={<Navigate to="home" />} />
          <Route path="/portfolio/home" element={<Home />} />
          <Route path="/portfolio/about" element={<About />} />
          <Route path="/portfolio/projects" element={<Projects />} />
          <Route path="/portfolio/certifications" element={<Certifications />} />
          <Route path="/portfolio/contact" element={<Contact />} />
      </Routes>
    </div>
  );
}

export default App;