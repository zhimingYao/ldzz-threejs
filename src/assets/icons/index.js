
// 定义一个加载目录的函数
const requireAll = (r) => r.keys().map(r);
// 加载目录下的所有的 svg 文件
requireAll(require.context("./svg", false, /\.svg$/));