import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";
import { fileURLToPath, URL } from "url";

export default defineConfig({
  resolve: {
    alias: {
      find: "@",
      replacement: fileURLToPath(new URL("./src", import.meta.url)),
    },
  },
  plugins: [react()],
  server: {
    host: "0.0.0.0",
    watch: {
      usePolling: true,
    },
  },
});
