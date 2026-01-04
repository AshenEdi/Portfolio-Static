import { useState } from "react";
import Header from "../Components/Header";

/* ================= STATIC DATA ================= */
const STATIC_EDUCATION = [
  {
    _id: "edu1",
    degree: "BSc (Hons) in Information Technology",
    institute: "Undergraduate – 3rd Year",
    duration: "2022 – Present",
    description:
      "Focused on software development, databases, web technologies, and system design.",
  },
];

const STATIC_CERTIFICATIONS = [
  {
    _id: "cert1",
    title: "Frontend Development with React",
    provider: "Coursera",
    year: "2024",
    description:
      "Hands-on training in React fundamentals, hooks, component architecture, and state management.",
  },
  {
    _id: "cert2",
    title: "Java Programming",
    provider: "Oracle Academy",
    year: "2023",
    description:
      "Covered object-oriented programming concepts, Java SE, and backend fundamentals.",
  },
];

const Education = () => {
  /* ================= STATIC STATE ================= */
  const [educations] = useState(STATIC_EDUCATION);
  const [certifications] = useState(STATIC_CERTIFICATIONS);
  const loading = false;

  return (
    <section className="min-h-screen w-screen bg-linear-to-br from-black via-slate-900 to-black text-white">
      <Header />

      <div className="max-w-6xl mx-auto px-6 py-16">
        {/* ================= TITLE ================= */}
        <h1 className="text-2xl md:text-3xl font-bold text-left mb-16">
          Education
        </h1>

        {/* ================= LOADING ================= */}
        {loading && (
          <p className="text-center text-gray-400">
            Loading education details...
          </p>
        )}

        {/* ================= EDUCATION SECTION ================= */}
        {!loading && (
          <div className="grid grid-cols-1 md:grid-cols-2 gap-10 mb-24">
            {educations.map((edu) => (
              <div
                key={edu._id}
                className="bg-slate-800/40 backdrop-blur-md border border-slate-700 rounded-2xl p-8 hover:scale-[1.02]   hover:border-indigo-500 transition"
              >
                <h2 className="text-2xl font-semibold text-indigo-400 mb-2">
                  {edu.degree}
                </h2>

                <p className="text-slate-300 font-medium">{edu.institute}</p>

                <p className="text-sm text-slate-400 mb-4">{edu.duration}</p>

                <p className="text-slate-300 leading-relaxed">
                  {edu.description}
                </p>
              </div>
            ))}

            {educations.length === 0 && (
              <p className="text-gray-400">No education details added yet.</p>
            )}
          </div>
        )}

        {/* ================= CERTIFICATIONS ================= */}
        {!loading && (
          <>
            <h2 className="text-3xl md:text-4xl font-bold text-left mb-12">
              Certifications
            </h2>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              {certifications.map((cert) => (
                <div
                  key={cert._id}
                  className="bg-slate-800/30 border border-slate-700 rounded-xl p-6 hover:border-indigo-500  hover:scale-[1.02] transition"
                >
                  <h3 className="text-xl font-semibold text-indigo-400 mb-1">
                    {cert.title}
                  </h3>

                  <p className="text-slate-300 text-sm">
                    {cert.provider} • {cert.year}
                  </p>

                  {cert.description && (
                    <p className="text-slate-400 mt-3 text-sm leading-relaxed">
                      {cert.description}
                    </p>
                  )}
                </div>
              ))}

              {certifications.length === 0 && (
                <p className="text-gray-400">No certifications added yet.</p>
              )}
            </div>
          </>
        )}
      </div>
    </section>
  );
};

export default Education;
