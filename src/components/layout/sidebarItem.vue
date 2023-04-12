<template>
  <router-link :to="props.path">
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
  </router-link>
</template>
<script setup>
const props = defineProps({
  path: {
    type: String,
    default: '/home'
  },
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
  width: 248px;
  display: flex;
  justify-content: space-between;
  align-items: center;
  height: 50px;
  color: $text1;
  box-sizing: border-box;
  box-shadow: inset 0 0 2px 1px #525252;
  text-align: center;
  position: relative;
  z-index: 1;
  &:hover {
    color: $text2;
    background-color: rgba($color: #525252, $alpha: 1);
  }

  .icon {
    width: 60px;
    height: 24px;
  }

  .ctx {
    padding: 20px;
    flex: 1 1 auto;
    display: flex;
    justify-content: space-between;
    align-items: center;
    box-sizing: border-box;
    .arrow {
      height: 16px;
    }
  }
}
</style>
