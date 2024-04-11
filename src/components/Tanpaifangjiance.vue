<template>
    <dv-border-box-11 backgroundColor="rgba(6, 48, 109, .5)" style="height: calc(100% ); z-index: 11;">
      <div class="boxall" style="height: calc(100% )">
        <div class="title">碳排放监测信息</div>
        <div style="position: absolute; top:50px; width:calc(50%); height:calc(35%)">
            <span class="span1">2024年平均电量碳排放</span>
            <span class="span2">1.9888 t/MWh</span>
            <dv-percent-pond :config="config1" style="position:absolute; top:100px; left:5px; width:170px;height:30px;" />
        </div>

        <div style="position: absolute; left:calc(50%); top:50px; width:calc(50%); height:calc(35%)">
            <span class="span1">3月平均电量碳排放</span>
            <span class="span2">0.9888 t/MWh</span>
            <dv-percent-pond :config="config2" style="position:absolute; top:100px; left:5px; width:170px;height:30px;" />
        </div>
        <div style="position: absolute; top:calc(40%); width:calc(100%); height:calc(60%)">
            <dv-capsule-chart :config="config3" style="position:absolute; left:0px; top:30px; width:calc(85%); height:200px" />
        </div>
      </div>
    </dv-border-box-11>
  </template>
  
  <script>
    const fullWidth = 300
    const borderGap = 3
    const borderWidth = 3
    const usefulWidth = fullWidth - (borderGap + borderWidth) * 2

    const pieceLength = [0.25, 0.5, 0.25]
    const pieceGap = 3

    const lineDash = pieceLength
        .map(l => [usefulWidth * l, pieceGap])
        .reduce((all, current) => [...all, ...current], [])
    export default {
        data(){
            return{
                config1:{
                    value: 85,
                    colors: ['#01c4f9', '#c135ff'],
                    lineDash,
                },
                config2:{
                    value: 90,
                    colors: ['#01c4f9', '#c135ff'],
                    lineDash,
                },
                config3:{
                    data: [
                        {
                        name: '累计等效减排',
                        value: 2000
                        },
                        {
                        name: '清洁能源',
                        value: 400
                        },
                        {
                        name: '上月累计碳排放量',
                        value: 1200
                        },
                        {
                        name: '外送碳排放',
                        value: 1200
                        },
                    ],
                    colors: ['#32c5e9', '#32c5e9', '#32c5e9', '#32c5e9'],
                    showValue: true,
                    unit:"t",
                }
            }
        },
    }
  </script>
  <style>
  /* @charset "utf-8"; */
  /* CSS Document */
  @import "../../public/css/comon0.css";

  .title{
    position:relative; 
    left:110px; 
    top:15px;
    font-size: 20px;
    color: #ffffff;
    text-shadow: 0 0 3px #1e82be, 0 0 4px #1e82be, 0 0 5px #1e82be, 0 0 6px #1e82be !important;
  }
  .span1{
    position:absolute; 
    left:5px;
    top:30px; 
    font-size:16px; 
    width:calc(100%);
    color:azure;
    font-weight:bold;
  }
  .span2{
    position:absolute; 
    left:5px;
    top:60px; 
    font-size:14px; 
    width:calc(100%);
    color:rgb(255, 189, 21);
    font-weight:bold;
  }
  .img1{
    position:absolute;
    left:5px;
    top:105px;
    width:160px;
    height:25px;
  }
  .img2{
    position:absolute;
    left: 5px;
    top:105px;
    width:160px;
    height:25px;
  }

  </style>