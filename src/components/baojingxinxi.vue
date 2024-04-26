<template>
    <dv-border-box-11 backgroundColor="rgba(6, 48, 109, .5)" style="height: calc(100%); width: calc(100% ); z-index: 11;">
        <div class="boxall" style="height: 100%; width:100%">
            <div class="title1">设备报警信息</div>
            <div id="echartsContainer5" style="position:absolute; top:15%; left:5%; width:90%; height:80%" />
        </div>
    </dv-border-box-11>
</template>
  
<script>
import { ref, watchEffect } from 'vue';
import * as echarts from 'echarts';
export default{
    data(){
        return{
            option:{
                tooltip: {
                    trigger: 'axis',
                    axisPointer: {
                        type: 'shadow' // 'shadow' as default; can also be 'line' or 'shadow'
                    }
                },
                legend: {
                    left: 'center',
                    textStyle:{
                        fontSize: 14,//字体大小
                        color: '#ffffff'//字体颜色
                    },
                },
                grid: {
                    left: '5%',
                    right: '5%',
                    bottom: '5%',
                    containLabel: true
                },
                xAxis: {
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
                yAxis: {
                    type: 'category',
                    data: ['安防', '环境', '制冷', '供电'],
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
                        name: '紧急',
                        type: 'bar',
                        stack: 'total',
                        label: {
                            show: true
                        },
                        itemStyle: {
                            borderRadius: 10,
                            color:'rgb(238,102,102)',
                        },
                        clickable: true,
                        emphasis: {
                            focus: 'none'
                        },
                        data: [320, 302, 301, 334]
                    },
                    {
                        name: '重要',
                        type: 'bar',
                        stack: 'total',
                        label: {
                            show: true
                        },
                        clickable: true,
                        itemStyle: {
                            borderRadius: 10,
                            color:'rgb(250,200,88)',
                        },
                        emphasis: {
                            focus: 'none'
                        },
                        data: [120, 132, 101, 134]
                    },
                    {
                        name: '次要',
                        type: 'bar',
                        stack: 'total',
                        label: {
                            show: true
                        },
                        clickable: true,
                        itemStyle: {
                            borderRadius: 10,
                            color:'rgb(227,238,109)',
                        },
                        emphasis: {
                            focus: 'none'
                        },
                        data: [220, 182, 191, 234]
                    },
                    {
                        name: '提示',
                        type: 'bar',
                        stack: 'total',
                        label: {
                            show: true
                        },
                        clickable: true,
                        itemStyle: {
                            borderRadius: 10,
                        },
                        emphasis: {
                            focus: 'none'
                        },
                        data: [150, 212, 201, 154]
                    },
                ]
            },
        }
    },
    methods:{
        initChart(){
            var chartDom = document.getElementById('echartsContainer5');
            var myChart = echarts.init(chartDom);
            myChart.setOption(this.option);
            myChart.on('click', (params) => {
                if(params.name=='安防'){
                    this.$router.push({name:'alarm_info',query:{device_type:'security'}});
                }
                else if(params.name=='环境'){
                    this.$router.push({name:'alarm_info',query:{device_type:'environment'}});
                }
                else if(params.name=='制冷'){
                    this.$router.push({name:'alarm_info',query:{device_type:'cooling'}});
                }
                else if(params.name=='供电'){
                    this.$router.push({name:'alarm_info',query:{device_type:'power'}});
                }
            });
        }
    },
    mounted(){
        this.initChart();
    }
}
</script>

<style scoped>

/* @charset "utf-8"; */
/* CSS Document */
@import "../../public/css/comon0.css";
  
.title1{
    position:absolute; 
    left:35%; 
    top:4%;
    font-size: 20px;
    color: #ffffff;
    text-shadow: 0 0 3px #1e82be, 0 0 4px #1e82be, 0 0 5px #1e82be, 0 0 6px #1e82be !important;
}

</style>