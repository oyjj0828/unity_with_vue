<template>
  <dv-border-box-13 backgroundColor="rgba(6, 48, 109, .5)" style="height: calc(45% ); z-index: 11;">
    <div class="boxall" style="height: calc(100% )">
      <div class="alltitle">室内温度预测</div>
      <div class=" boxnav " id="echarts4" style="user-select: none; z-index: -10;"
        _echarts_instance_="ec_1710235324242">
        <div class="mainbox" style="position: relative; overflow:hidden; width: 100%; height: 100%;
                        cursor: default;">
          <div id="chartContainer3" style="width: 100%; height: 100%;"></div>
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
      chartInitialized: false,
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
        legend:{
          data:['真实值','预测值'],
          orient: 'horizontal',
          left: 'center',
          top: 'top',  
          textStyle:{
            color:'#ffffff',
            fontSize:12,
          }
        },
        tooltip: {
          trigger: 'axis',
          // formatter: function (params) {
          //   if (typeof params === 'undefined') {
          //     return ''; // 如果params为undefined，则返回空字符串
          //   }

          //   if (params.length >= 2) {
          //     const time = params[1].value[0];

          //     const predictedValue = params[1].value[1];
          //     const realValue = params[0].value[1];
          //     return time + '<br />' + '真实值: ' + realValue + '<br />' + '预测值: ' + predictedValue;

          //   }
          //   else {
          //     const time = params[0].value[0];
          //     const predictedValue = params[0].value[1]; 
          //     return time + '<br />' + '真实值: -' + '<br />' + '预测值: ' + predictedValue;
          //   }
          // },

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
            name: '真实值',
            type: 'line',
            showSymbol: false,
            data: []
          },
          {
            name: '预测值',
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
      axiosInstance.get('/next-nt-records', {
        params: { batch_size: 5 }
      })
        .then(response => {
          
          this.records = response.data;
          this.consumption = this.records.map(record => record.Consumption)
          this.records = this.records.map(record => record.time)
          axiosInstance.get('/next-ant-records', {
            params: { batch_size: 5, model:'Crossformer'}
          })
            .then(response => {
              this.records1 = response.data;
              this.consumption1 = this.records1.map(record => record.Consumption)
              this.records1 = this.records1.map(record => record.time)
              console.log(this.records,this.consumption)
              console.log(this.records1,this.consumption1)
              
              for (var i = 0; i < 5; i++) {
                const updatedTime = this.records[i];
                const updatedTime1 = this.records1[i];
                this.data1.push([updatedTime, this.consumption[i]]);
                this.data2.push([updatedTime1, (this.consumption1[i]).toFixed(1)]); // 在数组末尾添加新数据，保持数据顺序
                this.option.xAxis.data.push(updatedTime1); // 在x轴标签的末尾添加新的标签
                
                this.data1.shift(); // 移除数组的第一个元素
                if(this.data2.length>=61) this.data2.shift(); // 移除数组的第一个元素
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
        });
    },
    initChart() {
      axiosInstance.get('/next-nt-records', {
        params: { batch_size: this.batchSize ,init: 1}
      })
        .then(response => {
          this.records = response.data;
          this.consumption = this.records.map(record => record.Consumption)
          this.records = this.records.map(record => record.time)

          this.data1=[]
          this.data2=[]
          
          for (var i = 0; i < 50; i++) {
            const updatedTime = this.records[i];
            this.data1.push([updatedTime, this.consumption[i]]); // 在数组末尾添加新数据，保持数据顺序
          }
          this.option.series[0].data = this.data1;
          axiosInstance.get('/next-ant-records', {
            params: { batch_size: this.batchSize1 , init: 1, model:'Crossformer'}
          })
            .then(response => {
              this.records1 = response.data;
              this.consumption1 = this.records1.map(record => record.Consumption)
              this.records1 = this.records1.map(record => record.time)
             
              for (var i = 0; i < 60; i++) {
                const updatedTime1 = this.records1[i];
                this.option.xAxis.data.push(updatedTime1)
                if(i>=50) 
                  this.data2.push([updatedTime1, (this.consumption1[i]).toFixed(1)]); // 在数组末尾添加新数据，保持数据顺序
              }
              this.option.series[1].data = this.data2;
              this.myChart = echarts.init(document.getElementById('chartContainer3'));
              this.myChart.setOption(this.option);
              console.log(this.option.series[0].data);
              console.log(this.option.series[1].data);
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