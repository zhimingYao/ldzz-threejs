<template>
  <div class="demo">
    <div class="myCanvas"></div>
  </div>
</template>

<script setup>
// const canvas = reactive({})
const init = async () => {
  console.log('初始化');
  var canvas = await document.getElementById('myCanvas');
  console.log(canvas);
  // var gl = canvas.getContext('webgl');
  // gl.getParameter(gl.LINE_WIDTH);
};

onMounted(() => {
  console.log(14314);
  init();
});
</script>

<style></style>
