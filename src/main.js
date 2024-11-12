import { createApp } from 'vue'

import App from './App.vue'
import router from './router'

const app = createApp(App)
app.use(router)
app.mount('#app')
// createApp(App).mount('#app')

// eslint-disable-next-line no-unused-vars
import Mock from './mock' // 引入mock模拟数据
