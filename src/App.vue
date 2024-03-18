<template>
 <div style="height: 100%;">
    <head>
      <meta charset="utf-8">
      <title>数据中心可视化管理平台</title> 
    </head>
    <footer class="footer" style="z-index: 10; width:100%">
      <!-- Footer content -->
    </footer>
    <div class="loading" style="display: none;">
      <div class="loadbox"> <img src="assets/loading.gif"> 页面加载中... </div>
    </div>
    <div class="head" style="z-index: 10;">
      <h1 style="font-size: xx-large;">数据中心可视化管理平台</h1>
      <div class="time" id="showTime">{{ currentTime }}</div>
    </div>
    <div class="mainbox">
      <div class="unity-container" style="z-index: -10;">
        <iframe ref="iframe" style="width:100%; height:100% ;position: absolute;top:0;left: 0;"
          src="/Unity/index.html" frameborder="0" ></iframe>
      </div>

      <ul class="clearfix" style="z-index: 10; height: inherit">
        <li style="width: 25%">
          <div class="boxall" style="height: calc(25% )">
            <div class="alltitle">室内环境监控</div>
            <div class=" boxnav " id="echarts4" style="user-select: none; z-index: -10;" _echarts_instance_="ec_1710235324242">
              <div 
                style="position: relative; overflow: hidden; width: 100%; height: 100%; padding: 0px; margin: 0px; border-width: 0px; cursor: default;">
                <canvas
                  style="position: absolute; left: 0px; top: 0px; width: 100%; height: 100%; user-select: none; padding: 0px; margin: 0px; border-width: 0px;"
                  data-zr-dom-id="zr_0" width="507" height="163">
                </canvas>
              </div>
            </div>
          </div>

          <div class="boxall" style="height: calc(37% )">
            <div class="alltitle">室内温度预测</div>
            <div class=" boxnav " id="echarts4" style="user-select: none; z-index: -10;" _echarts_instance_="ec_1710235324242">
              <div 
                style="position: relative; overflow: hidden; width: 100%; height: 100%; padding: 0px; margin: 0px; border-width: 0px; cursor: default;">
                <canvas
                  style="position: absolute; left: 0px; top: 0px; width: 100%; height: 100%; user-select: none; padding: 0px; margin: 0px; border-width: 0px;"
                  data-zr-dom-id="zr_0" width="507" height="163">
                </canvas>
              </div>
            </div>
          </div>
          <div class="boxall" style="height: calc(38% )">
            <div class="alltitle">服务器能耗预测</div>
            <div class="boxnav" id="echarts3" style="user-select: none; position: relative;"
              _echarts_instance_="ec_1710235324241">
              <div
                style="position: relative; overflow: hidden; width: 100%; height: 100%; padding: 0px; margin: 0px; border-width: 0px; cursor: default;">
                <canvas
                  style="position: absolute; left: 0px; top: 0px; width: 100%; height: 100%; user-select: none; padding: 0px; margin: 0px; border-width: 0px;"
                  data-zr-dom-id="zr_0" width="507" height="96"></canvas></div>
              <div></div>
            </div>
          </div>
        </li>

        <li style="width: 50%">
          <dv-charts :option="option" style="z-index: 10; width: 100%; height: 50%;"/>
        </li>

        <li style="width: 25%">
          <div class="boxall" style="height: calc(32.333% )">
            <div class="alltitle">服务器能耗优化对比</div>
            <div class="boxnav" id="echarts5" style="user-select: none; position: relative;"
              _echarts_instance_="ec_1710235324243">
              <div
                style="position: relative; overflow: hidden; width: 100%; height: 100%; padding: 0px; margin: 0px; border-width: 0px;">
                <canvas
                  style="position: absolute; left: 0px; top: 0px; width: 100%; height: 100%; user-select: none; padding: 0px; margin: 0px; border-width: 0px;"
                  data-zr-dom-id="zr_0" width="507" height="60"></canvas></div>
              <div></div>
            </div>
          </div>
          <div class="boxall" style="height: calc(33.333% )">
            <div class="alltitle">PUE优化对比</div>
            <div class="boxnav" id="">
              <table cellspacing="0">
              </table>
            </div>
          </div>
          <div class="boxall" style="height: calc(33.333% )">
            <div class="alltitle">空调能耗监测</div>
            <div class="boxnav" id="echarts6"
              style="height: calc(100% - 0.3rem); user-select: none; position: relative;"
              _echarts_instance_="ec_1710235324244">
              <div
                style="position: relative; overflow: hidden; width: 100%; height: 100%; padding: 0px; margin: 0px; border-width: 0px; cursor: default;">
                <canvas
                  style="position: absolute; left: 0px; top: 0px; width: 100%; height: 100%; user-select: none; padding: 0px; margin: 0px; border-width: 0px;"
                  data-zr-dom-id="zr_0" width="513" height="78"></canvas></div>
              <div>
              </div>
            </div>
          </div>
        </li>
      </ul> 
    </div>
  </div>
</template>

<script>
import '../public/js/jquery.js'
import '../public/js/echarts.min.js'
export default{
 data() {
    return {
      currentTime: '',
      loading: false,
      option:{
        title: {
          text: '剩余油量表',
          style: {
            fill: '#fff'
          }
        },
        series: [
          {
            type: 'gauge',
            data: [ { name: 'itemA', value: 55 } ],
            center: ['50%', '55%'],
            axisLabel: {
              formatter: '{value}%',
              style: {
                fill: '#fff'
              }
            },
            axisTick: {
              style: {
                stroke: '#fff'
              }
            },
            animationCurve: 'easeInOutBack'
          }
        ]
      },
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
@import '../public/css/comon0.css';
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  height: inherit;
}

unity-container{
  width: 100%;
  height: 1080px;
}
</style>
