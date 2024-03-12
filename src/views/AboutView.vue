<template>
  <div class="about">
    <head>
  <meta charset="utf-8">
  <title>数据中心可视化管理平台</title>
  <!-- <script type="text/javascript" src="js/jquery.js"></script> -->
  <link rel="stylesheet" href="css/comon0.css">
  </head>
  <div class="loading" style="display: none;">
    <div class="loadbox"> <img src="assets/loading.gif"> 页面加载中... </div>
  </div>
  <div class="head">
    <h1>数据中心可视化管理平台</h1>
    <div class="time" id="showTime">{{currentTime}}</div>
   

  </div>
  <div class="mainbox">
    <ul class="clearfix">
      <li>

        <div class="boxall" style="height: calc(58% - .15rem)">
          <div class="alltitle">室内温度预测</div>
          <div class=" boxnav " id="echarts4" style="user-select: none;" _echarts_instance_="ec_1710235324242"><div style="position: relative; overflow: hidden; width: 406px; height: 131px; padding: 0px; margin: 0px; border-width: 0px; cursor: default;"><canvas style="position: absolute; left: 0px; top: 0px; width: 406px; height: 131px; user-select: none; padding: 0px; margin: 0px; border-width: 0px;" data-zr-dom-id="zr_0" width="507" height="163"></canvas></div></div>
        </div>
        <div class="boxall" style="height: calc(42% - .15rem)">
          <div class="alltitle">服务器能耗预测</div>
          <div class="boxnav" id="echarts3" style="user-select: none; position: relative;" _echarts_instance_="ec_1710235324241"><div style="position: relative; overflow: hidden; width: 406px; height: 77px; padding: 0px; margin: 0px; border-width: 0px; cursor: default;"><canvas style="position: absolute; left: 0px; top: 0px; width: 406px; height: 77px; user-select: none; padding: 0px; margin: 0px; border-width: 0px;" data-zr-dom-id="zr_0" width="507" height="96"></canvas></div><div></div></div>
        </div>
      </li>
      <li>
        
        
        

      </li>
      <li>

        <div class="boxall" style="height: calc(33.333% - .15rem)">

          <div class="alltitle">服务器能耗优化对比</div>
          <div class="boxnav" id="echarts5" style="user-select: none; position: relative;" _echarts_instance_="ec_1710235324243"><div style="position: relative; overflow: hidden; width: 406px; height: 48px; padding: 0px; margin: 0px; border-width: 0px;"><canvas style="position: absolute; left: 0px; top: 0px; width: 406px; height: 48px; user-select: none; padding: 0px; margin: 0px; border-width: 0px;" data-zr-dom-id="zr_0" width="507" height="60"></canvas></div><div></div></div>

        </div>
        <div class="boxall" style="height: calc(33.333% - .15rem)">
          <div class="alltitle">PUE优化对比</div>
          <div class="boxnav" id="">
            <table border="0" cellspacing="0">
            </table>





          </div>

        </div>
        <div class="boxall" style="height: calc(33.333% - .15rem)">
          <div class="alltitle">空调能耗监测</div>
          <div class="boxnav" id="echarts6" style="height: calc(100% - 0.3rem); user-select: none; position: relative;" _echarts_instance_="ec_1710235324244"><div style="position: relative; overflow: hidden; width: 411px; height: 63px; padding: 0px; margin: 0px; border-width: 0px; cursor: default;"><canvas style="position: absolute; left: 0px; top: 0px; width: 411px; height: 63px; user-select: none; padding: 0px; margin: 0px; border-width: 0px;" data-zr-dom-id="zr_0" width="513" height="78"></canvas></div><div></div></div>
        </div>
      </li>
    </ul>
  </div>

  <!-- <script type="text/javascript" src="js/echarts.min.js"></script>
  <script language="JavaScript" src="js/js.js"></script> -->



  </div>
</template>
<script>
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

<style>
  /* @charset "utf-8";
/* CSS Document */
*{
	-webkit-box-sizing: border-box;
	-moz-box-sizing: border-box;
	box-sizing: border-box}
