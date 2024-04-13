<template>
  <dv-border-box-13 backgroundColor="rgba(6, 48, 109, .5)" style="height: calc(33% ); z-index: 11;">
    <div class="boxall" style="height: calc(100% )">
      <div class="alltitle">设备占用情况</div>
      <div class=" boxnav " id="echarts4" style="user-select: none; z-index: -10;"
        _echarts_instance_="ec_1710235324242">
        <div class="mainbox" style="position: relative; overflow:hidden; width: 100%; height: 100%;
                          cursor: default;">
          <div id="chartContainer" style="width: 100%; height: 100%;"></div>
        </div>
      </div>
    </div>
  </dv-border-box-13>
</template>
<script>
import * as echarts from 'echarts';
import axios from 'axios';

const axiosInstance = axios.create({
  baseURL: 'http://127.0.0.1:8000/api',
  withCredentials: true,
});


export default {
  props:['Name'],
  data() {
    return {
      records: [],
      consumption: [],
      records1: [],
      consumption1: [],
      tempTime: null,
      tempTime1: null,
      batchSize: 50,
      batchSize1: 60,
      data1: [],
      data2: [],
      now: new Date(), // 使用当前时间
      value1: Math.random() * 1000,
      value2: Math.random() * 1000,
      timer: null,
      option: {
        title: {
          text: ''
        },
        tooltip: {
          trigger: 'axis',
          formatter: function (params) {
            if (typeof params === 'undefined') {
              return ''; // 如果params为undefined，则返回空字符串
            }

            if (params.length >= 2) {
              const time = params[1].value[0];

              const predictedValue = params[1].value[1];
              const realValue = params[0].value[1];
              return time + '<br />' + '真实值: ' + realValue + '<br />' + '预测值: ' + predictedValue;

            }
            else {
              const time = params[0].value[0];
              const predictedValue = params[0].value[1]; 
              return time + '<br />' + '真实值: -' + '<br />' + '预测值: ' + predictedValue;
            }
          },

          axisPointer: {
            animation: false,
            type: 'shadow',
            crossStyle: {
              color: '#999'
            },
          },
          position: function (point, params, dom, rect, size) {
            var x = 0; // x坐标位置
            var y = 0; // y坐标位置
            // 当前鼠标位置
            var pointX = point[0];
            var pointY = point[1];
            // 提示框大小
            var boxWidth = size.contentSize[0];
            var boxHeight = size.contentSize[1];

            // boxWidth > pointX 说明鼠标左边放不下提示框
            if (boxWidth > pointX) {
              x = pointX + 10;
            } else { // 左边放的下
              x = pointX - boxWidth - 5;
            }

            // boxHeight > pointY 说明鼠标上边放不下提示框
            if (boxHeight > pointY) {
              y = 5;
            } else { // 上边放得下
              y = pointY - boxHeight;
            }
            return [x, y];
          },

        },
        grid: {
          top: '15%',
          left: '1%', // 设置左边距为容器宽度的10%
          right: '1%', // 设置右边距为容器宽度的10%
          bottom: '3%', // 设置底部边距为容器高度的3%
          containLabel: true // 包含坐标轴的标签
        },

        xAxis: {
          type: 'category', // x轴类型改为类别
          boundaryGap: false, // 不留白
          data: [], // 添加空数据，后面动态更新
          axisLabel: {
            textStyle: {
              color: 'white', // 设置字体颜色为白色
            },

          }
        },
        yAxis: {
          type: 'value',

          splitLine: {
            show: false
          },
          axisLabel: {
            textStyle: {
              color: 'white', // 设置字体颜色为白色
            },

          }
        },
        series: [
          {
            name: 'Fake Data 1',
            type: 'line',
            showSymbol: false,
            data: []
          },
          {
            name: 'Fake Data 2',
            type: 'line',
            showSymbol: false,
            data: []
          }
        ]
      }
    };
  },
  mounted() {
    this.initChart();
    this.timer = setInterval(() => {
      this.fetchDataAndUpdate();
    }, 10000);
  },
  beforeDestroy() {
    // 清除定时器
    if (this.timer) {
      clearInterval(this.timer);
    }
    if (this.myChart) {
      this.myChart.dispose();
    }
  },
  methods: {
    fetchDataAndUpdate() {
      axiosInstance.get('/next-an-records', {
        params: { batch_size: 5 }
      })
        .then(response => {
          
          this.records1 = response.data;
          this.consumption1 = this.records1.map(record => record.Consumption)
          this.records1 = this.records1.map(record => (new Date(record.time)))
          axiosInstance.get('/next-n-records', {
            params: { batch_size: 5 }
          })
            .then(response => {
              console.log(response.data)
              this.records = response.data;
              this.consumption = this.records.map(record => record.Consumption)
              this.records = this.records.map(record => (new Date(record.time)))
              
              for (var i = 0; i < 5; i++) {
                if (this.records[i] instanceof Date && this.records1[i] instanceof Date) {
                  const updatedTime = new Date(this.records[i]);
                  updatedTime.setSeconds(updatedTime.getSeconds() + 0); // 修改时间
                  this.tempTime = updatedTime.toLocaleTimeString(); // 格式化时间字符串
                  
                  const updatedTime1 = new Date(this.records[i]);
                  updatedTime1.setSeconds(updatedTime1.getSeconds() + 10); // 修改时间
                  this.tempTime1 = updatedTime1.toLocaleTimeString(); // 格式化时间字符串
                  this.data1.push([this.tempTime, this.consumption[i]]);
                  this.data2.push([this.tempTime1, this.consumption1[i]]); // 在数组末尾添加新数据，保持数据顺序
                  this.option.xAxis.data.push(this.tempTime1); // 在x轴标签的末尾添加新的标签
                }
                
                this.data1.shift(); // 移除数组的第一个元素
                this.data2.shift(); // 移除数组的第一个元素
                this.option.xAxis.data.shift(); // 移除x轴标签的第一个元素
              }
              
              this.myChart.setOption({
                xAxis: {
                  data: this.option.xAxis.data // 更新x轴标签配置
                },
                series: [
                  {
                    data: this.data1
                  },
                  {
                    data: this.data2
                  }
                ]
              });
            })
            .catch(error => {
              console.log('Error:', error.message);
            });
        })
        .catch(error => {
          console.log('Error:', error.message);
        },500);



    },
    initChart() {
      axiosInstance.get('/next-n-records', {
        params: { batch_size: this.batchSize }
      })
        .then(response => {
          this.records = response.data;
          this.consumption = this.records.map(record => record.Consumption)
          this.records = this.records.map(record => (new Date(record.time)))
          
          for (var i = 0; i < 50; i++) {
            const updatedTime = new Date(this.records[i]);
            updatedTime.setSeconds(updatedTime.getSeconds()); // 修改时间
            this.tempTime = updatedTime.toLocaleTimeString(); // 格式化时间字符串
            this.data1.push([this.tempTime, this.consumption[i]]); // 在数组末尾添加新数据，保持数据顺序
          }
          this.option.series[0].data = this.data1;
          axiosInstance.get('/next-an-records', {
            params: { batch_size: this.batchSize1 }
          })
            .then(response => {
              this.records1 = response.data;
              this.consumption1 = this.records1.map(record => record.Consumption)
              this.records1 = this.records1.map(record => (new Date(record.time)))
             
              for (var i = 0; i < 50; i++) {
                if (this.records[i] instanceof Date && this.records1[i] instanceof Date) {
                  const updatedTime1 = new Date(this.records[i]);
                  updatedTime1.setSeconds(updatedTime1.getSeconds() + 10); // 修改时间
                  this.tempTime1 = updatedTime1.toLocaleTimeString(); // 格式化时间字符串
                  this.data2.push([this.tempTime1, this.consumption1[i + 10]]); // 在数组末尾添加新数据，保持数据顺序
                }
              }
              this.option.series[1].data = this.data2;
              this.option.xAxis.data = this.data2.map(item => item[0]); // 使用时间数据作为x轴数据
              
              this.myChart = echarts.init(document.getElementById('chartContainer'));
              this.myChart.setOption(this.option);
            })
            .catch(error => {
              console.log('Error:', error.message);
            });
        })
        .catch(error => {
          console.log('Error:', error.message);
        });
    },



  }


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