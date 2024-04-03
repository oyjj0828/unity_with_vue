<template>
  <dv-border-box-13 backgroundColor="rgba(6, 48, 109, .5)" style="height: calc(50% ); z-index: 11;">
    <div class="boxall" style="height: calc(100% )">
      <div class="alltitle">工作状态</div>

      <div class=" boxnav " id="echarts4" style="user-select: none; z-index: -10;"
        _echarts_instance_="ec_1710235324242">
        <div class="mainbox" style="position: relative; overflow:hidden; width: 100%; height: 100%;
                   padding: 0px; margin: 0px; border-width: 0px; cursor: default;">
          <div style="height:5%;"></div>

          <dv-scroll-board :config="config" :key="updateDataCount + '-' + initDataCount"
            style="width:100%; height:75%" />
          <button class="button" @click="handleClick">优化策略</button>


        </div>
        <div v-if="test">
          <OptimizationStrategy :Temperature="Temperature" :mode.sync="mode" />
        </div>
      </div>
    </div>
  </dv-border-box-13>
</template>

<script>

import OptimizationStrategy from './OptimizationStrategy.vue';

export default {
  // props:['strategy','mode'],

  components: {
    OptimizationStrategy
  },

  data() {
    return {
      config: {

        data: [
          ['空调型号', '华为Fusion8000e200'],
          ['工作模式', '干模式'],
          ['室外进风干球温度', '17°C'],
          ['室外进风湿球温度', '18°C'],
          ['负载率', '34%'],
          ['服务器能耗', '750KW'],
        ],
        index: false,
        align: ['center', 'center'],
        carousel: 'page',
        oddRowBGC: '#2457A0',
        evenRowBGC: '#068AC0',
        rowNum: 6
      },

      test: false,
      status: 0, // 你的数据状态
      mode: 0,

      initDataCount: 0,
      updateDataCount: 0,
      boardKey: 0,// 初始key

      Temperature: [],
    };
  },
  created() {
    // 初始时遍历数据进行标红

    // 每隔一秒更新数据
    setInterval(() => {
      this.updateData();
    }, 5000);
    setInterval(() => {
      this.changemode();
    }, 500);
  },
  methods: {
    // TemperatureStatus(Temperature1,Temperature2){
    //   if(Temperature1<=16){
    //     return 0;
    //   };
    //   if(Temperature1>16 && Temperature2<=19){
    //     return 1;
    //   };
    //   if(Temperature2>19){
    //     return 2;
    //   };
    // },
    handleClick() {
      // 设置status
      //console.log(this.config.data[2][1]);
      // console.log(this.config.data[3][1]);
      //  const Temperature1 = parseFloat(this.config.data[2][1].slice(0, -2)); 
      //   const Temperature2 = parseFloat(this.config.data[3][1].slice(0, -2)); 
      //console.log(Temperature1);
      //console.log(Temperature2);
      // this.status = this.TemperatureStatus(Temperature1, Temperature2);
      // console.log(this.status);
      // 发送更新后的 status 给子组件
      // this.$emit('update:status', this.status);
      // 在这里处理点击事件
      // if(this.strategy){
      //   this.$emit('update:strategy', false);
      //   // this.$emit('send-data', this.status);
      // }
      // else{
      //   this.$emit('update:strategy', true);
      //   // this.$emit('send-data', this.status);
      // }
      this.test = !this.test;
    },

    updateData() {
      // 修改第三行和第四行的第二列数据
      // 第三行第二列数据范围在10-23之间
      const DryBulbTemperature = (Math.random() * 13 + 10).toFixed(2)
      this.config.data[2][1] = DryBulbTemperature + '°C';
      // 第四行第二列数据范围在12-25之间
      const WetBulbTemperature = (Math.random() * 13 + 12).toFixed(2)
      this.config.data[3][1] = WetBulbTemperature + '°C';
      const LoadingRatio = (Math.random() * (40 - 30) + 30).toFixed(2)
      this.config.data[4][1] = LoadingRatio + '%';
      const ServerEnergyConsumption = (Math.random() * (800 - 650) + 650).toFixed(2)
      this.config.data[5][1] = ServerEnergyConsumption + 'KWh';
      this.Temperature = [DryBulbTemperature, WetBulbTemperature];


      // 更新 key，强制重新渲染组件
      this.updateDataCount += 1;
    },
    changemode() {
      console.log(this.mode);
      if (this.mode == 0) {
        this.config.data[1][1] = '干模式';
      };
      if (this.mode == 1) {
        this.config.data[1][1] = '喷淋模式';

      };
      if (this.mode == 2) {
        this.config.data[1][1] = '混合制冷模式';
      };
      // 更新 key，强制重新渲染组件
      this.initDataCount += 1;
    },
    mode1(data) {
      console.log("传来：", data);
      this.mode = data;
    }
  }

}
</script>
<style>
/* @charset "utf-8"; */
/* CSS Document */
@import "../../public/css/comon0.css";
</style>