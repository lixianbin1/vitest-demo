<template>
<div id="login">
  <el-header class="header" flex items-center>
    <h1 class="title" flex-1 text-18px font-800>
      {{ t('login.Welcome') }}
    </h1>
    <div class="lang" flex flex-1 justify-end>
      <LanguageButton />
    </div>
  </el-header>
  <el-main class="main">
    <div v-loading="state.loadon" class="login_box">
      <el-form ref="loginRef" :model="state.form" :rules="useRules">
        <el-form-item>
          <h2 class="title-login" text-20px>
            {{ t('login.Account') }}
          </h2>
        </el-form-item>
        <el-form-item prop="ptCode">
          <span>{{ t('login.Credit') }}</span>
          <el-input v-model="state.form.ptCode" ref="refInput" clearable
            @blur="state.form.ptCode = ($event.target as any).value.trim().toLocaleUpperCase()" @keyup.enter="onLogin">
            <template #prefix>
              <el-icon i-carbon:user-avatar />
            </template>
          </el-input>
        </el-form-item>
        <el-form-item prop="username">
          <span>{{ t('login.UserID') }}</span>
          <el-input v-model="state.form.username" clearable @keyup.enter="onLogin">
            <template #prefix>
              <el-icon i-carbon:user-avatar />
            </template>
          </el-input>
        </el-form-item>
        <el-form-item prop="password">
          <span>{{ t('login.Password') }}</span>
          <el-input v-model="state.form.password" type="password" clearable show-password @keyup.enter="onLogin">
            <template #prefix>
              <el-icon i-carbon:password />
            </template>
          </el-input>
        </el-form-item>
        <el-form-item style="margin-top: 30px;">
          <div style="text-align: center;width: 100%;">
            <el-button type="primary" class="submit-btn bthColor" plain @click="onLogin">
              {{ t('login.Login') }}
            </el-button>
          </div>
        </el-form-item>
        <el-form-item>
          <div class="footerTitle footerTitleTwo">
            <p>{{ VITE_version }}</p>
          </div>
        </el-form-item>
      </el-form>
    </div>
  </el-main>
  <el-footer style="align-items: center;display: flex;">
    <span class="footerTitle">{{ t('login.FontTitle') }}</span>
  </el-footer>
</div>
</template>
<script setup lang="ts">
import {LoginData} from '@/common/InstanceType'
import { Userlogin } from '@/apis'
const router = useRouter()
const { t } = useI18n()
const VITE_version = ref('v2024.03.25')
const state = reactive({
  // 判断登录还是重置密码状态
  loadon: false,
  type: 'login', // login or change
  form: { // 登录请求数据
    ptCode: 'FF038',
    username: 'Admin',
    password: '123456',
  },
})
const useRules = reactive({
  ptCode: [
    { required: true, message: 'Please enter participant code', trigger: 'blur' },
  ],
  username: [
    { required: true, message: 'Please enter user ID', trigger: 'blur' },
  ],
})

// 登录账户
const loginRef = ref();
const userInfo = useUserInfo()
const onLogin = async () => {
  Userlogin().then((data:LoginData)=>{
    sessionStorage.setItem('userToken',data.userToken)
    userInfo.value = data
    router.push('./')
  })
}

</script>
<style scoped lang="scss">
#login{
  height: 100%;
  display: flex;
  flex-direction: column;
  .main{
    background-image:url("/src/assets/images/background.jpg");
    background-size: cover;
    position: relative;
    .login_box{
      box-sizing: border-box;
      width: 490px;
      position: absolute;
      top: 45%;
      right: 110px;
      margin-top: -200px;
      border: 1px solid #ccc;
      padding: 50px 50px 20px;
      background: #fff;
      border-bottom: 9px solid #0168da;
    }
    .title-login {
      color: #3084D7;
      font-size: 30px;
      font-family: DM Sans;
      font-style: normal;
      font-weight: 400;
      line-height: normal;
    }
    .submit-btn{
      font-size: 20px;
      width: 201px;
      height: 47px;
      flex-shrink: 0;
      --el-button-bg-color: #fff !important;
    }
  }
}
.footerTitle{
  line-height: 12px;
  display: inline-block;
  font-size: 12px;
  .link{
    cursor: pointer;
    color: #2d5afd;
  }
  width: 100%;
  color: #000;
  font-family: DM Sans;
  font-style: normal;
  font-weight: 400;
  line-height: normal;
}
.footerTitleTwo{
  line-height: 12px;
  display: inline-block;
  font-size: 12px;
  transform: scale(0.92);
  text-align: left;
  width: 100%;
  color: #000;
  font-family: DM Sans;
  font-style: normal;
  font-weight: 400;
  line-height: normal;
  text-align: center;
}
</style>

<route lang="yaml">
  meta:
    layout: login
</route>