<template>
    <div id="app">
        <component :is="currentMenu" :right="false">
            <router-link to="/">
                <span>首页</span>
            </router-link>
            <router-link to="/device_info">
                <span>设备详细信息</span>
            </router-link>
            <router-link to="/model_info">
                <span>模型信息</span>
            </router-link>
        </component>
        <main id="page-wrap">
            <h1 class="text-center">
                模型信息
            </h1>
            <div id="load_trend" />
            <div id="voltage_trend" />
            <div id="consumption_trend" />
            <div style="position:absolute; height:calc(82%); width:calc(22%); left:calc(2%)">
                <div style="position: absolute; top:calc(0%); left:calc(3%); width:calc(97%); height:calc(18%); text-align: left;">
                    <img src="../assets/UPS.png" style="position:absolute; left:0px; top:5px; width:calc(25%); 
                    height:(100%); border: 1px solid black;"/>
                    <span style="position:absolute; left:calc(28%); top:25px; font-size: 16px; width:calc(45%)">
                        UPS-PM1-IT-C4(tbt11auphw03)
                    </span>
                </div>
                
                <div style="position:absolute; top:calc(18%); left:calc(3%); width:97%; text-align: left">
                    <span style="font-weight: bold; font-size: 18px;">设备类型：</span>
                    <br>
                    <span style="font-size: 16px; ">UPS_华为_UPS5000S-1.6MW_V3R1C95_MODBUSTCP</span>
                </div>

                <div style="position:absolute; top:calc(30%); left:calc(3%); width:30%; text-align: left">
                    <span style="font-weight: bold; font-size: 18px;">制造商：</span>
                    <br>
                    <span style="font-size: 16px; ">huawei</span>
                </div>

                <div style="position:absolute; top:calc(30%); left:calc(35%); width:30%; text-align: left">
                    <span style="font-weight: bold; font-size: 18px;">设备状态：</span>
                    <br>
                    <span style="font-size: 16px; "> 在线</span>
                </div>

                <div style="position:absolute; top:calc(39%); left:calc(3%); width:97%; font-size: 18px; text-align: left">
                    <span style="font-weight: bold; font-size: 18px; ">设备参数：</span>
                    <vxe-table
                        border="inner"
                        stripe
                        show-overflow
                        :align="allAlign"
                        :data="table_data"
                        max-height="360"
                        :row-config="{isCurrent: true, isHover: true, height: 40}"
                        style="position:relative; top:5px; font-size:20px; color:black;">
                        <vxe-column field="param_name" title="参数名称" sort-type="string" sortable 
                        show-header-overflow show-overflow="title" show-footer-overflow></vxe-column>
                        <vxe-column field="param_value" title="参数值"></vxe-column>
                    </vxe-table>
                </div>
            </div>
        </main>

        <div class="device_signal">
            <h2 class="text-center" style="position:absolute; left: calc(2.5%); top: 15px">
                设备信号
            </h2>
            <ve-table :columns="columns" :table-data="tableData" :cell-style-option="cellStyleOption" 
                :row-style-option="rowStyleOption" row-key-field-name="rowKey" :sort-option="sortOption" 
                style="position:relative; top:50px; left:calc(2.5%); width:calc(95%)"/>
            <div class="table-pagination">
                <ve-pagination
                    :total="totalCount"
                    :page-index="pageIndex"
                    :page-size="pageSize"
                    @on-page-number-change="pageNumberChange"
                    @on-page-size-change="pageSizeChange"
                />
            </div>
        </div>
    </div>
</template>

