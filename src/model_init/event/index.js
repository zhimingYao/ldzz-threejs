import * as THREE from 'three';
import { TransformControls } from 'three/addons/controls/TransformControls.js';
import { DragControls } from 'three/addons/controls/DragControls.js';

/* 事件 */
export function addEvent() {
  const picker = new Picker(this);
  const cameraControl = new CameraControl(this);
  this.renderer.domElement.addEventListener('mouseenter', () => {
    this.renderer.domElement.addEventListener('click', picker.onPicker);
    this.renderer.domElement.removeEventListener('mouseleave', removeEvent);
  });
  /* 巡游 */
  this.eventObj.addCameraMoveEvent = () => {
    this.cameraObj.cruiseCamera();
    this.orbitControls.listenToKeyEvents(document);
    // document.addEventListener('keydown', cameraControl.handleKeyDown)
  };
  this.eventObj.removeCameraMoveEvent = () => {
    this.cameraObj.globalCamera();
    this.orbitControls.stopListenToKeyEvents();
    // document.removeEventListener('keydown', cameraControl.handleKeyDown)
  };
  /* 拖拽 */
  this.eventObj.addDragTransformEvent = () => {
    document.addEventListener('click', picker.dragTransform);
  };
  this.eventObj.removeDragTransformEvent = () => {
    document.removeEventListener('click', picker.dragTransform);
    picker.transformControls.detach();
  };
}
export const removeEvent = () => {
  this.renderer.domElement.removeEventListener('mousemove');
  this.renderer.domElement.removeEventListener('mouseleave');
};

/* 拾取 */
class Picker {
  intersects = [];
  originally = {};
  constructor(_this) {
    Object.assign(this, _this);
    const raycaster = new THREE.Raycaster();
    const pointer = new THREE.Vector2();
    this.onPicker = event => {
      pointer.x = (event.clientX / this.box_w) * 2 - 1;
      pointer.y = -(event.clientY / this.box_h) * 2 + 1;
      raycaster.setFromCamera(pointer, this.camera);
      this.intersects = raycaster.intersectObjects(this.scene.children);
      console.log(this.intersects, '-this.intersects');
      // this.setPickScale(this.intersects, 1.1)
      // this.setPickColor(this.intersects, 0x9d70f1)
      this.renderer.render(this.scene, this.camera);
    };

    // 初始化拖拽控件
    let objects = [];
    let dragControls = new DragControls(objects, this.camera, this.renderer.domElement);
    this.drag = () => {
      dragControls.addEventListener('dragstart', event => {
        console.log('dragstart', event);
        this.orbitControls.enabled = false;
      });
      dragControls.addEventListener('dragend', event => {
        console.log('dragend');
        this.orbitControls.enabled = true;
      });
    };
    this.transformControls = new TransformControls(this.camera, this.renderer.domElement);
    this.scene.add(this.transformControls);
    this.dragTransform = event => {
      pointer.x = (event.clientX / this.box_w) * 2 - 1;
      pointer.y = -(event.clientY / this.box_h) * 2 + 1;
      raycaster.setFromCamera(pointer, this.camera);
      this.intersects = raycaster.intersectObjects(this.scene.children);
      if (this.intersects.length) {
        const objectMesh = this.intersects.filter(item => {
          return item.object.type === 'Mesh';
        });
        if (objectMesh.length) {
          const model = objectMesh[0].object.parent;
          this.transformControls.attach(model);
        } else {
          this.transformControls.detach();
        }
      }
    };
  }
  /* 选中改变当前模型大小 */
  setPickScale(arr, scale) {
    if (arr.length) {
      const model = arr[0].object.parent;
      console.log(model);

      if (model.pickControl && model.pickControl.isPick) {
        if (model.pickControl.picked) {
          this.lastPick.model.scale.copy(this.lastPick.old);
          model.pickControl.picked = false;
        } else {
          if (this.lastPick) {
            this.lastPick.model.scale.copy(this.lastPick.old);
          }
          this.lastPick = {
            model,
            old: model.scale.clone(),
          };
          model.scale.multiplyScalar(scale);
          model.pickControl.picked = true;
        }
      }
    }
  }
  /* 选中改变当前模型颜色，不可用 */
  setPickColor(arr, color) {
    if (arr.length) {
      const model = arr[0].object.parent;
      const object = arr[0].object;
      console.log(model, object);
      if (model.pickControl && model.pickControl.isPick) {
        if (object.picked) {
          Array.isArray(this.lastPick.object.material)
            ? this.lastPick.object.material.map((item, index) => {
                return item.copy(this.lastPick.old[index]);
              })
            : this.lastPick.object.material.copy(this.lastPick.old);
          object.picked = false;
        } else {
          if (this.lastPick) {
            Array.isArray(this.lastPick.object.material)
              ? this.lastPick.object.material.map((item, index) => {
                  return item.copy(this.lastPick.old[index]);
                })
              : this.lastPick.object.material.copy(this.lastPick.old);
          }
          this.lastPick = {
            object,
            old: Array.isArray(object.material)
              ? object.material.map(item => {
                  console.log(item.clone());
                  return item.clone();
                })
              : object.material.clone(),
          };
          if (Array.isArray(object.material)) {
            object.material.forEach(item1 => {
              item1.emissive.set(color);
            });
          } else {
            // object.material.opacity = 0.0
            object.material.emissive.set(color);
          }
          object.picked = true;
        }
      }
    }
  }
  /* 选中当前模型部分 */
  setPickBox(arr) {
    if (arr.length) {
      const mob = this.getModel(arr[0].object);
      if (!mob || !mob[1]) return;
      let [model, [css3label]] = this.getModel(arr[0].object);
      console.log(model, css3label);

      if (model && model.pickControl && model.pickControl.isPick && css3label) {
        if (css3label.visible) {
          css3label.visible = false;
        } else {
          css3label.visible = true;
        }
      }
    }
  }
  /* 获取物体和label */
  getModel(obj) {
    if (Object.hasOwnProperty.call(obj || {}, 'pickControl')) {
      let labelobj = obj.children.filter(item => {
        return item.isCSS3DObject;
      });
      return [obj, labelobj];
    }
    if (obj.parent) {
      return this.getModel(obj.parent);
    }
  }
}

