import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from "./Pages/Home";
import Projects from "./Pages/Projects";
import Education from "./Pages/Education";
import Contact from "./Pages/Contact";

const App = () => {
  return (
    <BrowserRouter basename="/portfolio-static">
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/projects" element={<Projects />} />
        <Route path="/education" element={<Education />} />
        <Route path="/contact" element={<Contact />} />
      </Routes>
    </BrowserRouter>
  );
};

export default App;
