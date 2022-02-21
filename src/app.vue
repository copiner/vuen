<template>
    <router-view v-slot="{ Component }">
      <keep-alive :include=[3,4,5] :max="10">
        <component :is="Component" :key="Component" v-if="$route.meta.keepAlive" />
      </keep-alive>
      <component :is="Component" v-if="!$route.meta.keepAlive" />
    </router-view>
</template>
<script>

export default {
    name: 'app',
    mounted(){

    },
    created(){

    },
    methods:{

    }
}

</script>
<style>
#app {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  font-size:16px;
}
</style>
