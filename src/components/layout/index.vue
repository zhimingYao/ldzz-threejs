<template>
  <div class="layout-box">
    <el-row>
      <el-col :span="3">
        <div class="layout-top"></div>
      </el-col>
      <el-col :span="21">
        <div class="layout-top">
          <el-row>
            <el-col :span="1">
              <div style="line-height: 60px; color: #fff">
                <el-icon><Menu /></el-icon>
              </div>
            </el-col>
          </el-row>
        </div>
      </el-col>
    </el-row>
    <el-row>
      <el-col :span="3">
        <div class="layout-sidebar-left">
          <router-link to="">
            <sidebarItem />
          </router-link>
        </div>
      </el-col>
      <el-col :span="21" class="layout-main">
        <router-view></router-view>
      </el-col>
    </el-row>
  </div>
</template>

<script setup>
import sidebarItem from "./sidebarItem.vue"
</script>

<style lang="scss">
@import "@/assets/scss/layout.scss";
</style>
