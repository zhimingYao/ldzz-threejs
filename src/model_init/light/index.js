import * as THREE from 'three'

export function initLight() {
  if (!this.sence_data.lightData) {
    return
  }
  const { ambientLightData, directionalLightData, pointLightData, spotLightData } = this.sence_data.lightData
  this.lightObj = {}
  let lightArr = []
  if (ambientLightData) {
    this.lightObj.ambientLight = createAmbientLight(ambientLightData)
    lightArr.push(this.lightObj.ambientLight)
  } else {
    this.lightObj.ambientLight = createAmbientLight({
      params: [0xffffff, 0.1],
      position: [0, 0, 0]
    })
    lightArr.push(this.lightObj.ambientLight)
  }
  if (directionalLightData) {
    this.lightObj.directLight = createDirectLight(directionalLightData)
    lightArr.push(...this.lightObj.directLight)
  } else {
    this.lightObj.directLight = createDirectLight({
      params: [0xffffff, 0.1],
      position: [-6500, 1500, -5000],
      target: [0, 0, 0]
    })
    lightArr.push(...this.lightObj.directLight)
  }
  if (pointLightData) {
    this.lightObj.pointLights = ceatePointLight(pointLightData)
    lightArr.push(...this.lightObj.pointLights)
  }
  if (spotLightData) {
    this.lightObj.spotLights = createSpotLight(spotLightData)
    lightArr.push(...this.lightObj.spotLights)
  }
  this.scene.add(...lightArr)
}

/* 环境光 */
function createAmbientLight(data) {
  const light = new THREE.AmbientLight(...data.params)
  light.position.set(...data.position)
  return light
}

/* 直射光 */
function createDirectLight(data) {
  let res = []
  const light = new THREE.DirectionalLight(...data.params)
  light.castShadow = true
  light.shadow.mapSize.width = 2048 //阴影贴图宽度设置为2048像素
  light.shadow.mapSize.height = 2048 //阴影贴图高度设置为2048像素
  light.shadow.bias = -0.00005
  //光投影相机
  const cam = light.shadow.camera
  cam.near = 0.5
  cam.far = 50000
  cam.left = -6000
  cam.right = 6000
  cam.top = 4000
  cam.bottom = -4000
  const cameraHelper = new THREE.CameraHelper(cam)
  // res.push( cameraHelper )
  cameraHelper.visible = true
  light.position.set(...data.position)
  light.target.position.set(...data.target)
  res.push(light)
  const helper = new THREE.DirectionalLightHelper(light, 500)
  // res.push(helper)
  return res
}

/* 点灯光 */
function ceatePointLight(arr) {
  const res = arr.map(item => {
    const light = new THREE.PointLight(...item.params)
    // light.castShadow = true
    light.position.set(...item.position)
    return light
  })
  return res
}

/* 聚光灯光 */
function createSpotLight(arr) {
  const res = arr.map(item => {
    let light = new THREE.SpotLight(...item.params)
    // light.castShadow = true
    light.position.set(...item.position)
    light.target.position.set(...item.target)
    return light
  })
  res.forEach(item => {
    const spotLightHelper = new THREE.SpotLightHelper(item)
    res.push(spotLightHelper)
  })
  return res
}
