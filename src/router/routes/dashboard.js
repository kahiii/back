export default [
  {
    path: '/dashboard',
    component: () => import('@/layouts/vertical/LayoutVertical.vue'),
    children: [
      {
        path: '/dashboard',
        name: 'dashboard',
        component: () => import('@/views/pages/dashboard/Dashboard.vue'),
      }
    ]
  }
]