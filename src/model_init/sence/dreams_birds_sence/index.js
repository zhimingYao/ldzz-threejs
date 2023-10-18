/* 盒气满满 */

const sence_data = {
  name: '盒气满满',
  type: 'dreams_birds_sence',
  cameraData: {
    globalCameraData: {
      position: [-1200, 4000, 6000],
      target: [-1200, 0, 0]
    },
    cruiseCameraData: {
      position: [3000, 0, 4200],
      target: [3000, 0, 0]
    }
  },
  lightData: {
    ambientLightData: {
      params: [0xffffff, 2],
      position: [0, 1500, 6000]
    },
    directionalLightData: {
      params: [0xffffff, 2],
      // position: [-13500, 9000, -5000],
      // position: [0, 9000, 6500],
      position: [0, 9000, -2500],
      target: [0, -500, -2000]
    },
    // pointLightData: [
    //   {
    //     params: [0xffffff, 1, 0, 2],
    //     position: [-6500, 1500, -5000]
    //   }
    // ],
    // spotLightData: [
    //   {
    //     name: '聚灯光',
    //     params: [0xffffff, 10000000, 8000, Math.PI / 4, 0.0, 2],
    //     position: [0, 3000, -5600],
    //     target: [0, -1000, -5600]
    //   }
    // ]
  },
  gltfModels: [
    {
      gltf_url: 'elephantHut/bolimuqiang.glb',
      name: '盒气满满',
      objects: [
        {
          pickControl: {
            isPick: true,
            picked: false
          },
          scale: [800, 800, 800],
          position: [-6000, -1500, 1000],
          rotation: [0, 0, 0]
        }
      ]
    }
  ],
  fbxModels: [
    {
      fbx_url: 'elephantHut/elephantHut.fbx',
      name: '盒气满满',
      objects: [
        {
          pickControl: {
            isPick: true,
            picked: false
          },
          scale: [8, 8, 8],
          position: [-6000, -1500, 1000],
          rotation: [0, 0, 0]
        }
      ]
    }
  ]
}

export default sence_data
