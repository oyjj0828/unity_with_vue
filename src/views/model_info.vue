<template>
    <div id="app" style="height:100%; background: white; border: 25px solid rgb(226, 226, 226);">
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
        <div>
            <h1 class="text-center">
                模型信息
            </h1>
            <div style="position:absolute; width:96.5%; height:85%; ">
                <div style="position:absolute; width:25%; height:96%; top:calc(2%); left:calc(2.5%); 
                border-right: 1px solid rgb(200,200,200);">
                    <el-dropdown trigger="click" @command="handleCommand" split-button type="primary" style="position:absolute; top:0; left:0">
                        {{mode}}
                        <el-dropdown-menu slot="dropdown">
                            <el-dropdown-item command="服务器能耗预测">服务器能耗预测</el-dropdown-item>
                            <el-dropdown-item command="空调能耗预测">空调能耗预测</el-dropdown-item>
                            <el-dropdown-item command="室内温度预测">室内温度预测</el-dropdown-item>
                            <el-dropdown-item command="PUE预测">PUE预测</el-dropdown-item>
                        </el-dropdown-menu>
                    </el-dropdown>

                    <el-table
                        :data="tableData1" border style="position:absolute; width: 315px; top:9%" stripe 
                        :resizable="false" :max-height=430
                        :header-cell-style="headerCell" :cell-style="Cell">
                        <el-table-column prop="name" label="参数" width="155"/>
                        <el-table-column prop="value" label="值" width="155"/>
                    </el-table>
                    <span style="position:absolute; top:calc(81%); left:calc(2.5%); font-size:18px; font-weight:bold">切换模型：</span>
                    <el-select style="position:absolute; top:calc(86%); left:calc(2.5%);" v-model="currentModel" placeholder="请选择一个模型"
                    @change="handleModelChange">
                        <el-option
                            v-for="item in options"
                            :key="item.value"
                            :label="item.label"
                            :value="item.value">
                        </el-option>
                    </el-select>
                    <el-button type="primary" style="position:absolute; top:calc(86%); left:calc(64%);" @click="handleClick">
                        确认
                    </el-button>
                    <el-button type="primary" plain style="position:absolute; top:calc(94%); left:22%;" 
                    @click="modelPreview=true">
                        模型结构预览
                    </el-button>

                    <el-dialog
                        :title="this.currentModel+'模型结构'"
                        :visible.sync="modelPreview"
                        width="60%"
                        center
                        append-to-body>
                        <img :src="require('../assets/model_img/'+this.currentModel+'.png')" alt="模型结构图"/>
                        <span slot="footer" class="dialog-footer">
                            <el-button @click="modelPreview = false">取 消</el-button>
                            <el-button type="primary" @click="modelPreview = false">确 定</el-button>
                        </span>
                    </el-dialog>
                </div>
        
                <div style="position:absolute; width:68%; height:85%; top:calc(5%); left:calc(31%);">
                    <!-- <el-select style="position:absolute; top:0; left:0;" v-model="value_data" placeholder="请选择数据"
                    @change="handleDataChange">
                        <el-option
                            v-for="item in options_data"
                            :key="item.value"
                            :label="item.label"
                            :value="item.value">
                        </el-option>
                    </el-select> -->
                    <el-tabs v-model="value_data" @tab-click="handleDataClick" style="position:absolute; top:0; left:0;">
                        <el-tab-pane label="服务器能耗数据" name="first">服务器能耗数据</el-tab-pane>
                        <el-tab-pane label="空调能耗数据" name="second">空调能耗数据</el-tab-pane>
                        <el-tab-pane label="室内温度数据" name="third">室内温度数据</el-tab-pane>
                        <el-tab-pane label="PUE数据" name="fourth">PUE数据</el-tab-pane>
                    </el-tabs>
                    <p v-if="view[0]">
                        <el-table
                            :data="tableData_server" :max-height=540 border style="position:absolute; top:10%; width: 97%" stripe :resizable='false'
                            :header-cell-style="headerCell2" :cell-style="Cell2">
                            <el-table-column v-for="(column, index) in columns_server" :key="index" 
                            :prop="column.prop" :label="column.label" :width="column.width" :height="20"/>
                        </el-table>
                    </p>
                    
                    <p v-else-if="view[1]">
                        <el-table
                            :data="tableData_refrige" :max-height=540 border style="position:absolute; top:10%; width: 97%" stripe :resizable='false'
                            :header-cell-style="headerCell2" :cell-style="Cell2">
                            <el-table-column v-for="(column, index) in columns_refrige" :key="index" 
                            :prop="column.prop" :label="column.label" :width="column.width"/>
                        </el-table>
                    </p>

                    <p v-else-if="view[2]">
                        <el-table
                            :data="tableData_tempe" :max-height=540 border style="position:absolute; top:10%; width: 97%" stripe :resizable='false'
                            :header-cell-style="headerCell2" :cell-style="Cell2">
                            <el-table-column v-for="(column, index) in columns_tempe" :key="index" 
                            :prop="column.prop" :label="column.label" :width="column.width"/>
                        </el-table>
                    </p>

                    <p v-else-if="view[3]">
                        <el-table
                            :data="tableData_pue" :max-height=540 border style="position:absolute; top:10%; width: 97%" stripe :resizable='false'
                            :header-cell-style="headerCell2" :cell-style="Cell2">
                            <el-table-column v-for="(column, index) in columns_pue" :key="index" 
                            :prop="column.prop" :label="column.label" :width="column.width"/>
                        </el-table>
                    </p>
                    
                </div>
            </div>
        </div>
    </div>
