<template>
    <dv-border-box-13 backgroundColor="rgba(6, 48, 109, .5)" style="height: calc(45% ); z-index: 11;top:120px">
      <div class="boxall" style="height: calc(100% )">
        <div class="alltitle">空调机组参数</div>
        <ul style="position: relative; top: 30px; left:20px; height: calc(78% )">
            <li><span style="margin-right: 100px;">空调型号</span>Fusion8000e200</li>
            <li><span style="margin-right: 100px;">当前工作模式</span>干模式</li>
            <li><span style="margin-right: 100px;">室外进风干球温度</span>16℃</li>
            <li><span style="margin-right: 100px;">室外进风湿球温度</span>10℃</li>
            <li><span style="margin-right: 100px;">服务器负载率</span>34%</li>
            <li><span style="margin-right: 100px;">服务器功耗</span>750kWh</li>
        </ul>
        <button class="btn" @click="handleClick">优化策略</button>
      </div>
    </dv-border-box-13>
  </template>

  <script>
    export default {
      props:['strategy'],
        methods: {
            handleClick() {
                // 在这里处理点击事件
                if(this.strategy){
                  this.$emit('update:strategy', false)
                }
                else{
                  this.$emit('update:strategy', true)
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
    .btn {
        position: relative;
        left:125px;
        font-size: 18px;
        border-radius: 100px;
        width: 100px;
        background-color: rgb(2, 135, 197);
  /* 设置圆角 */
    }
  </style>
