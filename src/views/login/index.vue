<template>
    <div class="login-container">
      <!-- 背景和系统名 -->

      <p class="login-sysname">
          发撒旦发生的发<span class="block f16 mt-10">标题</span>
      </p>
      <!-- 登录框 -->
      <el-form ref="loginForm" :model="loginForm" :rules="rules" class="login-form" autocomplete="on" label-position="left">
        <div class="title-container"><h3 class="title">标题</h3></div>
        <el-form-item prop="username">
          <span class="svg-container"><svg-icon icon-class="user" /></span>
          <el-input
            v-model="loginForm.username"
            placeholder="请输入用户名"
            name="username"
            type="text"
            autocomplete="on"
            maxlength="16"
          />
        </el-form-item>
        <el-tooltip v-model="capsTooltip" content="大写锁定已打开" placement="right" manual>
          <el-form-item prop="password">
            <span class="svg-container"><svg-icon icon-class="password" /></span>
            <el-input
              :key="passwordType"
              ref="password"
              v-model="loginForm.password"
              :type="passwordType"
              placeholder="请输入用户密码"
              name="password"
              autocomplete="on"
              @keyup.native="checkCapslock"
              @blur="capsTooltip = false"
              maxlength="32"
            />
            <span class="show-pwd" @click="showPwd">
              <svg-icon :icon-class="passwordType === 'password' ? 'eye' : 'eye-open'" />
            </span>
          </el-form-item>
        </el-tooltip>

        <el-button :loading="loading" type="primary" @click="handleLogin">登录</el-button>
      </el-form>
    </div>
  </template>

<script>
   import {
  defineComponent,
  getCurrentInstance,
  reactive,
  toRefs,
  ref,
  computed,
} from 'vue'
// import { Login } from '@/api/login'
import { useStore } from 'vuex'
import { useRouter, useRoute } from 'vue-router'

export default defineComponent({
  name: 'login',
  setup() {
    const state = reactive({
      loginForm: {
        username: 'admin',
        password: '123456',
      },
      rules: {
        username: [
          { required: true, message: '请输入用户名', trigger: 'blur' },
        ],
        password: [
          { required: true, message: '请输入密码', trigger: 'blur' },
          {
            min: 6,
            max: 12,
            message: '长度在 6 到 12 个字符',
            trigger: 'blur',
          },
        ],
      },
    })


    return {
      ...toRefs(state),
    }
  },
  methods:{
    handleLogin(){
        this.$router.push('/home')
    }
  }
})
</script>

<style lang="css" scoped>

--bg:#02ad9f;
--test-color:#c9f0ec;
--dark-gray:#889aa4;

.login-container {
  height: 100vh;
  width: 100vw;
  overflow: hidden;

    & .login-sysname{
        margin-top:16vh;
        margin-bottom:6vh;
        text-align: center;
        color: var(--test-color);
        font-size: 36px;
        font-weight: 700;
    }
    & .login-form {
      text-align: center;
      width: 480px;
      padding: 30px 35px;
      margin: 0 auto;
      background: #fff;
      box-shadow: 0 0 8px #e0f6f4;
      border-radius:8px;
      overflow: hidden;
    }
    & .svg-container {
      padding: 6px 5px 6px 15px;
      color: var(--dark-gray);
      vertical-align: middle;
      width: 30px;
      display: inline-block;
    }

    & .title-container {

      & .title {
        font-size: 22px;
        color: var(--bg);
        margin: 0px auto 30px auto;
        text-align: center;
        font-weight: 400;
      }
    }

    & .show-pwd {
      /*
      position: absolute;
      right: 10px;
      top: 7px;
      font-size: 16px;
      color: var(--dark-gray);
      cursor: pointer;
      user-select: none;
      */
    }
}
</style>
