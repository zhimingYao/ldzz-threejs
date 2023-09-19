// 店名悬挂广告牌
import * as THREE from 'three'
import wallGroup from './wallGroup'
import name3 from '@/assets/model_image/robot/name3.png' 


export const brandModel = () =>{
  const brandGroup = new THREE.Group()
  const brand0 = new wallGroup().createWall1(1100, 600, 10, name3, null, 0, 0, 0)
  brand0.position.set(300, 1000, -4000)

  const brand1 = brand0.clone()
  brand1.position.set(-1200, 1000, -4000)

  const brand2 = new wallGroup().createWall0(10, 500, 10, 0x000000)
  brand2.position.set(-800, 1500, -4000)

  const brand3 = brand2.clone()
  brand3.position.set(0, 1500, -4000)

  const brand4 = brand2.clone()
  brand4.position.set(700, 1500, -4000)

  const brand5 = brand2.clone()
  brand5.position.set(-1500, 1500, -4000)

  
  brandGroup.add(brand0, brand1, brand2, brand3, brand4, brand5)

  return brandGroup
}