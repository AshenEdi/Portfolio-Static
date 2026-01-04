import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";
import tailwindcss from "@tailwindcss/vite";

export default defineConfig({
  plugins: [tailwindcss(), react()],
  base: "/Portfolio-Static/",
  build: {
    outDir: "docs",
    emptyOutDir: true,
  },
});
