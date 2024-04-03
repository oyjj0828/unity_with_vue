<template>
  <dv-border-box-13 backgroundColor="rgba(6, 48, 109, .5)" style="height: calc(50% ); z-index: 11; top: 25%;">
    <div class="boxall" style="height: calc(100% )">
      <div class="alltitle">模型参数预览</div>
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
          <dv-scroll-board :config="config" style=" width:100%;height:80%" />
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

          ['室内检测温度', '25.9℃'],
          ['室外干球温度', '31.5℃'],
          ['室外湿球温度', '29.3℃'],
          ['出风静压(ESP)', '46.9%PH'],
          ['室内风量', '40444m³/h'],
          ['运行模式', '风侧自然冷却'],
          ['实时功率', '178.6KW'],
        ],
        index: false,
        align: ['center', 'center'],
        carousel: 'page',
        oddRowBGC: '#2457A0',
        evenRowBGC: '#068AC0',
        rowNum: 7,
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