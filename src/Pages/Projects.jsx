import { useState, useEffect } from "react";
import { Github } from "lucide-react";
import Header from "../Components/Header";
import TechStackChart from "../Components/TechStackChart";

/* ================= STATIC PROJECT DATA ================= */
const STATIC_PROJECTS = [
  {
    _id: "1",
    title: "Online Cake Shop",
    description:
      "Full-stack MERN application with CRUD features, role-based access, and modern UI.",
    tech: ["MongoDB", "Express", "React", "Node.js"],
    link: "https://github.com/AshenEdi",
    status: "complete",
    images: [
      "/projects/cake1.jpg",
      "/projects/cake2.jpg",
      "/projects/cake3.jpg",
    ],
  },
  {
    _id: "2",
    title: "Portfolio Website",
    description:
      "Personal portfolio built with React, Vite, and Tailwind CSS using a modern dark theme.",
    tech: ["React", "Vite", "Tailwind CSS"],
    link: "https://github.com/AshenEdi",
    status: "complete",
    images: ["/projects/portfolio1.jpg"],
  },
  {
    _id: "3",
    title: "Java Web Application",
    description:
      "Servlet and JDBC-based system using MVC architecture for database-driven operations.",
    tech: ["Java", "Servlets", "JDBC", "MySQL"],
    link: "https://github.com/AshenEdi",
    status: "incomplete",
    images: [],
  },
];

const Projects = () => {
  const [projects] = useState(STATIC_PROJECTS);
  const [showSlider, setShowSlider] = useState(false);
  const [activeProject, setActiveProject] = useState(null);
  const [currentIndex, setCurrentIndex] = useState(0);

  /* Lock background scroll when modal is open */
  useEffect(() => {
    if (showSlider) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "auto";
    }
  }, [showSlider]);

  return (
    <div className="min-h-screen text-white">
      <Header />

      <div className="w-full max-w-7xl mx-auto px-6 pt-32 pb-20">
        <h1 className="text-4xl md:text-5xl xl:text-6xl font-extrabold mb-6">
          My <span className="text-orange-500">Projects</span>
        </h1>

        <p className="text-gray-400 max-w-2xl mb-14">
          A selection of projects showcasing my frontend, backend,
          and full-stack development skills.
        </p>

        <TechStackChart projects={projects} />

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10 mt-14">
          {projects.map((project) => (
            <div
              key={project._id}
              className="relative bg-white/5 border border-white/10 rounded-2xl
                         hover:border-orange-500/50 hover:scale-[1.03]
                         transition-all duration-300 overflow-hidden"
            >
              <span
                className={`absolute top-3 right-3 z-20 px-3 py-1 rounded-full text-xs font-semibold border ${
                  project.status === "complete"
                    ? "bg-green-500/15 text-green-400 border-green-500/40"
                    : "bg-orange-500/15 text-orange-400 border-orange-500/40"
                }`}
              >
                {project.status === "complete" ? "Complete" : "Incomplete"}
              </span>

              <div className="relative h-44 overflow-hidden">
                <img
                  src={
                    project.images?.length > 0
                      ? project.images[0]
                      : "/placeholder.jpg"
                  }
                  alt={project.title}
                  className="w-full h-full object-cover hover:scale-110 transition duration-500"
                />
                <div className="absolute inset-0 bg-black/40"></div>
              </div>

              <div className="relative p-6 z-10">
                <h3 className="text-xl font-semibold mb-2">{project.title}</h3>

                <p className="text-gray-400 text-sm mb-4">{project.description}</p>

                <div className="flex flex-wrap gap-2 mb-6">
                  {project.tech?.map((tech, i) => (
                    <span
                      key={i}
                      className="text-xs px-3 py-1 rounded-full bg-orange-500/10 text-orange-400"
                    >
                      {tech}
                    </span>
                  ))}
                </div>

                <div className="flex flex-wrap items-center gap-3">
                  {project.images?.length > 0 ? (
                    <button
                      onClick={() => {
                        setActiveProject(project);
                        setCurrentIndex(0);
                        setShowSlider(true);
                      }}
                      className="px-4 py-2 text-sm font-semibold border border-orange-400/50 text-orange-300 rounded-full bg-orange-500/5 backdrop-blur-md hover:border-orange-300 hover:bg-orange-500/15 hover:text-orange-200 transition duration-300 inline-flex items-center gap-2"
                    >
                      View 
                    </button>
                  ) : (
                    <button
                      type="button"
                      disabled
                      className="px-4 py-2 text-sm font-semibold border border-orange-500/40 text-orange-400 rounded-full bg-orange-500/10 cursor-not-allowed"
                    >
                      Incomplete
                    </button>
                  )}

                  <a
                    href={project.link}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="px-4 py-2 text-sm font-semibold border border-white/20 text-white rounded-full bg-white/5 hover:border-white hover:bg-white/10 transition inline-flex items-center gap-2"
                  >
                    <Github size={16} />
                    GitHub
                  </a>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* ================= MODAL ================= */}
      {showSlider && activeProject && (
        <div
          className="fixed inset-0 z-[9999] bg-black/90 backdrop-blur-sm flex items-center justify-center"
          onClick={() => setShowSlider(false)}
        >
          {/* Close Button */}
          <button
            onClick={() => setShowSlider(false)}
            className="absolute top-6 right-6 z-[10000] text-white text-3xl hover:text-orange-400 transition"
          >
            X
          </button>

          {/* Slider Content */}
          <div
            className="relative w-full max-w-4xl px-6"
            onClick={(e) => e.stopPropagation()}
          >
            <img
              src={activeProject.images[currentIndex]}
              alt="Project"
              className="w-full max-h-[75vh] object-contain rounded-xl"
            />

            {currentIndex > 0 && (
              <button
                onClick={() => setCurrentIndex(currentIndex - 1)}
                className="absolute left-0 top-1/2 -translate-y-1/2 text-white text-4xl px-4 hover:text-orange-400"
              >
                &lt;
              </button>
            )}

            {currentIndex < activeProject.images.length - 1 && (
              <button
                onClick={() => setCurrentIndex(currentIndex + 1)}
                className="absolute right-0 top-1/2 -translate-y-1/2 text-white text-4xl px-4 hover:text-orange-400"
              >
                &gt;
              </button>
            )}

            <div className="text-center text-gray-400 mt-4">
              {currentIndex + 1} / {activeProject.images.length}
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default Projects;
