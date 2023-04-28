<template>
  <div class="demo" ref="box"></div>
</template>

<script setup>
import { createSpace, destroySpace } from '@/spaceRules';
const box = ref();
let space = null;
onMounted(() => {
  space = new createSpace(box.value, '2d');
  const { context } = space;
  space.init(() => {
    context.fillStyle = 'red';
    context.fillRect(10, 10, 50, 50);
  });
});

onBeforeUnmount(() => {
  destroySpace(space);
});
</script>

<style lang="scss" scoped>
.demo {
  width: 100%;
  height: 100%;
}
</style>
