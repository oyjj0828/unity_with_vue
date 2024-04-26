import Vue from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'
import "lib-flexible/flexible.js"
import dataV from '@jiaminghi/data-view'
import "vue-easytable/libs/theme-default/index.css";
import VueEasytable from "vue-easytable";
import { VeTable, VePagination, VeIcon, VeLoading, VeLocale } from "vue-easytable";
import zhCN from "vue-easytable/libs/locale/lang/zh-CN.js";
import VXETable from 'vxe-table'
import 'vxe-table/lib/style.css'
import ElementUI from 'element-ui';
import 'element-ui/lib/theme-chalk/index.css';
import Select from 'element-ui'
import * as echarts from 'echarts';
import moment from 'moment';

Vue.use(VXETable);
Vue.use(ElementUI);
Vue.use(dataV);
Vue.use(VueEasytable);
Vue.use(VeTable);
Vue.use(VePagination);
Vue.use(VeIcon);
Vue.use(VeLoading);
Vue.use(Select);
Vue.use(echarts);
Vue.use(moment);

Vue.prototype.$veLoading = VeLoading;
Vue.prototype.$veLocale = VeLocale;

VeLocale.use(zhCN);

new Vue({
  router,
  store,
  render: h => h(App)
}).$mount('#app');
