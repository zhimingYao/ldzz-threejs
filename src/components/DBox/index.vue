<template>
  <div class="dimension-box" ref="box"></div>
</template>
<script setup>
import { createSpace, destroySpace } from '@/spaceRules';
const box = ref();
let space = null;

const props = defineProps({
  
})
onMounted(() => {
  space = new createSpace(box.value, '2d');
  space.init(({ context }) => {
    console.log(context);
    const ctx = context;
    ctx.fillStyle = 'red';
    ctx.fillRect(10, 10, 50, 50);
  });
});

onBeforeUnmount(() => {
  destroySpace(space);
});
</script>
<style lang="scss" scoped>
.dimension-box {
  min-width: 300px;
  min-height: 300px;
  width: 100%;
  height: 100%;
  border: 1px solid $c0;
}
</style>
