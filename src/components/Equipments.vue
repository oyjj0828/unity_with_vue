<template>
  <dv-border-box-13 backgroundColor="rgba(6, 48, 109, .5)" style="height: calc(33% ); z-index: 11;">
    <div class="boxall" style="height: calc(100% )">
      <div class="alltitle">IT装备统计</div>
      <div class=" boxnav " id="echarts4" style="user-select: none; z-index: -10;"
        _echarts_instance_="ec_1710235324242">
        <div class="mainbox" style="position: relative; overflow: hidden; width: 100%; height: 100%;cursor: default;">

          <ul class="clearfix" style="height: inherit">
            <li style="width: 65%;">
              <dv-active-ring-chart :config="config" style="width:100%;height:100%;" />
            </li>
            <li style="width: 35%;">
              <LabelTag :config="labelConfig" />
            </li>
          </ul>
        </div>
      </div>
    </div>
  </dv-border-box-13>
</template>

<script>
import LabelTag from '@/components/LabelTag'
export default {
  name: 'CenterCmp',
  components: {
    LabelTag
  },
  data() {
    return {
      config: {
        data: [
          { name: '服务器', value: 136 },
          { name: '配电柜', value: 30 },
          { name: '路由器', value: 34 },
          { name: '空调', value: 38 }
        ],
        color: ['#3062FF', '#1C6FAE', '#0F98A6', '#8C997E'],
        lineWidth: 20,
        radius: '75%',
        activeRadius: '85%',
        digitalFlopStyle: {
          fontSize: 20,
          fill: '#fff'
        },
        animationFrame: 30
      },
      labelConfig: {
        data: ['服务器', '配电柜', '路由器', '空调']
      },
    }
  }
}
</script>

<style>
/* @charset "utf-8";
/* CSS Document */
@import "../../public/css/comon0.css";
</style>