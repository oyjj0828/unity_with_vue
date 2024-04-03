<template>
  <div style="height: 100%;">

    <head>
      <meta charset="utf-8">
      <title>数据中心可视化管理平台</title>
    </head>
    <footer class="footer" style="z-index: 10; width:100%">
      <!-- Footer content -->
    </footer>
    <div class="loading" style="display: none;">
      <div class="loadbox"> <img src="assets/loading.gif"> 页面加载中... </div>
    </div>
    <div class="head" style="z-index: 10;">
      <h1 style="font-size: xx-large;">数据中心可视化管理平台</h1>
      <div class="time" id="showTime">{{ currentTime }}</div>
      <!-- <button @click="test">test</button> -->
    </div>

    <div class="mainbox">
      <div class="unity-container" style="z-index: -10;">
        <iframe ref="iframe1" style="width:100%; height:100% ;position: absolute;top:0;left: 0;" src="/AC_Test2/index.html"
          frameborder="0"></iframe>
      </div>

      <!--<button_nenghaoyuce v-model="view1" :sendState="getState" />-->
      <!--<button1 v-model:view1="view1" :view2="view2" :view3="view3" :sendState="getStae"></button1>-->
     
      <button_zhuye :view1.sync="view1" :view2.sync="view2" :view3.sync="view3" :test="test" />
      <button_nenghaoyuce :view1.sync="view1" :view2.sync="view2" :view3.sync="view3" />
      <button_youhuakongzhi :view1.sync="view1" :view2.sync="view2" :view3.sync="view3" />
      

      <ul class="clearfix" style="z-index: 10; height: inherit">
        <transition name="fade" mode="out-in">
          <li v-if="view1" style="width: 25%" key="hone">
            <Statistics />
            <Equipments />
            <BarChart />
            <!-- <AirConditioningUnitParameters /> -->
          </li>
          <li v-else-if="view2" style="width: 25%" key="consumption">
            <ServerPrediction />
            <RefrigePrediction />
          </li>
          <li v-else-if="view3" style="width: 25%" key="control">
            <AirConditioningUnitParameters />
            <button_guzhangjiance :chart.sync="chart"/>
          </li>
          <li v-else-if="view4" style="width: 25%" key="control1"></li>
          <li v-else-if="view5" style="width: 25%" key="control2"></li>
        </transition>

        <transition name="fade" mode="out-in">
          <!-- <li v-if="view3 && strategy" style="width: 50%" key="control-1">
            <OptimStrategy />
          </li> -->
          <li style="width: 50%" key="none">
          </li>
        </transition>

        <transition name="fade" mode="out-in">
          <li v-if="view1" style="width: 25%" key="home">
            <SlideShow />
            <Prediction />
            <WaterPolo />
          </li>
          <li v-else-if="view2" style="width: 25%" key="consumption">
            <TemperaturePrediction />
            <PuePrediction />
          </li>
          <li v-else-if="view3" style="width: 25%" key="none" ></li>
          <li v-else-if="view4" style="width: 25%" key="ACCharts">
            <ACTable />
          </li>
          <li v-else-if="view5" style="width: 25%" key="ECCharts">
            <ECTable />
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
import button_zhuye from './components/button_zhuye.vue'
import button_nenghaoyuce from './components/button_nenghaoyuce.vue'
import button_youhuakongzhi from './components/button_youhuakongzhi.vue'
import button_guzhangjiance from '@/components/button_guzhangjiance'

/* Components */
import Temperature from '@/components/Temperature'
import Equipments from '@/components/Equipments'
import BarChart from '@/components/BarChart'
import SlideShow from '@/components/SlideShow'
import WaterPolo from '@/components/WaterPolo'
import Prediction from '@/components/Prediction'
import Statistics from '@/components/Statistics'
import OptimParam from '@/components/OptimParam'
import OptimStrategy from '@/components/OptimStrategy'
import ACTable from '@/components/ACTable'
import ECTable from '@/components/ECTable'
import AirConditioningUnitParameters from '@/components/AirConditioningUnitParameters'
import OptimizationStrategy from '@/components/OptimizationStrategy'
import ServerPrediction from '@/components/ServerPrediction'
import RefrigePrediction from '@/components/RefrigePrediction'
import TemperaturePrediction from '@/components/TemperaturePrediction'
import PuePrediction from '@/components/PuePrediction'


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

    Equipments,
    Temperature,
    BarChart,
    SlideShow,
    WaterPolo,
    Prediction,
    Statistics,
    OptimParam,
    OptimStrategy,
    ACTable,
    ECTable,
    AirConditioningUnitParameters,
    OptimizationStrategy,
    ServerPrediction,
    RefrigePrediction,
    TemperaturePrediction,
    PuePrediction,
  },
  data() {
    return {
      currentTime: '',
      loading: false,
      view0: true,
      view1: false,
      view2: false,
      view3: false,
      view4: false,
      view5: false,
      strategy: false,
      monitor: false,
      iframeLoaded: false,
      chart: false,
    };
  },
  computed: {
    biankuang() {
      return {
        backgroundColor: this.view1 ? rgba(6, 48, 109, .5) : rgba(6, 48, 109, .5)
      };
    }
  },
  mounted() {
    this.updateTime();
    setInterval(() => {
      this.updateTime();      
    }, 1000);


    // window.addEventListener('message', function(e) {
    //   var res = e.data;
      
    //   if(res == 'test'){
    //     console.log("this.view1");
    //     this.view1 = false;
    //   }
    // }) 

    //const iframe = document.getElementById('iframe1');
    window.addEventListener('message', (event) => {
      if (event.origin === window.location.origin) {
        // console.log(event.data)
        this.view1 = false;
        this.view3 = false;
        this.view4 = false;
        this.view5 = false;
        if (event.data == "AC"){
          this.view4 = true;
        }
        else if (event.data == "EC"){
          this.view5 = true;
        }
      }
    });
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
    test(){
      // console.log(this.$refs.iframe1.contentWindow.myGameInstance);
      this.$refs.iframe1.contentWindow.myGameInstance.SendMessage("UI展示界面/总览按钮", "clickMove","");
    },
    GetFlag(flag) {
      // console.log("--------------------");
      if(flag == 1){
        // console.log(flag);
        this.view1 = this.view2 = this.view3 = false;
      }
    }
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
  width: 100%;
  height: 1080px;
}

.rounded-btn {
  border: none;
  /* 去除默认边框 */
  background-color: transparent;
  /* 设置背景色 */
  color: rgb(0, 174, 255);
  /* 设置字体颜色 */
  padding: 12px 36px;
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
  opacity: 0;
}
</style>
