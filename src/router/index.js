import { createRouter, createWebHistory } from 'vue-router'

import pettyCashRoutes from '../apps/pettyCash/router'

const routes = [
  ...pettyCashRoutes,
]
const router = createRouter({
  history: createWebHistory(),
  routes,
  scrollBehavior (to, from, savedPosition) {
    return savedPosition || { left: 0, top: 0 }
  }
})

export default router
