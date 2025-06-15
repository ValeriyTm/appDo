import { fileURLToPath, URL } from "url";

import { defineConfig } from "vite";
import vue from "@vitejs/plugin-vue";

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [vue()],
  resolve: {
    alias: {
      "@": fileURLToPath(new URL("./src", import.meta.url)),
    },
  },
  //Про следующий код прочитал в комментариях, без него не работал hot-reload
  server: {
    port: 3000,
    host: true,
    watch: {
      usePolling: true,
    },
  },
});
