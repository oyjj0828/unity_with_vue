<template>
  <dv-border-box-13 backgroundColor="rgba(6, 48, 109, .5)" style="height: calc(33% ); z-index: 11;">
    <div class="boxall" style="height: calc(100% )">
      <div class="alltitle">机柜容量统计</div>
      <div class=" boxnav " id="echarts4" style="user-select: none; z-index: -10;"
        _echarts_instance_="ec_1710235324242">
        <div class="mainbox" style="position: relative; overflow:hidden; width: 100%; height: 100%;
                     padding: 0px; margin: 0px; border-width: 0px; cursor: default;">

          <ul class="clearfix" style="height: inherit;">
            <li style="width: 5%; height: 100%;"></li>
            <li style="width: 95%; height: 10%;"></li>
            <li style="width: 25%; height: 50%;">
              <dv-decoration-9 style="width:75px;height:75px;" dur="10">
                <span style="font-weight: bold; font-size: 12px;">
                  机柜<br />总数
                </span>
              </dv-decoration-9>

            </li>

            <li style="width: 30%; height: 50%; display: flex; align-items: center;">
              <span style="font-weight: bold; font-size: 18px; ">
                1920台
              </span>
            </li>

            <li style="width: 35%; height: 50%;">
              <dv-percent-pond :config="config" style="width:80px; height:160%;" />
            </li>
            <li style="width: 25%; height: 40%;">
              <dv-loading>
                <span style="font-weight: bold; font-size: 12px;">
                  已使用
                </span>
              </dv-loading>
            </li>
            <li style="width: 30%; height: 40%; display: flex;  align-items: center;">
              <span style="font-weight: bold; font-size: 18px;">
                708台
              </span>
            </li>
          </ul>
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
        value: 40
      }
    }
  }
}
</script>

<style>
/* @charset "utf-8"; */
/* CSS Document */
@import "../../public/css/comon0.css";
</style>