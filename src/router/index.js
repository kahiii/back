import Vue from 'vue'
import VueRouter from 'vue-router'

// Routes
import authentication from './routes/authentication'
import pages from './routes/pages'
import apps from './routes/apps'

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
    ...pages,
    ...apps,
    { path: '*', redirect: 'error-404' },
  ],
})

router.beforeEach(async (to, from, next) => {
  if (to.meta.guest) {
      next()
      return
  }

  try {
      const { userProfile } = await User.getMe()
      if (userProfile.active) {
          next()
      }
  } catch (error) {
      next({ name: 'login' })
  }
})
export default router
