<script setup lang="ts">
const props = defineProps<{ data: any }>()
const { t } = useI18n()
</script>

<template>
  <el-sub-menu v-if="props.data.children" :index="props.data.index">
    <template #title>
      <el-icon v-if="props.data.icon" :class="props.data.icon" />
      <span>{{ t(props.data.title) }}</span>
    </template>
    <template v-for="item in props.data.children">
      <MenuItem :data="item" />
    </template>
    <el-menu-item :index="props.data.index" style="display: none;" />
  </el-sub-menu>
  <el-menu-item v-else :index="props.data.index">
    <el-icon v-if="props.data.icon" :class="props.data.icon" />
    <span>{{ t(props.data.title) }}</span>
  </el-menu-item>
</template>
