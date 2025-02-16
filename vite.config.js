import { defineConfig } from "vite";
import vue from "@vitejs/plugin-vue";

export default defineConfig({
  plugins: [vue()],
  server: {
    // allowedHosts: ["kr39t8-5173.csb.app"], // เพิ่มโฮสต์ที่อนุญาต
    port: 1111, 
    strictPort: true,
  },
  
});
