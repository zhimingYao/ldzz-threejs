/* customModelLoad */
import * as THREE from 'three'

export function customModelLoad() {
  if(this.sence_data.customModels && Array.isArray(this.sence_data.customModels)  ){
    this.sence_data.customModels.forEach((item, index) => {
      let model = item.create()
      model.name = item.name
      let group = new THREE.Group()
      item.objects.forEach(object => {
        let customModel = model.clone()
        customModel.pickControl = object.pickControl
        customModel.scale.set(...object.scale)
        customModel.position.set(...object.position)
        customModel.rotation.set(...object.rotation)
        this.addhtml3D(customModel, object)
        group.add(customModel)
      })
      this.scene.add(group)
    })
  }
}
