import { useState } from "react";
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
    link: "https://ashenedi.github.io",
    images: ["/projects/portfolio1.jpg"],
  },
  {
    _id: "3",
    title: "Java Web Application",
    description:
      "Servlet and JDBC-based system using MVC architecture for database-driven operations.",
    tech: ["Java", "Servlets", "JDBC", "MySQL"],
    link: "",
    images: [],
  },
];

const Projects = () => {
  /* ================= STATIC STATE ================= */
  const [projects] = useState(STATIC_PROJECTS);
  const loading = false;
  const error = "";

  /* ===== SLIDER STATE ===== */
  const [showSlider, setShowSlider] = useState(false);
  const [activeProject, setActiveProject] = useState(null);
  const [currentIndex, setCurrentIndex] = useState(0);

  return (
    <section className="min-h-screen w-screen bg-linear-to-br from-black via-slate-900 to-black text-white">
      <Header />

      <div className="w-full max-w-7xl mx-auto px-6 pt-32 pb-20">
        {/* HEADING */}
        <h1 className="text-4xl md:text-5xl xl:text-6xl font-extrabold mb-6">
          My <span className="text-orange-500">Projects</span>
        </h1>

        <p className="text-gray-400 max-w-2xl mb-14">
          A selection of projects that showcase my skills in frontend, backend,
          and full-stack development using modern technologies.
        </p>

        {/* TECH STACK CHART */}
        {!loading && !error && <TechStackChart projects={projects} />}

        {/* STATES */}
        {loading && <p className="text-gray-400">Loading projects...</p>}
        {error && <p className="text-red-400">{error}</p>}

        {/* PROJECT GRID */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10">
          {projects.map((project) => (
            <div
              key={project._id}
              className="relative bg-white/5 border border-white/10 rounded-2xl
                         hover:border-orange-500/50 hover:scale-[1.03]
                         transition-all duration-300 overflow-hidden"
            >
              {/* IMAGE */}
              <div className="relative h-44 overflow-hidden">
                <img
                  src={
                    project.images && project.images.length > 0
                      ? project.images[0]
                      : "/placeholder.jpg"
                  }
                  alt={project.title}
                  className="w-full h-full object-cover hover:scale-110 transition duration-500"
                />
                <div className="absolute inset-0 bg-black/40"></div>
              </div>

              {/* CONTENT */}
              <div className="relative p-6 z-10">
                <h3 className="text-xl font-semibold mb-2">{project.title}</h3>

                <p className="text-gray-400 text-sm mb-4">
                  {project.description}
                </p>

                {/* LINK DETAILS */}
                {project.link && (
                  <p className="text-xs text-gray-500 mb-4 truncate">
                    🔗 {project.link}
                  </p>
                )}

                {/* TECH STACK */}
                <div className="flex flex-wrap gap-2 mb-6">
                  {project.tech?.map((tech, i) => (
                    <span
                      key={i}
                      className="text-xs px-3 py-1 rounded-full
                                 bg-orange-500/10 text-orange-400"
                    >
                      {tech}
                    </span>
                  ))}
                </div>

                {/* ACTION BUTTON */}
                {project.images && project.images.length > 0 && (
                  <button
                    onClick={() => {
                      setActiveProject(project);
                      setCurrentIndex(0);
                      setShowSlider(true);
                    }}
                    className="inline-flex items-center gap-2
                               px-4 py-2 text-sm font-semibold
                               border border-orange-400/40
                               text-orange-400
                               rounded-full
                               bg-transparent
                               hover:bg-orange-500/10
                               hover:border-orange-400
                               transition"
                  >
                    View Project
                    <span>→</span>
                  </button>
                )}
              </div>

              {/* GLOW */}
              <div className="absolute inset-0 rounded-2xl bg-orange-500/5 blur-xl opacity-0 hover:opacity-100 transition"></div>
            </div>
          ))}
        </div>
      </div>

      {/* ================= IMAGE SLIDER MODAL ================= */}
      {showSlider && activeProject && (
        <div className="fixed inset-0 bg-black/80 z-50 flex items-center justify-center">
          {/* CLOSE */}
          <button
            onClick={() => setShowSlider(false)}
            className="absolute top-6 right-6 text-white text-3xl hover:text-orange-400"
          >
            ✕
          </button>

          {/* SLIDER */}
          <div className="relative w-full max-w-4xl px-6">
            <img
              src={activeProject.images[currentIndex]}
              alt="Project"
              className="w-full max-h-[75vh] object-contain rounded-xl"
            />

            {/* PREV */}
            {currentIndex > 0 && (
              <button
                onClick={() => setCurrentIndex(currentIndex - 1)}
                className="absolute left-0 top-1/2 -translate-y-1/2
                           text-white text-4xl px-4 hover:text-orange-400"
              >
                ‹
              </button>
            )}

            {/* NEXT */}
            {currentIndex < activeProject.images.length - 1 && (
              <button
                onClick={() => setCurrentIndex(currentIndex + 1)}
                className="absolute right-0 top-1/2 -translate-y-1/2
                           text-white text-4xl px-4 hover:text-orange-400"
              >
                ›
              </button>
            )}

            {/* COUNTER */}
            <div className="text-center text-gray-400 mt-4">
              {currentIndex + 1} / {activeProject.images.length}
            </div>
          </div>
        </div>
      )}
    </section>
  );
};

export default Projects;