<script>
    import { VeTable } from 'vue-easytable';
    import * as echarts from 'echarts';

    import {
        Slide,
        Bubble,
        Elastic,
        Push,
        PushRotate,
        ScaleDown,
        ScaleRotate,
        Reveal,
        Stack,
        FallDown,
        Menu
    } from 'vue-burger-menu';
    let DB_DATA = [];
    export default {
        data() {
            return {
                allAlign: "center",
                table_data: [
                    {param_name: '额定容量', param_value: '23107VA' },
                    {param_name: '电池电压', param_value: '210V' },
                    {param_name: '输入电压', param_value: '240V' },
                    {param_name: '输出电压', param_value: '220V' },
                    {param_name: '输入频率', param_value: '50Hz' },
                    {param_name: '输出频率', param_value: '50Hz' },
                    {param_name: '运行负载', param_value: '21.8%' },
                    {param_name: '剩余电池容量', param_value: '98%' },
                    {param_name: '预计剩余运行时间', param_value: '25min' },
                    {param_name: 'UPS工作状态', param_value: '正常工作' },
                    {param_name: 'UPS输出模式', param_value: '双变换模式' },
                    {param_name: '整机效率', param_value: '82%' },

                ],
                virtualScrollOption: {
                    // 是否开启
                    enable: true,
                },
                sortOption: {
                    sortChange: (params) => {
                        // console.log("sortChange::", params);
                        this.sortChange(params);
                    },
                },
                rowStyleOption: {
                    stripe: true,
                    hoverHighlight: true,
                    clickHighlight: true,
                },
                cellStyleOption: {
                    headerCellClass: ({ column, rowIndex }) => {
                        return "table-header-cell-class";
                        
                    },
                },
                // page index
                pageIndex: 1,
                // page size
                pageSize: 10,
                columns: [
                    {
                        field: "order",
                        key: "a",
                        title: "序号",
                        width: 60,
                        align: "center",
                    },
                    { field: "ComponentName", key: "b", title: "部件名称", align: "center", width:"35%",sortBy: "",
                        ellipsis: {
                            showTitle: true,
                        }, 
                    },
                    { field: "CounterName", key: "c", title: "指标名称", align: "center", sortBy: "", },
                    { field: "CounterValue", key: "d", title: "当前值", align: "center" },
                    { field: "Unit", key: "e", title: "单位", align: "center" },
                    { field: "UpdateTime", key: "f", title: "上次更新时间", align: "center", width:"15%", sortBy: "",},
                    { field: "CounterAttribute", key: "g", title: "指标属性", align: "center" },
                    { field: "CounterGroup", key: "h", title: "指标组", align: "center", sortBy: "",},
                    { field: "Operation", key: "i", title: "操作", align: "center" },
                ],
                menus: {
                    slide: { buttonText: 'Slide' },
                    push: { buttonText: 'Push' },
                    pushRotate: { buttonText: 'Push Rotate' },
                    reveal: { buttonText: 'Reveal' },
                    scaleDown: { buttonText: 'Scale Down' },
                    scaleRotate: { buttonText: 'Scale Rotate' },
                    // elastic: { buttonText: 'Elastic - (WIP)' },
                    // stack: { buttonText: 'Stack - (WIP)' },
                    bubble: { buttonText: 'Bubble' },
                    fallDown: { buttonText: 'Fall Down' }
                },
                side: 'left',
                currentMenu: 'Slide'
            }
        },
        components: {
            Slide,
            Bubble,
            Elastic,
            Push,
            PushRotate,
            ScaleDown,
            ScaleRotate,
            Reveal,
            Stack,
            FallDown,
            Menu,
            VeTable,
        },
        mounted() {
            this.handleResize();
            this.initChart();
        },
        computed: {
            // table data
            tableData() {
                const { pageIndex, pageSize } = this;
                return DB_DATA.slice((pageIndex - 1) * pageSize, pageIndex * pageSize);
            },
            // total count
            totalCount() {
                return DB_DATA.length;
            },
        },
        created() {
            this.initDatabase();
        },
        methods: {
            onBodyRowHeightChange(event) {
                console.log("event:",event); // 打印出事件对象
            },

            // page number change
            pageNumberChange(pageIndex) {
                this.pageIndex = pageIndex;
            },

            // page size change
            pageSizeChange(pageSize) {
                this.pageIndex = 1;
                this.pageSize = pageSize;
            },

            // Simulation table data
            initDatabase() {
                DB_DATA = [];
                for (let i = 0; i < 1000; i++) {
                    DB_DATA.push({
                        order:i+1,
                        ComponentName: "Air Conditioner_HUAWEI_NetCol8000-C150_V2R2C00_MODBUSTCP2",
                        CounterName: "运行转速",
                        CounterValue: "",
                        Unit: "%",
                        UpdateTime:"2024-03-20 12:00:00",
                        CounterAttribute:"AI",
                        CounterGroup:"电加热"+(i+1).toString(),
                        Operation:"",
                    });
                }
            },

            sortChange(params) {
                this.tableData.sort((a, b) => {
                    if (params.CounterGroup) {
                        if (params.CounterGroup === "asc") {
                            return a.CounterGroup.localeCompare(b.CounterGroup);
                        } else if (params.CounterGroup === "desc") {
                            return b.CounterGroup.localeCompare(a.CounterGroup);
                        } else {
                            return 0;
                        }
                    } 
                    else if (params.UpdateTime) {
                        if (params.UpdateTime === "asc") {
                            return a.UpdateTime.localeCompare(b.UpdateTime);
                        } else if (params.UpdateTime === "desc") {
                            return b.UpdateTime.localeCompare(a.UpdateTime);
                        } else {
                            return 0;
                        }
                    }
                    else if (params.CounterName) {
                        if (params.CounterName === "asc") {
                            return a.CounterName.localeCompare(b.CounterName);
                        } else if (params.CounterName === "desc") {
                            return b.CounterName.localeCompare(a.CounterName);
                        } else {
                            return 0;
                        }
                    }
                    else if (params.ComponentName) {
                        if (params.ComponentName === "asc") {
                            return a.ComponentName.localeCompare(b.ComponentName);
                        } else if (params.ComponentName === "desc") {
                            return b.ComponentName.localeCompare(a.ComponentName);
                        } else {
                            return 0;
                        }
                    }
                });
            },
            changeMenu(menu) {
            // this.currentMenu = menu.replace(/ +/g, '').toLowerCase()
            this.currentMenu = menu.replace(/ +/g, '')
            console.log(this.currentMenu)
            return this.currentMenu
            },
            changeSide(side) {
            this.side = side
            },
            handleResize() {
                const resizeObserver = new ResizeObserver(entries => {
                    for (let entry of entries) {
                        // Disconnect the observer
                        resizeObserver.disconnect();

                        // Use requestAnimationFrame to delay the execution of the function
                        window.requestAnimationFrame(() => {
                            // Handle the resize event here
                            // console.log(entry.contentRect.width);
                            // console.log(entry.contentRect.height);

                            // Reconnect the observer
                            resizeObserver.observe(document.body);
                        });
                    }
                });
                resizeObserver.observe(document.body);
            },
            initChart() {
                var chartDom1 = document.getElementById('load_trend');
                var myChart1 = echarts.init(chartDom1);

                var chartDom2 = document.getElementById('voltage_trend');
                var myChart2 = echarts.init(chartDom2);

                var chartDom3 = document.getElementById('consumption_trend');
                var myChart3 = echarts.init(chartDom3);

                var option1,option2,option3;

                option1 = {
                    title: {
                        text: '负载趋势'
                    },
                    tooltip: {
                        trigger: 'axis'
                    },
                    legend: {
                        data: ['UPS1','UPS2','UPS3']
                    },
                    grid: {
                        left: '3%',
                        right: '6%',
                        bottom: '3%',
                        containLabel: true
                    },
                    toolbox: {
                        feature: {
                        saveAsImage: {}
                        }
                    },
                    xAxis: {
                        type: 'category',
                        boundaryGap: false,
                        data: ['18:00:00', '18:15:00', '18:30:00', '18:45:00', '19:00:00']
                    },
                    yAxis: {
                        type: 'value'
                    },
                    series: [
                        {
                        name: 'UPS1',
                        type: 'line',
                        stack: 'Total',
                        data: [120, 132, 101, 134, 90]
                        },
                        {
                        name: 'UPS2',
                        type: 'line',
                        stack: 'Total',
                        data: [220, 182, 191, 234, 290]
                        },
                        {
                        name: 'UPS3',
                        type: 'line',
                        stack: 'Total',
                        data: [150, 232, 201, 154, 190]
                        },
                    ]
                };

                option2 = {
                    title: {
                        text: '电压趋势'
                    },
                    tooltip: {
                        trigger: 'axis'
                    },
                    legend: {
                        data: ['UPS1','UPS2','UPS3']
                    },
                    grid: {
                        left: '3%',
                        right: '6%',
                        bottom: '3%',
                        containLabel: true
                    },
                    toolbox: {
                        feature: {
                        saveAsImage: {}
                        }
                    },
                    xAxis: {
                        type: 'category',
                        boundaryGap: false,
                        data: ['18:00:00', '18:15:00', '18:30:00', '18:45:00', '19:00:00' ]
                    },
                    yAxis: {
                        type: 'value'
                    },
                    series: [
                        {
                        name: 'UPS1',
                        type: 'line',
                        stack: 'Total',
                        data: [120, 132, 101, 134, 90]
                        },
                        {
                        name: 'UPS2',
                        type: 'line',
                        stack: 'Total',
                        data: [220, 182, 191, 234, 290]
                        },
                        {
                        name: 'UPS3',
                        type: 'line',
                        stack: 'Total',
                        data: [150, 232, 201, 154, 190,]
                        },
                    ]
                };

                option3 = {
                    title: {
                        text: '能耗趋势'
                    },
                    tooltip: {
                        trigger: 'axis'
                    },
                    legend: {
                        data: ['consumption']
                    },
                    grid: {
                        left: '3%',
                        right: '6%',
                        bottom: '3%',
                        containLabel: true
                    },
                    toolbox: {
                        feature: {
                        saveAsImage: {}
                        }
                    },
                    xAxis: {
                        type: 'category',
                        boundaryGap: false,
                        data: ['18:00:00', '18:15:00', '18:30:00', '18:45:00', '19:00:00']
                    },
                    yAxis: {
                        type: 'value'
                    },
                    series: [
                        {
                        name: 'consumption',
                        type: 'line',
                        stack: 'Total',
                        data: [120, 132, 101, 134, 90]
                        },
                    ]
                };

                option1 && myChart1.setOption(option1);
                option2 && myChart2.setOption(option2);
                option3 && myChart3.setOption(option3);
            }
        }
    }
