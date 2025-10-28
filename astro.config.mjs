import { defineConfig } from "astro/config";
import tailwindcss from "@tailwindcss/vite";

// https://astro.build/config
export default defineConfig({
  vite: {
    plugins: [tailwindcss()],
  },
  redirects: {
    "/": "/v2/pages",
    "/v2": "/v2/pages",
    "/v1": "/v1/pages",
  }
});
