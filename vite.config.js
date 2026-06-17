import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";

export default defineConfig({
  plugins: [react()],
  server: {
    host: "0.0.0.0",
    allowedHosts: [
      "solar-tree-ui-production.up.railway.app",
      "chen0512a.website",
      "www.chen0512a.website",
    ],
  },
  preview: {
    host: "0.0.0.0",
    allowedHosts: [
      "solar-tree-ui-production.up.railway.app",
      "chen0512a.website",
      "www.chen0512a.website",
    ],
  },
});