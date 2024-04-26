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
            <router-link to="/alarm_info">
                <span>报警信息</span>
            </router-link>
        </component>
        <div>
            <el-table
                :data="tableData" :row-style="row_style" :max-height=630 border style="position:absolute; top:10%; left:2.5%; width: 95%" 
                stripe :header-cell-style="headerCell" :cell-style="Cell" ref="filterTable" v-loading="loading"
                @sort-change="handleSortChange" @selection-change="handleSelectionChange">
                <el-table-column
                type="selection"
                width="50" />
                <el-table-column prop="type" label="设备类型" 
                :filters="Filters"
                :filter-method="filterHandler"
                :filtered-value="selectedType"
                show-overflow-tooltip/>
                <el-table-column prop="degree" label="级别" sortable show-overflow-tooltip/>
                <el-table-column prop="name" label="名称" sortable show-overflow-tooltip/>
                <el-table-column prop="origin" label="报警源" sortable show-overflow-tooltip/>
                <el-table-column prop="time" label="发生时间" sortable show-overflow-tooltip>
                    <template slot-scope="scope">
                        {{ formatDate(scope.row.time) }}
                    </template>
                </el-table-column>
            </el-table>
        </div>
    </div>
</template>

<script>
    import {Slide} from 'vue-burger-menu';
    import moment from 'moment';
    export default {
        data() {
            return {
                loading: false,
                pagination: {
                    page: 1,
                    pageSize: 20,
                    total: 0,
                },
                totalPage: 10,
                countTotal: 20,
                checked:false,
                otherHeight:0,
                pageHeight:0,
                multipleSelection: [],
                selectedType: [],
                Filters:[
                    {text: '供电', value: '供电'}, 
                    {text: '制冷', value: '制冷'}, 
                    {text: '环境', value: '环境'}, 
                    {text: '安防', value: '安防'},
                ],
                tableData:[],
                currentMenu: 'Slide'
            }
        },
        components: {
            Slide,
        },
        mounted() {
            // this.initTable();
            this.lazyLoading();
            this.handleResize();
            //this.watchSize();
        },
        created() {
            this.tableData = []
            for(var i=0;i<20;i++){
                this.tableData.push({
                    type: '供电',
                    degree: '紧急',
                    name: 'Communication Between NMS And NE Is Abnormal'+(i+1).toString(),
                    origin: 'Sensor_FrontTop'+(i+1).toString(),
                    time: '2024-04-25 20:00:00'
                })
                this.tableData.push({
                    type: '制冷',
                    degree: '重要',
                    name: 'Communication Between NMS And NE Is Abnormal'+(i+1).toString(),
                    origin: 'Sensor_FrontTop'+(i+1).toString(),
                    time: '2024-04-25 20:00:00'
                })
                this.tableData.push({
                    type: '环境',
                    degree: '次要',
                    name: 'Communication Between NMS And NE Is Abnormal'+(i+1).toString(),
                    origin: 'Sensor_FrontTop'+(i+1).toString(),
                    time: '2024-04-25 20:00:00'
                })
                this.tableData.push({
                    type: '安防',
                    degree: '提示',
                    name: 'Communication Between NMS And NE Is Abnormal'+(i+1).toString(),
                    origin: 'Sensor_FrontTop'+(i+1).toString(),
                    time: '2024-04-25 20:00:00'
                })
            }
            this.getQuery();
        },
        methods: {  
            formatDate(date) {
                if (!date) return '';
                return moment(date).format('YYYY-MM-DD HH:mm:ss');
            },
            lazyLoading(){
                let dom = document.querySelector(".el-table__body-wrapper");
                dom.addEventListener("scroll", (v) => {
                    const scrollDistance = dom.scrollHeight - dom.scrollTop - dom.clientHeight;
                    if (scrollDistance <= 1) {
                        //等于0证明已经到底，可以请求接口
                        if (this.pagination.page >= this.totalPage) {
                            //判断是否到达底部
                            console.log("已到最底部")
                        }
                        if (this.pagination.page < this.totalPage) {
                            //当前页数小于总页数就请求
                            this.pagination.page ++; //当前页数自增
                            console.log("页面已经到达底部");
                            var cIndex = this.countTotal + 10 ;
                            for (let i = (this.countTotal + 1) ; i <= cIndex ; i++) {
                                this.tableData.push({
                                    type: '供电',
                                    degree: '紧急',
                                    name: 'Communication Between NMS And NE Is Abnormal'+(i+1).toString(),
                                    origin: 'Sensor_FrontTop'+(i+1).toString(),
                                    time: '2024-04-25 20:00:00'
                                })
                                this.tableData.push({
                                    type: '制冷',
                                    degree: '重要',
                                    name: 'Communication Between NMS And NE Is Abnormal'+(i+1).toString(),
                                    origin: 'Sensor_FrontTop'+(i+1).toString(),
                                    time: '2024-04-25 20:00:00'
                                })
                                this.tableData.push({
                                    type: '环境',
                                    degree: '次要',
                                    name: 'Communication Between NMS And NE Is Abnormal'+(i+1).toString(),
                                    origin: 'Sensor_FrontTop'+(i+1).toString(),
                                    time: '2024-04-25 20:00:00'
                                })
                                this.tableData.push({
                                    type: '安防',
                                    degree: '提示',
                                    name: 'Communication Between NMS And NE Is Abnormal'+(i+1).toString(),
                                    origin: 'Sensor_FrontTop'+(i+1).toString(),
                                    time: '2024-04-25 20:00:00'
                                })
                            }
                            this.countTotal += 10 ;
                            // this.getData();
                            // this.append();
                        }
                    }
                });
            },
            handleSelectionChange(val) {
                this.multipleSelection = val;
            },
            handleSortChange( {column, prop, order} ) {
                if(prop==='degree'){
                    var arr=['紧急','重要','次要','提示'];
                    this.tableData.sort((a, b) => {
                        if (order === 'ascending') {
                            return (arr.indexOf(a.degree) < arr.indexOf(b.degree))?1:-1;
                        } 
                        else if(order === 'descending'){
                            return (arr.indexOf(a.degree) < arr.indexOf(b.degree))?-1:1;
                        }
                        else return 0;
                    })
                }
            },
            filterHandler(value, row, column) {
                const property = column['property'];
                return row[property] === value;
            },
            getQuery(){
                console.log(this.$route.query.device_type);
                var device_type=this.$route.query.device_type;
                if(device_type=='security'){
                    this.selectedType=['安防'];
                }
                else if(device_type=='environment'){
                    this.selectedType=['环境'];
                }
                else if(device_type=='cooling'){
                    this.selectedType=['制冷'];
                }
                else if(device_type=='power'){
                    this.selectedType=['供电'];
                }
                this.$nextTick(() => {
                    const refs = this.$refs.filterTable
                    var column = refs.columns[0]		// 需要进行筛选的列
                    column.filteredValue = this.selectedType	// 重新定义需要筛选的数组
                    refs.store.commit('filterChange', {	 // 重新加载该列
                        column,
                        values: column.filteredValue,
                        silent: true
                    })
                });
                console.log(this.selectedType);
            },
            initTable() {
               for(var i=0;i<100;i++){
                    this.tableData.push({
                        type: '供电',
                        degree: '紧急',
                        name: 'Communication Between NMS And NE Is Abnormal'+(i+1).toString(),
                        origin: 'Sensor_FrontTop'+(i+1).toString(),
                        time: '2024-04-25 20:00:00'
                    })
                    this.tableData.push({
                        type: '制冷',
                        degree: '重要',
                        name: 'Communication Between NMS And NE Is Abnormal'+(i+1).toString(),
                        origin: 'Sensor_FrontTop'+(i+1).toString(),
                        time: '2024-04-25 20:00:00'
                    })
                    this.tableData.push({
                        type: '环境',
                        degree: '次要',
                        name: 'Communication Between NMS And NE Is Abnormal'+(i+1).toString(),
                        origin: 'Sensor_FrontTop'+(i+1).toString(),
                        time: '2024-04-25 20:00:00'
                    })
                    this.tableData.push({
                        type: '安防',
                        degree: '提示',
                        name: 'Communication Between NMS And NE Is Abnormal'+(i+1).toString(),
                        origin: 'Sensor_FrontTop'+(i+1).toString(),
                        time: '2024-04-25 20:00:00'
                    })
               }
            },
            headerCell(){
                return {
                    "text-align":"center",
                    "font-size":"16px",
                    "color":"black",
                    "background":"rgb(222,222,222)"
                }
            },
            Cell(){
                return {
                    "text-align":"center",
                    "font-size":"14px",
                    "color":"black",
                    "padding":"0px"
                }
            },
            row_style(){
                return {
                    "height":"50px"
                }
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
        color:rgb(0, 0, 0);
        background: rgb(226,226,226) !important;
    }

    ::v-deep .Cell{
        font-size:16px;
        color:black;
    }


    #app {
        height: 300%;
        width:100%;
    }
</style>
