/*  */
import * as THREE from 'three'
import { CSS2DObject } from 'three/addons/renderers/CSS2DRenderer.js'
import { CSS3DObject } from 'three/addons/renderers/CSS3DRenderer.js'

export function addhtml(text) {
  const div = document.createElement('div')
  div.className = 'label'
  div.innerText = '1432222222222222222'
  // HTML元素转化为threejs的CSS2模型对象
  const tag = new CSS2DObject(div)
  tag.position.set(0, 0, 0)
  const group = new THREE.Group()
  group.add(tag)
  this.scene.add(group)
}

export function addhtml3D(mesh, object) {
  const { info } = object
  if (info && info.title) {
    const div = document.createElement('div')
    div.className = 'label'
    if (info.title) {
      const h3 = document.createElement('h3')
      h3.innerText = info.title
      div.appendChild(h3)
    }
    if (info.content && info.content.length !== 0) {
      const ul = document.createElement('ul')
      let htmlStr = ``
      info.content.forEach(item => {
        htmlStr += `<li>${item.label}:${item.value}</li>`
      })
      ul.innerHTML = htmlStr
      div.appendChild(ul)
    }
    const tag = new CSS3DObject(div)
    tag.scale.set(...info.scale)
    tag.position.set(...info.Offset)
    tag.rotation.set(...info.rotation)
    tag.visible = info.visible
    mesh.add(tag)
  }
}
