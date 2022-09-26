
import { createApp } from 'vue'

import ElementPlus from 'element-plus'
import 'element-plus/dist/index.css'

import App from './app.vue'
import store from './store'
import { router } from './router'

import direct from "./directive/bgcolor";


const app = createApp(App);
//app.config.globalProperties.$http = () => {}

app.use(router)
app.use(ElementPlus)
app.mount('#app')
direct(app)
