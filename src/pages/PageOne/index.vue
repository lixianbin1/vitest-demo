<template>
  <div class="head">
    <h1>Page One</h1>
    <h2>{{data}}</h2>
  </div>
</template>

<script lang="ts" setup>
import { HomeJson } from '@/apis';

const data = ref({})
const goHome = () => {
  console.log(HomeJson)
  HomeJson().then(json=>{
    data.value = json
    console.log(data)
  }).catch(err=>{
    console.log(err)
  })
}

goHome()
</script>

<style scoped>

</style>