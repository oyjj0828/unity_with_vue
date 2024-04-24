<template>
    <div style="height:calc(60%)">
        <dv-border-box-13 backgroundColor="rgba(6, 48, 109, .5)" style="height: calc(100% ); z-index: 11;">
            <div class="boxall" style="height: calc(100% )">
                <div class="alltitle" style="top:10px">设备参数</div>
                <el-dropdown trigger="click" style="position:absolute; top:10%; left:5%" @command="handleCommand">
                    <span class="el-dropdown-link" style="color:#009bd8; font-size:16px; font-weight:bold; cursor: pointer">
                        {{hint}}<i class="el-icon-arrow-down el-icon--right"></i>
                    </span>
                    <el-dropdown-menu slot="dropdown">
                        <el-dropdown-item command="空调系统">空调系统</el-dropdown-item>
                        <el-dropdown-item command="冷水机组">冷水机组</el-dropdown-item>
                        <el-dropdown-item command="燃气分布式基本供能系统">燃气分布式基本供能系统</el-dropdown-item>
                        <el-dropdown-item command="太阳能光伏发电系统">太阳能光伏发电系统</el-dropdown-item>
                        <el-dropdown-item command="任务负载情况">任务负载情况</el-dropdown-item>
                    </el-dropdown-menu>
                </el-dropdown>

                <div v-if="views[0]" style="position:absolute; width:90%; top:17%; left:5%; height:79%;">
                    <div style="position:absolute; height:15%; font-size: 14px; width:100%; text-align: center; background-color: #1B4C87 ; border-collapse: collapse;">
                        <table style=" font-size: inherit;">
                            <tr>
                            <!-- <td style="font-size: inherit;width:16.6% ;">index </td> -->
                            <td style="font-size: inherit; width:50%;">参数名称</td>
                            <td style="font-size: inherit; width:50%;">参数</td>
                            </tr>
                        </table>
                    </div>
                    <dv-scroll-board :config="config0" style="position:absolute; top:15%; width:100%; height:85%" />
                </div>

                <div v-else-if="views[1]" style="position:absolute; width:90%; top:17%; left:5%; height:79%;">
                    <div style="position:absolute; height:15%; font-size: 14px; width:100%; text-align: center; background-color: #1B4C87 ; border-collapse: collapse;">
                        <table style=" font-size: inherit;">
                            <tr>
                            <!-- <td style="font-size: inherit;width:16.6% ;">index </td> -->
                            <td style="font-size: inherit; width:50%;">参数名称</td>
                            <td style="font-size: inherit; width:50%;">参数</td>
                            </tr>
                        </table>
                    </div>
                    <dv-scroll-board :config="config1" style="position:absolute; top:15%; width:100%; height:85%" />
                </div>

                <div v-else-if="views[2]" style="position:absolute; width:90%; top:17%; left:5%; height:79%;">
                    <div style="position:absolute; height:15%; font-size: 14px; width:100%; text-align: center; background-color: #1B4C87 ; border-collapse: collapse;">
                        <table style=" font-size: inherit;">
                            <tr>
                            <!-- <td style="font-size: inherit;width:16.6% ;">index </td> -->
                            <td style="font-size: inherit; width:50%;">参数名称</td>
                            <td style="font-size: inherit; width:50%;">参数</td>
                            </tr>
                        </table>
                    </div>
                    <dv-scroll-board :config="config2" style="position:absolute; top:15%; width:100%; height:85%" />
                </div>

                <div v-else-if="views[3]" style="position:absolute; width:90%; top:17%; left:5%; height:79%;">
                    <div style="position:absolute; height:15%; font-size: 14px; width:100%; text-align: center; background-color: #1B4C87 ; border-collapse: collapse;">
                        <table style=" font-size: inherit;">
                            <tr>
                            <!-- <td style="font-size: inherit;width:16.6% ;">index </td> -->
                            <td style="font-size: inherit; width:50%;">参数名称</td>
                            <td style="font-size: inherit; width:50%;">参数</td>
                            </tr>
                        </table>
                    </div>
                    <dv-scroll-board :config="config3" style="position:absolute; top:15%; width:100%; height:85%" />
                </div>

                <div v-else-if="views[4]" style="position:absolute; width:90%; top:17%; left:5%; height:79%;">
                    <div style="position:absolute; height:15%; font-size: 14px; width:100%; text-align: center; background-color: #1B4C87 ; border-collapse: collapse;">
                        <table style=" font-size: inherit;">
                            <tr>
                            <!-- <td style="font-size: inherit;width:16.6% ;">index </td> -->
                            <td style="font-size: inherit; width:50%;">参数名称</td>
                            <td style="font-size: inherit; width:50%;">参数</td>
                            </tr>
                        </table>
                    </div>
                    <dv-scroll-board :config="config4" style="position:absolute; top:15%; width:100%; height:85%" />
                </div>
            </div>
        </dv-border-box-13>
    </div>
