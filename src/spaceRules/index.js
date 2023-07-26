import { debounce } from '@/uilts/tools';
import SRWebGL from './SRWebGL';

// spaceRules
export function spaceRules(ele, type, options) {
  this.parentNode = ele;
  this.spaceType = type;
  this.spaceOptions = options;
  this.canvasSpace = null;
  this.context = null;
  this.createSpace = createSpace.bind(this);
  this.destroySpace = destroySpace.bind(this);
  this.resize = resize.bind(this);
  this.mainSpaceElementInit = mainSpaceElementInit.bind(this);
  this.resizeObserver = resizeObserver.bind(this)();
  this.SRWebGL = SRWebGL
}

// 初始化
function createSpace(fn) {
  const tip = '抱歉，您的浏览器不支持 canvas 元素（这些内容将会在不支持<canvas>元素的浏览器或是禁用了 JavaScript 的浏览器内渲染并展现）';
  const myCanvas = document.createElement('canvas');
  myCanvas.innerText = tip;
  const width = this.parentNode.clientWidth;
  const height = this.parentNode.clientHeight;
  myCanvas.width = width;
  myCanvas.height = height;
  this.parentNode.appendChild(myCanvas);
  const ctx = myCanvas.getContext(this.spaceType, this.spaceOptions);
  this.canvasSpace = myCanvas;
  this.context = ctx;
  this.fn = fn;
}

// 主空间元素初始化
function mainSpaceElementInit() {
  this.fn(this);
}

// 监听空间resize事件
function resizeObserver() {
  const fn = debounce(this.resize, 500);
  const resizeObserver = new ResizeObserver(() => {
    fn();
  });
  resizeObserver.observe(this.parentNode);
  return resizeObserver;
}

// 刷新空间
function resize() {
  const width = this.parentNode.clientWidth;
  const height = this.parentNode.clientHeight;
  this.canvasSpace.width = width;
  this.canvasSpace.height = height;
  this.mainSpaceElementInit();
}

// destroySpace
function destroySpace() {
  this.resizeObserver.unobserve(this.parentNode);
  this.parentNode.removeChild(this.canvasSpace);
  console.log('摧毁了:', this.canvasSpace);
}
