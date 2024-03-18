import { createRouter, createWebHashHistory } from 'vue-router'
import Vue from 'vue'
import Router from 'vue-router'
import HomeView from '@/views/HomeView.vue'

Vue.use(Router)

const routes = [
  {
    path: '/',
    name: 'home',
    component: HomeView
  },
  {
    path: '/about',
    name: 'about',
    // route level code-splitting
    // this generates a separate chunk (about.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    component: () => import(/* webpackChunkName: "about" */ '../views/AboutView.vue')
  }
]

const router = new Router({
  mode: 'hash',
  routes
})

export default router
