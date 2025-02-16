import { defineConfig } from "vite";
import vue from "@vitejs/plugin-vue";

export default defineConfig({
  base: "/LInk-Bio.github.io/",
  plugins: [vue()],
  // server: {
  //   // allowedHosts: ["kr39t8-5173.csb.app"], // เพิ่มโฮสต์ที่อนุญาต
  //   port: 8899, 
  //   strictPort: true,
  // },
  build: {
    rollupOptions: {
      input: "index.html", // ✅ ระบุ entry file ที่ถูกต้อง
    },
  },
});