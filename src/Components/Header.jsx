import { useEffect, useState } from "react";

const sections = ["home", "projects", "education", "contact"];

const Header = () => {
  const [active, setActive] = useState("home");

  useEffect(() => {
    const container = document.getElementById("scroll-container");

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            setActive(entry.target.id);
          }
        });
      },
      {
        root: container,
        threshold: 0.2, // 🔥 lower threshold
        rootMargin: "-30% 0px -30% 0px", // 🔥 detect near center
      }
    );

    sections.forEach((id) => {
      const section = document.getElementById(id);
      if (section) observer.observe(section);
    });

    return () => observer.disconnect();
  }, []);

  return (
    <header className="fixed top-0 left-0 w-full z-50 
                   bg-black/30 
                   backdrop-blur-lg 
                   border-b border-white/10">


      <nav className="max-w-7xl mx-auto px-6 py-4 flex justify-center gap-10 text-sm md:text-base relative">
        {sections.map((id) => (
          <a key={id} href={`#${id}`} className="relative group">
            <span
              className={`transition-colors duration-300 ${
                active === id
                  ? "text-orange-500"
                  : "text-gray-400 group-hover:text-white"
              }`}
            >
              {id.charAt(0).toUpperCase() + id.slice(1)}
            </span>

            <span
              className={`absolute left-0 -bottom-1 h-[2px] bg-orange-500 transition-all duration-300 ${
                active === id ? "w-full" : "w-0 group-hover:w-full"
              }`}
            ></span>
          </a>
        ))}
      </nav>
    </header>
  );
};

export default Header;
