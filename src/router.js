import { createRouter, createWebHistory } from 'vue-router'
import Home from './views/Home.vue'
import Contact from './views/Contact.vue'
import ContactForm from './views/ContactForm.vue'
import Msg from './views/Msg.vue'
import Dashboard from './views/Dashboard.vue'
const routes = [
  {
    path: '/',
    name: 'Home',
    component: Home,
  },
  {
    path: '/contact',
    name: 'Contact',
    component: Contact,
  },
  {
    path: '/form',
    name: 'ContactForm',
    component: ContactForm,
  },
  {
    path: '/msg',
    name: 'Msg',
    component: Msg,
  },
  {
    path: '/dashboard',
    name: 'dashboard',
    component: Dashboard,
  },
]

export const router = createRouter({
  routes,
  history: createWebHistory(),
  // base: process.env.BASE_URL,
})
