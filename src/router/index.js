

// router 1

const routes = [
  {
    path:'/',
    redirect:'/home',
    component: ()=> import('@/components/layout'),
    children:[
      {
        path:"/home",
        name:"home",
        meta:{
          title:"主页",
          icon: "",
        },
        component:()=>import('@/views/home/index.vue')
      }
    ]
  },
  {
    path:'/user',
    name:"user",
    meta:{
      title:""
    },
    component:()=>import('@/views/user/index.vue')
  },
  {
    path:'/login',
    name:"login",
    meta:{
      title:""
    },
    component:()=>import('@/views/user/login.vue')
  },
  {
    path:'/register',
    name:"register",
    meta:{
      title:""
    },
    component:()=>import('@/views/user/register.vue')
  },
  {
    path:'/error',
    name:"error",
    meta:{
      title:""
    },
    component:()=>import('@/views/user/register.vue')
  },
]

export default routes