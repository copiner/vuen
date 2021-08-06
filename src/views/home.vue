<template>
    <div class="home-content">
      <router-link
        v-for="item in routes"
        v-bind:to=item.path
        v-bind:key="item.id">
        {{ item.meta.title+'/' }}
      </router-link>
    </div>
</template>

<script>
import { routes } from '../router'

export default {
    name: 'home',
    data () {
        return {
          routes:routes
        }
    },
    mounted(){
      //console.log(this.$router)
      console.log(this.routes)
    },
    created(){

    },
    methods:{
      alipay(){
        this.$router.push('/alipay');
      }
    }
}
</script>
<style scoped>
.home-content {
  font-size:16px;
  text-align:center;
}
</style>
