// import * as THREE from 'three'
import { objModelLoad } from './objModelLoad'
import { fbxModelLoad } from './fbxModelLoad'
import { gltfModelLoad } from './gltfModelLoad'
import { customModelLoad } from './customModelLoad'
import { addhtml, addhtml3D } from './addhtml.js'

/* 模型 */
export function modelLoad() {
  this.addhtml = addhtml.bind(this)
  this.addhtml3D = addhtml3D.bind(this)

  this.customModelLoad = customModelLoad.bind(this)
  this.customModelLoad()
  this.fbxModelLoad = fbxModelLoad.bind(this)
  this.fbxModelLoad()
  this.objModelLoad = objModelLoad.bind(this)
  this.objModelLoad()
  this.gltfModelLoad = gltfModelLoad.bind(this)
  this.gltfModelLoad()
}
