<template>
  <dv-border-box-13 backgroundColor="rgba(6, 48, 109, .5)" style="height: calc(33% ); z-index: 11;">
    <div class="boxall" style="height: calc(100% )">
      <div class="alltitle">模型参数预览</div>
      <div class=" boxnav " id="echarts4" style="user-select: none; z-index: -10;"
        _echarts_instance_="ec_1710235324242">
        <div class="mainbox" style="position: relative; overflow:hidden; width: 100%; height: 100%;
                   padding: 0px; margin: 0px; border-width: 0px; cursor: default;">
          <div style="height:5%;"></div>
          <div
            style="height:30%;font-size: 14px; width:100%;  text-align: center;background-color: #1B4C87 ; border-collapse: collapse;">
            <table style=" font-size: inherit;">
              <tr>
                <!-- <td style="font-size: inherit;width:16.6% ;">index </td> -->
                <td style="font-size: inherit; width:20%;">Power</td>
                <td style="font-size: inherit; width:20%;">Power (GPU)</td>
                <td style="font-size: inherit; width:20%;">Memory</td>
                <td style="font-size: inherit; width:20%;">Used Memory</td>
                <td style="font-size: inherit; width:20%;">Memory Utilization</td>
              </tr>
            </table>
          </div>
          <dv-scroll-board :config="config" style=" width:100%;height:65%" />
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

          ['676.7', '219.58', '125.76', '23.81', '19.8'],
          ['684.8', '216.25', '125.76', '23.81', '19.8'],
          ['679.1', '101.92', '125.76', '23.81', '19.8'],
          ['685.9', '108.42', '125.76', '23.81', '19.8'],
          ['673.8', '243.26', '125.76', '23.81', '19.8'],
          ['665.28', '159.37', '125.76', '23.81', '19.8'],
          ['672.69', '195.37', '125.76', '23.81', '19.8'],
          ['668.26', '206.34', '125.76', '23.81', '19.8'],
          ['677.93', '185.29', '125.76', '23.81', '19.8'],
          ['664.81', '156.76', '125.76', '23.81', '19.8'],

        ],
        index: false,
        align: ['center'],
        carousel: 'page',
        oddRowBGC: '#2457A0',
        evenRowBGC: '#068AC0',
        rowNum: 3,




      }
    };
  }
}
</script>

<style>
/* @charset "utf-8"; */
/* CSS Document */
@import "../../public/css/comon0.css";
</style>