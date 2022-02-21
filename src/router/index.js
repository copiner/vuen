// router.js
import { createRouter, createWebHashHistory } from "vue-router";

// 懒加载，需要webpack里的插件dynamic-import-webpack配置动态import，以后的es几也会写入

const home = () => import('../views/home.vue');
const alipay = () => import('../views/alipay/alipay.vue');
const auth = () => import('../views/auth/auth.vue');
const book = () => import('../views/book/book.vue');
const tick = () => import('../views/tick/tick.vue');
const mbook = () => import('../views/book/mbook.vue');
const ess = () => import('../views/ess/ess.vue');

export const routes = [
    {
        key:1,
        path: '/',
        name: 'home',
        component: home,
        meta: {title: '公共服务'}
    },
    {
        key:2,
        path: '/alipay',
        name: 'alipay',
        component: alipay,
        meta: {title: '公共服务'}
    },
    {
        key:3,
        path: '/auth',
        name: 'auth',
        component: auth,
        meta: {title: '权限',keepAlive: true}
    },
    {
        key:4,
        path: '/book',
        name: 'book',
        component: book,
        meta: {title: '组合式',keepAlive: true},
        child:{
            path: '/book/mbook',
            name: '/book/mbook',
            component: mbook
        }
    },
    {
        key:5,
        path: '/tick',
        name: 'tick',
        component: tick,
        meta: {title: '冗余',keepAlive: true}
    },
    {
        key:6,
        path: '/ess',
        name: 'ess',
        component: ess,
        meta: {title: '基础',keepAlive: true}
    }
]

export const router = createRouter({
  history: createWebHashHistory(),
  routes,
});
