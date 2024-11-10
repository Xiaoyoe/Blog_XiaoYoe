import { createRouter ,createWebHashHistory } from "vue-router";

import Index from '@/views/Index/Index.vue'
import Home from '@/views/Home/Home.vue'

const routes = [
    {
        path:'/',
        component:Index
    },
    {
        path:'/Home',
        component:Home
    }
]
const router = createRouter({
    history: createWebHashHistory(),
    routes,
})

export default router