*,body{padding:0px;	margin:0px;font-family: "微软雅黑";}
body{ background:#000d4a url(../assets/bg.jpg) center center; background-size:cover;color:#fff; font-size: .1rem; }
li{ list-style-type:none;}
@font-face{font-family:electronicFont;src:url(../font/DS-DIGIT.TTF)}
i{ margin:0px; padding:0px; text-indent:0px;}
img{ border:none; max-width: 100%;}
a{ text-decoration:none; color:#399bff;}
a.active,a:focus{ outline:none!important; text-decoration:none;}
ol,ul,p,h1,h2,h3,h4,h5,h6{ padding:0; margin:0}
a:hover{ color:#06c; text-decoration: none!important}

html,body{height: 100%;}
.clearfix:after, .clearfix:before {display: table;content: " "}
 .clearfix:after {clear: both}
.pulll_left{float:left;}
.pulll_right{float:right;}
/*谷哥滚动条样式*/
  ::-webkit-scrollbar {width:5px;height:5px;position:absolute}
  ::-webkit-scrollbar-thumb {background-color:#5bc0de}
  ::-webkit-scrollbar-track {background-color:#ddd}
/***/

.loading{position:fixed; left:0; top:0; font-size:16px; z-index:100000000;width:100%; height:100%; background:#1a1a1c; text-align:center;}
.loadbox{position:absolute; width:160px;height:150px; color: #324e93; left:50%; top:50%; margin-top:-100px; margin-left:-75px;}
.loadbox img{ margin:10px auto; display:block; width:40px;}

.head{ height:1.05rem; background: url(../assets/head_bg.png) no-repeat center center; background-size: 100% 100%; position: relative}
.head h1{ color:#fff; text-align: center; font-size: .4rem; line-height:.8rem; letter-spacing: -1px;}
.head h1 img{ width:1.5rem; display: inline-block; vertical-align: middle; }
.time{ position:absolute; right:.15rem; top:0; line-height: .75rem;color:rgba(255,255,255,.7); font-size: .3rem; padding-right: .1rem;font-family:electronicFont;}

.mainbox{ padding:0 .2rem 0rem .2rem; height:calc(100% - 1.05rem) }
.mainbox>ul{ margin-left:-.1rem; margin-right:-.1rem; height:100%}
.mainbox>ul>li{ float: left; padding: 0 .1rem;height:100%;width: 30%}
.mainbox>ul>li:nth-child(2){ width: 40%}

.boxall{ padding:0 .2rem .2rem .2rem;  background: rgba(6,48,109,.5); position: relative; margin-bottom: .15rem; z-index: 10; }
.alltitle{ font-size:.2rem; color:#fff;  line-height: .5rem; position: relative;padding-left: .15rem}
.alltitle:before{position: absolute; height: .2rem; width: 4px; background: #49bcf7; border-radius: 5px; content: ""; left: 0;  top: 50%; margin-top: -.1rem;}
.boxnav{height: calc(100% - .5rem);}
.row>li{ float: left; height: 100%;}
.col-6{width: 50%;}
.col-3{width: 25%;}
.col-4{width: 33.33333%;}
.h100{height: 100%;}
.tit01{ text-align: center; color: white; font-size: .16rem; padding: .3rem 0 .02rem 0;}
.piebox{ height: calc(100% - .5rem); position: relative;}
.piebox:before{ width:.6rem; height:.6rem; content: ""; border: 1px solid #49bcf7; border-radius: 1rem; position: absolute;
left:50%; top: 50%; margin-left: -.31rem; margin-top: -.31rem; opacity: .7;}

.sqzs{margin-right: .2rem;}
.sqzs p{ padding: .2rem 0  .1rem 0;  font-size: .22rem;}
.sqzs h1{height: calc(100% - .65rem); border-bottom: 1px solid rgba(255,255,255,.1); border-top: 1px solid rgba(255,255,255,.1); display: flex; align-items: center; color: #fef000;font-weight: normal; letter-spacing: 2px; font-size: .5rem; justify-content: center;padding-bottom: .05rem;}
.sqzs h1 span{ font-size: .8rem; font-family: Impact, Haettenschweiler, 'Arial Narrow Bold', sans-serif; }

table{ width: 100%; text-align: center;}
table th{ font-size: .16rem; background: rgba(0,0,0,.1);}
table td{ font-size: .16rem; color: rgba(255,255,255,.6);}
table th,table td{ border-bottom:1px solid rgba(255,255,255,.1); padding: .1rem 0;}
</style>