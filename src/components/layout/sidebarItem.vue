<template>
  <div class="hasChildren" v-if="hasChildren">
    <div :class="{ item: true, checked: item.path === checkRoute }" @click="handlerClick()">
      <div class="icon">
        <el-icon :size="24">
          <component :is="icon"></component>
        </el-icon>
      </div>
      <div class="ctx" v-show="!isFold">
        <div class="title">{{ title }}</div>
        <div :class="{ arrowDown: true, arrowRight: !isShow }">
          <el-icon><ArrowDown /></el-icon>
        </div>
      </div>
    </div>
  </div>
  <div class="noChildren" v-else>
    <router-link :to="item.path">
      <div :class="{ item: true, checked: item.path === checkRoute }" @click="handlerClick()">
        <div class="icon">
          <el-icon :size="24">
            <component :is="icon"></component>
          </el-icon>
        </div>
        <div class="ctx" v-show="!isFold">
          <div class="title">{{ title }}</div>
        </div>
      </div>
    </router-link>
  </div>
</template>
<script setup>
const props = defineProps({
  item: {
    type: Object,
    default: () => {
      return {};
    },
  },
});
const emit = defineEmits(['getIsShow']);
const isFold = inject('isFold');
const item = reactive(props.item);
const icon = ref(item.meta.icon);
const title = ref(item.meta.title);
const isShow = ref(item.meta.isShow);
const hasChildren = ref(item.children && item.children.length !== 0);
const checkRoute = inject('checkRoute');
const handlerClick = () => {
  // console.log(item);
  if (hasChildren.value) {
    isShow.value = !isShow.value;
    emit('getIsShow', item);
  } else {
    checkRoute.value = item.path;
  }
};
</script>

<style lang="scss">
.item {
  display: flex;
  justify-content: space-between;
  align-items: center;
  height: 50px;
  color: $text1;
  box-sizing: border-box;
  text-align: center;
  border-bottom: 1px solid #525252;
  border-radius: 10px;
  box-shadow: 0px 0px 2px 1px $cw1;
  position: relative;
  z-index: 1;
  &:hover {
    color: $text2;
  }
  &:first-child {
    border-top: 1px solid #525252;
  }
  .icon {
    width: 60px;
    height: 24px;
  }

  .ctx {
    flex: 1 1 auto;
    display: flex;
    justify-content: space-between;
    align-items: center;
    box-sizing: border-box;
    line-height: 18px;
    padding: 0 20px;
    .title {
    }
    .arrowDown {
      height: 16px;
    }
    .arrowRight {
      transform: rotate(-90deg);
    }
  }
}

.checked {
  color: $text2;
  background-color: rgba($color: #525252, $alpha: 1);
  box-shadow: inset 0 0 2px 1px #525252;
}
</style>
