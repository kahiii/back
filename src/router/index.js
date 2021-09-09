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
    { path: '/', redirect: { name: 'dashboard' } },
    ...authentication,
    ...dashboard,
    ...articles,
    { path: '*', redirect: { name: 'dashboard' } }, // TODO : Error-404
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
