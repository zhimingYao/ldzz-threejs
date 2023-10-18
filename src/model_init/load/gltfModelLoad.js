import * as THREE from 'three'
import { GLTFLoader } from 'three/examples/jsm/loaders/GLTFLoader'
import { DRACOLoader } from 'three/examples/jsm/loaders/DRACOLoader'

export function gltfModelLoad() {
  if (this.sence_data.gltfModels && Array.isArray(this.sence_data.gltfModels)) {
    this.load.gltfLoading = this.sence_data.gltfModels.map(item => {
      return 0
    })
    this.sence_data.gltfModels.forEach((item, index) => {
      let loader = new GLTFLoader()

      const dracoLoader = new DRACOLoader()
      // 设置解压路径，这个文件直接放在项目的public目录下面即可，后面会截图指明gltf目录所在位置
      dracoLoader.setDecoderPath('https://image.zhushuhebao.com/bim/draco/')
      dracoLoader.setDecoderConfig({ type: 'js' })
      dracoLoader.preload()
      loader.setDRACOLoader(dracoLoader)

      loader.load(
        this.MODEL_STATIC_BASE_PATH + item.gltf_url,
        model => {
          model.scene.name = item.name
          let group = new THREE.Group()
          item.objects.forEach(object => {
            let gltf = model.scene.clone()
            //   gltf.traverse(e=>{
            //    if(e.isMesh){
            //     e.material.side = 0;
            //     e.castShadow = true
            //     e.receiveShadow = true
            //     e.geometry.computeVertexNormals()
            //    }
            // })
            gltf.pickControl = object.pickControl
            gltf.scale.set(...object.scale)
            gltf.position.set(...object.position)
            gltf.rotation.set(...object.rotation)
            this.addhtml3D(gltf, object)
            group.add(gltf)
          })
          this.scene.add(group)
        },
        status => {
          this.load.gltfLoading[index] = (status.loaded / status.total) * 100
        }
      )
    })
  }
}
