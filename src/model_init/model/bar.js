import * as THREE from 'three'
import wallGroup from '../model/wallGroup'
import tu from '@/assets/model_image/floor/tu.jpg'
import blackStone from '@/assets/model_image/floor/blackStone.jpg'
import wood from '@/assets/model_image/floor/wood.png'
import eat from '@/assets/model_image/robot/eat.jpg'
import delivery from '@/assets/model_image/robot/delivery.jpg'



export const barModel = () => {
  const barGroup = new THREE.Group()
  

  //前面
  const frontWall = new wallGroup().createWall(1600, 800, 6000, tu, null)
  // frontWall.rotation.y = Math.PI/2
  frontWall.position.set(-2000, -50, 0)

  const inWall = new wallGroup().createWall(4500, 800, 1400, tu, null)
  inWall.position.set(-4000, -50 , -2800)

  //上层大理石
  const upWall = new wallGroup().createWall1(1600, 50, 6000, blackStone, null, 1, 2, 10)
  upWall.position.set(-2000, 400, 0)

  const upWall1 = new wallGroup().createWall1(4500, 50, 1400, blackStone, null, 1, 10, 2)
  upWall1.position.set(-4000, 400, -2800)

  //上层玻璃窗
  let doorWall0 = new wallGroup().createWall(3500, 1000, 100, null, null)
  let doorWallBSP0 = new wallGroup().createWall(3400, 900, 100, null, null)
  let doorWallResult0 = new wallGroup().createHole(doorWall0, doorWallBSP0, null, null)
  doorWallResult0.position.set(-3300, 900, -2800)
  let firWindow0 = new wallGroup().createGlassWindow(3400, 900, 20, 0xA9A9A9, 0.2)
  firWindow0.position.set(-3300, 900, -2800)

  //玻璃
  let glessWall = doorWallResult0.clone()
  glessWall.scale.set(1.3, 1, 1)
  glessWall.rotation.y = Math.PI / 2
  glessWall.position.set(-1500, 900, -500)
  let firWindow1 = firWindow0.clone()
  firWindow1.scale.set(1.3, 1, 1)
  firWindow1.rotation.y = Math.PI / 2
  firWindow1.position.set(-1500, 900, -500)

  //玻璃上方木头
  const woodWall = new wallGroup().createWall1(100, 300, 4420, wood, null, 1, 5, 1)
  woodWall.position.set(-1500, 1550, -500)

  const woodWall1 = woodWall.clone()
  woodWall1.scale.set(1, 1, 0.8)
  woodWall1.rotation.y = Math.PI / 2
  woodWall1.position.set(-3300, 1550, -2750)

  // 早餐广告牌
  const brand = new wallGroup().createWall1(150, 600, 4420, eat, null, 1, 7, 1)
  brand.position.set(-1500, 2000, -500)

  const brand1 = new wallGroup().createWall1(150, 600, 3536, eat, null, 1, 7, 1)
  brand1.rotation.y = Math.PI / 2
  brand1.position.set(-3300, 2000, -2750)

  // //快递柜 
  // const deliveryModel = new wallGroup().createWall1(1200, 1500, 200, delivery, null, 1, 1, 1)
  // deliveryModel.position.set(-2800, 500, 4150)


  barGroup.add(frontWall, upWall, inWall, upWall1, doorWallResult0, firWindow0, glessWall, firWindow1, woodWall, woodWall1, brand, brand1)

  return barGroup
}
