
import { createApp } from 'vue'
import App from './app.vue'
// import store from './store'
import { router } from './router'

import direct from "./directive/bgcolor";


const app = createApp(App);
//app.config.globalProperties.$http = () => {}

app.use(router);
app.mount('#app');
direct(app);
