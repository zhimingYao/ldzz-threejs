//别墅villa2的电路

import * as THREE from 'three'
import wallGroup from './wallGroup'

let villaPipeGroup2 = new THREE.Group()
villaPipeGroup2.position.set(0, -500, 0)
    
//一楼电线
let v0 = new THREE.Vector3(-510, 3500, -100)
let v1 = new THREE.Vector3(-510, 0, -100)
let v2 = new THREE.Vector3(-510, 0, -520)
let v3 = new THREE.Vector3(-510, 0, -5020)
let v4 = new THREE.Vector3(-510, 0, -5120)
let v5 = new THREE.Vector3(-510, -250, -5120)
let v6 = new THREE.Vector3(510, -250, -5120)
let v7 = new THREE.Vector3(1490, -250, -5120)
let v8 = new THREE.Vector3(1490, 20, -5120)
let v9 = new THREE.Vector3(1490, 20, -5180)
let d0 = new THREE.Vector3(1495, 20, -5180)
let v10 = new THREE.Vector3(1500, -240, -5180)
let v11 = new THREE.Vector3(1500, -240, -3580)
let v12 = new THREE.Vector3(3500, -240, -3580)
let v13 = new THREE.Vector3(3500, -240, -900)
let v14 = new THREE.Vector3(3380, -240, -900)
let v15 = new THREE.Vector3(3380, 440, -900)
    // let v11 = new THREE.Vector3(2000, -250, -5180)



let l0 = new THREE.LineCurve3(v0, v1)
let l1 = new THREE.LineCurve3(v1, v2)
let l2 = new THREE.LineCurve3(v2, v3)
let l3 = new THREE.LineCurve3(v3, v4)
let l4 = new THREE.LineCurve3(v4, v5)
let l5 = new THREE.QuadraticBezierCurve3(v5, v6, v7)
let l6 = new THREE.LineCurve3(v7, v8)
let l7 = new THREE.LineCurve3(v8, v9)
let l8 = new THREE.QuadraticBezierCurve3(v9, d0, v10)
let l9 = new THREE.LineCurve3(v10, v11)
let l10 = new THREE.LineCurve3(v11, v12)
let l11 = new THREE.LineCurve3(v12, v13)
let l12 = new THREE.LineCurve3(v13, v14)
let l13 = new THREE.LineCurve3(v14, v15)

var CurvePath = new THREE.CurvePath();
CurvePath.curves.push(l0, l1, l2, l3, l4, l5, l6, l7, l8, l9, l10, l11, l12, l13)
    // var curve = createPath(point)
let geometry = new THREE.TubeGeometry(CurvePath, 400, 3, 400, false);
let material = new THREE.MeshLambertMaterial({
    color: 0x8B0000,
    side: THREE.DoubleSide,
    transparent: true,
    //opacity:0.3
});
let mesh = new THREE.Mesh(geometry, material)
mesh.position.set(-440, 0, -1500)
villaPipeGroup2.add(mesh)
    //一楼蓝色线（零线）
let p0 = new THREE.Vector3(-510, 3120, -100)
let p1 = new THREE.Vector3(-510, -600, -100)
let p2 = new THREE.Vector3(-510, -600, -400)
let p3 = new THREE.Vector3(-510, -400, -400)
let p4 = new THREE.Vector3(-510, -600, -500)
let p5 = new THREE.Vector3(-510, -400, -500)
let p6 = new THREE.Vector3(-510, -600, -600)
let p7 = new THREE.Vector3(-510, -400, -600)

let a0 = new THREE.LineCurve3(p0, p1)
let a1 = new THREE.LineCurve3(p1, p2)
let a2 = new THREE.LineCurve3(p2, p3)
let a3 = new THREE.LineCurve3(p2, p4)
let a4 = new THREE.LineCurve3(p4, p5)
let a5 = new THREE.LineCurve3(p4, p6)
let a6 = new THREE.LineCurve3(p6, p7)

