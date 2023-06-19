import { createRouter, createWebHistory } from 'vue-router'
import Home from './views/Home.vue'
import Contact from './views/Contact.vue'
import ContactForm from './views/ContactForm.vue'
import Msg from './views/Msg.vue'

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
]

export const router = createRouter({
  routes,
  history: createWebHistory(),
  // base: process.env.BASE_URL,
})
