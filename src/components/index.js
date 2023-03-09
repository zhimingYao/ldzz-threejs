import svgIcon from "./svgIcon/index.vue";

let components = [svgIcon];
export default {
  install: (app) => {
    components.forEach(ele =>{
      app.component(ele.name,ele)
    })
  },
};
