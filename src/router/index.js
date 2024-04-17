import Vue from 'vue'
import Router from 'vue-router'
import HomeView from '@/views/HomeView.vue'
import DeviceInfo from '@/views/DeviceInfo.vue'
import model_info from '@/views/model_info.vue'

Vue.use(Router)

const routes = [
  {
    path: '/',
    name: 'home',
    component: HomeView
  },
  {
    path: '/device_info',
    name: 'device_info',
    component: DeviceInfo
  },
  {
    path: '/model_info',
    name: 'model_info',
    component: model_info
  },
]

const router = new Router({
  mode: 'hash',
  base: process.env.BASE_URL,
  routes
})

export default router
