import { debounce } from '@/uilts/tools';
import SRWebGL from './SRWebGL';

// spaceRules
// spaceRules
export class SpaceRules {
  constructor(ele, type, options) {
    this.parentNode = ele;
    this.spaceType = type;
    this.spaceOptions = options;
    this.canvasSpace = null;
    this.context = null;
    this.SRWebGL = SRWebGL;
  }
  // 初始化
  createSpace(fn) {
    const tip = '抱歉，您的浏览器不支持 canvas 元素（这些内容将会在不支持<canvas>元素的浏览器或是禁用了 JavaScript 的浏览器内渲染并展现）';
    const canvas = document.createElement('canvas');
    canvas.innerText = tip;
    this.parentNode.appendChild(canvas);
    const ctx = canvas.getContext(this.spaceType, this.spaceOptions);
    this.canvasSpace = canvas;
    this.context = ctx;
    this.fn = fn;
    this.resizeObserver = this.handleResizeObserver();
  }
  // 主空间元素初始化
  mainSpaceElementInit() {
    this.fn(this);
  }
  // 监听空间resize事件
  handleResizeObserver() {
    const fn = debounce(this.resize.bind(this), 100);
    const resizeObserver = new ResizeObserver(() => {
      fn();
    });
    resizeObserver.observe(this.parentNode);
    return resizeObserver;
  }
  // 刷新空间
  resize() {
    const width = this.parentNode.clientWidth;
    const height = this.parentNode.clientHeight;
    this.canvasSpace.width = width;
    this.canvasSpace.height = height;
    this.mainSpaceElementInit();
  }
  // destroySpace
  destroySpace() {
    this.resizeObserver.unobserve(this.parentNode);
    this.parentNode.removeChild(this.canvasSpace);
    console.log('摧毁了:', this.canvasSpace);
  }
}
