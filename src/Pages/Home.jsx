import Header from "../Components/Header";
import { Link } from "react-router-dom";
import { Github, Linkedin } from "lucide-react";


const Home = () => {
  return (
    <section className="min-h-screen w-screen bg-linear-to-br from-black via-slate-900 to-black text-white flex items-center">
      {/* CONTENT WRAPPER */}
      <div>
        <Header />
      </div>
      <div className="w-full max-w-7xl mx-auto px-6 pt-24 grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
        {/* LEFT */}
        <div>
          <h1 className="text-5xl md:text-6xl xl:text-7xl font-extrabold leading-[1.05] mb-6">
            <span className="text-6xl md:text-7xl xl:text-8xl">Ashen</span>
            <br />
            <span className="text-orange-500 text-7xl md:text-8xl xl:text-9xl">
              Edward.
            </span>
          </h1>

          <p className="text-gray-400 max-w-lg mb-8">
            Future-oriented IT professional with hands-on experience in modern
            development tools and systems. Passionate about solving real-world
            problems through technology while continuously growing in the areas
            of software development, system design, and IT operations.
          </p>

          <div className="flex gap-4">
            <a
              href="/Portfolio-Static/Ashen-Edward-CV.pdf"
              download
              className="px-6 py-3 rounded-full text-white font-semibold 
             bg-linear-to-r from-indigo-500 via-indigo-600 to-indigo-700
             hover:from-indigo-600 hover:via-indigo-700 hover:to-indigo-800
             transition inline-block"
            >
              Download CV
            </a>

            <Link
              to="/contact"
              className="px-6 py-3 rounded-full border border-gray-500 text-white hover:border-white hover:bg-white/10 transition inline-block"
            >
              Contact Me
            </Link>
             {/* GitHub Button */}
            <a
              href="https://github.com/AshenEdi"
              target="_blank"
              rel="noopener noreferrer"
              className="px-4 py-2 rounded-full border border-white/20 
                        bg-white/5 backdrop-blur-md
                        text-white flex items-center gap-2
                        hover:border-orange-400 hover:bg-white/10
                        transition duration-300"
            >
              <Github size={18} />
            </a>
            {/* LinkedIn Button */}
            <a
              href="http://www.linkedin.com/in/ashen-edward-b34407217"
              target="_blank"
              rel="noopener noreferrer"
              className="px-4 py-2 rounded-full border border-white/20 
                        bg-white/5 backdrop-blur-md
                        text-white flex items-center gap-2
                        hover:border-blue-400 hover:bg-white/10
                        transition duration-300"
            >
              <Linkedin size={18} />
            </a>
          </div>
        </div>

        {/* RIGHT */}
        <div className="relative flex justify-center items-center">
          {/* Glow */}
          <div className="absolute w-96 h-96 bg-orange-500/25 rounded-full blur-3xl"></div>

          {/* MAIN IMAGE */}
          <img
            src="/Portfolio-Static/profile.jpeg"
            alt="Profile"
            className="relative rounded-2xl z-10 w-64 md:w-80"
          />

          <img
            src="/Portfolio-Static/icon1.png"
            alt="Code"
            className="absolute top-10 left-10 w-20 animate-float"
          />

          <img
            src="/Portfolio-Static/icon2.png"
            alt="VSCode"
            className="absolute bottom-10 right-10 w-20 animate-float-delayed"
          />
        </div>
      </div>
    </section>
  );
};

export default Home;
