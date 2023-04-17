<template>
  <div class="demo">
    <div class="mycanvas"></div>
  </div>
</template>

<script setup>
const init = () => {
  var canvas = document.getElementById('myCanvas');
  var gl = canvas.getContext('webgl');
  gl.getParameter(gl.LINE_WIDTH);
};

onMounted(() => {
  console.log(14314);
});
</script>

<style></style>
