import { createApp } from 'vue'
import { createPinia } from 'pinia'
import router from '@/routers/index'

import App from './App'

const app = createApp(App)
app.use(createPinia())
app.use(router).mount('#app')
