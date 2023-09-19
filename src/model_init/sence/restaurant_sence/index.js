/* 尘世日记 */
import { createVilla } from './model/restaurant_model'
import { barModel } from '../../model/bar'
// import { floor } from '../model/floor'
import { robotModel } from '../../model/robot'
import { brandModel } from '../../model/brand'
import { deliveryModel } from '../../model/deliveryModel'

const sence_data = {
  name: '晨食日记',
  type: 'restaurant_sence',
  cameraData: {
    globalCameraData: {
      position: [-1200, 4000, 6000],
      target: [-1200, 0, 0]
    },
    cruiseCameraData: {
      position: [0, 200, 1000],
      target: [0, 200, 0]
    }
  },
  lightData: {
    ambientLightData: {
      params: [0xffffff, 2],
      position: [0, 0, 0]
    },
    directionalLightData: {
      params: [0xffffff, 2],
      position: [0, 4500, -10000],
      target: [0, 0, 10]
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
        params: [0xffffff, 10000000, 10000, Math.PI / 4, 0.0, 2],
        position: [-5500, 1300, -4600],
        target: [-5500, -1000, -4600]
      }
    ]
  },
  objModels: [
    {
      mtl: 'morningDiary/refrigerator/refrigerator.mtl',
      obj_url: 'morningDiary/refrigerator/refrigerator.obj',
      name: '冰箱',
      objects: [
        {
          pickControl: {
            isPick: true,
            picked: false
          },
          scale: [1000, 1000, 1000],
          position: [-6500, -800, -2500],
          rotation: [0, Math.PI * 0.5, 0],
          info: {
            title: '冰箱信息',
            Offset: [0, 2.2, 0],
            scale: [1 / 1000, 1 / 1000, 1 / 1000],
            rotation: [0, 0, 0],
            content: [
              {
                label: '状态',
                value: '运行中'
              },
              {
                label: '温度',
                value: '10°C'
              },
              {
                label: '电压',
                value: '120V'
              },
              {
                label: '电流',
                value: '10A'
              }
            ]
          }
        }
      ]
    },
    {
      mtl: 'morningDiary/light/light.mtl',
      obj_url: 'morningDiary/light/light.obj',
      name: '电灯',
      objects: [
        {
          pickControl: {
            isPick: true,
            picked: false
          },
          scale: [1000, 1000, 1000],
          position: [-5500, 0, -4600],
          rotation: [0, 0, 0]
        },
        {
          pickControl: {
            isPick: true,
            picked: false
          },
          scale: [1000, 1000, 1000],
          position: [-5500, 0, -5100],
          rotation: [0, 0, 0]
        }
      ]
    },
    {
      mtl: 'morningDiary/disinfectionCabinet/xdg.mtl',
      obj_url: 'morningDiary/disinfectionCabinet/xdg.obj',
      name: '消毒柜',
      objects: [
        {
          pickControl: {
            isPick: true,
            picked: false
          },
          scale: [1500, 1500, 1500],
          position: [-6500, -800, -3500],
          rotation: [0, -Math.PI / 2, 0],
          info: {
            title: '消毒柜信息',
            Offset: [0, 1.2, 0],
            scale: [1 / 1000, 1 / 1000, 1 / 1000],
            rotation: [0, Math.PI, 0],
            content: [
              {
                label: '状态',
                value: '运行中'
              },
              {
                label: '温度',
                value: '60°C'
              }
            ]
          }
        }
      ]
    },
    {
      mtl: 'morningDiary/camera/camera.mtl',
      obj_url: 'morningDiary/camera/camera.obj',
      name: '摄像头',
      objects: [
        {
          pickControl: {
            isPick: true,
            picked: false
          },
          scale: [1500, 1500, 1500],
          position: [-6900, 800, -8900],
          rotation: [0, Math.PI * 0.25, 0]
          // info: {
          //   title: '摄像头信息',
          //   Offset: [0, 0.2, 0],
          //   scale: [1 / 1000, 1 / 1000, 1 / 1000],
          //   rotation: [0, 0, 0],
          //   content: [
          //     {
          //       label: '状态',
          //       value: '运行中'
          //     },
          //     {
          //       label: '录制时间',
          //       value: '20天5小时'
          //     }
          //   ]
          // }
        }
      ]
    },
    {
      mtl: 'morningDiary/computer/computer.mtl',
      obj_url: 'morningDiary/computer/computer.obj',
      name: '点餐机(电脑)',
      objects: [
        {
          pickControl: {
            isPick: true,
            picked: false
          },
          scale: [1000, 1000, 1000],
          position: [-5300, -70, -8000],
          rotation: [0, Math.PI * 0.5, 0]
          // info: {
          //   title: '电脑信息',
          //   Offset: [0, 2, 0],
          //   scale: [1 / 1000, 1 / 1000, 1 / 1000],
          //   rotation: [0, 0, 0],
          //   content: [
          //     {
          //       label: '状态',
          //       value: '正常'
          //     },
          //     {
          //       label: '待处理',
          //       value: '0'
          //     },
          //     {
          //       label: '已完成',
          //       value: '100'
          //     }
          //   ]
          // }
        },
        {
          pickControl: {
            isPick: true,
            picked: false
          },
          scale: [1000, 1000, 1000],
          position: [-2500, -70, -1500],
          rotation: [0, 0, 0]
        }
      ]
    },
    {
      mtl: 'morningDiary/IdleTable/table.mtl',
      obj_url: 'morningDiary/IdleTable/table.obj',
      name: '闲置桌子',
      objects: [
        {
          pickControl: {
            isPick: true,
            picked: false
          },
          scale: [1000, 1000, 1000],
          position: [-10000, -800, -8000],
          rotation: [0, 0, 0]
        }
      ]
    }
  ],
  fbxModels: [
    {
      fbx_url: 'morningDiary/cChair.fbx',
      name: '长板凳',
      objects: [
        {
          pickControl: {
            isPick: true,
            picked: false
          },
          scale: [10, 10, 10],
          position: [4000, -700, -8500],
          rotation: [0, 0, 0]
        },
        {
          pickControl: {
            isPick: true,
            picked: false
          },
          scale: [10, 10, 10],
          position: [4000, -700, -6500],
          rotation: [0, 0, 0]
        },
        {
          pickControl: {
            isPick: true,
            picked: false
          },
          scale: [10, 10, 10],
          position: [4000, -700, -500],
          rotation: [0, 0, 0]
        },
        {
          pickControl: {
            isPick: true,
            picked: false
          },
          scale: [10, 10, 10],
          position: [4000, -700, -2500],
          rotation: [0, 0, 0]
        },
        {
          pickControl: {
            isPick: true,
            picked: false
          },
          scale: [10, 10, 10],
          position: [4000, -700, -6000],
          rotation: [0, 0, 0]
        },
        {
          pickControl: {
            isPick: true,
            picked: false
          },
          scale: [10, 10, 10],
          position: [4000, -700, -4000],
          rotation: [0, 0, 0]
        }
      ]
    },
    {
      fbx_url: 'morningDiary/cTable.fbx',
      name: '长桌子',
      objects: [
        {
          pickControl: {
            isPick: true,
            picked: false
          },
          scale: [8, 8, 8],
          position: [4000, -700, -5000],
          rotation: [0, 0, 0]
        },
        {
          pickControl: {
            isPick: true,
            picked: false
          },
          scale: [8, 8, 8],
          position: [4000, -700, -1500],
          rotation: [0, 0, 0]
        },
        {
          pickControl: {
            isPick: true,
            picked: false
          },
          scale: [8, 8, 8],
          position: [4000, -700, -7500],
          rotation: [0, 0, 0]
        }
      ]
    },
    {
      fbx_url: 'morningDiary/waterChannel.fbx',
      name: '水槽',
      objects: [
        {
          pickControl: {
            isPick: true,
            picked: false
          },
          scale: [10, 10, 10],
          position: [-6500, -800, -5000],
          rotation: [0, -Math.PI, 0],
          info: {
            title: '水槽信息',
            Offset: [0, 120, 0],
            scale: [1 / 8, 1 / 8, 1 / 8],
            rotation: [0, -Math.PI / 2, 0],
            content: [
              {
                label: '日用水量',
                value: '500kg'
              }
            ]
          }
        }
      ]
    },
    {
      fbx_url: 'morningDiary/commodityShelf.fbx',
      name: '架子',
      objects: [
        {
          pickControl: {
            isPick: true,
            picked: false
          },
          scale: [1, 1, 1],
          position: [-6500, 0, -1200],
          rotation: [0, Math.PI / 2, 0]
          // info: {
          //   title: '餐厅信息',
          //   Offset: [0, 0, 0],
          //   content: [
          //     {
          //       label: '状态：',
          //       value: '运营中'
          //     }
          //   ]
          // }
        }
      ]
    },
    {
      fbx_url: 'morningDiary/wineBottle.fbx',
      name: '红酒',
      objects: [
        {
          pickControl: {
            isPick: true,
            picked: false
          },
          scale: [20, 20, 20],
          position: [-2000, -100, -3500],
          rotation: [0, Math.PI / 2, 0]
        },
        {
          pickControl: {
            isPick: true,
            picked: false
          },
          scale: [20, 20, 20],
          position: [-2500, -100, -3500],
          rotation: [0, Math.PI / 2, 0]
        }
      ]
    },
    {
      fbx_url: 'morningDiary/chairTable.fbx',
      name: '椅子桌子组合',
      objects: [
        {
          pickControl: {
            isPick: true,
            picked: false
          },
          scale: [1, 1, 1],
          position: [0, -800, -8000],
          rotation: [0, 0, 0]
        },
        {
          pickControl: {
            isPick: true,
            picked: false
          },
          scale: [1, 1, 1],
          position: [-2000, -800, -8000],
          rotation: [0, 0, 0]
        },
        {
          pickControl: {
            isPick: true,
            picked: false
          },
          scale: [1, 1, 1],
          position: [2000, -800, -2000],
          rotation: [0, 0, 0]
        },
        {
          pickControl: {
            isPick: true,
            picked: false
          },
          scale: [1, 1, 1],
          position: [2000, -800, -3500],
          rotation: [0, 0, 0]
        },
        {
          pickControl: {
            isPick: true,
            picked: false
          },
          scale: [1, 1, 1],
          position: [2000, -800, -5000],
          rotation: [0, 0, 0]
        },
        {
          pickControl: {
            isPick: true,
            picked: false
          },
          scale: [1, 1, 1],
          position: [2000, -800, -6500],
          rotation: [0, 0, 0]
        },
        {
          pickControl: {
            isPick: true,
            picked: false
          },
          scale: [1, 1, 1],
          position: [2000, -800, -8000],
          rotation: [0, 0, 0]
        }
      ]
    },
    {
      fbx_url: 'morningDiary/fruit.fbx',
      name: '水果盘',
      objects: [
        {
          pickControl: {
            isPick: true,
            picked: false
          },
          scale: [0.5, 0.5, 0.5],
          position: [-6400, 0, -4800],
          rotation: [0, Math.PI / 2, 0]
        }
      ]
    },
    {
      fbx_url: 'morningDiary/vegetables.fbx',
      name: '蔬菜',
      objects: [
        {
          pickControl: {
            isPick: true,
            picked: false
          },
          scale: [10, 10, 10],
          position: [-5400, -800, -600],
          rotation: [0, -Math.PI, 0]
        }
      ]
    },
    {
      fbx_url: 'morningDiary/hu.fbx',
      name: '壶',
      objects: [
        {
          pickControl: {
            isPick: true,
            picked: false
          },
          scale: [30, 30, 30],
          position: [-2500, -100, -3500],
          rotation: [0, Math.PI / 2, 0]
        }
      ]
    },
    {
      fbx_url: 'morningDiary/hambeger.fbx',
      name: '汉堡',
      objects: [
        {
          pickControl: {
            isPick: true,
            picked: false
          },
          scale: [1.5, 1.5, 1.5],
          position: [-2500, 0, -5000],
          rotation: [0, Math.PI / 8, 0]
        },
        {
          pickControl: {
            isPick: true,
            picked: false
          },
          scale: [1.5, 1.5, 1.5],
          position: [-2500, 0, -4000],
          rotation: [0, Math.PI / 8, 0]
        }
      ]
    },
    {
      fbx_url: 'morningDiary/longTi.fbx',
      name: '笼屉',
      objects: [
        {
          pickControl: {
            isPick: true,
            picked: false
          },
          scale: [30, 30, 30],
          position: [-2500, -100, -6500],
          rotation: [0, 0, 0]
        },
        {
          pickControl: {
            isPick: true,
            picked: false
          },
          scale: [30, 30, 30],
          position: [-3750, -100, -6500],
          rotation: [0, 0, 0]
        },
        {
          pickControl: {
            isPick: true,
            picked: false
          },
          scale: [30, 30, 30],
          position: [-5000, -100, -6500],
          rotation: [0, 0, 0]
        }
      ]
    }
  ],
  customModels: [
    {
      create: createVilla,
      name: '餐厅',
      objects: [
        {
          pickControl: {
            isPick: false,
            picked: false
          },
          scale: [1, 1, 1],
          position: [0, 0, 0],
          rotation: [0, 0, 0]
          // info: {
          //   title: '餐厅信息',
          //   Offset: [0, 0, 0],
          //   scale: [1, 1, 1],
          //   rotation: [0, 0, 0],
          //   content: [
          //     {
          //       label: '状态',
          //       value: '运营中'
          //     }
          //   ]
          // }
        }
      ]
    },
    {
      create: barModel,
      name: '餐台',
      objects: [
        {
          pickControl: {
            isPick: true,
            picked: false
          },
          scale: [1, 1, 1],
          position: [-200, -500, -4000],
          rotation: [0, 0, 0]
          // info: {
          //   title: '餐台信息',
          //   Offset: [0, 1000, 0],
          //   scale: [1, 1, 1],
          //   rotation: [0, 0, 0],
          //   content: [
          //     {
          //       label: '状态',
          //       value: '已消毒'
          //     },
          //     {
          //       label: '菜品',
          //       value: '红烧肉、土豆丝。。。'
          //     },
          //     {
          //       label: '汤品',
          //       value: '胡辣汤'
          //     }
          //   ]
          // }
        }
      ]
    },
    {
      create: robotModel,
      name: '点餐机',
      objects: [
        {
          pickControl: {
            isPick: true,
            picked: false
          },
          scale: [1, 1, 1],
          position: [-1000, -200, -2000],
          rotation: [0, Math.PI * 0.5, 0],
          info: {
            title: '点餐机信息',
            Offset: [0, 500, 0],
            scale: [1, 1, 1],
            rotation: [0, 0, 0],
            content: [
              {
                label: '状态',
                value: '正常'
              },
              {
                label: '待处理',
                value: '0'
              },
              {
                label: '已完成',
                value: '100'
              }
            ]
          }
        }
      ]
    },
    {
      create: brandModel,
      name: '店名广告牌（悬挂）',
      objects: [
        {
          pickControl: {
            isPick: true,
            picked: false
          },
          scale: [1, 1, 1],
          position: [0, 600, -5000],
          rotation: [0, Math.PI * 0.5, 0]
        }
      ]
    },
    {
      create: deliveryModel,
      name: '外卖柜',
      objects: [
        {
          pickControl: {
            isPick: true,
            picked: false
          },
          scale: [1, 1, 1],
          position: [-200, -500, -4000],
          rotation: [0, 0, 0],
          info: {
            title: '外卖柜信息',
            Offset: [-2700, 1500, 4300],
            scale: [1, 1, 1],
            rotation: [0, 0, 0],
            content: [
              {
                label: '状态',
                value: '正常'
              },
              {
                label: '已取餐',
                value: '10份'
              },
              {
                label: '未取餐',
                value: '7份'
              }
            ]
          }
        }
      ]
    }
  ]
}

export default sence_data
