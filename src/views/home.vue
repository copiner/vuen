<template>
    <div class="home-content">
      公共服务
    </div>
</template>

<script>

export default {
    name: 'app',
    mounted(){
      console.log(this.$router)
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
