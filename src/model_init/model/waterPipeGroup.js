//别墅villa2出水管
import * as THREE from 'three'

let waterPipeGroup = new THREE.Group()
waterPipeGroup.position.set(0, 0, 0)

//树型管道
let v0 = new THREE.Vector3(4200, 4000, -3800)
let v1 = new THREE.Vector3(4200, -500, -3800)

let l0 = new THREE.LineCurve3(v0, v1)

let curvePath = new THREE.CurvePath()
curvePath.curves.push(l0)
let geometry = new THREE.TubeGeometry(curvePath, 64, 50, 64, false)
let material = new THREE.MeshLambertMaterial({
    color: 0x008000,
    side: THREE.DoubleSide,
    transparent: true,
    opacity: 0.5
})
let mesh = new THREE.Mesh(geometry, material)
mesh.position.set(600, -200, 0)
waterPipeGroup.add(mesh)
    //一楼横向管道
let firV0 = new THREE.Vector3(4200, -970, -3800)
let firV1 = new THREE.Vector3(4200, -970, -3500)
let firL2 = new THREE.Vector3(4000, -970, -3500)

let firL0 = new THREE.LineCurve3(firV0, firV1)
let firL1 = new THREE.LineCurve3(firV1, firL2)

let curvePath1 = new THREE.CurvePath()
curvePath1.curves.push(firL0, firL1)
let geometry1 = new THREE.TubeGeometry(curvePath1, 200, 30, 200, false)
let material1 = new THREE.MeshLambertMaterial({
    color: 0xffffff,
    side: THREE.DoubleSide
})
let mesh1 = new THREE.Mesh(geometry1, material1)
mesh1.position.set(0, 0, 0)
waterPipeGroup.add(mesh1)

export default waterPipeGroup