</template>

<script>
    import { VeTable } from 'vue-easytable';
    import * as echarts from 'echarts';
    import Papa from 'papaparse';

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
    export default {
        data() {
            return {
                modelPreview: false,
                mode:'服务器能耗预测',
                view:[true,false,false,false],
                tableData1: [
                    {name: '当前模型',value: 'LSTM'}, 
                    {name: 'R²',value: '0.952'}, 
                    {name: '调整R²',value: '0.968'}, 
                    {name: 'MAE',value: '0.056'},
                    {name: 'MAPE',value: '0.075'}, 
                    {name: 'MSE',value: '0.04'}, 
                    {name: 'RMSE',value: '0.2'}, 
                    {name: 'AIC',value: '22.56'}, 
                    {name: 'BIC',value: '23.67'}, 
                ],
                tableData_server: [],
                tableData_refrige: [],
                tableData_tempe: [],
                tableData_pue: [],
                columns_server:[],
                columns_refrige:[],
                columns_tempe:[],
                columns_pue:[],
                options: [
                    {value: 'LSTM',label: 'LSTM'}, 
                    {value: 'Transformer',label: 'Transformer'}, 
                    {value: 'Autoformer',label: 'Autoformer'}, 
                    {value: 'Pyraformer',label: 'Pyraformer'}, 
                    {value: 'FEDformer',label: 'FEDformer'},
                    {value: 'Crossformer',label: 'Crossformer'}, 
                    {value: 'PatchTST',label: 'PatchTST'}, 
                ],
                currentModel: 'LSTM',
                options_data: [
                    {value: '服务器能耗数据',label: '服务器能耗数据'}, 
                    {value: '空调能耗数据',label: '空调能耗数据'}, 
                    {value: '室内温度数据',label: '室内温度数据'}, 
                    {value: 'PUE数据',label: 'PUE数据'}, 
                ],
                value_data: 'first',
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
            this.loadCsvData();
        },
        methods: {
            handleClose(done) {
                this.$confirm('确认关闭？')
                .then(_ => {
                    done();
                })
                .catch(_ => {});
            },
            handleDataClick(){
                if(this.value_data == 'first'){
                    this.view = [true,false,false,false];
                }
                else if(this.value_data == 'second'){
                    this.view = [false,true,false,false];
                }
                else if(this.value_data == 'third'){
                    this.view = [false,false,true,false];
                }
                else if(this.value_data == 'fourth'){
                    this.view = [false,false,false,true];
                }
            },
            handleCommand(command){
                this.mode= command;
                if(command=='服务器能耗预测'){
                    this.value_data='first';
                    this.view = [true,false,false,false];
                }
                else if(command=='空调能耗预测'){
                    this.value_data='second';
                    this.view = [false,true,false,false];
                }
                else if(command=='室内温度预测'){
                    this.value_data='third';
                    this.view = [false,false,true,false];
                }
                else if(command=='PUE预测'){
                    this.value_data='fourth';
                    this.view = [false,false,false,true];
                }
            },
            loadCsvData() {
                Papa.parse('../consumption.csv', {
                    download: true,
                    header: true,
                    complete: (results) => {
                        this.tableData_server = results.data.slice(0, 50);
                        this.tableData_refrige = results.data.slice(50, 100);
                        this.tableData_tempe = results.data.slice(100, 150);
                        this.tableData_pue = results.data.slice(150, 200);
                        if (results.data[0]) {
                            this.columns_server = Object.keys(results.data[0]).map(key => ({ prop: key, label: key, width: '100' }));
                            this.columns_refrige = Object.keys(results.data[0]).map(key => ({ prop: key, label: key, width: '100' }));
                            this.columns_tempe = Object.keys(results.data[0]).map(key => ({ prop: key, label: key, width: '100' }));
                            this.columns_pue = Object.keys(results.data[0]).map(key => ({ prop: key, label: key, width: '100' }));
                        }
                    }
                });
            },
            handleClick(){
                console.log(this.currentModel);
                this.tableData1[0].value = this.currentModel;
                for(let i=1;i<this.tableData1.length;i++){
                    this.tableData1[i].value = "正在计算中...";
                }
            },
            headerCell(){
                return {
                    "text-align":"center",
                    "font-size":"18px",
                    "font-weight":"bold",
                    "color":"black",
                    "background":"rgb(226,226,226)"
                }
            },
            Cell(){
                return {
                    "text-align":"center",
                    "font-size":"16px",
                    "color":"black",
                }
            },
            headerCell2(){
                return {
                    "text-align":"center",
                    "font-size":"16px",
                    "font-weight":"bold",
                    "color":"rgb(255, 255, 255)",
                    "background":"rgb(0, 114, 170)"
                }
            },
            Cell2(){
                return {
                    "text-align":"center",
                    "font-size":"14px",
                    "color":"black"
                }
            },
            handleDataChange(newData){
                if(newData == '服务器能耗数据'){
                    this.view = [true,false,false,false];
                }else if(newData == '空调能耗数据'){
                    this.view = [false,true,false,false];
                }else if(newData == '室内温度数据'){
                    this.view = [false,false,true,false];
                }else if(newData == 'PUE数据'){
                    this.view = [false,false,false,true];
                }
            },
            handleModelChange(newModel){
                this.currentModel=newModel;
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
        }
    }
</script>

<style lang="scss" scoped>
    ::v-deep .headerCell{
        font-size:18px;
        font-weight:bold;
        color:black;
        background: rgb(226,226,226) !important;
    }

    ::v-deep .Cell{
        font-size:16px;
        color:black;
    }

    ::v-deep .headerCell2{
        font-size:16px;
        font-weight:bold;
        color:rgb(255, 255, 255);
        background: rgb(0, 114, 170) !important;
    }

    ::v-deep .Cell2{
        font-size:14px;
        color:black;
        
    }

    *,
    *:after,
    *:before {
        -webkit-box-sizing: border-box;
        box-sizing: border-box;
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
        width:100%;
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
</style>
