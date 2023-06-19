import { createRouter, createWebHashHistory } from 'vue-router'
import Home from './views/Home.vue'
const routes = [
  {
    path: '/',
    name: 'Home',
    component: Home,
  },
]

export const router = createRouter({
  routes,
  history: createWebHashHistory(),
  // base: process.env.BASE_URL,
})
