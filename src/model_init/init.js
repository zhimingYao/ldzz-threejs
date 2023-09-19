/*  */
import * as THREE from 'three';
import { modelLoad } from './load';
import { addEvent } from './event';
import { watchhandle } from './tool';
import { getSence } from './sence';
import { initCamera } from './camera/index';
import { initRenderer } from './renderer/index';
import { initLight } from './light/index';

export class Dbox {
  constructor(ele, config) {
    this.ele = ele;
    this.box_w = this.ele.getBoundingClientRect().width;
    this.box_h = this.ele.getBoundingClientRect().height;
    this.config = config;
    this.init = init.bind(this);
    this.load = watchhandle({}, this.config.loadEvent);
    this.MODEL_STATIC_BASE_PATH = process.env.NODE_ENV === 'production' ? 'https://image.zhushuhebao.com/model/' : 'http://192.168.31.97/model/';
    this.getSence = getSence.bind(this);
    this.sence_data = this.getSence();
    this.cameraObj = {};
    this.eventObj = {};
  }
}
/* 初始化场景 */
function init() {
  // console.log(this, 'this')
  this.scene = new THREE.Scene();

  const axesHelper = new THREE.AxesHelper(5000);
  // this.scene.add( axesHelper );
  this.camera = new THREE.PerspectiveCamera(75, this.box_w / this.box_h, 10, 10000000);
  this.renderer = new THREE.WebGLRenderer({ antialias: true });
  /* 渲染器 */
  this.initRenderer = initRenderer.bind(this);
  this.initRenderer();
  /* 模型加载 */
  this.modelLoad = modelLoad.bind(this);
  this.modelLoad();
  /* 相机 */
  this.initCamera = initCamera.bind(this);
  this.initCamera();
  /* 光线 */
  this.initLight = initLight.bind(this);
  this.initLight();
  /* 事件 */
  this.addEvent = addEvent.bind(this);
  this.addEvent();
  /* 动画 */
  this.animate = animate.bind(this);
  this.animate();
}

/* 动画 */
function animate() {
  requestAnimationFrame(this.animate);
  this.renderer.render(this.scene, this.camera);
  this.css2Renderer.render(this.scene, this.camera);
  this.css3Renderer.render(this.scene, this.camera);
  this.orbitControls.update();
}
