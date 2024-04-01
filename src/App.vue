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
        <transition name="fade">
          <li v-if="view1" style="width: 25%">
            <Statistics />
            <Equipments />
            <BarChart />
          </li>
        </transition>

        <li style="width: 50%">
        </li>

        <transition name="fade">
          <li v-if="view1" style="width: 25%">
            <SlideShow />
            <Prediction />
            <WaterPolo />
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

/* Components */
import Temperature from '@/components/Temperature'
import Equipments from '@/components/Equipments'
import BarChart from '@/components/BarChart'
import SlideShow from '@/components/SlideShow'
import WaterPolo from '@/components/WaterPolo'
import Prediction from '@/components/Prediction'
import Statistics from '@/components/Statistics'

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

    Equipments,
    Temperature,
    BarChart,
    SlideShow,
    WaterPolo,
    Prediction,
    Statistics
  },
  data() {
    return {
      currentTime: '',
      loading: false,
      view0: true,
      view1: false,
      view2: false,
      view3: false,
      iframeLoaded: false,
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
        console.log("message")
        this.view1 = false;
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
      console.log(this.$refs.iframe1.contentWindow.myGameInstance);
      this.$refs.iframe1.contentWindow.myGameInstance.SendMessage("UI展示界面/总览按钮", "clickMove","");
    },
    GetFlag(flag) {
      console.log("--------------------");
      if(flag == 1){
        console.log(flag);
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
  transition: opacity 1s;
}

.fade-enter,
.fade-leave-to {
  opacity: 0;
}
</style>
