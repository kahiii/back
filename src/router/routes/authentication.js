export default [
  {
    path: '/login',
    component: () => import('@/layouts/full/LayoutFull.vue'),
    meta: {
      guest: true
    },
    pathToRegexpOptions: { strict: true },
    children: [
      {
        path: '/login',
        name: 'login',
        component: () => import('@/views/pages/authentication/login/Login.vue'),
        pathToRegexpOptions: { strict: true },
        meta: {
          guest: true
        },
      }
    ]
  }
]
