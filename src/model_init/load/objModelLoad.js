import * as THREE from 'three'
import { OBJLoader } from 'three/examples/jsm/loaders/OBJLoader'
import { MTLLoader } from 'three/examples/jsm/loaders/MTLLoader'

export function objModelLoad() {
  if (this.sence_data.objModels && Array.isArray(this.sence_data.objModels)) {
    this.load.objLoading = this.sence_data.objModels.map(item => {
      return 0
    })

    this.sence_data.objModels.forEach((item, index) => {
      let loader = new OBJLoader()
      let mtlLoader = new MTLLoader()
      mtlLoader.load(this.MODEL_STATIC_BASE_PATH + item.mtl, mtl => {
        mtl.preload()
        loader.setMaterials(mtl).load(
          this.MODEL_STATIC_BASE_PATH + item.obj_url,
          model => {
            model.name = item.name
            let group = new THREE.Group()
            item.objects.forEach(object => {
              let obj = model.clone()
              obj.traverse(e => {
                if (e.isMesh) {
                  e.material.side = 0
                  e.castShadow = true
                  e.receiveShadow = true
                  e.geometry.computeVertexNormals()
                }
              })
              obj.pickControl = object.pickControl
              obj.scale.set(...object.scale)
              obj.position.set(...object.position)
              obj.rotation.set(...object.rotation)
              this.addhtml3D(obj, object)
              group.add(obj)
            })
            this.scene.add(group)
          },
          status => {
            this.load.objLoading[index] = (status.loaded / status.total) * 100
          }
        )
      })
    })
  }
}
