// router.js
import { createRouter, createWebHashHistory } from "vue-router";

// 懒加载，需要webpack里的插件dynamic-import-webpack配置动态import，以后的es几也会写入

const layout = ()=> import('../views/layout.vue');
const home = () => import('../views/home.vue');
const alipay = () => import('../views/alipay/alipay.vue');
const routes = [
  {
        path: '/',
        redirect: '/index',
        component:layout,
        meta: {title: '公共服务'},
        children:[
          {
            path: '/index',
            name: 'home',
            component: home,
            meta: {title: '公共服务'}
          },
          {
            path: '/alipay',
            name: 'alipay',
            component: alipay,
            meta: {title: '公共服务'}
          }
        ]
      },
]

const router = createRouter({
  history: createWebHashHistory(),
  routes,
});
export default router;
