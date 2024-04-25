<template>
  <dv-border-box-13 backgroundColor="rgba(6, 48, 109, .5)" style="height: calc(33% ); z-index: 11;">
    <div class="boxall" style="height: calc(100% )">
      <div class="alltitle">设备运转情况</div>
      <div class=" boxnav " id="echarts4" style="user-select: none; z-index: -10;"
        _echarts_instance_="ec_1710235324242">
        <div class="mainbox" style="position: relative; top:5px; overflow:hidden; width: 100%; height: 100%;
                    cursor: default;">
          <div ref="chart" style=" width: 100%; height:100%;"></div>
        </div>
      </div>
    </div>
  </dv-border-box-13>
</template>

<script>
import * as echarts from 'echarts';
import { RouterView } from 'vue-router';

export default {
  data() {
    return {
      chartData: [
        { name: '空调', value: 0.66 },
        { name: '烟感', value: 0.75 },
        { name: '摄像头', value: 0.23 },
        { name: '照明', value: 0.85 },
        { name: 'UPS', value: 0.52 },
      ],

      colors: ['#96bfff', '#32c5e9', '#e690d1', '#fb7293', '#e062ae'],
      chartInstance: null,
    };
  },
  mounted() {
    this.renderChart();
    this.updateChartData();
  },
  methods: {
    renderChart() {
      this.chartInstance = echarts.init(this.$refs.chart);
      this.chartInstance.setOption({

        grid: {
          top: '5%',
          left: '1%', // 设置左边距为容器宽度的10%
          right: '10%', // 设置右边距为容器宽度的10%
          bottom: '3%', // 设置底部边距为容器高度的3%
          containLabel: true // 包含坐标轴的标签
        },


        xAxis: {
          type: 'value',
          min: 0, // 设置最小值为0
          max: 100, // 设置最大值为100
          axisLine: {
            show: false, // 隐藏轴线
          },
          axisTick: {
            show: false, // 隐藏刻度线
          },
          splitLine: {
            show: false, // 隐藏分隔线
          },
          axisLabel: {
            formatter: function (value) {
              return (value) + '%'; // 将数值转换为百分比
            },
            textStyle: {
              color: 'white', // 设置字体颜色为白色
              fontSize: '10px',
            },

          }

        },
        yAxis: {
          type: 'category',
          data: this.chartData.map(item => item.name),
          axisLine: {
            show: false, // 隐藏轴线
          },
          axisTick: {
            show: false, // 隐藏刻度线
          },
          axisLabel: {
            textStyle: {
              color: 'white', // 设置字体颜色为白色


            },
            margin: 2, // 增加标签与轴线之间的距离

          }
        },
        series: [{
          type: 'bar',
          data: this.chartData.map((item, index) => ({
            name: item.name,
            value: Math.round(item.value * 100), // 对数值进行四舍五入
            itemStyle: {
              color: this.colors[index],

            },
          })),
          label: {
            show: true,
            position: 'right',
            formatter: function (params) {
              return Math.round(params.value) + '%'; // 将数值四舍五入为整数，并添加百分号
            },
            textStyle: {
              color: 'white', // 设置字体颜色为白色


            },
          },
        }],
      });
    },
    updateChartData() {
      // Simulating dynamic data update
      setInterval(() => {
        this.chartData.forEach(item => {
          //item.value = Math.random().toFixed(2) * 100;
          switch (item.name) {
            case '空调':
              item.value = (Math.random() * (0.70 - 0.62) + 0.62).toFixed(2)* 100; // 生成0.62-0.70之间的随机数
              break;
            case '烟感':
              item.value = (Math.random() * (0.78 - 0.72) + 0.72).toFixed(2)* 100; // 生成0.72-0.78之间的随机数
              break;
            case '摄像头':
              item.value = (Math.random() * (0.30 - 0.25) + 0.25).toFixed(2)* 100; // 生成0.25-0.30之间的随机数
              break;
            case '照明':
              item.value = (Math.random() * (0.90 - 0.80) + 0.80).toFixed(2)* 100; // 生成0.80-0.90之间的随机数
              break;
            case 'UPS':
              item.value = (Math.random() * (0.55 - 0.48) + 0.48).toFixed(2)* 100; // 生成0.48-0.55之间的随机数
              break;
          }
        });
        this.chartInstance.setOption({
          yAxis: {
            data: this.chartData.map(item => item.name),
          },
          series: [{
            data: this.chartData.map((item, index) => ({
              name: item.name,
              value: item.value,
              itemStyle: {
                color: this.colors[index],
              },
            })),
          }],
        });
      }, 600000); // Update every 10 minutes
    },
  },
};
</script>

<style>
/* @charset "utf-8"; */
/* CSS Document */
@import "../../public/css/comon0.css";
</style>