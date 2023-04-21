// router 1

const routes = [
  {
    path: '/',
    redirect: '/home',
    component: () => import('@/components/layout'),
    children: [
      {
        path: '/home',
        name: 'home',
        meta: {
          title: '主页',
          icon: 'HomeFilled',
          isShow: false,
        },
        component: () => import('@/views/home/index.vue'),
      },
      {
        path: '/3D',
        name: '3D',
        redirect: '/3D/demo',
        meta: {
          title: '3D模型',
          icon: 'Orange',
          isShow: false,
        },
        children: [
          {
            path: '/3D/demo',
            name: 'demo',
            meta: {
              title: '测试',
              icon: 'Document',
              isShow: false,
            },
            component: () => import('@/views/3D/demo/index.vue'),
          },
          {
            path: '/3D/study',
            name: 'study',
            meta: {
              title: '研究',
              icon: 'Document',
              isShow: false,
            },
            component: () => import('@/views/3D/study/index.vue'),
          },
        ],
      },
      {
        path: '/user',
        name: 'user',
        redirect: '/user/info',
        meta: {
          title: '用户',
          icon: 'UserFilled',
          isShow: false,
        },
        children: [
          {
            path: '/user/info',
            name: 'info',
            meta: {
              title: '用户信息',
              icon: 'Document',
              isShow: false,
            },
            component: () => import('@/views/user/index.vue'),
          },
        ],
      },
    ],
  },
  {
    path: '/login',
    name: 'login',
    meta: {
      title: '',
    },
    component: () => import('@/views/login.vue'),
  },
  {
    path: '/register',
    name: 'register',
    meta: {
      title: '',
    },
    component: () => import('@/views/register.vue'),
  },
  {
    path: '/error',
    name: 'error',
    meta: {
      title: '',
    },
    component: () => import('@/views/error.vue'),
  },
];

export default routes;
