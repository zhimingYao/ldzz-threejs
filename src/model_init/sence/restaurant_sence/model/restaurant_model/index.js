import * as THREE from 'three'
import wallGroup from '../../../../model/wallGroup'

//图片
import greyStone from '@/assets/model_image/stair/greyStone.jpg'
import outWall2 from '@/assets/model_image/wall/outWall2.jpg'
import blackRion from '@/assets/model_image/blackRion.jpg'
import blackRion1 from '@/assets/model_image/blackRion1.jpg'
import greyWall from '@/assets/model_image/wall/greyWall.jpg'
import grey1 from '@/assets/model_image/color/grey1.jpg'
// import door10 from '@/assets/model_image/door/door10.jpg'
import door21 from '@/assets/model_image/door/door21.jpg'
// import cz from '@/assets/model_image/cz.jpg'
// import manWC from '@/assets/model_image/WC/manWC.jpg'
// import women from '@/assets/model_image/WC/women.jpg'
import brandImage from '@/assets/model_image/robot/brand1.png'




        

export const createVilla = () =>{
  const villaGroup = new THREE.Group()
  villaGroup.position.set(0, 0, 0)

  //地板
  const textureLoader = new THREE.TextureLoader()
  const imageTexture = textureLoader.load(greyStone)
  imageTexture.wrapS = imageTexture.wrapT = THREE.RepeatWrapping;
  imageTexture.repeat.x = 10;
  imageTexture.repeat.y = 10;

//   let floor = new wallGroup().createWall1(12000, 200, 9000, greyStone, null, 1, 10, 10)
//   floor.position.set(-1000, -850, -4500)
//   floor.receiveShadow = true
//   floor.castShadow = true; // cast投射，方块投射阴影 
//   villaGroup.add(floor)

  const floorGeo = new THREE.BoxGeometry(16000, 200, 12000);
  floorGeo.computeVertexNormals()
  const floorMat = new THREE.MeshPhongMaterial({
    map: imageTexture,
    side: THREE.DoubleSide,
    metalness: 0,
    roughness: 0.8
  });
  let floorMesh = new THREE.Mesh(floorGeo, floorMat);
  floorMesh.castShadow = true
  floorMesh.receiveShadow = true
  floorMesh.material.side = 0;
  floorMesh.position.set(-1000, -850, -4500)
  villaGroup.add(floorMesh)


  //大门墙壁最左侧
  let doorWall0 = new wallGroup().createWall(2000, 1500, 100, null, 0xA9A9A9)
  let doorWallBSP0 = new wallGroup().createWall(800, 800, 100, null, null)
  let doorWallResult0 = new wallGroup().createHole(doorWall0, doorWallBSP0, null, outWall2)
  doorWallResult0.position.set(-6000, 0, 0)
  villaGroup.add(doorWallResult0)
  let firFrame0 = new wallGroup().createWindowFrames(800, 800, 100, 700, 700, 100, null, 1, blackRion, 1, 1)
  firFrame0.position.set(-6000, 0, 0)
  villaGroup.add(firFrame0)
  let firWindow0 = new wallGroup().createGlassWindow(700, 700, 20, 0xA9A9A9, 0.2)
  firWindow0.position.set(-6000, 0, 0)
  villaGroup.add(firWindow0)

  const doorWallAddGress = new THREE.Group()
  doorWallAddGress.position.set(-4000, 0, 0)
  villaGroup.add(doorWallAddGress)
  // console.log('组合', doorWallAddGress);

  let doorWall00 = doorWallResult0.clone()
  doorWall00.position.set(0, 0, 0)
  doorWallAddGress.add(doorWall00)
  let firFrame00 = firFrame0.clone()

  firFrame00.position.set(0, 0, 0)
  doorWallAddGress.add(firFrame00)
  let firWindow00 = firWindow0.clone()
  firWindow00.position.set(0, 0, 0)
  doorWallAddGress.add(firWindow00)

  let dWallGress1 = doorWallAddGress.clone()
  dWallGress1.position.set(-2000, 0, 0)
  villaGroup.add(dWallGress1)

  let dWallGress2 = doorWallAddGress.clone()
  dWallGress2.position.set(-2000, 0, -9000)
  villaGroup.add(dWallGress2) 
  let dWallGress3 = doorWallAddGress.clone()
  dWallGress3.position.set(-4000, 0, -9000)
  villaGroup.add(dWallGress3) 
  let dWallGress4 = doorWallAddGress.clone()
  dWallGress4.position.set(-6000, 0, -9000)
  villaGroup.add(dWallGress4) 
  let dWallGress5 = doorWallAddGress.clone()
  dWallGress5.position.set(0, 0, -9000)
  villaGroup.add(dWallGress5) 

  //大门左侧墙壁
  let doorWall = new wallGroup().createWall(2000, 1500, 100, null, 0xA9A9A9)
  let doorWallBSP = new wallGroup().createWall(800, 800, 100, null, null)
  let doorWallResult = new wallGroup().createHole(doorWall, doorWallBSP, null, outWall2)
  doorWallResult.position.set(2000, 0, 0)
  villaGroup.add(doorWallResult)
  let firFrame = new wallGroup().createWindowFrames(800, 800, 100, 700, 700, 100, null, 1, blackRion, 1, 1)
  firFrame.position.set(2000, 0, 0)
  villaGroup.add(firFrame)
  let firWindow = new wallGroup().createGlassWindow(700, 700, 20, 0xA9A9A9, 0.2)
  firWindow.position.set(2000, 0, 0)
  villaGroup.add(firWindow)

  //窗户领子
  let firFrame2 = new wallGroup().createWall(20, 450, 20, null, 0x000000)
  firFrame2.position.set(-150, 175, 0)
  // villaGroup.add(firFrame2)
  let firFrame3 = firFrame2.clone()
  firFrame3.position.set(150, 175, 0)
  // villaGroup.add(firFrame3)
  let firFrame4 = firFrame2.clone()
  firFrame4.scale.set(1, 1.7, 1)
  firFrame4.position.set(0, -40, 0)
  firFrame4.rotation.z = Math.PI / 2
  // villaGroup.add(firFrame4)

  //大门墙壁
  let doorWall2 = doorWall.clone()
  let doorWall2BSP = doorWallBSP.clone()
  doorWall2BSP.scale.set(1.5, 1.5, 1)
  doorWall2BSP.position.set(0, -100, 0)
  let doorWallResult2 = new wallGroup().createHole(doorWall2, doorWall2BSP, null, outWall2)
  doorWallResult2.position.set(0, 0, 0)
  villaGroup.add(doorWallResult2)

  //大门
  let door = doorWallResult2.clone()
  door.scale.set(0.9, 0.9, 1)
  door.position.set(2000, -100, 0)
  // villaGroup.add(door)
  let doorFrame = new wallGroup().createWindowFrames(1200, 1200, 100, 1000, 1000, 100, null, 1,null, 1, 1)
  doorFrame.position.set(0, -100, 0)
  villaGroup.add(doorFrame)
  let doorWindow = new wallGroup().createGlassWindow(1100, 1100, 100, 0x808080, 0.2)
  doorWindow.position.set(0, -100, 0)
  villaGroup.add(doorWindow)



let windowLeftWall = doorWallResult.clone()
windowLeftWall.position.set(4000, 0, 0)
let windowLeftFrame = firFrame.clone()
windowLeftFrame.position.set(4000, 0, 0)
let window = firWindow.clone()
window.position.set(4000, 0, 0)
villaGroup.add(windowLeftWall, windowLeftFrame, window)

let windowFrame1 = firFrame2.clone()
windowFrame1.position.set(3850, 175, 0)
let windowFrame2 = firFrame3.clone()
windowFrame2.position.set(4150, 175, 0)
let windowFrame3 = firFrame4.clone()
windowFrame3.position.set(4000, -40, 0)

villaGroup.add(windowFrame1, windowFrame2, windowFrame3)

//左侧墙壁
let leftWindow = new wallGroup().createWall1(100, 1500, 9000,greyWall, null, 1, 3, 1)
leftWindow.position.set(-7000, 0, -4500)
leftWindow.castShadow = true
villaGroup.add(leftWindow)

//右侧墙壁
let rightWall2 = new wallGroup().createWall(100, 1500, 3600, null, null)
let rightWall2BSP = new wallGroup().createWall(100, 800, 800)
let rightResult = new wallGroup().createHole(rightWall2, rightWall2BSP, null, grey1, 1,1.5, 1)
rightResult.position.set(5000, 0, -7150)
//右侧最后一块墙的窗户框
let rightWindowFrame = new wallGroup().createWindowFrames(100, 800, 800, 100, 700, 700, null, 1, blackRion1, 1, 1)
rightWindowFrame.position.set(5000, 0, -7150)
villaGroup.add(rightWindowFrame)


let rightWall1 = rightResult.clone()
rightWall1.position.set(5000, 0, -1800)
let rightWallFrame1 = rightWindowFrame.clone()
rightWallFrame1.position.set(5000, 0, -1800)
villaGroup.add(rightWallFrame1)


let rightWall = new wallGroup().createWall(100, 1500, 1800, null, null)
let rightWallBSP = new wallGroup().createWall(100, 800, 400)
let rightResult3 = new wallGroup().createHole(rightWall, rightWallBSP, null, grey1, 1, 1, 1 )

rightResult3.position.set(5000, 0, -4500)
let rightWallFrame3 = rightWindowFrame.clone()
rightWallFrame3.scale.set(1, 1, 0.5)
rightWallFrame3.position.set(5000, 0, -4500)
villaGroup.add(rightWallFrame3)
villaGroup.add(rightResult, rightWall1, rightResult3) //一楼右侧外墙
    //一楼房间门
let firstRoom = doorWallResult2.clone()
firstRoom.position.set(0, 0, -5000)
// villaGroup.add(firstRoom)
let firstRoomFrame = new wallGroup().createWindowFrames(1200, 1200, 100, 1100, 1100, 100, null, 1,blackRion1, 1, 1)
firstRoomFrame.position.set(0, -100, -5000)
// villaGroup.add(firstRoomFrame)
let fristRoomWindow = new wallGroup().createGlassWindow(1100, 1100, 100, 0x808080, 0.2)
fristRoomWindow.position.set(0, -100, -5000)
// villaGroup.add(fristRoomWindow)

let firstRoomFrame1 = firFrame2.clone()
firstRoomFrame1.position.set(-100, -100, -5000)
// villaGroup.add(firstRoomFrame1)
let firstRoomFrame2 = firFrame2.clone()
firstRoomFrame2.position.set(100, -100, -5000)
// villaGroup.add(firstRoomFrame2)
let firstRoomFrame3 = new wallGroup().createWall(10, 1100, 10, null, 0x808080)
firstRoomFrame3.position.set(0, -100, -5000)
// villaGroup.add(firstRoomFrame3)
    //一楼房间右侧墙
let firstRoomWall = new wallGroup().createWall(100, 1500, 4000, null, null)
let firstRoomWallBSP = firstRoomWall.clone()
firstRoomWallBSP.scale.set(1, 0.5, 0.1)

let firstRResult = new wallGroup().createHole(firstRoomWall, firstRoomWallBSP, null, grey1)
firstRResult.position.set(1000, 0, -7000)
// villaGroup.add(firstRResult)
let firstRoomFrame4 = new wallGroup().createWindowFrames(100, 750, 400, 100, 650, 300, null, 1, blackRion1, 1, 1)
firstRoomFrame4.position.set(1000, 0, -7000)
// villaGroup.add(firstRoomFrame4)
let firstRoomGress = new wallGroup().createGlassWindow(100, 650, 300, 0x808080, 0.2)
firstRoomGress.position.set(1000, 0, -7000)
// villaGroup.add(firstRoomGress)

//房间中间隔板
let firstMWall = doorWall.clone()
let firstMWallBSP = new wallGroup().createWall(600, 1200, 100, null, null)
firstMWallBSP.position.set(0, -50, 0)
let firstMResult = new wallGroup().createHole(firstMWall, firstMWallBSP, null, grey1)
firstMResult.position.set(0, 0, -8000)
// villaGroup.add(firstMResult)
let firstRoomDoor = new wallGroup().createWall1(600, 1200, 100, door21, null)
firstRoomDoor.position.set(0, -50, -8000)
// villaGroup.add(firstRoomDoor)
    //房间的后门
let firstBlackWall = firstMResult.clone()
firstBlackWall.position.set(0, 0, -9000)
let firstBlackDoor = firstRoomDoor.clone()
firstBlackDoor.position.set(0, -50, -9000)
// villaGroup.add(firstBlackWall, firstBlackDoor)
    //一楼后墙
let firBlackWall = doorWallResult.clone()
firBlackWall.position.set(2000, 0, -9000)
let firBlackWindow = firWindow.clone()
firBlackWindow.position.set(2000, 0, -9000)
let firBlackFrame = firFrame.clone()
firBlackFrame.position.set(2000, 0, -9000)
let firBlackFrame1 = firFrame2.clone()
firBlackFrame1.position.set(2000, 200, -9000)
let firBlackFrame2 = firFrame2.clone()
firBlackFrame2.rotation.z = Math.PI / 2
firBlackFrame2.scale.set(1, 1.6, 1)
firBlackFrame2.position.set(2000, -30, -9000)
villaGroup.add(firBlackWall, firBlackWindow, firBlackFrame, firBlackFrame1, firBlackFrame2)

//楼梯后面的墙壁
let firBlackWall1 = doorWallResult.clone()
firBlackWall1.position.set(4000, 0, -9000)
let firBlackWindow1 = firWindow.clone()
firBlackWindow1.position.set(4000, 0, -9000)
let firBlackFrame3 = firBlackFrame.clone()
firBlackFrame3.position.set(4000, 0, -9000)
villaGroup.add(firBlackWall1, firBlackWindow1, firBlackFrame3)
    //楼梯下的房间厕所
let secRoomDoor = firstMResult.clone()
secRoomDoor.rotation.y = Math.PI / 2
secRoomDoor.position.set(3000, -50, -4000)
// villaGroup.add(secRoomDoor)
let secRoomDoorResult = new wallGroup().createWall(600, 1200, 50, door21, null)
secRoomDoorResult.rotation.y = Math.PI / 2
secRoomDoorResult.position.set(3000, 0, -4000)
// villaGroup.add(secRoomDoorResult)

let doorWall1 = new wallGroup().createWall(2000, 1500, 100, grey1, null)
let secRoomWall = doorWall1.clone()
secRoomWall.position.set(4000, -50, -3000)
// villaGroup.add(secRoomWall)
let secRoomWall1 = doorWall1.clone()
secRoomWall1.position.set(4000, -50, -5000)
// villaGroup.add(secRoomWall1)

//门口的房间
let secRoomDoor1 = new wallGroup().createWall(100, 1500, 3000, null, null)
let secRoomDoorBSP = new wallGroup().createWall(100, 1200, 600, null, null)
let secRoomResult = new wallGroup().createHole(secRoomDoor1, secRoomDoorBSP, null, grey1)
secRoomResult.position.set(3000, -50, -1500)
// villaGroup.add(secRoomResult)
let secRoomDoor2 = new wallGroup().createWall1(50, 1200, 600, door21, null)
secRoomDoor2.position.set(3000, -50, -1500)
// villaGroup.add(secRoomDoor2)

//卫生间字样
// let WCFront = new wallGroup().createWall(20, 400, 200, manWC, null)
// WCFront.position.set(-120, 300, -2000)
// secRoomResult.add(WCFront)
// let WCFront1 = new wallGroup().createWall(20, 400, 200, manWC, null)
// WCFront1.position.set(-120, 300, 500)
// secRoomResult.add(WCFront1)

//门口把手
let doorH = new wallGroup().createWall0(50, 500, 50, 0x000000)
doorH.position.set(-200, 50, 0)
villaGroup.add(doorH)

let doorH1 = doorH.clone()
doorH1.position.set(200, 50, 0)
villaGroup.add(doorH1)

//门口招牌
let brand = new wallGroup().createWall1(1500, 500, 50, brandImage, null, 1,1,1)
brand.position.set(0, 950, 0)
villaGroup.add(brand)





// villaGroup.add(stairsGroup)
// villaGroup.add(waterPipeGroup)
// villaGroup.add(wireGroup)


return villaGroup
}


