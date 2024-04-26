<template>
    <dv-border-box-13 backgroundColor="rgba(6, 48, 109, .5)" style="height: calc(33% ); z-index: 11;">
      <div class="boxall" style="height: calc(100% )">
        <div class="alltitle">总体指标</div>
        <div class=" boxnav " id="echarts4" style="user-select: none; z-index: -10;"
          _echarts_instance_="ec_1710235324242">
          <div class="mainbox" style="position: relative; overflow:hidden; width: 100%; height: 100%;
                     padding: 0px; margin: 0px; border-width: 0px; cursor: default;">
            <div style="position:absolute; width:50%; top:10%; ">
                <img src='../../src/assets/border.png' style="position: absolute; top: 0px; left: 0px;"> </img>
                <img src='../../src/assets/闪电.png' style="position: absolute; top: 5px; left: 5px;"> </img>
                <div class="Text1">
                    2643 (kWh)
                </div>
                <div class="Text2">
                    数据中心能耗
                </div>
            </div>

            <div style="position:absolute; width:50%; top:10%; left:50%;">
                <img src='../../src/assets/border.png' style="position: absolute; top: 0px; left: 0px;"> </img>
                <img src='../../src/assets/闪电.png' style="position: absolute; top: 5px; left: 5px;"> </img>
                <div class="Text1">
                    15623(kWh)
                </div>
                <div class="Text2">
                    年度节电总量
                </div>
            </div>

            <div style="position:absolute; width:50%; top:60%;">
                <img src='../../src/assets/border.png' style="position: absolute; top: 0px; left: 0px;"> </img>
                <img src='../../src/assets/仪表盘.png' style="position: absolute; top: 5px; left: 5px;"> </img>
                <div class="Text1">
                    1.23/1.42
                </div>
                <div class="Text2">
                    PUE值/平均值
                </div>
            </div>

            <div style="position:absolute; width:50%; top:60%; left:50%;">
                <img src='../../src/assets/border.png' style="position: absolute; top: 0px; left: 0px;"> </img>
                <img src='../../src/assets/IT.png' style="position: absolute; top: 10px; left: 12px;"> </img>
                <div class="Text1">
                    18056(kWh)
                </div>
                <div class="Text2">
                    IT设备耗能
                </div>
            </div>
            
        </div>
        </div>
      </div>
    </dv-border-box-13>
  </template>
  
<script>
  export default {
    
  }
</script>
  
<style>
  /* @charset "utf-8"; */
  /* CSS Document */
  @import "../../public/css/comon0.css";

  .Text1{
    position: absolute;
    width:90px;
    top:7px;
    left: 50px;
    font-size: 14px; 
    color: #009bd8;
    font-weight: bold;
  }
  .Text2{
    position: absolute;
    width:140px;
    top:22px;
    left:52px;
    font-size: 12px; 
    color: #ffffff;
    font-weight: bold;
  }
</style>