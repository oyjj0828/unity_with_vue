<template>
  <div style="height: 100%;">
    <head>
      <meta charset="utf-8">
      <title>数据中心可视化管理平台</title>
    </head>
    <div class="head" style="z-index: 10;">
      <h1 style="font-size: xx-large;">数据中心可视化管理平台</h1>
      <div class="time" id="showTime">{{ currentTime }}</div>
      <!-- <button @click="test">test</button> -->
    </div>

    <div class="mainbox">
      <div
        :style="{ position: 'absolute', top: '0', left: '0', width: '100%', height: '100%', zIndex: routerViewZIndex }">
        <router-view />
      </div>
      <div class="unity-container" style="z-index: 0;">
        <iframe ref="iframe1" style="width:100%; height:100% ;position: absolute;top:0;left: 0; z-index: inherit;"
          src="./DatacenterFinal/index.html" frameborder="0"></iframe>
      </div>

      <!--<button_nenghaoyuce v-model="view1" :sendState="getState" />-->
      <!--<button1 v-model:view1="view1" :view2="view2" :view3="view3" :sendState="getStae"></button1>-->

      <button_zhuye :view1.sync="view1" :view2.sync="view2" :view3.sync="view3" :view4.sync="view4" :view5.sync="view5"
        :overview="overview" :Go1F="Go1F" :Go2F="Go2F" :Go3F="Go3F" :Go4F="Go4F" :Go5F="Go5F" />
      <button_nenghaoyuce :view1.sync="view1" :view2.sync="view2" :view3.sync="view3" />
      <button_youhuakongzhi :view1.sync="view1" :view2.sync="view2" :view3.sync="view3" />
      <button_nenghaorelitu :top1.sync="top1" :top2.sync="top2" :top3.sync="top3" :top4.sync="top4"
        :EnergyConsumptionMap="EnergyConsumptionMap" :TemperatureMap="TemperatureMap"/>
      <button_baojingxinxi :top1.sync="top1" :top2.sync="top2" :top3.sync="top3" :top4.sync="top4" />
      <button_wendufenbutu :top1.sync="top1" :top2.sync="top2" :top3.sync="top3" :top4.sync="top4"
        :EnergyConsumptionMap="EnergyConsumptionMap" :TemperatureMap="TemperatureMap" />
      <button_tanpaifangjiance :top1.sync="top1" :top2.sync="top2" :top3.sync="top3" :top4.sync="top4" />

      <ul class="clearfix" style="z-index: 10; height: inherit">
        <transition name="fade" mode="out-in">
          <li v-if="view1" style="width: 22%" key="hone">
            <Statistics />
            <Equipments />
            <BarChart />
            <!-- <AirConditioningUnitParameters /> -->
          </li>
          <li v-else-if="view2" style="width: 22%" key="consumption">
            <ServerPrediction />
            <!-- <RefrigePrediction /> -->
            <!-- <TestBackend Name="服务器能耗预测"/>
            <TestBackend Name="空调能耗预测"/> -->
          </li>
          <li v-else-if="view3" style="width: 22%" key="control">
            <dianjia />
            <device_info />
            <!-- <AirConditioningUnitParameters /> -->
            <!-- <button_guzhangjiance :chart.sync="chart" /> -->
          </li>
          <li v-else-if="view4" style="width: 22%" :key="name">
            <AC_consumption_prediction :name="name" />
            <AC_load_prediction :name="name" />
          </li>
          <li v-else-if="view5" style="width: 22%" :key="name_U">
            <EC_consumption_prediction :name="name_U"/>
            <EC_load_prediction :name="name_U"/>
          </li>
        </transition>

        <transition name="fade" mode="out-in">
          <!-- <li v-if="view3 && strategy" style="width: 50%" key="control-1">
        <OptimStrategy />
         </li> -->
          <li style="width: 56%;" key="none">
          </li>
        </transition>

        <transition name="fade" mode="out-in">
          <li v-if="view1" style="width: 22%" key="home">
            <Overview />
            <Prediction/>
            <WaterPolo />
            <!-- <TestBackend Name="设备占用情况"/> -->
            <!-- <Prediction /> -->
          </li>
          <li v-else-if="view2" style="width: 22%" key="consumption">
            <!-- <TemperaturePrediction/>
            <PuePrediction/> -->
            <!-- <TestBackend Name="室内温度预测"/>
            <TestBackend Name="PUE预测"/> -->
          </li>
          <li v-else-if="view3" style="width: 22%" key="none">
            <youhuakongzhi />
          </li>
          <li v-else-if="view4" style="width: 22%" :key="name">
            <AC_voltage_prediction :name="name" />
            <ACTable :name="name" />
          </li>
          <li v-else-if="view5" style="width: 22%" :key="name_U">
            <EC_voltage_prediction :name="name_U"/>
            <ECTable :name="name_U" />
          </li>
        </transition>

      </ul>
    </div>
  </div>