let curvePath1 = new THREE.CurvePath()
curvePath1.curves.push(a0, a1, a2, a3, a4, a5, a6)
let geometry1 = new THREE.TubeGeometry(curvePath1, 200, 3, 200, false)
let material1 = new THREE.MeshLambertMaterial({
    color: 0x0000FF,
    side: THREE.DoubleSide,
    transparent: true,
})
let mesh1 = new THREE.Mesh(geometry1, material1)
mesh1.position.set(-440, 400, -1450)
villaPipeGroup2.add(mesh1)

//二楼线路
let secV0 = new THREE.Vector3(-510, 1600, -150)
let secV1 = new THREE.Vector3(-510, 1600, -600)
let secV2 = new THREE.Vector3(-510, 1800, -600)
let secV3 = new THREE.Vector3(-510, 1800, -3640)
let secV4 = new THREE.Vector3(-510, 1100, -3640)
let secV5 = new THREE.Vector3(-510, 1100, -4600)
let secV6 = new THREE.Vector3(-510, 900, -4600)
let secV7 = new THREE.Vector3(1010, 900, -4600)
let secV8 = new THREE.Vector3(1010, 900, -3000)
let secV9 = new THREE.Vector3(3500, 900, -3000)
let secV10 = new THREE.Vector3(3500, 1300, -3000)
let secV11 = new THREE.Vector3(3500, 1300, -2700)
let secV12 = new THREE.Vector3(3500, 950, -2700)
let secV13 = new THREE.Vector3(3500, 950, -2000)
let secV14 = new THREE.Vector3(3500, 1300, -2000)
let secV15 = new THREE.Vector3(3700, 1300, -2000)
let secV16 = new THREE.Vector3(3700, 1800, -2000)



let secL0 = new THREE.LineCurve3(secV0, secV1)
let secL1 = new THREE.LineCurve3(secV1, secV2)
let secL2 = new THREE.LineCurve3(secV2, secV3)
let secL3 = new THREE.LineCurve3(secV3, secV4)
let secL4 = new THREE.LineCurve3(secV4, secV5)
let secL5 = new THREE.LineCurve3(secV5, secV6)
let secL6 = new THREE.LineCurve3(secV6, secV7)
let secL7 = new THREE.LineCurve3(secV7, secV8)
let secL8 = new THREE.LineCurve3(secV8, secV9)
let secL9 = new THREE.LineCurve3(secV9, secV10)
let secL10 = new THREE.LineCurve3(secV10, secV11)
let secL11 = new THREE.LineCurve3(secV11, secV12)
let secL12 = new THREE.LineCurve3(secV12, secV13)
let secL13 = new THREE.LineCurve3(secV13, secV14)
let secL14 = new THREE.LineCurve3(secV14, secV15)
let secL15 = new THREE.LineCurve3(secV15, secV16)


let curvePath2 = new THREE.CurvePath()
curvePath2.curves.push(secL0, secL1, secL2, secL3, secL4, secL5, secL6, secL7, secL8, secL9, secL10, secL11, secL12, secL13, secL14, secL15)
let geometry2 = new THREE.TubeGeometry(curvePath2, 200, 3, 200, false)
let material2 = new THREE.MeshLambertMaterial({
    color: 0x8B0000,
    side: THREE.DoubleSide,
    transparent: true
})
let mesh2 = new THREE.Mesh(geometry2, material2)
mesh2.position.set(-440, 400, -1450)
villaPipeGroup2.add(mesh2)

//二楼零线（蓝线）
let secP0 = new THREE.Vector3(-510, 1580, -100)
let secP1 = new THREE.Vector3(-510, 1580, -620)
let secP2 = new THREE.Vector3(-510, 1780, -620)
let secP3 = new THREE.Vector3(-510, 1780, -3620)
let secP4 = new THREE.Vector3(-510, 1080, -3620)
let secP5 = new THREE.Vector3(-510, 1080, -4585)
let secP6 = new THREE.Vector3(-510, 900, -4585)
let secP7 = new THREE.Vector3(1000, 900, -4585)
let secP8 = new THREE.Vector3(1000, 900, -3010)
let secP9 = new THREE.Vector3(3500, 900, -3010)
let secP10 = new THREE.Vector3(3500, 1315, -3010)
let secP11 = new THREE.Vector3(3500, 1315, -2690)
let secP12 = new THREE.Vector3(3500, 1000, -2690)
let secP13 = new THREE.Vector3(3500, 1000, -1990)
let secP14 = new THREE.Vector3(3550, 1000, -1995)
let secP15 = new THREE.Vector3(3550, 1295, -1995)
let secP16 = new THREE.Vector3(3670, 1295, -1995)
let secP17 = new THREE.Vector3(3670, 1795, -1995)


