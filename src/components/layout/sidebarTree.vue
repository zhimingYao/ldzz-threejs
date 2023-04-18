<template>
  <div class="sidebarTree">
    <div class="sidebarItem" v-for="item in sidebarMenu" :key="item.path">
      <sidebarItem :item="item" @getIsShow="handlerIsShow" />
      <sidebar-tree v-if="item.meta.isShow && item.children && item.children.length !== 0" :sidebarMenu="item.children" />
    </div>
  </div>
</template>

<script setup>
const props = defineProps({
  sidebarMenu: {
    type: Array,
    default: () => {
      return useRouter().options.routes[0].children;
    }
  }
});
const sidebarMenu = reactive(props.sidebarMenu);
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
