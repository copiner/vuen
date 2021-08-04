
import { createApp } from 'vue'
import App from './app.vue'
// import store from './store'
import router from './router'


import direct from "./directive/bgcolor";

const render = () =>{
  const app = createApp(App).use(router);
  direct(app);
  app.mount('#app');
}

render()
