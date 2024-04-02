<template>
    <dv-border-box-13 backgroundColor="rgba(6, 48, 109, .5)" style="height: calc(55% ); width: calc(50% );z-index: 11;top:90px">
      <div class="boxall" style="height: calc(100% )">
        <div class="alltitle">优化策略</div>
        <dv-scroll-board :config="config" style="position:relative; top:30px; left:20px; width:315px; height:calc(70% )">
        </dv-scroll-board>
        <button class="btn2" @click="handleClick">执行</button> 
        <span class="span">预计降低能耗：5.16%</span>
      </div>
    </dv-border-box-13>
  </template>

  <script>
    export default {
        methods: {
            handleClick() {
                // 添加点击事件
            }
        },
        data() {
          return {
            config: {
              header: ['参数名称', '调整值'],
              data: [
                ['空调运行台数', '3台'],
                ['水阀开度', '42%'],
                ['风机转速', '22000rpm'],
                ['冷却塔回收量', '85%'],
                ['空调送风面积', '60%'],
                ['空调送风温度', '21℃'],
                ['压缩机数量', '25台'],
                ['工作模式', '混合制冷模式'],
              ],
              index: true,
              columnWidth: [50],
              align: ['center', 'center', 'center'],
              indexHeader: '序号',
              oddRowBGC: 'rgba(6, 48, 109, 0)',
              evenRowBGC: 'rgba(6, 48, 109, 0.5)',
              headerBGC: 'rgba(6, 48, 109, 1)',
            }
          }
        }
    }
  </script>
  
  <style>
    /* @charset "utf-8";
    /* CSS Document */
    @import "../../public/css/comon0.css";
    li{
      font-size: 16px;
      font-style: Source Han Sans CN;
      margin-bottom: 10px;
    }
    .btn2 {
      border: 3px solid #004063;
      position: relative;
      left:100px;
      font-size: 18px;
      border-radius: 100px;
      width: 80px;
      top: 40px;
      background-color: rgb(2, 135, 197);
      color:aliceblue;
    }
    .btn2:active {
      background-color: aliceblue;
      color: rgb(2, 135, 197);
    }
    .span{
      position: relative;
      left:105px;
      font-size: 12px;
      border-radius: 100px;
      width: 80px;
      top: 40px;
      color:rgb(0, 223, 26);
    }
  </style>
