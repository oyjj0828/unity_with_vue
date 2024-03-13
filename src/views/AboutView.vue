<template>
  <div class>
    <head>
      <meta charset="utf-8">
      <title>数据中心可视化管理平台</title> 
    </head>
    <div class="loading" style="display: none;">
      <div class="loadbox"> <img src="assets/loading.gif"> 页面加载中... </div>
    </div>
    <div class="head">
      <h1>数据中心可视化管理平台</h1>
      <div class="time" id="showTime">{{ currentTime }}</div>
    </div>
    <div class="mainbox">
      <div style="z-index: -1;">
        <iframe ref="iframe" width="100%" height="100%" scrolling="auto"
          src="/Unity/index.html" frameborder="0"></iframe>
      </div>
      <ul class="clearfix">
        <li>
          <div class="boxall" style="height: calc(58% - .15rem)">
            <div class="alltitle">室内温度预测</div>
            <div class=" boxnav " id="echarts4" style="user-select: none;" _echarts_instance_="ec_1710235324242">
              <div
                style="position: relative; overflow: hidden; width: 406px; height: 131px; padding: 0px; margin: 0px; border-width: 0px; cursor: default;">
                <canvas
                  style="position: absolute; left: 0px; top: 0px; width: 406px; height: 131px; user-select: none; padding: 0px; margin: 0px; border-width: 0px;"
                  data-zr-dom-id="zr_0" width="507" height="163"></canvas></div>
            </div>
          </div>
          <div class="boxall" style="height: calc(42% - .15rem)">
            <div class="alltitle">服务器能耗预测</div>
            <div class="boxnav" id="echarts3" style="user-select: none; position: relative;"
              _echarts_instance_="ec_1710235324241">
              <div
                style="position: relative; overflow: hidden; width: 406px; height: 77px; padding: 0px; margin: 0px; border-width: 0px; cursor: default;">
                <canvas
                  style="position: absolute; left: 0px; top: 0px; width: 406px; height: 77px; user-select: none; padding: 0px; margin: 0px; border-width: 0px;"
                  data-zr-dom-id="zr_0" width="507" height="96"></canvas></div>
              <div></div>
            </div>
          </div>
        </li>
        <li>




        </li>
        <li>

          <div class="boxall" style="height: calc(33.333% - .15rem)">

            <div class="alltitle">服务器能耗优化对比</div>
            <div class="boxnav" id="echarts5" style="user-select: none; position: relative;"
              _echarts_instance_="ec_1710235324243">
              <div
                style="position: relative; overflow: hidden; width: 406px; height: 48px; padding: 0px; margin: 0px; border-width: 0px;">
                <canvas
                  style="position: absolute; left: 0px; top: 0px; width: 406px; height: 48px; user-select: none; padding: 0px; margin: 0px; border-width: 0px;"
                  data-zr-dom-id="zr_0" width="507" height="60"></canvas></div>
              <div></div>
            </div>

          </div>
          <div class="boxall" style="height: calc(33.333% - .15rem)">
            <div class="alltitle">PUE优化对比</div>
            <div class="boxnav" id="">
              <table cellspacing="0">
              </table>





            </div>

          </div>
          <div class="boxall" style="height: calc(33.333% - .15rem)">
            <div class="alltitle">空调能耗监测</div>
            <div class="boxnav" id="echarts6"
              style="height: calc(100% - 0.3rem); user-select: none; position: relative;"
              _echarts_instance_="ec_1710235324244">
              <div
                style="position: relative; overflow: hidden; width: 411px; height: 63px; padding: 0px; margin: 0px; border-width: 0px; cursor: default;">
                <canvas
                  style="position: absolute; left: 0px; top: 0px; width: 411px; height: 63px; user-select: none; padding: 0px; margin: 0px; border-width: 0px;"
                  data-zr-dom-id="zr_0" width="513" height="78"></canvas></div>
              <div></div>
            </div>
          </div>
        </li>
      </ul>
    </div>
  </div>
</template>


<script>
import '../../public/js/jquery.js'
import '../../public/js/echarts.min.js'

export default {
  data() {
    return {
      currentTime: '',
      loading: false
    };
  },
  mounted() {
    this.updateTime();
    setInterval(() => {
      this.updateTime();
    }, 1000);
  },
  methods: {
    updateTime() {
      const dt = new Date();
      const y = dt.getFullYear();
      const mt = dt.getMonth() + 1;
      const day = dt.getDate();
      const h = dt.getHours();
      const m = dt.getMinutes();
      const s = dt.getSeconds();
      this.currentTime = `${y}/${this.Appendzero(mt)}/${this.Appendzero(day)} ${this.Appendzero(h)}:${this.Appendzero(m)}:${this.Appendzero(s)}`;
    },
    Appendzero(obj) {
      return obj < 10 ? `0${obj}` : obj;
    }
  }
}


</script>

<style lang="scss">
  @import '../../public/css/comon0.css';
</style>