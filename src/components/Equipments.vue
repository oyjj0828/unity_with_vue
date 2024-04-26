<template>
  <dv-border-box-13 backgroundColor="rgba(6, 48, 109, .5)" style="height: calc(33% ); z-index: 11;">
    <div class="boxall" style="height: calc(100% )">
      <div class="alltitle">IT设备能耗统计</div>
      <div class="boxnav" style="user-select: none; z-index: -10;">
        <div id="chartContainer5" style="position:absolute; top:0%; left:0; width:100%; height:100%" />
      </div>
    </div>
  </dv-border-box-13>
</template>

<script>
  import * as echarts from 'echarts';
  export default {
    data() {
      return {
        option : {
          tooltip: {
            trigger: 'item'
          },
          legend: {
            top: '83%',
            left: 'center',
            textStyle:{
              fontSize: 12,//字体大小
              color: '#ffffff'//字体颜色
            },
          },
          series: [
            {
              name: '能耗/kWh',
              type: 'pie',
              radius: ['43%', '65%'],
              avoidLabelOverlap: false,
              itemStyle: {
                borderRadius: 6,
                borderColor: 'rgba(6, 48, 109, 0)',
              },
              label: {
                show: false,
                position: 'center'
              },
              emphasis: {
                label: {
                  show: true,
                  fontSize: 25,
                  fontWeight: 'bold',
                  color:'#ffffff'
                }
              },
              labelLine: {
                show: false
              },
              data: [
                { value: '641', name: '服务器' },
                { value: '422', name: '配电柜' },
                { value: '91', name: '路由器' },
                { value: '962', name: '空调' },
              ]
            }
          ]
        },
      }
    },
    mounted() {
      this.initChart();
    },
    methods: {
      initChart(){
        var chartDom = document.getElementById('chartContainer5');
        var myChart = echarts.init(chartDom);
        myChart.setOption(this.option);
      },
    },
  }
</script>


<style>
/* @charset "utf-8";
/* CSS Document */
@import "../../public/css/comon0.css";
</style>