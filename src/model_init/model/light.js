// http://192.168.31.10:9000/jnhgcould-dev/2023/08/21/8dbb8b5a97b84aa8b45f08f67140ad80.obj
// http://192.168.31.10:9000/jnhgcould-dev/2023/08/21/f5c432f3fbc74eedb2881df1de405c81.mtl

import { MTLLoader } from 'three/examples/jsm/loaders/MTLLoader'
import { OBJLoader } from 'three/examples/jsm/loaders/OBJLoader'

export const lightModelLoader = async() =>{
  const lightModel = await new MTLLoader()
  return new Promise((resolve, reject) => {
    lightModel.load( 'http://192.168.31.10:9000/jnhgcould-dev/2023/08/21/f5c432f3fbc74eedb2881df1de405c81.mtl', function ( materials ) {
      materials.preload();
      new OBJLoader()
        .setMaterials( materials )
        .load( 'http://192.168.31.10:9000/jnhgcould-dev/2023/08/21/8dbb8b5a97b84aa8b45f08f67140ad80.obj', function ( object ) {
          object.scale.set( 130, 130, 130 );
          object.name = '沙发'
          resolve(object)
        });
    } );
  })
  
}