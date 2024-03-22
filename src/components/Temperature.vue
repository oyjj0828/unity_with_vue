<template>

  <div class="boxall" style="height: calc(58% - .15rem)">
    <div class="alltitle">室内温度预测</div>
    <div id="temperature" style="width: 600px; height: 400px;"></div>

  </div>

</template>

<script>
import * as echarts from 'echarts';
export default {
  data() {
    return {
      myChart: null,
      option: {
        series: [
          {
            type: 'gauge',
            center: ['50%', '60%'],
            startAngle: 200,
            endAngle: -20,
            min: -50,
            max: 100,
            splitNumber: 15,
            itemStyle: {
              color: '#FFAB91'
            },
            progress: {
              show: true,
              width: 30
            },
            pointer: {
              show: false
            },
            axisLine: {
              lineStyle: {
                width: 30
              }
            },
            axisTick: {
              distance: -45,
              splitNumber: 5,
              lineStyle: {
                width: 2,
                color: '#999'
              }
            },
            splitLine: {
              distance: -52,
              length: 14,
              lineStyle: {
                width: 3,
                color: '#999'
              }
            },
            axisLabel: {
              distance: -20,
              color: '#999',
              fontSize: 20
            },
            anchor: {
              show: false
            },
            title: {
              show: false
            },
            detail: {
              valueAnimation: true,
              width: '50%',
              lineHeight: 40,
              borderRadius: 8,
              offsetCenter: [0, '-15%'],
              fontSize: 40,
              fontWeight: 'bolder',
              formatter: '{value} °C',
              color: 'inherit'
            },
            data: [
              {
                value: 20
              }
            ]
          },
          {
            type: 'gauge',
            center: ['50%', '60%'],
            startAngle: 200,
            endAngle: -20,
            min: -50,
            max: 100,
            itemStyle: {
              color: '#FD7347'
            },
            progress: {
              show: true,
              width: 8
            },
            pointer: {
              show: false
            },
            axisLine: {
              show: false
            },
            axisTick: {
              show: false
            },
            splitLine: {
              show: false
            },
            axisLabel: {
              show: false
            },
            detail: {
              show: false
            },
            data: [
              {
                value: 20
              }
            ]
          }
        ]
      },
    };
  },
  mounted() {

    this.initChart();
    setInterval(this.updateData, 2000);
    window.addEventListener('resize', () => {
      this.myChart.resize();
    });
  },
  methods: {

    initChart() {
      this.myChart = echarts.init(document.getElementById('temperature'));

      this.myChart.setOption(this.option);
    },
    updateData() {
      const random = +(Math.random() * 100).toFixed(2);
      this.myChart.setOption({
        series: [
          {
            data: [
              {
                value: random
              }
            ]
          },
          {
            data: [
              {
                value: random
              }
            ]
          }
        ]
      });
    },
  }
}



</script>

<style>
/* @charset "utf-8";
  /* CSS Document */
@import "../../public/css/comon0.css";
</style>