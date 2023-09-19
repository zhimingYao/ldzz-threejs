import * as THREE from 'three';
import { ThreeBSP } from '../ThreeBSP'
//创建各种墙面

class wallGroup {
    createWall0(width, height, depth, colors) {
        
        const houseWallGeo = new THREE.BoxGeometry(width, height, depth);
        const houseWallMat = new THREE.MeshStandardMaterial({
            // bumpScale: 0.59,
            color: colors,
            side: THREE.DoubleSide,
            metalness: 0,
            roughness: 0.8
        });
        let houseWallMesh = new THREE.Mesh(houseWallGeo, houseWallMat);
        houseWallMesh.castShadow = true
        return houseWallMesh;
    }




    //很单纯的墙壁
    createWall(width, height, depth, mapTexture, colors) {
        const textureLoader = new THREE.TextureLoader()
        const imageTexture = textureLoader.load(mapTexture)
        
        const houseWallGeo = new THREE.BoxGeometry(width, height, depth);
        const houseWallMat = new THREE.MeshStandardMaterial({
            map: imageTexture,
            // bumpMap: imageTexture,
            // bumpScale: 0.59,
            color: colors,
            side: THREE.DoubleSide,
            metalness: 0,
            roughness: 0.8
        });
        let houseWallMesh = new THREE.Mesh(houseWallGeo, houseWallMat);
        houseWallMesh.castShadow = true
        // houseWallMesh.receiveShadow = true;
        return houseWallMesh;
    }



    createWall1(width, height, depth, image, colors, t, X, Y) {
        const textureLoader = new THREE.TextureLoader()
        const imageTexture = textureLoader.load(image)
        imageTexture.wrapS = imageTexture.wrapT = THREE.RepeatWrapping;
        if (t === 1) {                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                        
            imageTexture.repeat.x = X;
            // 垂直
            imageTexture.repeat.y = Y;
        }
        const houseWallGeo = new THREE.BoxGeometry(width, height, depth);
        const houseWallMat = new THREE.MeshLambertMaterial({
            map: imageTexture,
            // bumpMap: imageTexture,
            // bumpScale: 0.59,
            color: colors,
            side: THREE.DoubleSide,
            
        });
        let houseWallMesh = new THREE.Mesh(houseWallGeo, houseWallMat);
        houseWallMesh.castShadow = true
        return houseWallMesh;
    }

    //创建玻璃窗
    createGlassWindow(width, heigh, depth, color, opacity) {
            const glassGeo = new THREE.BoxGeometry(width, heigh, depth);
            const glassMat = new THREE.MeshPhongMaterial({
                color: color,
                side: THREE.DoubleSide,
                transparent: true,
                opacity: opacity,

            });
            const glassMath = new THREE.Mesh(glassGeo, glassMat)
            glassMath.castShadow = true
            return glassMath;
        }
        //窗户框
    createWindowFrames(x, y, z, x1, y1, z1, color, t, image, X, Y) {
            let window = new THREE.BoxGeometry(x, y, z)
            let window0 = new THREE.BoxGeometry(x1, y1, z1)
            let material = new THREE.MeshPhongMaterial({
                color: color,
                side: THREE.DoubleSide,

                specular: '#000000',
                shininess: 40
            })
            if (t) {
                const textureLoader = new THREE.TextureLoader()
                const imageTexture = textureLoader.load(image)
                imageTexture.wrapS = imageTexture.wrapT = THREE.RepeatWrapping;
                imageTexture.repeat.x = X;
                // 垂直
                imageTexture.repeat.y = Y;
                material.map = imageTexture
            }
            let mesh0 = new THREE.Mesh(window, material)
            let mesh1 = new THREE.Mesh(window0, material)
            let mesh0BSP = new ThreeBSP(mesh0)
            let mesh1BSP = new ThreeBSP(mesh1)
            let resultBSP = mesh0BSP.subtract(mesh1BSP).toMesh()
            resultBSP.geometry.computeVertexNormals();
            resultBSP.material = material
            resultBSP.castShadow = true
            return resultBSP
        }
        //创建带有窗户、门窗框架的墙
    createHole(box1, box2, color, image, t, X, Y) {
        const textureLoader = new THREE.TextureLoader()
        const imageTexture = textureLoader.load(image)
        if (t === 1) {
            imageTexture.wrapS = imageTexture.wrapT = THREE.RepeatWrapping
            imageTexture.repeat.x = X;
            // 垂直
            imageTexture.repeat.y = Y;
        }
        let box1BSP = new ThreeBSP(box1)
        let box2BSP = new ThreeBSP(box2)
        let result = box1BSP.subtract(box2BSP).toMesh()
        let material0 = new THREE.MeshPhongMaterial({
            color: color,
            map: imageTexture,
            // bumpMap: imageTexture,
            // bumpScale: 0.6,
            side: THREE.DoubleSide,

        })
        result.material = material0
        result.geometry.computeVertexNormals();
        result.castShadow = true
        return result
    }
    creatWindowWall(X, Y, a, b, n, m, X1, Y1, a1, b1, wd, hd, depthZ, wallTexture) {
        //需要挖洞的墙
        //n,m表示需要几行几列的洞
        //wd,hd表示洞之间的距离
        const wall = new THREE.Shape();
        wall.moveTo(X, Y);
        wall.lineTo(X, Y + b);
        wall.lineTo(X + a, Y + b);
        wall.lineTo(X, Y + b);
        let doors = [];
        for (let i = 0; i < n; i++) {
            for (let j = 0; j < m; j++) {
                let door = new THREE.Shape();
                door.moveTo(X1 + j * (a1 + wd), Y1 + i * (b1 + hd));
                door.lineTo(X1 + j * (a1 + wd), Y1 + (i + 1) * b1 + i * hd);
                door.lineTo(X1 + (j + 1) * a1 + j * wd, Y1 + i * (b1 + hd));
                door.lineTo(X1 + (j + 1) * a1 + j * wd, Y1 + (i + 1) * b1 + i * hd);
                doors.push(door);
                wall.holes.push(door);
            }

        }
        const wallGeometry = new THREE.ExtrudeGeometry(wall, {
            depth: depthZ
        });
        const wallMaterial = new THREE.MeshBasicMaterial({
            map: wallTexture,
            side: THREE.DoubleSide
        });
        let doorWallMesh = new THREE.Mesh(wallGeometry, wallMaterial);
        return doorWallMesh;
    }
    createCircle(r1, r2, h, d1, image, X, Y) {
        const textureLoader = new THREE.TextureLoader()
        const imageTexture = textureLoader.load(image)
        imageTexture.wrapS = imageTexture.wrapT = THREE.RepeatWrapping;
        imageTexture.repeat.x = X;
        // 垂直
        imageTexture.repeat.y = Y;
        let circleGeo = new THREE.CylinderGeometry(r1, r2, h, d1)
        let circleMat = new THREE.MeshStandardMaterial({
            map: imageTexture,
            side: THREE.DoubleSide,
            metalness: 0,
            roughness: 0.5
        })
        let circleMesh = new THREE.Mesh(circleGeo, circleMat)
        circleMesh.castShadow = true
        return circleMesh
    }

}
export default wallGroup