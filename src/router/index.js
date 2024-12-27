import Home from '@/views/Home/Home.vue'

import Landing from '@/views/Landing/Landing.vue'
import Index from '@/views/Index/MainPage.vue'
import Essay from '@/views/Essay/Essay.vue'
import Calendar from '@/views/DynamicCalendar/DynamicCalendar.vue'
import MessageWall from '@/views/MessageWall/MessageWall.vue'

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
  {
    path: '/Essay/:slug',
    component: Essay,
    props: true,
  },
  {
    path: '/DynamicCalendar',
    component: Calendar,
  },
  {
    path: '/MessageWall',
    component:MessageWall
  },
]
const router = createRouter({
  history: createWebHashHistory(),
  routes,
})

export default router
