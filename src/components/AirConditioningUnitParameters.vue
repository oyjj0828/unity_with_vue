<template>
  <div style="height: 100%;">
    <dv-border-box-13 backgroundColor="rgba(6, 48, 109, .5)" style="height: calc(40% ); z-index: 11;">
      <div class="boxall" style="height: calc(96% )">
        <div class="alltitle">空调机组参数</div>

        <div class=" boxnav " id="echarts4" style="user-select: none; z-index: -10;"
          _echarts_instance_="ec_1710235324242">
          <div class="mainbox" style="position: relative; overflow:hidden; width: 100%; height: 100%;
                   padding: 0px; margin: 0px; border-width: 0px; cursor: default;">
            <div style="height:5%;"></div>

            <dv-scroll-board :config="config" :key="updateDataCount + '-' + initDataCount"
              style="width:100%; height:95%" />
          </div>
        </div>
      </div>
    </dv-border-box-13>

    <p v-if="!this.test" style="height: 10%;">
      <dv-border-box-10 style="height: 50px; width: 100px; top: 12%; left: 114.13px;">
        <button class="rounded-btn" @click="handleClick" style="z-index: 20; width: inherit; height: inherit;">
          优化策略
        </button>
      </dv-border-box-10>
    </p>
    <p v-else style="height: 10%;">
      <dv-border-box-10 backgroundColor="rgba(6, 48, 109, .5)"
        style="height: 50px; width: 100px; top: 12%; left: 114.13px;">
        <button class="rounded-btn" @click="handleClick" style="z-index: 20; width: inherit; height: inherit;">
          优化策略
        </button>
      </dv-border-box-10>
    </p>
    <div v-if="test" style="height: calc(50%);">
      <OptimizationStrategy :temperature="Temperature" :mode.sync="mode" />
    </div>
  </div>
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
      boardKey: 0, // 初始key
      Temperature: [],

    };
  },
  created() {
    setInterval(() => {
      this.updateData();
    }, 5000);
    setInterval(() => {
      this.changemode();
    }, 500);
  },
  methods: {
    handleClick() {
      this.test = !(this.test);
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
    }
  }

}
</script>
<style>
/* @charset "utf-8"; */
/* CSS Document */
@import "../../public/css/comon0.css";
</style>