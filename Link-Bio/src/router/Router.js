import { createRouter, createWebHistory } from 'vue-router';
import H from '../views/Home.vue'

const routes = [
  {
    path: '/H',
    name: 'H',
    component: H,
  },
  {
    path: '/',
    name: 'CMD',
    component: () => import('../views/CMD.vue'), // โหลดแบบ Lazy
  },
  {
    path: '/bio',
    name: 'BIO',
    component: () => import('../views/BioLink.vue'),
  },
  {
    path: '/empty',
    name: 'empty',
    component: () => import('../views/empty.vue'),
  },
  {
    path: '/wav',
    name: 'WAV',
    component: () => import('../views/WAV.vue'),
  },
  {
    path: '/WavPack',
    name: 'WavPack',
    component: () => import('../views/WavPack.vue'),
  },
];

const router = createRouter({
//   history: createWebHistory(process.env.BASE_URL),
  history: createWebHistory(),
  routes,
});

export default router;