let secA0 = new THREE.LineCurve3(secP0, secP1)
let secA1 = new THREE.LineCurve3(secP1, secP2)
let secA2 = new THREE.LineCurve3(secP2, secP3)
let secA3 = new THREE.LineCurve3(secP3, secP4)
let secA4 = new THREE.LineCurve3(secP4, secP5)
let secA5 = new THREE.LineCurve3(secP5, secP6)
let secA6 = new THREE.LineCurve3(secP6, secP7)
let secA7 = new THREE.LineCurve3(secP7, secP8)
let secA8 = new THREE.LineCurve3(secP8, secP9)
let secA9 = new THREE.LineCurve3(secP9, secP10)
let secA10 = new THREE.LineCurve3(secP10, secP11)
let secA11 = new THREE.LineCurve3(secP11, secP12)
let secA12 = new THREE.LineCurve3(secP12, secP13)
let secA13 = new THREE.LineCurve3(secP13, secP14)
let secA14 = new THREE.LineCurve3(secP14, secP15)
let secA15 = new THREE.LineCurve3(secP15, secP16)
let secA16 = new THREE.LineCurve3(secP16, secP17)



let curvePath3 = new THREE.CurvePath()
curvePath3.curves.push(secA0, secA1, secA2, secA3, secA4, secA5, secA6, secA7, secA8, secA9, secA10, secA11, secA12, secA13, secA14, secA15, secA16)
let geometry3 = new THREE.TubeGeometry(curvePath3, 200, 3, 200, false)
let material3 = new THREE.MeshLambertMaterial({
    color: 0x0000FF,
    side: THREE.DoubleSide,
    transparent: true
})
let mesh3 = new THREE.Mesh(geometry3, material3)
mesh3.position.set(-440, 400, -1450)
villaPipeGroup2.add(mesh3)

//三楼火线（红线）
let thirdV0 = new THREE.Vector3(-510, 3100, -150)
let thirdV1 = new THREE.Vector3(-510, 3100, -1800)
let thirdV2 = new THREE.Vector3(-510, 2500, -1800)
let thirdV3 = new THREE.Vector3(-510, 2500, -4200)
let thirdV4 = new THREE.Vector3(-510, 3200, -4200)
let thirdV5 = new THREE.Vector3(-510, 3200, -4300)
let thirdV6 = new THREE.Vector3(-510, 2405, -4300)
let thirdV7 = new THREE.Vector3(1498, 2405, -4300)
let thirdV8 = new THREE.Vector3(1498, 3205, -4300)
let thirdV9 = new THREE.Vector3(1498, 3205, -4000)
let thirdV10 = new THREE.Vector3(1498, 2405, -4000)
let thirdV11 = new THREE.Vector3(3498, 2405, -4000)
let thirdV12 = new THREE.Vector3(3498, 3280, -4000)


let thirdL0 = new THREE.LineCurve3(thirdV0, thirdV1)
let thirdL1 = new THREE.LineCurve3(thirdV1, thirdV2)
let thirdL2 = new THREE.LineCurve3(thirdV2, thirdV3)
let thirdL3 = new THREE.LineCurve3(thirdV3, thirdV4)
let thirdL4 = new THREE.LineCurve3(thirdV4, thirdV5)
let thirdL5 = new THREE.LineCurve3(thirdV5, thirdV6)
let thirdL6 = new THREE.LineCurve3(thirdV6, thirdV7)
let thirdL7 = new THREE.LineCurve3(thirdV7, thirdV8)
let thirdL8 = new THREE.LineCurve3(thirdV8, thirdV9)
let thirdL9 = new THREE.LineCurve3(thirdV9, thirdV10)
let thirdL10 = new THREE.LineCurve3(thirdV10, thirdV11)
let thirdL11 = new THREE.LineCurve3(thirdV11, thirdV12)


