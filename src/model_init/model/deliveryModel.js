//快递柜 
import * as THREE from 'three'
import wallGroup from './wallGroup'
import delivery from '@/assets/model_image/robot/delivery.jpg'

export const deliveryModel = () =>{
  const deliveryModelGroup = new THREE.Group()

  const deliveryModel = new wallGroup().createWall1(1200, 1500, 200, delivery, null, 1, 1, 1)
  deliveryModel.position.set(-2800, 500, 4150)
  deliveryModelGroup.add(deliveryModel)
  return deliveryModelGroup
}
