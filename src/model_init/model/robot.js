// 点餐机
import * as THREE from 'three'
import wallGroup from './wallGroup' 
import robotImage from '@/assets/model_image/robot/robotImage.png'


export const robotModel = () =>{
  const robotGroup = new THREE.Group()

  const robot = new wallGroup().createWall1(400, 400, 50, robotImage, null, 1, 1, 1)
  robot.position.set(0, 300, 50)
  robot.rotation.x = -Math.PI / 4


  const robot1 = new wallGroup().createWall0(500, 500, 50,0xD3D3D3)
  robot1.position.set(0, 300, 0)
  robot1.rotation.x = -Math.PI / 4


  const robot2 = new wallGroup().createWall0(50, 800, 50, 0xD3D3D3)
  robot2.position.set(0, -100, 0)

  const robot3 = new wallGroup().createWall0(300, 50, 300, 0xD3D3D3)
  robot3.position.set(0, -500, 0)


  robotGroup.add(robot, robot1, robot2, robot3)

  return robotGroup
}