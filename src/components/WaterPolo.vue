<template>
  <dv-border-box-13 backgroundColor="rgba(6, 48, 109, .5)" style="height: calc(33% ); z-index: 11;">
    <div class="boxall" style="height: calc(100% )">
      <div class="alltitle">设备总体占用情况</div>
      <div class=" boxnav " id="echarts4" style="user-select: none; z-index: -10;"
        _echarts_instance_="ec_1710235324242">
        <div class="mainbox" style="position: relative; overflow:hidden; width: 100%; height: 100%;
                      cursor: default;">
          <div class="container">
            <div ref="chartContainer" class="chart"></div>
            <div class="info">
              <div class="percent">{{ (percent * 100).toFixed(2) }}%</div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </dv-border-box-13>
</template>

<script setup>
import { ref, onMounted, watch } from 'vue';
import * as echarts from 'echarts';
import 'echarts-liquidfill';

const chartContainer = ref(null);
const percent = ref(0.535);
const color = {
  x: 0,
  y: 0,
  x2: 0,
  y2: 1,
  colorStops: [
    {
      offset: 0,
      color: 'rgba(43, 159, 246, 0.5)', // 0% 处的颜色
    },
    {
      offset: 1,
      color: 'rgba(43, 159, 246, 0.1)', // 100% 处的颜色
    },
  ],
  global: false, // 缺省为 false
};

onMounted(() => {
  // 在 onMounted 生命周期钩子中初始化 echarts 实例
  const chart = echarts.init(chartContainer.value);

  drawWaterball(chart);

  // 设置定时器，每隔一段时间更新 percent 的值
  setInterval(() => {
    percent.value = Math.random() * 0.3 + 0.3;
    drawWaterball(chart); // 每次更新 percent 后重新绘制水球图
  }, 10000); // 每隔 1000 毫秒（10 秒）更新一次
});

const drawWaterball = (chart) => {
  const option = {
    series: [
      {
        type: 'liquidFill',
        radius: '96%',
        center: ['50%', '50%'],
        // 重点在这里，通过SVG 路径来实现
        shape: 'path://M245,233.8l-96.8,54.6c-11,6.2-24.6,6.1-35.5-0.3l-95.7-56.5c-10.9-6.4-17.6-18.2-17.4-30.9L0.7,89.5c0.1-12.7,7-24.3,18-30.5l96.8-54.6c11-6.2,24.6-6.1,35.5,0.3l95.7,56.5c10.9,6.4,17.6,18.2,17.4,30.9l-1.1,111.1C263,215.9,256.1,227.5,245,233.8z',
        data: [
          {
            value: percent.value,
            itemStyle: {
              normal: {
                color,
                borderWidth: 2,
                borderColor: 'rgba(192, 192, 192, 0.4)',
              },
            },
          },
          {
            value: percent.value,
            itemStyle: {
              normal: {
                color,
                borderWidth: 12,
                borderColor: 'rgba(192, 192, 192, 0.2)',
              },
            },
          },
        ], // data个数代表波浪数
        backgroundStyle: {
          borderWidth: 0,
          color: 'transparent',
        },
        label: {
          normal: {
            show: false,
          },
        },
        outline: {
          show: true,
          itemStyle: {
            borderWidth: 2,
            borderColor: 'rgba(192,192,192,0.8)',
          },
          borderDistance: 0,
        },
      },
    ],
  };

  chart.setOption(option);
};
</script>

<style lang="scss" scoped>
.container {
  width: 100%;
  height: 100%;
  position: relative;

  .chart {
    width: 100%;
    height: 100%;
    position: absolute;
  }

  .info {
    width: 100%;
    font-family: 'flipper2017';
    color: rgb(192, 192, 192);
    font-size: 30px;
    position: absolute;
    text-align: center;
    left: 50%;
    top: 50%;
    transform: translate(-50%, -50%);
  }
}
</style>