<template>
  <div class="dimension-box" ref="box"></div>
</template>
<script setup>
import { spaceRules } from '@/spaceRules';
const box = ref();
let space = null;

const props = defineProps({});
onMounted(() => {
  space = new spaceRules(box.value, '2d');
  space.createSpace(space_2d);
  console.log(space);
});

/* 2d space */
const space_2d = ({ context }) => {
  console.log(context);
  const ctx = context;
  ctx.fillStyle = 'red';
  ctx.fillRect(10, 10, 100, 100);
  ctx.clearRect(45, 45, 60, 60);
  ctx.strokeRect(50, 50, 50, 50);
  ctx.beginPath();
  ctx.moveTo(175, 150);
  ctx.lineTo(240, 275);
  ctx.lineTo(200, 275);
  // ctx.fill();
};

onBeforeUnmount(() => {
  space.destroySpace();
});
</script>
<style lang="scss" scoped>
.dimension-box {
  width: 100%;
  height: 100%;
  border: 1px solid $c0;
  overflow: hidden;
}
</style>
