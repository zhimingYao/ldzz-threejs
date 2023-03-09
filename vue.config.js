let path = require("path")
const { defineConfig } = require("@vue/cli-service")
let developmentPath = "./" //开发环境-npm run serve时引用文件路径
let productionPath = "./" //生产环境-npm run build打包后引用文件路径
const AutoImport = require('unplugin-auto-import/webpack')
const Components = require('unplugin-vue-components/webpack')
const Icons = require("unplugin-icons/webpack") 
const IconsResolver = require('unplugin-icons/resolver') 
const { ElementPlusResolver } = require("unplugin-vue-components/resolvers")

function resolve(dir) {
  return path.join(__dirname, "./", dir)
}
// commjs语法
module.exports = defineConfig({
  configureWebpack: {
    plugins: [
      AutoImport({
        import: ["vue", "vue-router", "pinia"],
        // 第三方组件库的解析器
        resolvers: [ElementPlusResolver()]
      }),
      Components({
        // 可以让我们使用自己定义组件的时候免去 import 的麻烦
        dirs: ["src/components/"],
        // 配置需要将哪些后缀类型的文件进行自动按需引入
        extensions: ["vue", "md"],
        // 解析的 UI 组件库，这里以 Element Plus 和 Ant Design Vue 为例
        resolvers: [
          ElementPlusResolver(),
          IconsResolver()
        ]
      }),
      Icons({
        compiler: "vue3",
        autoInstall: true
      })
    ]
  },
  transpileDependencies: true,
  lintOnSave: false, //是否在保存的时候检查
  publicPath:
    process.env.NODE_ENV === "production" ? productionPath : developmentPath, // 基本路径-引用文件的路
  outputDir: "dist", //build打包文件路径
  assetsDir: "static", //静态资源目录，css，js位置
  productionSourceMap: false, //生产环境的 source map，可以将其设置为 false 以加速生产环境构建，默认值是true
  devServer: {
    //反向代理
    proxy: {
      // 配置跨域
      "/api": {
        target: "http://dev.aabb.cn:8082/", //代理地址，这里设置的地址会代替axios中设置的baseURL
        ws: true, //// proxy websockets
        changeOrigin: true, // 如果接口跨域，需要进行这个参数配置
        pathRewrite: {
          //pathRewrite方法重写url
          "^/api": "/"
        }
      }
    }
  },
  chainWebpack: (config) => {
    config.module.rules.delete("svg") //必须，删除默认svg规则
    //针对svg文件添加svg-sprite-loader规则
    config.module
      .rule("svg-sprite")
      .test(/\.svg$/)
      .include.add(resolve("src/assets/icons/svg"))
      .end()
      .use("svg-sprite-loader")
      .loader("svg-sprite-loader")
      .options({
        symbolId: "icon-[name]"
      })
      .end()
  },
  css: {
    loaderOptions: {
      sass: {
        additionalData: `@import "@/assets/scss/global_variable.scss";`
      }
    }
  }
})
