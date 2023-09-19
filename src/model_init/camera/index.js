import * as THREE from 'three'
import { OrbitControls } from 'three/examples/jsm/controls/OrbitControls.js'

/* 相机 */
export function initCamera() {
  /* 轨道 */
  this.orbitControls = new OrbitControls(this.camera, this.renderer.domElement)
  this.orbitControls.minDistance = -20000
  this.orbitControls.maxDistance = 2000000000
  this.orbitControls.zoomSpeed = 2.0 //相机缩放速度
  this.orbitControls.minZoom = 100000
  this.orbitControls.maxZoom = 200000
  this.orbitControls.enableDamping = true
  this.cameraObj.globalCamera = globalCamera.bind(this)
  this.cameraObj.globalCamera()
  this.cameraObj.cruiseCamera = cruiseCamera.bind(this)
}

/* 自由 */
function globalCamera() {
  this.orbitControls.maxPolarAngle = Math.PI
  this.orbitControls.minPolarAngle = 0
  this.camera.position.set(...this.sence_data.cameraData.globalCameraData.position)
  this.orbitControls.target = new THREE.Vector3(...this.sence_data.cameraData.globalCameraData.target)
}

/* 巡游 */
function cruiseCamera() {
  this.orbitControls.maxPolarAngle = Math.PI / 2
  this.orbitControls.minPolarAngle = Math.PI / 2
  this.camera.position.set(...this.sence_data.cameraData.cruiseCameraData.position)
  this.orbitControls.target = new THREE.Vector3(...this.sence_data.cameraData.cruiseCameraData.target)
  this.orbitControls.dampingFactor = 0.05
  this.orbitControls.screenSpacePanning = false
  this.orbitControls.keyPanSpeed = 20
  this.orbitControls.keys = {
    LEFT: 'KeyA',
    UP: 'KeyW',
    RIGHT: 'KeyD',
    BOTTOM: 'KeyS'
  }
}

/* 第一人称 */
