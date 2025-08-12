import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";
import tailwindcss from "@tailwindcss/vite";
import viteImagemin from "vite-plugin-imagemin";

// https://vite.dev/config/
export default defineConfig({
  base: "/undangandigital/",
  plugins: [
    react(),
    tailwindcss(),
    viteImagemin({
      webp: { quality: 75 },
    }),
  ],
});