class CameraControl {
  constructor(_this) {
    Object.assign(this, _this);
    this.handleKeyDown = e => {
      var ev = e || window.event;
      const azimuthalAngle = this.orbitControls.getAzimuthalAngle();
      const polarAngle = this.orbitControls.getPolarAngle();
      console.log('水平垂直角', azimuthalAngle, polarAngle);
      switch (ev.keyCode) {
        case 87: //w
        case 38: //up
          this.targetCalculation(-50, 'z', azimuthalAngle, polarAngle);
          break;
        case 83: //s
        case 40: //down
          this.targetCalculation(50, 'z', azimuthalAngle, polarAngle);
          break;
        case 65: //a
        case 37: //left
          this.targetCalculation(-50, 'x', azimuthalAngle, polarAngle);
          break;
        case 68: //d
        case 39: //right
          this.targetCalculation(50, 'x', azimuthalAngle, polarAngle);
          break;
        default:
          break;
      }
    };
  }
  targetCalculation(distance, direction, azimuthalAngle = 0, polarAngle = Math.PI / 2) {
    if (!(distance && direction && azimuthalAngle && polarAngle)) return false;
    let target_x, target_y, target_z;
    if (direction === 'z') {
      if (-Math.PI / 2 < azimuthalAngle && Math.PI / 2 > azimuthalAngle) {
        target_z = distance * Math.cos(Math.abs(azimuthalAngle));
      } else {
        target_z = distance * Math.cos(Math.abs(azimuthalAngle));
      }
      if (-Math.PI / 2 < polarAngle && Math.PI / 2 > polarAngle) {
        target_y = distance * Math.cos(Math.abs(polarAngle));
      } else {
        target_y = distance * Math.cos(Math.abs(polarAngle));
      }
      if (0 < azimuthalAngle) {
        target_x = distance * Math.sin(azimuthalAngle);
      } else {
        target_x = distance * Math.sin(azimuthalAngle);
      }
    }
    if (direction === 'x') {
      if (-Math.PI / 2 < azimuthalAngle && Math.PI / 2 > azimuthalAngle) {
        target_x = distance * Math.cos(Math.abs(azimuthalAngle));
      } else {
        target_x = distance * Math.cos(Math.abs(azimuthalAngle));
      }
      if (-Math.PI / 2 < polarAngle && Math.PI / 2 > polarAngle) {
        target_y = distance * Math.cos(Math.abs(polarAngle));
      } else {
        target_y = distance * Math.cos(Math.abs(polarAngle));
      }
      if (0 < azimuthalAngle) {
        target_z = -distance * Math.sin(azimuthalAngle);
      } else {
        target_z = -distance * Math.sin(azimuthalAngle);
      }
    }
    this.camera.position.x += target_x;
    this.camera.position.y += target_y;
    this.camera.position.z += target_z;
    this.orbitControls.target.x += target_x;
    this.orbitControls.target.y += target_y;
    this.orbitControls.target.z += target_z;
  }
}
