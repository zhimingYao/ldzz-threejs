<template>
  <div class="demo">
    <div id="myCanvas"></div>
  </div>
</template>

<script setup>
// const canvas = reactive({})
const init = () => {
  console.log('初始化');
};

onMounted(() => {
  init();
});
</script>

<style></style>
