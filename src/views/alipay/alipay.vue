<template>
    <div class="alipay-content">
      <h1>支付宝转账用户信息录入</h1>
      <div class="alipay-item">
        <label for="name">姓名:</label>
        <input v-model="info.name" name="name" type="text"/>
      </div>
      <div class="alipay-item">
        <label for="idno">身份证号:</label>
        <input v-model="info.idNo" name="idNo" type="text"/>
      </div>
      <div class="alipay-item">
        <label for="mobile">手机号:</label>
        <input v-model="info.mobile" name="mobile" type="text"/>
      </div>
      <div class="alipay-item">
        <label for="aliId">支付宝帐号:</label>
        <input v-model="info.aliId" name="aliId" type="text"/>
      </div>
      <div class="alipay-item">
        <label for="aliId1">再次确认帐号:</label>
        <input v-model="info.aliId1" name="aliId1" type="text"/>
      </div>
      <div class="alipay-item" v-on:click="subacc">
          <button>上传</button>
      </div>
    </div>
</template>

<script>
import AlipayServer from '../../service/alipay';
import Util from '../../assets/js/util';
import { Toast  } from 'vant';

export default {
    name: 'alipay',
    components: {
      [Toast.name]:Toast
    },
    data () {
        return {
          name:"alipay",
          info:{
            name:"",
            idNo:"",
            cardNo:"",
            mobile:"",
            aliId:"",
            aliId1:""
          }
        }
    },
    mounted(){

    },
    created(){

    },
    methods:{
      subacc(){

        let data = this.info;

        if(!Util.validName(data.name)){
          Toast("姓名输入有误！")
          return false;
        }

        if(!Util.validMobile(data.mobile)){
          Toast("手机号输入有误！")
          return false;
        }

        if(!Util.validCertNo(data.idNo)){
          Toast("身份证号输入有误！")
          return false;
        }

        if(!data.aliId || data.aliId.length>50){
          Toast("支付宝账户号输入有误！")
          return false;
        }

        if(data.aliId != data.aliId1){
          Toast("支付宝账户号两次输入不一致！")
          return false;
        }

        AlipayServer.subacc(data).then(result=>{
          console.log(result)
          if(result.success == true){
            console.log(JSON.parse(result.value))
          } else {
            Toast("支付宝转账用户信息录入异常!")
          }

        })


      },
    }

}
</script>
<style scoped>
.alipay-content {
  font-size:.16rem;

  & h1{
    margin:.8rem auto;
    text-align:center;
  }

  & .alipay-item{

    width:6.8rem;
    height:1rem;
    line-height:1rem;
    margin: .05rem auto;
    text-align:center;

    & label{
      display:inline-block;
      width:1.8rem;
      font-size:.28rem;
      text-align:left;
      padding-right:.08rem;
    }
    & input{
      outline:0;
      height:.68rem;
      line-height:.68rem;
      width:4.2rem;
      font-size:.28rem;
      border-radius:.04rem;
      border:1px solid #c8cccf;
      color:#6a6f77;
    }

    & button{
      margin-top:1rem;
      width: 6.4rem;
      height: .68rem;
      line-height:.68rem;
      border-radius: .06rem;
      background: #14AD7E;
      border: none;
      font-size:.3rem;
    }
  }
}
</style>
