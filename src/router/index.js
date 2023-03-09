

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
        i18n:{
          title:""
        },
        component:()=>import('@/views/home/index.vue')
      }
    ]
  },
  {
    path:'/user',
    name:"user",
    i18n:{
      title:""
    },
    component:()=>import('@/views/user/index.vue')
  },
  {
    path:'/login',
    name:"login",
    i18n:{
      title:""
    },
    component:()=>import('@/views/user/login.vue')
  },
  {
    path:'/register',
    name:"register",
    i18n:{
      title:""
    },
    component:()=>import('@/views/user/register.vue')
  },
  {
    path:'/error',
    name:"error",
    i18n:{
      title:""
    },
    component:()=>import('@/views/user/register.vue')
  },
  {
    path:'/error',
    name:"error",
    i18n:{
      title:""
    },
    component:()=>import('@/views/user/register.vue')
  },
]

export default routes