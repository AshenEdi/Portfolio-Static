import {
  BarChart,
  Bar,
  XAxis,
  YAxis,
  Tooltip,
  ResponsiveContainer,
} from "recharts";

const TechStackChart = ({ projects }) => {
  // Count technology usage across projects
  const techCount = {};

  projects.forEach((project) => {
    project.tech.forEach((tech) => {
      techCount[tech] = (techCount[tech] || 0) + 1;
    });
  });

  const chartData = Object.entries(techCount).map(([tech, count]) => ({
    tech,
    count,
  }));

  if (!chartData.length) return null;

  return (
    <div
      className="mb-20 p-6 md:p-8 rounded-2xl
                 bg-white/5 border border-white/10
                 backdrop-blur-xl"
    >
      <h2 className="text-2xl md:text-3xl font-bold mb-2">
        Tech Stack <span className="text-orange-500">Analytics</span>
      </h2>

      <p className="text-gray-400 text-sm mb-6 max-w-xl">
        Technology usage across all projects, generated from real project data.
      </p>

      <div className="w-full h-85">
        <ResponsiveContainer width="100%" height="100%">
          <BarChart data={chartData}>
            <XAxis dataKey="tech" stroke="#9ca3af" tick={{ fontSize: 12 }} />
            <YAxis stroke="#9ca3af" allowDecimals={false} />
            <Tooltip
              cursor={{ fill: "rgba(249,115,22,0.1)" }}
              contentStyle={{
                backgroundColor: "#020617",
                border: "1px solid rgba(255,255,255,0.1)",
                borderRadius: "8px",
                color: "#fff",
              }}
            />
            <Bar dataKey="count" fill="#6366f1" radius={[8, 8, 0, 0]} />
          </BarChart>
        </ResponsiveContainer>
      </div>
    </div>
  );
};

export default TechStackChart;