</template>

<script>
import '../public/js/jquery.js'
import '../public/js/echarts.min.js'

/*button*/
import button_zhuye from '@/components/button_zhuye.vue'
import button_nenghaoyuce from '@/components/button_nenghaoyuce.vue'
import button_youhuakongzhi from '@/components/button_youhuakongzhi.vue'
import button_guzhangjiance from '@/components/button_guzhangjiance'
import button_nenghaorelitu from '@/components/button_nenghaorelitu'
import button_baojingxinxi from '@/components/button_baojingxinxi'
import button_wendufenbutu from '@/components/button_wendufenbutu'
import button_tanpaifangjiance from '@/components/button_tanpaifangjiance'

/* Components */
import Temperature from '@/components/Temperature'
import Equipments from '@/components/Equipments'
import BarChart from '@/components/BarChart'
import SlideShow from '@/components/SlideShow'
import WaterPolo from '@/components/WaterPolo'
import Prediction from '@/components/Prediction'
import Statistics from '@/components/Statistics'

import ACTable from '@/components/ACTable'
import AC_consumption_prediction from '@/components/AC_consumption_prediction.vue'
import AC_load_prediction from '@/components/AC_load_prediction.vue'
import AC_voltage_prediction from '@/components/AC_voltage_prediction.vue'

import ECTable from '@/components/ECTable'
import EC_consumption_prediction from '@/components/EC_consumption_prediction.vue'
import EC_load_prediction from '@/components/EC_load_prediction.vue'
import EC_voltage_prediction from '@/components/EC_voltage_prediction.vue'

import AirConditioningUnitParameters from '@/components/AirConditioningUnitParameters'
import OptimizationStrategy from '@/components/OptimizationStrategy'
import ServerPrediction from '@/components/ServerPrediction'
import RefrigePrediction from '@/components/RefrigePrediction'
import TemperaturePrediction from '@/components/TemperaturePrediction'
import PuePrediction from '@/components/PuePrediction'
import TestBackend from '@/components/TestBackend'
import Overview from '@/components/Overview'
import dianjia from '@/components/dianjia'
import device_info from '@/components/device_info'
import youhuakongzhi from '@/components/youhuakongzhi'

import axios from 'axios';
import Vue, { ref } from "vue";