</script>

<style lang="scss">
    *,
    *:after,
    *:before {
        -webkit-box-sizing: border-box;
        box-sizing: border-box;
    }

    .device_signal{
        position: relative;
        top: -20px;
        background: #ffffff;
        width: calc(100%);
        height: calc(70%);
        border: 25px solid rgb(226, 226, 226);
    }

    html {
        height: 100%;
    }

    body {
        height: 100%;
        color: #fffce1;
        font-family: 'Raleway', Arial, sans-serif;
        margin: 0px;
    }

    #app {
        height: 300%;
    }

    a {
        color: #4e4a46;
        text-decoration: none;

        &:hover,
        &:focus {
            color: #c94e50;
        }
    }

    main {
        height: 33%;
        text-align: center;
        background: #ffffff;
        overflow: auto;
        border: 25px solid rgb(226, 226, 226);
    }

    h1 {
        font-weight: 800;
        font-size: 3.75em;
    }

    .description {
        max-width: 20em;
        margin: 1.2em auto 1em;
        line-height: 1.3em;
        font-weight: 400;
    }

    .demo-buttons {
        font-size: 1em;
        max-width: 1200px;
        margin: 2em auto 3em;
        padding: 0 10em;

        a {
            display: inline-block;
            margin: 0.75em;
            padding: 1.35em 1.1em;
            width: 15em;
            background: #fffce1;
            text-transform: uppercase;
            letter-spacing: 1px;
            font-weight: 800;
            border-top-left-radius: 20px 50px;
            border-top-right-radius: 20px 50px;
            border-bottom-right-radius: 20px 50px;
            border-bottom-left-radius: 20px 50px;
            cursor: pointer;

            &.currentDemo {
            background: #c94e50;
            color: #fffce1;
            }
        }
    }

    .sideButton {
        display: inline-block;
        width: 5em;
        height: 2.5em;
        line-height: 2.5em;
        cursor: pointer;
        background: #fffce1;
        text-transform: uppercase;
        letter-spacing: 1px;
        font-size: 0.8em;
        font-weight: 800;

        &.left {
            border-top-left-radius: 10px;
            border-bottom-left-radius: 10px;
        }

        &.right {
            border-top-right-radius: 10px;
            border-bottom-right-radius: 10px;
        }

        &.active {
            background: #c94e50;
            color: #fffce1;
        }
    }

    @media screen and (max-width: 40em) {
        main {
            font-size: 80%;
        }

        h1 {
            padding-top: 1em;
            font-size: 2.5em;
        }

        .demo-buttons {
            max-width: 900px;
            padding: 0 2em;
        }
    }

    //
    // Burger menu custom styles
    //
    .bm-burger-button {
        position: absolute;
        width: 36px;
        height: 30px;
        left: 36px;
        top: 36px;
    }

    .right .bm-burger-button {
        left: initial;
        right: 36px;
    }

    .bm-burger-bars {
        background: #373a47;
    }

    .bm-morph-shape {
        fill: #373a47;
    }

    .bm-menu {
        background: #373a47;

        a {
            color: #b8b7ad;

            &:hover,
            &:focus {
            color: #c94e50;
            }
        }
    }

    //
    // Mixins
    //
    .menu-1 {
        .bm-cross {
            background: #bdc3c7;
        }

        .bm-menu {
            padding: 2.5em 1.5em 0;
            font-size: 1.15em;
        }
    }

    .menu-2 {
        .bm-cross {
            background: #999;
        }

        .bm-menu {
            padding: 3.4em 1em 0;
        }

        a {
            padding: 1em;
        }

        i {
            font-size: 1.7em;
            vertical-align: middle;
            color: #282a35;
        }
    }

    .menu-3 {
        .bm-cross {
            background: #888;
        }

        .bm-menu {
            padding: 2em 1em;
            font-size: 1.15em;
        }

        i {
            opacity: 0.5;
        }

        span {
            text-transform: uppercase;
            letter-spacing: 1px;
            font-size: 0.75em;
        }
    }

    .menu-4 {
        .bm-cross {
            background: #888;
        }

        h2 {
            margin: 0 auto;
            padding: 2em 1em;
            color: rgba(0, 0, 0, 0.4);
            box-shadow: inset 0 -1px rgba(0, 0, 0, 0.2);

            i {
                margin-left: 0.2em;
            }

            span {
                font-size: 1.6em;
                font-weight: 700;
            }
        }

        a {
            padding: 1em;
            text-transform: uppercase;
            transition: background 0.3s, box-shadow 0.3s;
            box-shadow: inset 0 -1px rgba(0, 0, 0, 0.2);

            span {
                letter-spacing: 1px;
                font-weight: 400;
            }

            &:hover,
            &:focus {
                background: rgba(0, 0, 0, 0.2);
                box-shadow: inset 0 -1px rgba(0, 0, 0, 0);
                color: #b8b7ad;
            }
        }
    }
    
    /*所有单元格*/
    .ve-table td {  
        font-size: 16px;
        color: #000000; 
    }
    
    /*表头*/
    .ve-table th {
        font-size: 16px;
        color: #000000;
    }

    /*所有单元格*/
    .vxe-table td {  
        font-size: 14px;
        color: #000000; 
    }
    
    /*表头*/
    .vxe-table th {
        font-size: 18px;
        color: #000000;
    }


    .table-header-cell-class {
        background: rgb(26, 59, 96) !important;
        color: #fff !important;
    }

    .table-pagination {
        position: relative;
        top: 70px;
        text-align: center;
    }

    #load_trend {
        position: absolute;
        top: calc(15%);
        left: calc(25%);
        width: calc(35%);
        height: calc(35%);
    }

    #voltage_trend {
        position: absolute;
        top: calc(15%);
        left: calc(62%);
        width: calc(35%);
        height: calc(35%);
    }

    #load_trend::before {
        content: "";
        position:absolute;
        left:-10px;
        display: block;
        height: 0.5px;
        background-color: #b4b4b4;
        margin: -15px 0px;
        width:110%;
    }

    #voltage_trend::before {
        content: "";
        position:absolute;
        left:-10px;
        display: block;
        height: 0.5px;
        background-color: #b4b4b4;
        margin: -15px 0;
        width:102%;
    }

    #consumption_trend {
        position: absolute;
        top: calc(55%);
        left: calc(25%);
        width: calc(72%);
        height: calc(40%);
    }
    
    #consumption_trend::before {
        content: "";
        position: absolute;
        left: -10px;
        top: -350px;
        width: 0.5px;
        background-color: #b4b4b4;
        height:650px;
    }
</style>
