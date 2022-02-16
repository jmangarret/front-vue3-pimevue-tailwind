// import Layouts from '@/layouts/main-menu/Main'
// import { auth } from '@/middleware'
// import VueRouterMultiguard from 'vue-router-multiguard'

import Index from './views/index.vue'
import Income from './views/incomes/index.vue'

export default [
  {
    path: '/pettycash',
    component: Index,
    // beforeEnter: VueRouterMultiguard([auth]),
    children: [
      {
        path: '',
        component: Income,
        name: 'income.index',
      }
    ]
  }
]
