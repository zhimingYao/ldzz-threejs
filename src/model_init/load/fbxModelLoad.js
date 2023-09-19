import * as THREE from 'three'
import { FBXLoader } from 'three/examples/jsm/loaders/FBXLoader'

export function fbxModelLoad() {
  if (this.sence_data.fbxModels && Array.isArray(this.sence_data.fbxModels)) {
    this.load.fbxLoading = this.sence_data.fbxModels.map(item => {
      return 0
    })
    this.sence_data.fbxModels.forEach((item, index) => {
      let loader = new FBXLoader()

      loader.load(
        this.MODEL_STATIC_BASE_PATH + item.fbx_url,
        model => {
          model.name = item.name
          let group = new THREE.Group()
          item.objects.forEach(object => {
            let fbx = model.clone()
            fbx.traverse(e => {
              if (e.isMesh) {
                e.castShadow = true
                e.receiveShadow = true
                e.geometry.computeVertexNormals()
              }
            })
            fbx.pickControl = object.pickControl
            fbx.scale.set(...object.scale)
            fbx.position.set(...object.position)
            fbx.rotation.set(...object.rotation)
            this.addhtml3D(fbx, object)
            group.add(fbx)
          })
          this.scene.add(group)
        },
        status => {
          this.load.fbxLoading[index] = (status.loaded / status.total) * 100
        }
      )
    })
  }
}
