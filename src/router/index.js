// router.js
import { createRouter, createWebHashHistory } from "vue-router";

// 懒加载，需要webpack里的插件dynamic-import-webpack配置动态import，以后的es几也会写入

const home = () => import('../views/home.vue');
const alipay = () => import('../views/alipay/alipay.vue');
const auth = () => import('../views/auth/auth.vue');
export const routes = [
    {
      path: '/',
      name: 'home',
      component: home,
      meta: {title: '公共服务'}
    },
    {
      path: '/alipay',
      name: 'alipay',
      component: alipay,
      meta: {title: '公共服务'}
    },
    {
      path: '/auth',
      name: 'auth',
      component: auth,
      meta: {title: '权限管理',keepAlive: true}
    }
]

export const router = createRouter({
  history: createWebHashHistory(),
  routes,
});
