<template>
    <dv-border-box-13 backgroundColor="rgba(6, 48, 109, .5)" style="height: calc(70% ); width:calc(125% ); z-index: 11; left:-120px; top:-20px">
      <div class="boxall" style="height: calc(100% )">
        <div class="alltitle">故障监测信息</div>
        <dv-scroll-board :config="config" style="position:relative; top:30px; left:20px; width:400px; height:calc(85% )">
        </dv-scroll-board>
      </div>
    </dv-border-box-13>
</template>

<script>
    export default {
        data() {
            return {
                config: {
                    header: ['记录时间', '设备编号','运行状态'],
                    data: [
                        ['2024-03-30', '123456', '正常运行中'],
                        ['2024-03-30', '123456', '正常运行中'],
                        ['2024-03-30', '123456', '暂停维护中'],
                        ['2024-03-30', '123456', '正常运行中'],
                        ['2024-03-30', '123456', '暂停维护中'],
                        ['2024-03-30', '123456', '正常运行中'],
                        ['2024-03-30', '123456', '正常运行中'],
                        ['2024-03-30', '123456', '暂停维护中'],
                        ['2024-03-30', '123456', '正常运行中'],
                        ['2024-03-30', '123456', '正常运行中'],
                        ['2024-03-30', '123456', '暂停维护中'],
                        ['2024-03-30', '123456', '正常运行中'],
                        ['2024-03-30', '123456', '暂停维护中'],
                        ['2024-03-30', '123456', '正常运行中'],
                        ['2024-03-30', '123456', '正常运行中'],
                        ['2024-03-30', '123456', '暂停维护中'],
                        ['2024-03-30', '123456', '正常运行中'],
                        ['2024-03-30', '123456', '正常运行中'],
                        ['2024-03-30', '123456', '暂停维护中'],
                        ['2024-03-30', '123456', '正常运行中'],
                        ['2024-03-30', '123456', '暂停维护中'],
                        ['2024-03-30', '123456', '正常运行中'],
                        ['2024-03-30', '123456', '正常运行中'],
                        ['2024-03-30', '123456', '暂停维护中'],
                    ],
                    index: true,
                    columnWidth: [50],
                    align: ['center', 'center', 'center','center'],
                    indexHeader: '序号',
                    rowNum: 8,
                    headerHeight: 30,
                    oddRowBGC: 'rgba(6, 48, 109, 0)',
                    evenRowBGC: 'rgba(6, 48, 109, 0.5)',
                    headerBGC: 'rgba(6, 48, 109, 1)',
                }
            }
        }
    }
</script>


<style>
    /* @charset "utf-8";
    /* CSS Document */
    @import "../../public/css/comon0.css";
    li{
        font-size: 16px;
        font-style: Source Han Sans CN;
        margin-bottom: 10px;
    }
</style>
