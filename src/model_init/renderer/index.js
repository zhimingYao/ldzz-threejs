import { CSS2DRenderer } from 'three/addons/renderers/CSS2DRenderer.js'
import { CSS3DRenderer } from 'three/addons/renderers/CSS3DRenderer.js'

export function initRenderer() {
  this.renderer.setSize(this.box_w, this.box_h)
  this.renderer.setClearColor(0x04072f, 1)
  this.renderer.setPixelRatio(window.devicePixelRatio)
  this.renderer.precision = 'mediump'
  this.renderer.antialias = true
  this.renderer.alpha = true
  // this.renderer.shadowMap.enabled = true
  this.ele.appendChild(this.renderer.domElement)
  // 创建一个CSS2渲染器CSS2DRenderer
  this.css2Renderer = new CSS2DRenderer()
  this.css2Renderer.setSize(this.box_w, this.box_h)
  this.css2Renderer.domElement.style.position = 'absolute'
  this.css2Renderer.domElement.style.top = '0'
  this.css2Renderer.domElement.style.left = '0'
  this.css2Renderer.domElement.style.pointerEvents = 'none'
  this.ele.appendChild(this.css2Renderer.domElement)
  // 创建一个CSS3渲染器CSS3DRenderer
  this.css3Renderer = new CSS3DRenderer()
  this.css3Renderer.setSize(this.box_w, this.box_h)
  this.css3Renderer.domElement.style.position = 'absolute'
  this.css3Renderer.domElement.style.top = '0'
  this.css3Renderer.domElement.style.left = '0'
  this.css3Renderer.domElement.style.pointerEvents = 'none'
  this.ele.appendChild(this.css3Renderer.domElement)
}
