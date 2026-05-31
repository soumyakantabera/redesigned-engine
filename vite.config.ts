import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";
import tailwindcss from "@tailwindcss/vite";
import tsconfigPaths from "vite-tsconfig-paths";
import { TanStackRouterVite } from "@tanstack/router-plugin/vite";

const basePath = process.env.VITE_BASE_PATH
  ? `/${process.env.VITE_BASE_PATH.replace(/^\/|\/$/g, "")}/`
  : "/";

export default defineConfig({
  base: basePath,
  plugins: [
    TanStackRouterVite({ quoteStyle: "double" }),
    react(),
    tailwindcss(),
    tsconfigPaths(),
  ],
  build: {
    manifest: true,
  },
  server: {
    host: "0.0.0.0",
    port: 5000,
  },
});
