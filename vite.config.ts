/// <reference types="vitest" />
import { defineConfig } from "vite";
import react from "@vitejs/plugin-react-swc";
import tsconfigPaths from "vite-tsconfig-paths";
import Pages from "vite-plugin-pages";

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react(), tsconfigPaths(), Pages()],
  test: {
    globals: true,
  },

  resolve: {
    alias: {
      "@/": "src",
    },
  },
});
