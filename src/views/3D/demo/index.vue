<template>
  <div class="demo"></div>
</template>

<script setup>
const myCanvas = ref();
const tip = ref(['抱歉，您的浏览器不支持 canvas 元素（这些内容将会在不支持<canvas>元素的浏览器或是禁用了 JavaScript 的浏览器内渲染并展现）']);
const init = () => {
  const ele = document.getElementsByClassName('demo')[0];
  let width = ele.clientWidth;
  let height = ele.clientHeight;
  let myCanvas = document.createElement('canvas');
  console.log(myCanvas);
  ele.appendChild(myCanvas);
  // var canvas = document.getElementById('canvas');
  myCanvas.width = width;
  myCanvas.height = height;
  var ctx = myCanvas.getContext('2d');
  ctx.fillStyle = 'green';
  ctx.fillRect(10, 10, 100, 100);
};

onMounted(() => {
  init();
});

onUnmounted(() => {});
</script>

<style lang="scss" scoped>
.demo {
  width: 100%;
  height: 100%;
}
</style>
