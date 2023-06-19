import { createApp } from 'vue'
import './assets/styles/main.scss'

import { router } from './router.js'
import { store } from './store/store.js'

import App from './App.vue'

const app = createApp(App)
app.use(router)
app.use(store)

app.mount('#app')
