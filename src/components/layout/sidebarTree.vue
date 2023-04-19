<template>
  <div class="sidebarTree">
    <div class="sidebarItem" v-for="item in sidebarMenu" :key="item.path">
      <sidebarItem :item="item" :grade="grade" @getIsShow="handlerIsShow" />
      <sidebar-tree v-if="item.meta.isShow && item.children && item.children.length !== 0" :sidebarMenu="item.children" :grade="grade + 1" />
    </div>
  </div>
</template>

<script setup>
import { useLayoutStore } from '../../store/layout';
const props = defineProps({
  sidebarMenu: {
    type: Array,
    default: () => {
      return useRouter().options.routes[0].children;
    },
  },
  grade: {
    type: Number,
    default: 1,
  },
});
const sidebarMenu = reactive(props.sidebarMenu);
const store = useLayoutStore();
const { checkRoute } = storeToRefs(store);
// console.log(checkRoute);
const InitMenu = () => {
  sidebarMenu.forEach(item => {
    if (checkRoute.value.includes(item.path) && item.children && item.children.length !== 0) {
      // console.log('匹配到');
      item.meta.isShow = true;
    } else {
      item.meta.isShow = false;
    }
  });
};
InitMenu();
const handlerIsShow = data => {
  sidebarMenu.forEach(item => {
    if (item.path === data.path) {
      item.meta.isShow = !item.meta.isShow;
    } else {
      item.meta.isShow = false;
    }
  });
};
</script>

<style lang="scss">
.sidebarTree {
  transition: all 0.5s;
}
</style>
