<template>
    <div style="height:100%;">
        <dv-border-box-13 backgroundColor="rgba(6, 48, 109, .5)" style="position:ablolute; top:10%; height: calc(80%); width: calc(100%); z-index: 11;">
            <div class="boxall" style="height: calc(100% )">
                <div class="alltitle" style="top:10px">优化控制</div>
                <div style="position:absolute; left:5%; top:8%; width:90%; height:13%">
                    <div style="position:absolute; top:0; height:100%; width:100%">
                        <div style="position:absolute; left:0; top:0; width:50%; height:100%">
                            <img src="@/assets/碳交易成本.png" style="position:absolute; left:0; top:0; width: 60px; height: 60px"/>
                            <div class="text3">
                                碳交易成本
                            </div>
                            <div class="text4">
                                24697元
                            </div>
                            <el-tooltip placement="top">
                                <div slot="content">
                                    碳交易成本=(实际二氧化碳排放-二氧化碳配额)*单位碳排放交易价格
                                </div>
                                <i class="el-icon-info" style="position:absolute; top:35px; left:118px; cursor: pointer;"></i>
                            </el-tooltip>
                        </div>

                        <div style="position:absolute; left:50%; top:0; width:50%; height:100%">
                            <img src="@/assets/电价成本.png" style="position:absolute; left:0; top:0; width: 60px; height: 60px"/>
                            <div class="text3">
                                电价成本
                            </div>
                            <div class="text4">
                                85626元
                            </div>
                        </div>
                    </div>
                </div>

                <div style="position:absolute; left:5%; top:22%; width:90%; height:50%">
                    <el-dropdown trigger="click" style="position:absolute; top:0; left:0" @command="handleCommand2">
                        <span class="el-dropdown-link" style="color:azure; font-size:16px; font-weight:bold; cursor: pointer">
                            {{hint}}<i class="el-icon-arrow-down el-icon--right"></i>
                        </span>
                        <el-dropdown-menu slot="dropdown">
                            <el-dropdown-item command="煤电">煤电</el-dropdown-item>
                            <el-dropdown-item command="风电">风电</el-dropdown-item>
                            <el-dropdown-item command="水电">水电</el-dropdown-item>
                            <el-dropdown-item command="光伏">光伏</el-dropdown-item>
                            <el-dropdown-item command="天然气">天然气</el-dropdown-item>
                            <el-dropdown-item command="储能系统">储能系统</el-dropdown-item>
                        </el-dropdown-menu>
                    </el-dropdown>
                    <div id="echartsContainer" style="position:absolute; left:0; top:10%; width: 100%; height: 90%" />
                </div>

                <div style="position:absolute; left:7%; top:73%; width:90%; height:25%">
                    <img src="@/assets/AI.png" style="position:absolute; top:0; left:30%; height:100px; width:100px"/>
                    <button class="rounded-btn" style="position:relative; height: 50px; width: 100px; top: 90px; left: 92px;"
                    @click="handleClick">
                        优化策略
                    </button>
                </div>
                <div v-if="view" style="position: absolute; left: -622px; top: 50px; height: 420px; width: 390px;">
                    <OptimizationStrategy />
                </div>
            </div>
        </dv-border-box-13>
    </div>
</template>
  
<script>
import * as echarts from 'echarts';
import OptimizationStrategy from '@/components/OptimizationStrategy.vue';

export default {
    components: {
        OptimizationStrategy
    },
    data() {
        return {
            hint:'煤电',
            view:false,
            option:{
                xAxis: {
                    type: 'category',
                    data: ['12:00', '13:00', '14:00', '15:00', '16:00'],
                    boundaryGap: false, // 不留白
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
                        data: [0.66254, 0.642556, 0.665254, 0.652344, 0.671327],
                        type: 'line'
                    }
                ],
                grid: {
                    top: '5%',
                    left: '0%', // 设置左边距为容器宽度的10%
                    right: '7%', // 设置右边距为容器宽度的10%
                    bottom: '0%', // 设置底部边距为容器高度的3%
                    containLabel: true // 包含坐标轴的标签
                },
                tooltip: {
                    trigger: 'axis',
                    axisPointer: {
                        animation: false,
                        type: 'line',
                        crossStyle: {
                            color: '#999'
                        },
                    },
                    formatter: function(params) {
                        // params 是一个包含当前数据点信息的对象数组
                        // 在这个例子中，我们只显示第一个数据系列的信息
                        var data = params[0].data;
                        return '电价: ' + data;
                    }
                },
            },
        }
    },
    mounted() {
        this.initChart();
    },
    methods: {
        initChart() {
            this.myChart = echarts.init(document.getElementById('echartsContainer'));
            this.myChart.setOption(this.option);
        },
        handleClick() {
            this.view = !this.view;
        },
        handleCommand2(command) {
            this.hint = command;
            var chart=echarts.getInstanceByDom(document.getElementById('echartsContainer'));
            var option=chart.getOption();
            if(command=='煤电'){
                option.series[0].data=[0.66254, 0.642556, 0.665254, 0.652344, 0.671327];
            }
            else if(command=='风电'){
                option.series[0].data=[0.56254, 0.542556, 0.565254, 0.552344, 0.571327];
            }
            else if(command=='水电'){
                option.series[0].data=[0.46254, 0.442556, 0.465254, 0.452344, 0.471327];
            }
            else if(command=='光伏'){
                option.series[0].data=[0.36254, 0.342556, 0.365254, 0.352344, 0.371327];
            }
            else if(command=='天然气'){
                option.series[0].data=[0.26254, 0.242556, 0.265254, 0.252344, 0.271327];
            }
            else if(command=='储能系统'){
                option.series[0].data=[0.562354, 0.542556, 0.565254, 0.552344, 0.571327];
            }
            chart.setOption(option);
        },
    }
}
    
</script>

<style>
/* @charset "utf-8"; */
/* CSS Document */
@import "../../public/css/comon0.css";

.text3{
    position: absolute;
    width:80px;
    top:15px;
    left: 65px;
    font-size: 14px; 
    color: #ffffff;
    font-weight: bold;
  }
  .text4{
    position: absolute;
    width:50px;
    top:32px;
    left:65px;
    font-size: 12px; 
    color: #009bd8;
    font-weight: bold;
  }

</style>