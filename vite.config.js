import { fileURLToPath, URL } from "node:url";
import { defineConfig } from "vite";
import vue from "@vitejs/plugin-vue";
import svgLoader from "vite-svg-loader";

export default defineConfig({
  base: "./",
  plugins: [vue(), svgLoader()],
  build: {
    outDir: "..",
    assetsDir: "assets",
    emptyOutDir: false,
  },
  optimizeDeps: {
    include: ["swiper", "vue3-calendly"],
  },

  resolve: {
    alias: {
      "@": fileURLToPath(new URL("./src", import.meta.url)),
    },
  },
});