</template>

<script>
export default {
    data() {
        return {
            views:[true,false,false,false,false],
            hint: '空调系统',
            currentDevice:'',
            config0: {
                data: [
                    ['空调型号', "<div class='datav-cell' title='华为Fusion8000e200'>华为Fusion8000...</div>"],
                    ['工作模式', '干模式'],
                    ['空调送风温度', '21.6℃'],
                    ['空调回风温度', '28.5℃'],
                    ['风机转速', '25000rpm'],
                ],
                index: false,
                align: ['center', 'center'],
                carousel: 'page',
                oddRowBGC: '#2457A0',
                evenRowBGC: '#068AC0',
                rowNum: 5,
            },
            config1: {
                data: [
                    ['冷冻水回水温度', '5℃'],
                    ['冷冻水供水温度', '20℃'],
                    ['冷却水回水温度', '15.4℃'],
                    ['冷却水供水温度', '25.6℃'],
                    ['压缩机数量', '5'],
                    ['水阀开度', '65%'],
                    ['水阀转速', '30000rpm'],
                ],
                index: false,
                align: ['center', 'center'],
                carousel: 'page',
                oddRowBGC: '#2457A0',
                evenRowBGC: '#068AC0',
                rowNum: 7,
            },
            config2: {
                data: [
                    ['当前所属季节', '制冷季'],
                    ['燃机台数', '2台/套'],
                    ['燃机功率', '29.15MW'],
                    ['燃机效率', '36.5%'],
                    ['余热锅炉', '2台/套'],
                    ['高压蒸汽', '6.5MPa'],
                    ['高压蒸汽温度', '438℃'],
                    ['高压流量', '45.3t/h'],
                    ['抽凝汽机', '1台/套'],
                    ['抽汽压力', '0.6MPa'],
                    ['抽汽温度', '212℃'],
                    ['最大抽汽量', '33t/h'],
                    ['背压汽轮机', '1台/套'],
                    ['排汽压力', '0.6MPa'],
                    ['排汽温度', '207℃'],
                    ['排汽流量', '44.9t/h'],
                ],
                index: false,
                align: ['center', 'center'],
                carousel: 'page',
                oddRowBGC: '#2457A0',
                evenRowBGC: '#068AC0',
                rowNum: 7,
            },
            config3: {
                data: [
                    ['装机容量', '10MW'],
                    ['综合发电效率', '81%'],
                    ['发电量', '1124.82万kWh'],
                ],
                index: false,
                align: ['center', 'center'],
                carousel: 'page',
                oddRowBGC: '#2457A0',
                evenRowBGC: '#068AC0',
                rowNum: 3,
            },
            config4: {
                data: [
                    ['进程总数', '423012'],
                    ['机柜1负载', '89%'],
                    ['机柜2负载','93%'],
                    ['机柜1温度', '56℃'],
                    ['机柜2温度', '62℃'],
                ],
                index: false,
                align: ['center', 'center'],
                carousel: 'page',
                oddRowBGC: '#2457A0',
                evenRowBGC: '#068AC0',
                rowNum: 5,
            },
        };
    },
    methods:{
        handleCommand(command){
            this.currentDevice = command;
            this.hint = command;
            switch (command) {
                case '空调系统':
                    this.views = [true,false,false,false,false];
                    break;
                case '冷水机组':
                    this.views = [false,true,false,false,false];
                    break;
                case '燃气分布式基本供能系统':
                    this.views = [false,false,true,false,false];
                    break;
                case '太阳能光伏发电系统':
                    this.views = [false,false,false,true,false];
                    break;
                case '任务负载情况':
                    this.views = [false,false,false,false,true];
                    break;
                default:
                    break;
            }
        }
    }
}
</script>

<style>
/* @charset "utf-8"; */
/* CSS Document */
@import "../../public/css/comon0.css";
.device_info{
    position:absolute;
    width:90%;
    top:20%;
    left:5%;
    font-size:16px;
    font-weight:bold;
    text-align: center;
    color:azure
}

</style>