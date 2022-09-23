import { resolve } from "path";
import { defineConfig } from "vite";
import legacy from "@vitejs/plugin-legacy";

const root = resolve(__dirname, "src");
const outDir = resolve(__dirname, "dist");
const prodEnv = process.env.NODE_ENV === "production";

export default defineConfig({
  root,
  build: {
    outDir,
    emptyOutDir: true,
    sourcemap: prodEnv ? true : "inline"
  },
  mode: prodEnv ? "production" : "development",
  plugins: [
    legacy({
      targets: ["defaults", "not IE 11"]
    })
  ],

  server: {
    open: true
  },
  preview: {
    open: true
  }
});
