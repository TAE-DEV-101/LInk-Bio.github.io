import { defineConfig } from "vite";
import vue from "@vitejs/plugin-vue";

export default defineConfig({
  plugins: [vue()],
  // server: {
  //   // allowedHosts: ["kr39t8-5173.csb.app"], // เพิ่มโฮสต์ที่อนุญาต
  //   port: 8899, 
  //   strictPort: true,
  // },
  base: "./LInk-Bio.github.io/",
  build: {
    rollupOptions: {
      input: "public/index.html", // ✅ ระบุ entry file ที่ถูกต้อง
    },
  },
});