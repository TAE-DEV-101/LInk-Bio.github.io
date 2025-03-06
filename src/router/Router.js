import { createRouter, createWebHistory,createWebHashHistory } from "vue-router";

const routes = createRouter({
  history: createWebHashHistory(),
  routes: [
  {
    path: "/",
    name: "BIO",
    component: () => import("../views/BioLink.vue"),
  },
  {
    path: "/cmd",
    name: "CMD",
    component: () => import("../views/CMD.vue"), // โหลดแบบ Lazy
  },

  {
    path: "/empty",
    name: "empty",
    component: () => import("../views/empty.vue"),
  },
  {
    path: "/WavPack",
    name: "WavPack",
    component: () => import("../views/WavPack.vue"),
  },]
});


export default routes;
