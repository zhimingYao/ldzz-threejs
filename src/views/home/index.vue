<template>
  <div class="home">
    <el-row>
      <h3>本地图标</h3>
    </el-row>
    <svg-icon iconClass="chat" className="icon" />
    <el-row>
      <h3>iconify图标</h3>
    </el-row>
    <i-material-symbols:10k />
    <i-mdi-account-box style="font-size: 1em; color: red" />
    <i-twemoji:mirror-ball style="font-size: 2em; color: red" />
    <div>
      <iframe
        id="inlineFrameExample"
        title="Inline Frame Example"
        width="1000"
        height="700"
        src="https://icon-sets.iconify.design/?query=ball"
      >
      </iframe>
    </div>
    <el-row>
      <h3>element plus图标</h3>
    </el-row>
    <div>
      <div class="grid">
        <div class="element-icon" v-for="[key] in Object.entries(ElementPlusIconsVue)" :key="key">
          <el-icon :size="24">
            <component class="icon-box" :is="key"></component>
          </el-icon>
          <el-button type="primary" link @click="copy($event)">
            {{ key }}
          </el-button>
        </div>
      </div>
    </div>
  </div>
</template>

<script setup>
import * as ElementPlusIconsVue from '@element-plus/icons-vue';
import useClipboard from 'vue-clipboard3';

const { toClipboard } = useClipboard();

const copy = async (e) => {
  console.log(e);
  try {
    await toClipboard(e.target.outerText);
    ElMessage({
      message: '复制成功！',
      type: 'success',
    });
  } catch (e) {
    console.error(e);
  }
};
</script>

<style lang="scss" scoped>
.home {
  width: 100%;
  height: 100%;
  .grid {
    display: grid;
    /*  声明列的宽度  */
    grid-template-columns: repeat(10, 150px);
    /*  声明行间距和列间距  */
    grid-gap: 10px;
    /* 行高 */
    grid-auto-rows: 100px;
    box-sizing: border-box;

    .element-icon {
      border: 1px solid #000;
      display: flex;
      justify-content: center;
      flex-flow: column;
      align-items: center;
    }
  }
}
</style>