export default {

  setup() {
    let indoorParams = ref([1]);
    return { indoorParams };
  },

  components: {
    button_zhuye,
    button_nenghaoyuce,
    button_youhuakongzhi,
    button_guzhangjiance,
    button_nenghaorelitu,
    button_baojingxinxi,
    button_wendufenbutu,
    button_tanpaifangjiance,

    Equipments,
    Temperature,
    BarChart,
    SlideShow,
    WaterPolo,
    Prediction,
    Statistics,

    ACTable,
    AC_consumption_prediction,
    AC_load_prediction,
    AC_voltage_prediction,

    ECTable,
    EC_consumption_prediction,
    EC_load_prediction,
    EC_voltage_prediction,

    AirConditioningUnitParameters,
    OptimizationStrategy,
    ServerPrediction,
    RefrigePrediction,
    TemperaturePrediction,
    PuePrediction,
    TestBackend,
    Overview,
    dianjia,
    device_info,
    youhuakongzhi,
  },
  data() {
    return {
      isRouteActive: false,
      currentTime: '',
      loading: false,
      view0: true,
      view1: false,
      view2: false,
      view3: false,
      view4: false,
      view5: false,
      top1: false,
      top2: false,
      top3: false,
      top4: false,
      strategy: false,
      monitor: false,
      iframeLoaded: false,
      chart: false,
      data: null,
      name: null,
      name_U: null,
    };
  },
  computed: {
    biankuang() {
      return {
        backgroundColor: this.view1 ? rgba(6, 48, 109, .5) : rgba(6, 48, 109, .5)
      };
    },
    routerViewZIndex() {
      return this.$route.path !== '/' ? 20 : -20;
    }
  },
  mounted() {
    this.updateTime();
    setInterval(() => {
      this.updateTime();
      // this.fetchDataAndUpdate();    
    }, 1000);
    
    window.addEventListener('message', (event) => {
      if (event.origin === window.location.origin) {
        // console.log(event.data)
        this.view1 = false;
        this.view2 = false;
        this.view3 = false;
        // this.view4 = false;
        // this.view5 = false;
        // if (event.data == "AC") {
        //   this.view4 = true;
        // }
        // else if (event.data == "EC") {
        //   this.view5 = true;
        // }
        if (String(event.data).includes("机柜")) {
          this.name = String(event.data);
          this.view4 = false;
          this.view5 = true;
  
        }
        else if (String(event.data).includes("C190D") || String(event.data).includes("BKFG") || String(event.data).includes("C130") || String(event.data).includes("C065") || String(event.data).includes("外机")) {
          this.name_U = String(event.data);
          this.view5 = false;
          this.view4 = true;
        }
      }
    });
  },
  beforeDestroy() {
    clearInterval(this.interval);
  },
  methods: {
    updateTime() {
      const dt = new Date();
      const y = dt.getFullYear();
      const mt = dt.getMonth() + 1;
      const day = dt.getDate();
      const h = dt.getHours();
      const m = dt.getMinutes();
      const s = dt.getSeconds();
      this.currentTime = `${y}/${this.Appendzero(mt)}/${this.Appendzero(day)} ${this.Appendzero(h)}:${this.Appendzero(m)}:${this.Appendzero(s)}`;
    },
    handleIframeLoad() {
      setTimeout(() => {
        this.iframeLoaded = true;
      }, 6500);
    },
    Appendzero(obj) {
      return obj < 10 ? `0${obj}` : obj;
    },
    overview() {
      this.$refs.iframe1.contentWindow.myGameInstance.SendMessage("Overview", "clickMove", "");
      this.$refs.iframe1.contentWindow.myGameInstance.SendMessage("Overview", "allFloors", "");
      this.$refs.iframe1.contentWindow.myGameInstance.SendMessage("Overview", "Fun", "");
    },
    Go1F() {
      this.$refs.iframe1.contentWindow.myGameInstance.SendMessage("Overview_F1", "clickMove", "");
      this.$refs.iframe1.contentWindow.myGameInstance.SendMessage("Overview_F1", "eachFloorOverview", "");
      this.$refs.iframe1.contentWindow.myGameInstance.SendMessage("Overview_F1", "Floor1", "");
    },
    Go2F() {
      this.$refs.iframe1.contentWindow.myGameInstance.SendMessage("Overview_F2", "clickMove", "");
      this.$refs.iframe1.contentWindow.myGameInstance.SendMessage("Overview_F2", "eachFloorOverview", "");
      this.$refs.iframe1.contentWindow.myGameInstance.SendMessage("Overview_F2", "Floor2", "");
    },
    Go3F() {
      this.$refs.iframe1.contentWindow.myGameInstance.SendMessage("Overview_F3", "clickMove", "");
      this.$refs.iframe1.contentWindow.myGameInstance.SendMessage("Overview_F3", "eachFloorOverview", "");
      this.$refs.iframe1.contentWindow.myGameInstance.SendMessage("Overview_F3", "Floor3", "");
    },
    Go4F() {
      this.$refs.iframe1.contentWindow.myGameInstance.SendMessage("Overview_F4", "clickMove", "");
      this.$refs.iframe1.contentWindow.myGameInstance.SendMessage("Overview_F4", "eachFloorOverview", "");
      this.$refs.iframe1.contentWindow.myGameInstance.SendMessage("Overview_F4", "Floor4", "");
    },
    Go5F() {
      this.$refs.iframe1.contentWindow.myGameInstance.SendMessage("Overview_F5", "clickMove", "");
      this.$refs.iframe1.contentWindow.myGameInstance.SendMessage("Overview_F5", "eachFloorOverview", "");
      this.$refs.iframe1.contentWindow.myGameInstance.SendMessage("Overview_F5", "Floor5", "");
    },
    TemperatureMap() {
      this.$refs.iframe1.contentWindow.myGameInstance.SendMessage("TemperatureCube", "ToggleMapVisibility", "");
    },
    EnergyConsumptionMap() {
      this.$refs.iframe1.contentWindow.myGameInstance.SendMessage("EnergyConsumptionCube", "ToggleMapVisibility", "");
    },
    GetFlag(flag) {
      // console.log("--------------------");
      if (flag == 1) {
        // console.log(flag);
        this.view1 = this.view2 = this.view3 = false;
      }
    },
  }
}
</script>

<style lang="scss">
@import '../public/css/comon0.css';

#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  height: inherit;
}

unity-container {
  position: absolute;
  left: 0;
  top: 0;
  width: 100%;
  height: 100%;
}

.rounded-btn {
  white-space: nowrap;
  border: none;
  /* 去除默认边框 */
  background-color: transparent;
  /* 设置背景色 */
  font-weight: bold;
  color: azure;
  /* 设置字体颜色 */
  padding: 12px 0px;
  /* 调整按钮大小 */
  text-align: center;
  /* 居中显示文本 */
  font-size: 18px;
  /* 设置字号 */
  cursor: pointer;
  /* 光标变成手型 */
  border-radius: 100px;
  /* 设置圆角 */
}

/* 定义过渡效果 */
.fade-enter-active,
.fade-leave-active {
  transition: opacity .5s;
}

.fade-enter,
.fade-leave-to {
  transition: opacity 0;
}

</style>
