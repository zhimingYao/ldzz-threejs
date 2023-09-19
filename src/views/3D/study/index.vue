<template>
  <div class="demo1">
    <div class="online_3d_viewer" ref="parentDiv" style="width: 800px; height: 600px;" model="">
    </div>
  </div>
</template>

<script setup>
import { ref, onMounted } from 'vue'
import * as OV from 'online-3d-viewer';

let parentDiv = ref();
onMounted(() => {
  let viewer = new OV.EmbeddedViewer(parentDiv.value, {
    camera: new OV.Camera(
      new OV.Coord3D(0, 200.0, 300.0),
      new OV.Coord3D(0.0, 100.0, 0.0),
      new OV.Coord3D(0.0, 1.0, 0.0),
      45.0
    ),
    backgroundColor: new OV.RGBAColor(255, 255, 255, 255),
    defaultColor: new OV.RGBColor(200, 200, 200),
    edgeSettings: new OV.EdgeSettings(false, new OV.RGBColor(0, 0, 0), 1),
    environmentSettings: new OV.EnvironmentSettings(
      [
        require('../../../assets/img/env1.jpg'),
        require('../../../assets/img/env1.jpg'),
        require('../../../assets/img/env1.jpg'),
        require('../../../assets/img/env1.jpg'),
        require('../../../assets/img/env1.jpg'),
        require('../../../assets/img/env1.jpg'),
      ],
      true
    )
  });

  viewer.LoadModelFromUrlList(['http://192.168.31.10:9000/arch/upload/20221121/1c3c352e03bfb00209c8e18d985325ce.obj']);
})


</script>

<style lang="scss"></style>
