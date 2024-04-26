<template>
  <div style="height:calc(45%)">
    <dv-border-box-13 backgroundColor="rgba(6, 48, 109, .5)" style="height: calc(100%); z-index: 11;">
      <div class="boxall" style="height: calc(100%)">
        <div class="alltitle">{{this.name}}参数预览</div>
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
                  <td style="font-size: inherit; width:50%;">参数名称</td>
                  <td style="font-size: inherit; width:50%;">参数</td>
                </tr>
              </table>
            </div>
            <dv-scroll-board :config="config" style=" width:100%;height:75%" />
          </div>
        </div>
      </div>
    </dv-border-box-13>

    <dv-border-box-7 style="z-index: 11; position:absolute; height: 50px; width: 130px; top: 85%; right:105px">
      <div>
          <router-link to="/device_info">
            <button class="rounded-btn" style="z-index: 20; width: 130px; height: 50px; color: azure">
              设备详细信息
            </button>
          </router-link>
      </div>
    </dv-border-box-7>

  </div>

</template>

<script>
export default {
  props: {
    name: {
      type: String,
      default: null,
    }
  },
  data() {
    return {
      config: {
        data: [
          ['输入电压：', '240V'],
          ['输出电压：', '220V'],
          ['输入频率：', '50Hz'],
          ['输出频率：', '50Hz'],
          ['运行负载：', '21.8%'],
          ['剩余电池容量：', '98%'],
          ['预计剩余运行时间：', '25min'],
          ['UPS工作状态：', '正常工作'],
          ['UPS输出模式：', '双变换模式'],

        ],
        index: false,
        align: ['center', 'center'],
        carousel: 'page',
        oddRowBGC: '#2457A0',
        evenRowBGC: '#068AC0',
        rowNum: 9,
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