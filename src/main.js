import { createApp } from 'vue';
import App from './App.vue';
import { createRouter, createWebHashHistory } from 'vue-router';
import routes from './router/index.js';
// import components from "./components/index.js";
import './assets/icons/index';
// import ElementPlus from "element-plus";
// import "element-plus/dist/index.css";
import * as ElementPlusIconsVue from '@element-plus/icons-vue';

let router = createRouter({
  history: createWebHashHistory(),
  routes,
});
const app = createApp(App);
app.use(router).mount('#app');

for (const [key, component] of Object.entries(ElementPlusIconsVue)) {
  app.component(key, component);
}
