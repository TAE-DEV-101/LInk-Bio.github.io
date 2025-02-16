import { createRouter, createWebHistory } from "vue-router";

const routes = [
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
  },
];

const router = createRouter({
  //   history: createWebHistory(process.env.BASE_URL),
  history: createWebHistory(),
  routes,
});

export default router;
