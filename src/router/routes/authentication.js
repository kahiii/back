export default [
  {
    path: '/login',
    name: 'login',
    component: () => import('@/views/pages/authentication/login/Login.vue'),
    meta: {
      layout: 'full',
      guest: true
    }
  }
]
