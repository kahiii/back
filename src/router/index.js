import Vue from 'vue'
import VueRouter from 'vue-router'

// Routes
import authentication from './routes/authentication'
import pages from './routes/pages'
import apps from './routes/apps'

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

export default router
