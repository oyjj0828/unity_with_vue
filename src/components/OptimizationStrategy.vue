<template>
  <dv-border-box-13 backgroundColor="rgba(6, 48, 109, .5)" style="height: calc(100%); width: calc(100% ); z-index: 11;">
    <div class="boxall" style="height: calc(100% )">
      <div class="alltitle">优化策略</div>
    
      <div class=" boxnav " id="echarts4" style="user-select: none; z-index: -10;"
        _echarts_instance_="ec_1710235324242">
        <div class="mainbox" style="position: relative; overflow:hidden; width: 100%; height: 100%;
                   padding: 0px; margin: 0px; border-width: 0px; cursor: default;">
          <div style="height:5%;"></div>

          <dv-scroll-board :config="config" :key="updateDataCount + '-' +initDataCount " style="width:100%; height:75%" />
          <ul style="position: relative;  height: 15%;">
            
            <li style="width: 30%; height: 100%">
              <dv-border-box-12 style="height: 40px; width: 100px; top: 5px;">
                <button class="rounded-btn-Optimization" @click="handleClick" style="z-index: 20; width: 100px; height: 40px;">
                  <span style="font-size: 14px; font-weight: bold; color: azure;">
                    执行
                  </span>
                </button>
              </dv-border-box-12>
            </li>
            
            <li style="width: 70%; height: 100%; text-align: center;">
              <span style="position: relative;  top: 40%; color: greenyellow; font-size: 16px;
              text-shadow: 0 0 2px green, 0 0 2px green, 0 0 2px green, 0 0 2px green !important;">预计降低能耗: 5.16% ↓</span>
            </li>
          </ul>
        </div>
      </div>
    </div>
  </dv-border-box-13>
</template>

<script>
import { ref, watchEffect } from 'vue';

export default {
  props: ['temperature', 'mode'],

  data() {
    return {
      Temperature: [],

      // receivedStatus: this., // 在子组件中使用props接收父组件传递的数据
      config: {

        data: [
        ['空调运行台数', '3台'],
                ['水阀开度', '42%'],
                ['风机转速', '22000rpm'],
                ['冷却塔回收量', '85%'],
                ['空调送风面积', '60%'],
                ['空调送风温度', '21℃'],
                ['压缩机数量', '25台'],
                ['工作模式', '-'],

        
          
        ],
        index: false,
        header: ['参数名称', '调整值'],
        align: ['center','center'],
        carousel: 'page',
        oddRowBGC: '#2457A0',
        evenRowBGC: '#068AC0',
        rowNum: 8
      },
      initDataCount: 0,
      updateDataCount: 0,
      boardKey: 0, // 初始key

      ret: 0

    };
  },
  created() {
    // Temperature = this.temperature;
    // 初始时遍历数据进行标红
   // this.initData();
    // 每隔一秒更新数据
   setInterval(() => {
      this.updateData();
      
    }, 1000);
  },




  watch: {
    temperature: {
      handler (newData, oldData){

        if(newData[0]<=16){
          this.config.data[7][1]='干模式';
          this.ret=0;
        };
        if(newData[0]>16 && newData[1]<=19){
          this.config.data[7][1]='喷淋模式';
          this.ret=1;
        };
        if(newData[1]>19){
          this.config.data[7][1]='混合制冷模式';
          this.ret=2;
        };
        console.log(this.ret);
        

      }
    },
  deep: true

  // console.log(this.receivedStatus);
  
  },


  methods: {
  handleClick() {
    console.log("this.mode");
    this.$emit('update:mode', this.ret);
    console.log(this.ret);
  },

  updateData() {

      // 更新 key，强制重新渲染组件

      this.updateDataCount += 1;
    }

  }

}
</script>
<style>


.rounded-btn-Optimization {
  border: none;
  /* 去除默认边框 */
  background-color: transparent;
  /* 设置背景色 */
  color: rgb(0, 174, 255);
  /* 设置字体颜色 */
  padding: 0px 36px;
  /* 调整按钮大小 */
  text-align: center;
  /* 居中显示文本 */
  font-size: 18px;
  /* 设置字号 */
  cursor: pointer;
  /* 光标变成手型 */
  border-radius: 100px;
  /* 设置圆角 */
}

/* @charset "utf-8"; */
/* CSS Document */
@import "../../public/css/comon0.css";
</style>