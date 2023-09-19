<template>
  <div class="demo">
    <div :class="`flex_box_${item} box`" v-for="item in 6" :key="item">
      <d-box></d-box>
    </div>
  </div>
</template>

<script setup></script>

<style lang="scss" scoped>
.demo {
  width: 100%;
  height: 100%;
}
.box {
  width: 300px;
  height: 300px;
}
</style>
