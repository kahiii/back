import Vue from 'vue'
import VueRouter from 'vue-router'

// Routes
import authentication from './routes/authentication'
import dashboard from './routes/dashboard'
import articles from './routes/articles'
/*import apps from './routes/apps' */

import User from '@/services/users'

Vue.use(VueRouter)

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  scrollBehavior() {
    return { x: 0, y: 0 }
  },
  routes: [
    { path: '/', name: '/', redirect: { name: 'dashboard' } },
    ...authentication,
    ...dashboard,
    ...articles,
    {
      path: '/error-404',
      name: 'error-404',
      component: () => import('@/views/errors/Error404.vue'),
      meta: {
        guest: true
      }
    },
    { path: '*', redirect: { name: 'error-404' } }, // TODO : Error-404
  ],
})

router.beforeEach(async (to, from, next) => {
  if (!to.meta.guest) {
    await User.getMe()
      .then(() => next())
      .catch(() => next({ name: 'login' }))
  } else {
    next()
  }
})

export default router
