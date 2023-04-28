import { debounce } from '@/uilts/tools';

// createSpace
export function createSpace(ele, type, options) {
  this.parentNode = ele;
  this.spaceType = type;
  this.spaceOptions = options;
  this.canvasSpace = null;
  this.context = null;
  this.init = init.bind(this);
  this.resize = resize.bind(this);

  this.init();

  this.resizeObserver = resizeObserver.bind(this)();
}

// 初始化
function init() {
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
}

// 主空间元素初始化
function mainSpaceElementInit(fn) {
  fn()
}

// 监听元素resize事件
function resizeObserver() {
  const resizeObserver = new ResizeObserver(() => {
    console.log('监听了');
    // this.resize();
  });
  resizeObserver.observe(this.parentNode);
  return resizeObserver;
}

function resize() {
  console.log('执行了');
  const width = this.parentNode.clientWidth;
  const height = this.parentNode.clientHeight;
  this.canvasSpace.width = width;
  this.canvasSpace.height = height;
}

// destroySpace
export function destroySpace({ parentNode, canvasSpace }) {
  this.resizeObserver.unobserve(parentNode)
  parentNode.removeChild(canvasSpace);
  console.log('摧毁了:', canvasSpace);
}
