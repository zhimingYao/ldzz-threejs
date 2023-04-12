<template>
  <div class="tree">
    <sidebarItem v-for="(item,index) in sidebarMenu" :key="index"  />
  </div>
</template>

<script setup>
import routes from '@/router/index';
const sidebarMenu = routes[0].children;
</script>

<style></style>