let curvePath4 = new THREE.CurvePath()
curvePath4.curves.push(thirdL0, thirdL1, thirdL2, thirdL3, thirdL4, thirdL5, thirdL6, thirdL7, thirdL8, thirdL9, thirdL10, thirdL11)
let geometry4 = new THREE.TubeGeometry(curvePath4, 200, 3, 200, false)
let material4 = new THREE.MeshLambertMaterial({
    color: 0x8B0000,
    side: THREE.DoubleSide,
    transparent: true
})
let mesh4 = new THREE.Mesh(geometry4, material4)
mesh4.position.set(-440, 400, -1450)
villaPipeGroup2.add(mesh4)
    //三楼零线
let thirdP0 = new THREE.Vector3(-510, 3120, -100)
let thirdP1 = new THREE.Vector3(-510, 3120, -1850)
let thirdP2 = new THREE.Vector3(-510, 2530, -1850)
let thirdP3 = new THREE.Vector3(-510, 2530, -4190)
let thirdP4 = new THREE.Vector3(-510, 3210, -4190)
let thirdP5 = new THREE.Vector3(-510, 3210, -4350)
let thirdP6 = new THREE.Vector3(-510, 2410, -4350)
let thirdP7 = new THREE.Vector3(1498, 2410, -4350)
let thirdP8 = new THREE.Vector3(1498, 3210, -4350)
let thirdP9 = new THREE.Vector3(1498, 3210, -3950)
let thirdP10 = new THREE.Vector3(1498, 2410, -3950)
let thirdP11 = new THREE.Vector3(3498, 2410, -3950)
let thirdP12 = new THREE.Vector3(3498, 3230, -3950)
let thirdP13 = new THREE.Vector3(3498, 3230, -4000)

let thirdA0 = new THREE.LineCurve3(thirdP0, thirdP1)
let thirdA1 = new THREE.LineCurve3(thirdP1, thirdP2)
let thirdA2 = new THREE.LineCurve3(thirdP2, thirdP3)
let thirdA3 = new THREE.LineCurve3(thirdP3, thirdP4)
let thirdA4 = new THREE.LineCurve3(thirdP4, thirdP5)
let thirdA5 = new THREE.LineCurve3(thirdP5, thirdP6)
let thirdA6 = new THREE.LineCurve3(thirdP6, thirdP7)
let thirdA7 = new THREE.LineCurve3(thirdP7, thirdP8)
let thirdA8 = new THREE.LineCurve3(thirdP8, thirdP9)
let thirdA9 = new THREE.LineCurve3(thirdP9, thirdP10)
let thirdA10 = new THREE.LineCurve3(thirdP10, thirdP11)
let thirdA11 = new THREE.LineCurve3(thirdP11, thirdP12)
let thirdA12 = new THREE.LineCurve3(thirdP12, thirdP13)


let curvePath5 = new THREE.CurvePath()
curvePath5.curves.push(thirdA0, thirdA1, thirdA2, thirdA3, thirdA4, thirdA5, thirdA6, thirdA7, thirdA8, thirdA9, thirdA10, thirdA11, thirdA12)
let geometry5 = new THREE.TubeGeometry(curvePath5, 200, 3, 200, false)
let material5 = new THREE.MeshLambertMaterial({
    color: 0x0000FF,
    side: THREE.DoubleSide,
    transparent: true
})
let mesh5 = new THREE.Mesh(geometry5, material5)
mesh5.position.set(-440, 400, -1450)
villaPipeGroup2.add(mesh5)


export default villaPipeGroup2

function createPath(pointsArr) {
    pointsArr = pointsArr.map((point) => new THREE.Vector3(...point)); // 将参数数组转换成点数组的形式

    // 方法一：自定义三维路径 curvePath
    const path = new THREE.CurvePath();
    for (let i = 0; i < pointsArr.length - 1; i++) {
        const lineCurve = new THREE.LineCurve3(pointsArr[i], pointsArr[i + 1]); // 每两个点之间形成一条三维直线
        path.curves.push(lineCurve); // curvePath有一个curves属性，里面存放组成该三维路径的各个子路径
    }
    return path;
}