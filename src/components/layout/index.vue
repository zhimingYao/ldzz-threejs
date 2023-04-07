<template>
  <div class="layout-box">
    <el-row class="layout_x">
      <div class="layout-icon layout-sidebar-width">
        <el-icon :size="32">
          <i-twemoji:mirror-ball />
        </el-icon>
      </div>
      <div class="layout-top">
        <el-icon><Menu /></el-icon>
      </div>
    </el-row>
    <el-row class="layout_x">
      <div class="layout-sidebar-left layout-sidebar-width">
        <router-link to="">
          <sidebarItem />
        </router-link>
      </div>
      <div class="layout-main">
        <router-view></router-view>
      </div>
    </el-row>
  </div>
</template>

<script setup>
import sidebarItem from './sidebarItem.vue';
</script>

<style lang="scss">
@import '@/assets/scss/layout.scss';
</style>
