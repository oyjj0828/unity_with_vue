import Vue from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'
import "lib-flexible/flexible.js"
import dataV from '@jiaminghi/data-view'

Vue.use(dataV);

new Vue({
  router,
  store,
  render: h => h(App)
}).$mount('#app');