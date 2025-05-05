
import { defineConfig } from "vite";
import react from "@vitejs/plugin-react-swc";
import path from "path";
import tailwindcss from 'tailwindcss';
import autoprefixer from 'autoprefixer';

// https://vitejs.dev/config/
export default defineConfig(({ mode }) => ({
  server: {
    host: "::",
    port: 8080,
  },
  plugins: [
    react(),
    // Only use the componentTagger in development mode
    mode === 'development' &&
    // @ts-ignore - This is a development plugin
    (() => {
      try {
        return require("lovable-tagger").componentTagger();
      } catch (e) {
        // Ignore if the plugin is not found (for production builds)
        return null;
      }
    })(),
  ].filter(Boolean),
  resolve: {
    alias: {
      "@": path.resolve(__dirname, "./src"),
    },
  },
  // Make sure CSS is processed correctly
  css: {
    postcss: {
      plugins: [
        tailwindcss,
        autoprefixer,
      ],
    },
  },
}));
