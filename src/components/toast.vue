<!-- 底部tabbar -->
<template>
  <van-tabbar v-model="active" replace @change="changeBar" inactive-color="#888888" active-color="#3049c0">

    <van-tabbar-item>
      <span>首页</span>
      <template #icon="props">
        <img :src="props.active ? icon.homeActive : icon.home" />
      </template>
    </van-tabbar-item>
    <van-tabbar-item>
      <span>服务</span>
      <template #icon="props">
        <img :src="props.active ? icon.waitActive : icon.wait" />
      </template>
    </van-tabbar-item>
    <van-tabbar-item>
      <span>我的</span>
      <template #icon="props">
        <img :src="props.active ? icon.userActive : icon.user" />
      </template>
    </van-tabbar-item>
    <!--
    <van-tabbar-item icon="home-o">标签</van-tabbar-item>
    <van-tabbar-item icon="friends-o">标签</van-tabbar-item>
    <van-tabbar-item icon="setting-o">标签</van-tabbar-item>
    -->
  </van-tabbar>
</template>

<script>
import home from "../assets/images/home.png"
import homeActive from "../assets/images/home_active.png"
import wait from "../assets/images/wait.png"
import waitActive from "../assets/images/wait_active.png"
import user from "../assets/images/user.png"
import userActive from "../assets/images/user_active.png"

import { Tabbar, TabbarItem, Toast } from 'vant';
export default {
  name:'Tabbar',
  components: {
    [Tabbar.name]:Tabbar,
    [TabbarItem.name]:TabbarItem,
    [Toast.name]:Toast
  },
  data() {
    return {
      active:0,
      icon: {
        home: home,
        homeActive: homeActive,
        wait: wait,
        waitActive: waitActive,
        user: user,
        userActive: userActive
      }
    };
  },
  // watch:{
  //   active:{
  //     //immediate: true,
  //     handler:function(val){
  //       //console.log(val)
  //       return val
  //     }
  //   }
  // },
  methods:{
    //tab切换
    changeBar:function(index){

      if(index == "1"){
        Toast('敬请期待！');
        // this.$router.push("/wait")
        if(this.$route.path == '/index'){
          this.active = 0;
        }
        if(this.$route.path == '/user'){
          this.active = 2;
        }
        return;
      }

      if(index == "2"){
        this.$router.push("/user")
      }

      if(index == "0"){
        this.$router.push("/index")
      }
      this.active = index;


      //console.log(this.$route.path)

    }

  },
  mounted(){

    if(this.$route.path == '/index'){
      this.active = 0;
    }
    if(this.$route.path == '/wait'){
      this.active = 1;
    }
    if(this.$route.path == '/user'){
      this.active = 2;
    }
    //this.active = index;


    //console.log(this.$route.path)
  }
};
</script>
