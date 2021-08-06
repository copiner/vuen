### alive
```
<template>
  <div id="app">
    <router-view v-slot="{ Component }">
      <keep-alive>
        <component :is="Component" v-if="$route.meta.keepAlive" />
      </keep-alive>
        <component :is="Component"  v-if="!$route.meta.keepAlive"/>
    </router-view>
  </div>
</template>
```
keepalive是Vue的内置组件，作用是将组件缓存在内存当中，防止重复渲染DOM，
属于消耗内存获取速度。
常用的用法是将组件或者路由缓存

通常我们可以配置整个页面缓存或只让特定的某个组件保持缓存信息，
配置了keepalive的路由或者组件，只会在页面初始化的时候执行created->mounted生命周期，
第二次及以后再进入该页面将不会执行改生命周期，而是会去读取缓存信息

### router配置缓存
这里component是vue中的特殊组件，:is是用来绑定指定组件，这里是与路由对应的页面绑定

在对应的路由上添加meta属性来设置页面是否要使用缓存:
```javascript
{
  path: "/auth",
   name: "auth",
   meta: {
       keepAlive: true //设置页面是否需要使用缓存
   },
   component: () => import("./views/auth/auth.vue")
},
```
但是有些场景需要做复杂处理，
比如说页面部分信息不需要读缓存，每次进入都需要进行处理，这个时候我们就可以使用activated生命周期来解决页面部分刷新问题


先了解vue的生命周期，被keepAlive包裹的组件和页面，
页面进入时执行的生命周期为：created->mounted->activated
其中created->mounted是页面第一次进入才会执行，activated生命周期在页面每次进入都会执行，
特属于keepAlive的一个生命周期，所以我们把页面每次进来要进行的操作放入该生命周期即可.

动态设置路由keepAlive属性:
有些时候我们用完了keepalive缓存之后，想让页面不再保持缓存，
或者设置下一个页面keepalive，也这个时候我们可以改变meta的keepAlive值来去除页面缓存，
使用beforeRouteEnter、beforeRouteUpdate、beforeRouteLeave，使用方式如下：

```javascript
// to为即将跳转的路由，from为上一个页面路由
beforeRouteLeave(to, from,+ next) {
    // 设置下一个路由的 meta
    to.meta.keepAlive = false;
    next();
}
```

```javascript
export default {
    name: 'app',
    mounted(){

    },
    created(){

    },
    activated(){

    },
    methods:{

    }
}
```

### 组件配置缓存
当用于App.vue时，所有的路由对应的页面为项目所对应的组件，使用方法如下：
在keep-alive组件上使用include或exclude属性，如下：使用include
代表将缓存name为testKA的组件
```
// APP.vue文件，将页面作为组件缓存
<router-view v-slot="{ Component }">
  <keep-alive include="testKA">
    <component :is="Component"/>
  </keep-alive>
</router-view>

```
在router对应的页面中，需要设置name属性，如下：
```javascript
export default {
    name:'testKA',// keep-alive中include属性匹配组件name
    data() {return {}},
    activated() {
        // keepalive缓存的页面每次进入都会进行的生命周期
    },
}

```
include用法还有如下:
```javascript

<!-- 逗号分隔字符串 -->
<keep-alive include="a,b">
  <component :is="view"></component>
</keep-alive>

<!-- 正则表达式 (使用 `v-bind`) -->
<keep-alive :include="/a|b/">
  <component :is="view"></component>
</keep-alive>

<!-- 数组 (使用 `v-bind`) -->
<keep-alive :include="['a', 'b']">
  <component :is="view"></component>
</keep-alive>

```
exclude用法与include用法相同，代表不被缓存的组件。
此外，keep-alive还有一个max属性，代表缓存组件最大数量，一旦这个数字达到了，
在新实例被创建之前，已缓存组件中最久没有被访问的实例会被销毁掉
```javascript
<keep-alive :max="10">
  <component :is="view"></component>
</keep-alive>
```
