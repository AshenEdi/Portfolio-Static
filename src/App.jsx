import { BrowserRouter } from "react-router-dom";
import Home from "./Pages/Home";
import Projects from "./Pages/Projects";
import Education from "./Pages/Education";
import Contact from "./Pages/Contact";
import ParticlesBackground from "./Components/ParticlesBackground";

const App = () => {
  return (
    <BrowserRouter basename="/Portfolio-Static">
      <div
        id="scroll-container"
        className="relative h-screen overflow-y-auto snap-y snap-proximity scroll-smooth
                   bg-gradient-to-br from-[#020617] via-[#031337] to-[#020617]"
      >
        {/* 🔥 Particle Background */}
        <ParticlesBackground />

        {/* Optional dark overlay */}
        <div className="relative z-10 bg-black/10 min-h-full">

          <section id="home" className="min-h-screen snap-start">
            <Home />
          </section>

          <section id="projects" className="min-h-screen snap-start">
            <Projects />
          </section>

          <section id="education" className="min-h-screen snap-start">
            <Education />
          </section>

          <section id="contact" className="min-h-screen snap-start">
            <Contact />
          </section>

        </div>
      </div>
    </BrowserRouter>
  );
};

export default App;
