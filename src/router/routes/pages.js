export default [
  {
    path: '/dashboard',
    name: 'dashboard',
    component: () => import('@/views/pages/dashboard/Dashboard.vue'),
    meta: {
      layout: 'vertical'
    }
  }
]
