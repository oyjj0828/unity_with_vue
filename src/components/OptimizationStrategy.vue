<template>
  <dv-border-box-11 backgroundColor="rgba(6, 48, 109, .5)" style="height: calc(100%); width: calc(100% ); z-index: 11;">
    <div class="boxall" style="height: 100%; width:100%">
      <div class="title1">优化策略</div>
      <el-tabs v-model="activeName" @tab-click="handleClick2" style="position:absolute; left:5%; top:12%;">
        <el-tab-pane label="综合能源选择比例" name="first"></el-tab-pane>
        <el-tab-pane label="制冷系统优化" name="second"></el-tab-pane>
      </el-tabs>
      <p v-if="views[0]">
        <dv-scroll-board :config="config1" style="position:absolute; top:24%; left:5%; width:90%; height:60%" />
      </p>
      <p v-else-if="views[1]">
        <dv-scroll-board :config="config2" :key="updateDataCount + '-' +initDataCount " style="position:absolute; top:24%; 
        left:5%; width:90%; height:60%" />
      </p>
      <div style="position: absolute; top:85%; height:12%; width:100%">
        <dv-border-box-10 style="position:absolute; height: 40px; left:20%; width: 80px; top: 10%;">
          <button class="rounded-btn-Optimization" @click="handleClick" style="z-index: 20; width: inherit; height: inherit;">
            执行
          </button>
        </dv-border-box-10>
        <div style="position: absolute; height:100%; top:10%; left:42%; color: greenyellow; font-size: 14px; text-align: left;
        text-shadow: 0 0 2px green, 0 0 2px green, 0 0 2px green, 0 0 2px green !important;">
          预计降低能耗: 5.16% ↓<br/>
          预计降低碳排放: 50万吨 ↓
        </div>
      </div>
    </div>
  </dv-border-box-11>
</template>

<script>
import { ref, watchEffect } from 'vue';
export default {
  props: ['temperature', 'mode'],
  data() {
    return {
      activeName:'first',
      views:[true,false],
      Temperature: [],
      // receivedStatus: this., // 在子组件中使用props接收父组件传递的数据
      config1:{
        data: [
          ['煤电','3000万','2500万','43.26'],
          ['风电','2300万','1600万','18.23'],
          ['水电','1700万','1200万','13.90'],
          ['光伏','1300万','900万','7.63'],
          ['天然气','950万','400万','5.75'],
          ['储能系统','700万','280万','4.78'],
          ["<div class='datav-cell' title='核电、地热等'>其他</div>",'500万','163万','3.02'],
        ],
        index: false,
        header: [
          "<div class='datav-cell' title='能源类型'>能源类型</div>", 
          "<div class='datav-cell' title='发电量/千瓦时'>发电量...</div>",
          "<div class='datav-cell' title='发电电力/千瓦'>发电电...</div>",
          "<div class='datav-cell' title='发电电力占比/%'>发电电...</div>",
        ],
        align: ['center','center','center','center'],
        carousel: 'page',
        oddRowBGC: '#2457A0',
        evenRowBGC: '#068AC0',
        rowNum: 7,
      },
      config2: {
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
        // console.log(this.ret);     
      }
    },
  deep: true
  // console.log(this.receivedStatus);
  },
  methods: {
    handleClick() {
      // console.log("this.mode");
      this.$emit('update:mode', this.ret);
      // console.log(this.ret);
    },
    handleClick2(){
      if(this.activeName === 'first'){
        this.views = [true,false];
      }else{
        this.views = [false,true];
      }
    },
    updateData() {
        // 更新 key，强制重新渲染组件
        this.updateDataCount += 1;
      }
    }
}
</script>
<style scoped>

::v-deep .el-tabs__item.is-active {  /* 被选中时 */
  color: #72bdff;  
}

::v-deep .el-tabs__item {  /* 未被选中时 */
  color: #ffffff; 
}

.datav-cell {
  text-overflow: ellipsis;
  overflow: hidden;
  white-space: nowrap;
}


.title1{
  position:absolute; 
  left:40%; 
  top:4%;
  font-size: 20px;
  color: #ffffff;
  text-shadow: 0 0 3px #1e82be, 0 0 4px #1e82be, 0 0 5px #1e82be, 0 0 6px #1e82be !important;
}

.rounded-btn-Optimization {
  border: none;
  /* 去除默认边框 */
  background-color: transparent;
  /* 设置背景色 */
  color: azure;
  /* 设置字体颜色 */
  padding: 0px 24px;
  /* 调整按钮大小 */
  text-align: center;
  /* 居中显示文本 */
  font-size: 16px;
  /* 设置字号 */
  cursor: pointer;
  /* 光标变成手型 */
  border-radius: 100px;
  font-weight: bold;
  cursor: pointer;
  /* 设置圆角 */
}

/* @charset "utf-8"; */
/* CSS Document */
@import "../../public/css/comon0.css";
</style>