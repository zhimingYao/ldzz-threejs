import * as THREE from 'three'
import coffeeModel from '@/assets/model_image/coffeeFloor.jpg'

export const floor = () => {
  let textureLoader = new THREE.TextureLoader()
  let roteTexture = textureLoader.load(coffeeModel)

  roteTexture.wrapS = THREE.RepeatWrapping
  roteTexture.wrapT = THREE.RepeatWrapping
  roteTexture.repeat.set(10, 10)

  let geometry = new THREE.BoxGeometry(100000, 10000, 100000)
  let material = new THREE.MeshLambertMaterial({
    color: 0x808080,
    side: THREE.DoubleSide,
    map: roteTexture
  })
  let floor = new THREE.Mesh(geometry, material)
  floor.position.set(0, 0, 0)
  floor.name = '大地'
  floor.castShadow = true
  floor.receiveShadow = true

  return floor
}
