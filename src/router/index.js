import Vue from 'vue'
import Router from 'vue-router'
import home_view from '@/views/home_view.vue'
import device_info from '@/views/device_info.vue'
import model_info from '@/views/model_info.vue'
import alarm_info from '@/views/alarm_info.vue'

Vue.use(Router)

const routes = [
  {
    path: '/home',
    name: 'home',
    component: home_view
  },
  {
    path: '/device_info',
    name: 'device_info',
    component: device_info
  },
  {
    path: '/model_info',
    name: 'model_info',
    component: model_info
  },
  {
    path: '/alarm_info',
    name: 'alarm_info',
    component: alarm_info
  },
]

const router = new Router({
  mode: 'hash',
  base: process.env.BASE_URL,
  routes
})

export default router
