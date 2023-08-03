
import { createApp } from 'vue'
import App from './App.vue'
import router from './router'
import pinia from './stores'

import './styles/main.scss'
import 'virtual:svg-icons-register'
import Vant from 'vant'
import 'vant/lib/index.css';

const app = createApp(App)

app.use(router)
app.use(pinia)
app.use(Vant)
app.mount('#app')
