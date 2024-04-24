<template>
    <div style="height:calc(35%)">
        <dv-border-box-13 backgroundColor="rgba(6, 48, 109, .5)" style="height: calc(100% ); z-index: 11;">
            <div class="boxall" style="height: calc(100% )">
                <div class="alltitle">电价详情</div>
                <el-tooltip placement="top">
                    <div slot="content">
                        数据来源：内蒙古自治区发展和改革委员会<br/>
                        （1）大风季（1-5月、9-12月）<br/>
                        &emsp;&emsp;峰时段6小时：06:00-08:00、18:00-22:00，<br/>
                        &emsp;&emsp;平时段9小时：04:00-06:00、08:00-11:00、16:00-18:00、22:00-24:00，<br/>
                        &emsp;&emsp;谷时段9小时：00:00-04:00、11:00-16:00。<br/>
                        <br/>
                        （2）小风季（6-8月）<br/>
                        &emsp;&emsp;峰时段6小时：06:00-08:00、18:00-22:00，<br/>
                        &emsp;&emsp;平时段13小时：0:00-06:00、08:00-11:00、16:00-18:00、22:00-24:00，<br/>
                        &emsp;&emsp;谷时段5小时：11:00-16:00。
                    </div>
                    <i class="el-icon-info" style="position:absolute; top:19px; left:92px; cursor: pointer;" @click="handleClick"></i>
                </el-tooltip>

                <div style="position:absolute; width:calc(45%); height:calc(40%); top:20%; left:5%;">
                    <img src='@/assets/时间段.png' style="position: absolute; top: 0px; left: 0px; width:60px; height:60px"> </img>
                    <div class="text1">
                        当前风季
                    </div>
                    <div class="text2">
                        大风季
                    </div>
                </div>

                <div style="position:absolute; width:calc(45%); height:calc(40%); top:20%; left:55%;">
                    <img src='@/assets/时间段.png' style="position: absolute; top: 0px; left: 0px; width:60px; height:60px"> </img>
                    <div class="text1">
                        当前时段
                    </div>
                    <div class="text2">
                        峰时段
                    </div>
                </div>

                <div style="position:absolute; width:calc(45%); height:calc(40%); top:60%; left:5%;">
                    <img src='@/assets/电压.png' style="position: absolute; top: 0px; left: 0px; width:60px; height:60px"> </img>
                    <div class="text1">
                        电压等级
                    </div>
                    <div class="text2">
                        35 kV
                    </div>
                </div>

                <div style="position:absolute; width:calc(45%); height:calc(40%); top:60%; left:55%;">
                    <img src='@/assets/电价.png' style="position: absolute; top: 0px; left: 0px; width:60px; height:60px"> </img>
                    <div class="text1">
                        当前电价
                    </div>
                    <div class="text2">
                        0.645697<br/>元/kWh
                    </div>
                </div>

            </div>
        </dv-border-box-13>
    </div>
</template>

<script>
export default {
    data() {
        return {

        };
    },
    methods:{
        handleClick(){
            window.open('http://fgw.nmg.gov.cn/zfxxgk/fdzdgknr/zcjd/202401/t20240101_2434833.html');
        }
    }
}
</script>

<style>
/* @charset "utf-8"; */
/* CSS Document */
@import "../../public/css/comon0.css";

.text1{
    position: absolute;
    width:90px;
    top:15px;
    left: 65px;
    font-size: 14px; 
    color: #009bd8;
    font-weight: bold;
  }
  .text2{
    position: absolute;
    width:140px;
    top:32px;
    left:65px;
    font-size: 12px; 
    color: #ffffff;
    font-weight: bold;
  }
</style>