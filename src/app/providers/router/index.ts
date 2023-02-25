import { createRouter, createWebHistory, RouteRecordRaw } from 'vue-router'

import SwapPage from '@/pages/Exchange.vue'

const routes: Array<RouteRecordRaw> = [
  {
    path: '/',
    name: 'home',
    component: SwapPage,
  },
]

export const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes,
})
