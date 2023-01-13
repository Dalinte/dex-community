import { createRouter, createWebHistory, RouteRecordRaw } from 'vue-router'

import SwapPage from '@/pages/Exchange.vue'

const routes: Array<RouteRecordRaw> = [
  {
    path: '/',
    name: 'home',
    component: SwapPage,
  },
  {
    path: '/about',
    name: 'about',
    // route level code-splitting
    // this generates a separate chunk (about.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    component: () => import(/* webpackChunkName: "about" */ '@/pages/AboutView.vue'),
  },
]

export const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes,
})
