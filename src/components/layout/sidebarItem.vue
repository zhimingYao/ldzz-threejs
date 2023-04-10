<template>
  <div class="item">
    <div class="icon"></div>
    <div class="">1324123412</div>
    <div></div>
  </div>
</template>
<script setup></script>

<style lang="scss">
.item {
  display: flex;
  justify-content: space-between;
  align-items: center;
  height: 50px;
  color: $text1;
  box-sizing: border-box;
  box-shadow: 0 0 5px 0 #525252;
  &:hover {
    color: $text2;
    background-color: rgba($color: #525252, $alpha: 1);
    border: 2px solid rgba($color: #525252, $alpha: 1);
  }

  .icon {
  }
}
</style>
