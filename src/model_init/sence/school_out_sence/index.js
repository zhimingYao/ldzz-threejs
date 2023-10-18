/* 王灿案例 */

const school_out_data = {
  name: '王灿案例',
  type: 'school_out_sence',
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
    // directionalLightData: {
    //   params: [0xffffff, 2],
    //   // position: [-13500, 9000, -5000],
    //   // position: [0, 9000, 6500],
    //   position: [0, 9000, -2500],
    //   target: [0, -500, -2000]
    // },
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
      gltf_url: 'Taiji/W.glb',
      name: '太极',
      objects: [
        {
          pickControl: {
            isPick: true,
            picked: false
          },
          scale: [100, 100, 100],
          position: [10000,  -1000, 0],
          rotation: [0, Math.PI/2, 0]
        }
      ]
    },
    {
      gltf_url: 'Taiji/room1.glb',
      name: '主管办公室',
      objects: [
        {
          pickControl: {
            isPick: true,
            picked: false
          },
          scale: [100, 100, 100],
          position: [10000,  -1000, 0],
          rotation: [0, Math.PI/2, 0],
          info: {
            title: '主管办公室',
            Offset: [19, 35, -65],
            scale: [1 / 100, 1 / 100, 1 / 100],
            rotation: [0, Math.PI / 2, 0],
            visible: false,
            content: []
          }
        }
      ]
    },
    {
      gltf_url: 'Taiji/room2.glb',
      name: '办公室',
      objects: [
        {
          pickControl: {
            isPick: true,
            picked: false
          },
          scale: [100, 100, 100],
          position: [10000, -1000, 0],
          rotation: [0, Math.PI/2, 0],
          info: {
            title: '办公室',
            Offset: [19, 35, -72],
            scale: [1 / 100, 1 / 100, 1 / 100],
            rotation: [0, Math.PI / 2, 0],
            visible: false,
            content: []
          }
        }
      ]
    }
  ]
}

export default school_out_data
