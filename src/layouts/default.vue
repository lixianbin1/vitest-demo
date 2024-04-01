<template>
  <div id="main">
    <el-container style="height: 100vh;min-height: 768px;">
      <el-header style="display: flex;align-items: center;">
        <Head />
      </el-header>
      <el-container>
        <Menu />
        <el-scrollbar>
          <el-main :style="screenSize">
            <RouterView />
          </el-main>
        </el-scrollbar>
      </el-container>
    </el-container>
  </div>
</template>

<script setup lang="ts">
const screenSize = reactive({
  width: '100%',
  height: `${(window.innerHeight || document.documentElement.clientHeight || document.body.clientHeight) - 60}px`,
})
onMounted(() => {
  window.onresize = () => {
    return (() => {
      screenSize.height = `${(window.innerHeight || document.documentElement.clientHeight || document.body.clientHeight) - 60}px`
    })()
  }
})
</script>
