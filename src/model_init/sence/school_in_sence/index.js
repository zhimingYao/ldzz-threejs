/* 王灿案例 */

const school_in_data = {
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
    spotLightData: [
      {
        name: '聚灯光',
        params: [0xffffff, 10000000, 8000, Math.PI / 4, 0.0, 2],
        position: [0, 3000, -5600],
        target: [0, -1000, -5600]
      }
    ]
  },
  gltfModels: [
    {
      gltf_url: 'Taiji/N1.glb',
      name: '太极内层1',
      objects: [
        {
          pickControl: {
            isPick: true,
            picked: false
          },
          scale: [500, 500, 500],
          position: [40000, -10000, 0],
          rotation: [0, Math.PI / 2, 0]
        }
      ]
    },
    {
      gltf_url: 'Taiji/N2.glb',
      name: '太极内层2',
      objects: [
        {
          pickControl: {
            isPick: true,
            picked: false
          },
          scale: [500, 500, 500],
          position: [40000, -10000, 0],
          rotation: [0, Math.PI / 2, 0]
        }
      ]
    },
    {
      gltf_url: 'Taiji/N3.glb',
      name: '太极内层3',
      objects: [
        {
          pickControl: {
            isPick: true,
            picked: false
          },
          scale: [500, 500, 500],
          position: [40000, -10000, 0],
          rotation: [0, Math.PI / 2, 0]
        }
      ]
    },
    {
      gltf_url: 'Taiji/DQ1.glb',
      name: '太极内层设备1',
      objects: [
        {
          pickControl: {
            isPick: true,
            picked: false
          },
          scale: [500, 500, 500],
          position: [40000, -10000, 0],
          rotation: [0, Math.PI / 2, 0]
        }
      ]
    },
    {
      gltf_url: 'Taiji/DQ2.glb',
      name: '太极内层设备2',
      objects: [
        {
          pickControl: {
            isPick: true,
            picked: false
          },
          scale: [500, 500, 500],
          position: [40000, -10000, 0],
          rotation: [0, Math.PI / 2, 0]
        }
      ]
    },
    {
      gltf_url: 'Taiji/DQ3.glb',
      name: '太极内层设备3',
      objects: [
        {
          pickControl: {
            isPick: true,
            picked: false
          },
          scale: [500, 500, 500],
          position: [40000, -10000, 0],
          rotation: [0, Math.PI / 2, 0]
        }
      ]
    },
  ],
}

export default school_in_data
