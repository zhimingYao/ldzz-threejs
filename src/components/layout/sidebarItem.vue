<template>
  <div class="item">
    <div class="icon">
      <el-icon :size="32" color="#fff">
        {{}}
      </el-icon>
    </div>
    <div class="">1324123412</div>
    <div>
      <el-icon><ArrowDown /></el-icon>
    </div>
  </div>
</template>
<script setup>
const icon = ref('material-symbols:home-outline-rounded');
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
  padding: 10px;
  border: 2px solid rgba($color: #525252, $alpha: 1);

  &:hover {
    color: $text2;
    background-color: rgba($color: #525252, $alpha: 1);
  }

  .icon {
    width: 50px;
  }
}
</style>
