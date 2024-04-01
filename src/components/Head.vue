<script setup lang="ts">
const { t } = useI18n()

const goToUser = () => {

}
const ToPage = () => {

}
</script>

<template>
  <div style="flex:7" flex items-center>
    <h1 class="title" font-bold text-center @click="ToPage">
      {{ t('login.Welcome') }}
    </h1>
  </div>
  <div style="flex:3" class="user">
    <el-button class="userinfo" link @click="goToUser">
      <el-icon i-carbon:user-avatar />
    </el-button>
    <el-button class="signout" type="danger" link @click="SignOut">
      <el-icon i-carbon:logout />
    </el-button>
    <LanguageButton />
  </div>
</template>

<style scoped lang="scss">
.user{
  width: 200px;
  height: 60px;
  display: flex;
  justify-content: flex-end;
  align-items: center;
  border-bottom: 1px solid var(--border-color);
  background-image: radial-gradient(transparent 1px,var(--bg-color) 1px);
  .userinfo,.signout{font-size: 24px;}
  .signout{margin-left: 10px;}
}
h1.title{
  cursor: pointer;
  font-size: 28px;
  margin-left: 15px;
}
@media (max-width:1366px) and (min-width:1024px){
  .title{
    line-height: 16px;
    font-size: 20px!important;
    text-align: center;
  }
}

@media (max-width:1024px){
  .title{
    line-height: 16px;
    font-size: 20px!important;
    text-align: center;
  }
}
.pointer{cursor: pointer;}
</style>
