import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";
import tsconfigPaths from "vite-tsconfig-paths";
import { resolve } from "path";
import { readFileSync, existsSync } from "fs";
import { fileURLToPath } from "url";

const __dirname = resolve(fileURLToPath(import.meta.url), "..");

function ssrAssetPlugin() {
  let manifest: Record<string, { file: string }> = {};

  return {
    name: "ssr-asset-resolve",
    enforce: "pre" as const,
    buildStart() {
      const manifestPath = resolve(__dirname, "dist/.vite/manifest.json");
      if (existsSync(manifestPath)) {
        manifest = JSON.parse(readFileSync(manifestPath, "utf-8"));
      }
    },
    load(id: string) {
      if (/\.(jpg|jpeg|png|gif|webp|svg|ico|avif)$/.test(id)) {
        // Convert absolute path to project-root-relative (e.g. "src/assets/foo.jpg")
        const rel = id.startsWith(__dirname)
          ? id.slice(__dirname.length + 1).replace(/\\/g, "/")
          : id.replace(/\\/g, "/");
        const entry = manifest[rel];
        return entry ? `export default "/${entry.file}"` : `export default ""`;
      }
    },
  };
}

export default defineConfig({
  base: "/",
  plugins: [ssrAssetPlugin(), react(), tsconfigPaths()],
  build: {
    ssr: true,
    outDir: "dist/server",
    rollupOptions: {
      input: resolve(__dirname, "src/entry-server.tsx"),
    },
  },
});
