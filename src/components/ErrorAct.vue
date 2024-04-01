<template>
  <dv-border-box-13 backgroundColor="rgba(6, 48, 109, .5)" style="height: calc(33% ); z-index: 11;">
    <div class="boxall" style="height: calc(100% )">
      <div class="alltitle">故障监测</div>
    
      <div class=" boxnav " id="echarts4" style="user-select: none; z-index: -10;"
        _echarts_instance_="ec_1710235324242">
        <div class="mainbox" style="position: relative; overflow:hidden; width: 100%; height: 100%;
                   padding: 0px; margin: 0px; border-width: 0px; cursor: default;">
          <div style="height:5%;"></div>
          <div
            style="height:15%;font-size: 14px; width:100%;  text-align: center;background-color: #1B4C87 ; border-collapse: collapse;">
            <table style=" font-size: inherit;">
              <tr>
                <!-- <td style="font-size: inherit;width:16.6% ;">index </td> -->
                <td style="font-size: inherit; width:33.3%;">记录时间</td>
                <td style="font-size: inherit; width:33.3%;">设备编号</td>
                <td style="font-size: inherit; width:33.4%;">状态</td>
              </tr>
            </table>
          </div>
          <dv-scroll-board :config="config" :key="updateDataCount + '-' +initDataCount " style="width:100%; height:75%" />

        </div>
      </div>
    </div>
  </dv-border-box-13>
</template>

<script>
export default {
  data() {
    return {
      config: {

        data: [
          ['2024-03-30', '100001', '正常运行中'],
          ['2024-03-30', '100002', '正常运行中'],
          ['2024-03-30', '100003', '正常运行中'],
          ['2024-03-30', '100004', '暂停维护中'],
          ['2024-03-30', '100005', '正常运行中'],
          ['2024-03-30', '100006', '正常运行中'],
          ['2024-03-30', '100007', '暂停维护中'],
          ['2024-03-30', '100008', '正常运行中'],
          ['2024-03-30', '100009', '暂停维护中'],
          ['2024-03-30', '100010', '正常运行中'],
          ['2024-03-30', '100011', '正常运行中'],
          ['2024-03-30', '100012', '正常运行中'],
          ['2024-03-30', '100013', '暂停维护中'],
          ['2024-03-30', '100014', '暂停维护中'],
          ['2024-03-30', '100015', '正常运行中'],
          ['2024-03-30', '100016', '正常运行中'],
          ['2024-03-30', '100017', '暂停维护中'],
          ['2024-03-30', '100018', '正常运行中'],
          
        ],
        index: false,
        align: ['center','center','center'],
        carousel: 'page',
        oddRowBGC: '#2457A0',
        evenRowBGC: '#068AC0',
        rowNum: 6
      },
      initDataCount: 0,
      updateDataCount: 0,
      boardKey: 0 // 初始key
    };
  },
  created() {
    // 初始时遍历数据进行标红
    this.initData();
    // 每隔一秒更新数据
   setInterval(() => {
      this.updateData();
    }, 6000);
  },
  methods: {
    initData() {


    this.config.data.forEach(row => {

    // 如果状态为"暂停维护中"，设置字体颜色为红色
    // 重新为每一行设置样式
    if (row[2] === '暂停维护中') {
      this.$set(row, 2, '<span style="color:red;">' +row[2] + '</span>');
    };
    if (row[2] === '正常运行中') {
      this.$set(row, 2, '<span style="color:white;">' +row[2] + '</span>');
    };
  });
  // 更新 key，强制重新渲染组件
  this.initDataCount += 1;
},
    updateData() {
  // 遍历数据
  this.config.data.forEach(row => {
    // 随机设置第三列的数据为'正常运行中'或者'暂停维护中'

    //this.$set(row, 2, Math.random() < 0.8 ? '正常运行中' : '暂停维护中');
    const randomNumber = Math.random();
    if (randomNumber<0.4){
      this.$set(row, 2, '<span style="color:red;">' +'暂停维护中' + '</span>');
    };
    if (randomNumber>=0.4) {
      this.$set(row, 2, '<font style="color:white;">' +'正常运行中' + '</font>');
    }
  });
  // 更新 key，强制重新渲染组件
  this.updateDataCount += 1;
}
  }

}
</script>
<style>
/* @charset "utf-8"; */
/* CSS Document */
@import "../../public/css/comon0.css";
</style>