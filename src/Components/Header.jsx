import { useState } from "react";
import { Link, NavLink } from "react-router-dom";

const Header = () => {
  const [isOpen, setIsOpen] = useState(false);

  const navLinkClass = ({ isActive }) =>
    `relative transition ${
      isActive
        ? "text-indigo-400 after:w-full"
        : "text-gray-300 hover:text-white after:w-0"
    }
     after:absolute after:left-0 after:-bottom-1 after:h-[2px]
     after:bg-orange-500 after:transition-all`;

  return (
    <header className="fixed top-4 left-0 w-full z-50">
      <div className="max-w-7xl mx-auto px-6">
        <div className="flex items-center justify-between rounded-2xl bg-black/40 backdrop-blur-xl border border-white/10 px-6 py-4 shadow-lg">
          {/* LEFT : SOCIAL / BRAND */}
          <div className="flex items-center space-x-6">
            {/* GitHub */}
            <a
              href="https://github.com/AshenEdi"
              target="_blank"
              rel="noopener noreferrer"
              aria-label="GitHub"
              className="group w-9 h-9 flex items-center justify-center rounded-full
            bg-white/10 border border-white/20
              hover:shadow-[0_0_20px_rgba(99,102,241,0.6)]
              transition"
            >
              <svg
                className="w-5 h-5 text-white group-hover:scale-110 transition"
                fill="currentColor"
                viewBox="0 0 24 24"
              >
                <path d="M12 0.5C5.73 0.5.5 5.74.5 12.02c0 5.1 3.29 9.42 7.86 10.95.57.1.78-.25.78-.55v-2.02c-3.2.7-3.87-1.55-3.87-1.55-.53-1.35-1.3-1.71-1.3-1.71-1.06-.73.08-.72.08-.72 1.17.08 1.79 1.21 1.79 1.21 1.04 1.79 2.73 1.27 3.4.97.1-.76.41-1.27.74-1.56-2.55-.29-5.23-1.28-5.23-5.68 0-1.25.45-2.27 1.19-3.07-.12-.29-.52-1.46.11-3.04 0 0 .97-.31 3.18 1.17a11.02 11.02 0 0 1 5.8 0c2.21-1.48 3.18-1.17 3.18-1.17.63 1.58.23 2.75.11 3.04.74.8 1.19 1.82 1.19 3.07 0 4.41-2.69 5.38-5.25 5.66.42.36.79 1.08.79 2.18v3.23c0 .31.21.66.79.55A11.53 11.53 0 0 0 23.5 12C23.5 5.74 18.27.5 12 .5z" />
              </svg>
            </a>

            {/* LinkedIn */}
            <a
              href="https://www.linkedin.com/in/your-linkedin"
              target="_blank"
              rel="noopener noreferrer"
              aria-label="LinkedIn"
              className="group w-9 h-9 flex items-center justify-center rounded-full
            bg-white/10 border border-white/20
              hover:shadow-[0_0_20px_rgba(59,130,246,0.7)]
              transition"
            >
              <svg
                className="w-5 h-5 text-white group-hover:scale-110 transition"
                fill="currentColor"
                viewBox="0 0 24 24"
              >
                <path d="M4.98 3.5C4.98 4.88 3.86 6 2.48 6S0 4.88 0 3.5 1.12 1 2.5 1 4.98 2.12 4.98 3.5zM.2 8.98h4.56V24H.2zM8.98 8.98h4.38v2.05h.06c.61-1.16 2.11-2.38 4.34-2.38 4.64 0 5.5 3.05 5.5 7.02V24h-4.56v-6.9c0-1.64-.03-3.75-2.29-3.75-2.29 0-2.64 1.79-2.64 3.64V24H8.98z" />
              </svg>
            </a>
          </div>

          {/* DESKTOP NAV */}
          <nav className="hidden md:flex items-center space-x-8 text-sm font-medium">
            <NavLink to="/" className={navLinkClass}>
              Home
            </NavLink>
            <NavLink to="/education" className={navLinkClass}>
              Education
            </NavLink>
            <NavLink to="/projects" className={navLinkClass}>
              Projects
            </NavLink>
            <NavLink to="/contact" className={navLinkClass}>
              Contact
            </NavLink>
          </nav>

          {/* MOBILE TOGGLE */}
          <button
            onClick={() => setIsOpen(!isOpen)}
            className="md:hidden text-gray-300"
          >
            <svg
              className="w-7 h-7"
              fill="none"
              stroke="currentColor"
              strokeWidth="2"
              viewBox="0 0 24 24"
            >
              {isOpen ? (
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M6 18L18 6M6 6l12 12"
                />
              ) : (
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M4 6h16M4 12h16M4 18h16"
                />
              )}
            </svg>
          </button>
        </div>
      </div>

      {/* MOBILE MENU */}
      {isOpen && (
        <div className="md:hidden mt-3 mx-6 rounded-2xl bg-black/90 backdrop-blur-xl border border-white/10">
          <nav className="flex flex-col gap-5 px-6 py-6 text-gray-300 font-medium">
            <NavLink to="/" onClick={() => setIsOpen(false)}>
              Home
            </NavLink>
            <NavLink to="/education" onClick={() => setIsOpen(false)}>
              Education
            </NavLink>
            <NavLink to="/projects" onClick={() => setIsOpen(false)}>
              Projects
            </NavLink>
            <NavLink to="/contact" onClick={() => setIsOpen(false)}>
              Contact
            </NavLink>
          </nav>
        </div>
      )}
    </header>
  );
};

export default Header;
