<template>
  <div class="item">
    <div class="icon">
      <el-icon :size="24" color="#fff">
        <component :is="props.icon"></component>
      </el-icon>
    </div>
    <div class="ctx" v-if="!props.isFold">
      <div class="title">{{ props.title }}</div>
      <div class="arrow">
        <el-icon><ArrowDown /></el-icon>
      </div>
    </div>
  </div>
</template>
<script setup>
const props = defineProps({
  icon: {
    type: String,
    default: 'Search',
  },
  title: {
    tyep: String,
    default: 'woshi',
  },
  isFold: {
    type: Boolean,
    default: false,
  },
});
console.log(props);
</script>

<style lang="scss">
.item {
  display: flex;
  justify-content: space-between;
  align-items: center;
  height: 50px;
  color: $text1;
  box-sizing: border-box;
  box-shadow: 0 0 5px 0 #525252;
  border: 2px solid rgba($color: #525252, $alpha: 1);
  text-align: center;

  &:hover {
    color: $text2;
    background-color: rgba($color: #525252, $alpha: 1);
  }

  .icon {
    width: 50px;
    height: 24px;
  }

  .ctx {
    padding: 20px;
    flex: 1 1 auto;
    display: flex;
    justify-content: space-between;
    align-items: center;

    .arrow{
      height: 16px;
    }
  }
}
</style>
