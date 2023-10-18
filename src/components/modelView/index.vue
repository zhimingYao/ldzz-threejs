<template>
  <div class="model-view">
    <div class="view_3d" ref="box" :style="{ width: props.width, height: props.height }"></div>
    <div class="control_panel" ref="control_panel">
      <div class="open_close" @click="handleOpen">
      </div>
      <div class="control_panel_content" v-show="isShow">
        <button type="primary" @click="handleCheck">{{ viewName }}</button>
        <button type="primary" @click="handleCheck_1">{{ dragName }}</button>
      </div>
    </div>
  </div>
</template>
<script setup>
import { Dbox } from '@/model_init/init';
import { average } from '@/model_init/tool';

const props = defineProps({
  width: {
    type: String,
    default: '100vw',
  },
  height: {
    type: String,
    default: '100vh',
  },
  sence: {
    type: String,
    default: 'dreams_birds_sence',
  },
});
let box = ref();
let dbox = ref();
let control_panel = ref();
let isShow = ref(false);
let load = reactive({
  isShow: true,
  text: '',
});
const handleOpen = () => {
  isShow.value = !isShow.value;
};
/* 视角切换 */
let viewNum = 0;
let viewName = ref('巡游视角');
const handleCheck = () => {
  if (viewNum == 0) {
    viewName.value = '正常视角';
    dbox.value.eventObj.addCameraMoveEvent();
  } else if (viewNum == 1) {
    viewName.value = '巡游视角';
    dbox.value.eventObj.removeCameraMoveEvent();
  }
  if (viewNum >= 1) {
    viewNum = 0;
  } else {
    viewNum++;
  }
};
/* 拖拽控制 */
let dragNum = 0;
let dragName = ref('打开拖拽');
const handleCheck_1 = () => {
  if (dragNum == 0) {
    dragName.value = '关闭拖拽';
    dbox.value.orbitControls.enabled = false;
    dbox.value.eventObj.addDragTransformEvent();
  } else if (dragNum == 1) {
    dragName.value = '打开拖拽';
    dbox.value.orbitControls.enabled = true;
    dbox.value.eventObj.removeDragTransformEvent();
  }
  if (dragNum >= 1) {
    dragNum = 0;
  } else {
    dragNum++;
  }
};
onMounted(() => {
  watch(
    () => props.sence,
    value => {
      dbox.value = new Dbox(box.value, {
        sence: value,
        loadEvent: function (status) {
          if (status) {
            let loadData = [];
            for (const key in status) {
              if (Object.prototype.hasOwnProperty.call(status, key)) {
                loadData.push(...status[key]);
              }
            }
            const race = average(loadData);
            // console.log(race)
            load.text = race?.toFixed(2) + '%';
            if (race === 100) {
              let timer = setTimeout(() => {
                load.isShow = false;
              }, 1000);
            } else {
              load.isShow = true;
            }
          }
        },
      });
      console.log(dbox.value, '---------------------value');
      dbox.value.init();
      dbox.value.ele.appendChild(control_panel.value);
    },
    { immediate: true }
  );
});
</script>
<style lang="scss" scoped>
.view_3d {
  position: relative;
  z-index: 1;
  ::v-deep .label {
    width: 300px;
    background-color: rgba($color: #9d70f1, $alpha: 0.5);
    padding: 20px;
    border-radius: 10px;
    font-size: 36px;
    color: #fff;
    h3 {
      text-align: center;
      font-size: 48px;
      color: #fff;
    }
  }
}
.control_panel {
  position: absolute;
  left: 0;
  bottom: 0;
  z-index: 100;
  width: 100%;
  pointer-events: none;
  display: flex;
  justify-content: center;
  align-items: center;
  flex-flow: column;
  .open_close {
    width: 60px;
    height: 8px;
    background-color: #fff;
    border-radius: 16px 16px 0 0;
    text-align: center;
    color: #9d70f1;
    pointer-events: auto;
    opacity: 0.5;
  }
  .control_panel_content {
    min-width: 200px;
    max-width: 80%;
    overflow: overlay;
    height: 32px;
    background-color: #fff;
    padding: 10px;
    box-sizing: border-box;
    border-radius: 10px 10px 0 0;
    opacity: 0.5;
    pointer-events: auto;
    display: flex;
    align-items: center;
    button {
      margin-right: 10px;
      height: 20px;
    }
  }
}
</style>
