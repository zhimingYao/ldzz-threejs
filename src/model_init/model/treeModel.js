import * as THREE from 'three'
import tree from 'assets/model_image/tree.png'

console.log('树图片', tree);

export const treeModel = () =>{

  let treeGroup = new THREE.Group()
  treeGroup.position.set(0, 0, 0)
  treeGroup.rotation.y = Math.PI/2
  let textureLoader = new THREE.TextureLoader()
  let textureTree = textureLoader.load(tree, function (texture) {
    
  })
  // 批量创建表示一个树的精灵模型
  for (let i = 0; i < 5; i++) {
    for (let j = 0; j < 8; j++) {
      var spriteMaterial1 = new THREE.SpriteMaterial({
        map: textureTree
      })
      var sprite1 = new THREE.Sprite(spriteMaterial1)
      treeGroup.add(sprite1)
      sprite1.scale.set(30, 55, 30)
      sprite1.position.set(-1000, 100, -200)

      let sprite2 = sprite1.clone()
      sprite2.position.set(0, 0, 0)
      treeGroup.add(sprite2)
    }
  }
  return treeGroup
}