
import { createApp } from 'vue'
import App from './app.vue'
// import store from './store'
import router from './router'

const render = () =>{
  const app = createApp(App).use(router);
  app.mount('#app');
}

render()
