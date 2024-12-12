import Home from '@/views/Home/Home.vue'

import Landing from '@/views/Landing/Landing.vue'
import Index from '@/views/Index/MainPage.vue'
import { createRouter, createWebHashHistory } from 'vue-router'

const routes = [
  {
    path: '/',
    redirect: '/index',
  },
  {
    path: '/index',
    component: Index,
  },
  {
    path: '/Home',
    component: Home,
  },
  {
    path: '/Landing',
    component: Landing
  },
]
const router = createRouter({
  history: createWebHashHistory(),
  routes,
})

export default router
