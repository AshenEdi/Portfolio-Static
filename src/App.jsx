import { BrowserRouter } from "react-router-dom";
import Home from "./Pages/Home";
import Projects from "./Pages/Projects";
import Education from "./Pages/Education";
import Contact from "./Pages/Contact";

const App = () => {
  return (
    <BrowserRouter basename="/Portfolio-Static">
      <div
        id="scroll-container"
        className="h-screen overflow-y-auto snap-y snap-proximity scroll-smooth
                   bg-[url('/wallpaper.jpg')] bg-cover bg-center bg-fixed"
      >
        {/* Optional dark overlay */}
        <div className="bg-black/70 min-h-full">

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
