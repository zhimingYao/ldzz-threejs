<template>
  <div class="layout-box">
    <el-row class="layout_x">
      <div class="layout-icon layout-sidebar-width">
        <el-icon :size="32">
          <i-twemoji:mirror-ball />
        </el-icon>
      </div>
      <div class="layout-top" @click="handlerSidebarShow">
        <el-icon size="20"><Fold /></el-icon>
      </div>
    </el-row>
    <el-row class="layout_x">
      <div class="layout-sidebar-left layout-sidebar-width">
        <sidebar-tree />
      </div>
      <div class="layout-main">
        <router-view></router-view>
      </div>
    </el-row>
  </div>
</template>

<script setup>
//侧边折叠展开
const isFold = ref(false);
provide('isFold', isFold);
// 路由选择
const checkRoute = ref('/home');
provide('checkRoute', checkRoute);
// 展开缩小侧边栏
const handlerSidebarShow = () => {
  const w = [...document.getElementsByClassName('layout-sidebar-width')];
  if (w[0].offsetWidth === 250) {
    w.forEach((element) => {
      element.style.width = '60px';
    });
    isFold.value = true;
  } else {
    w.forEach((element) => {
      element.style.width = '250px';
    });
    isFold.value = false;
  }
};
</script>

<style lang="scss">
@import '@/assets/scss/layout.scss';
</style>
