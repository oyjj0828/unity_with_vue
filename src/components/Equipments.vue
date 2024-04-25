<template>
  <dv-border-box-13 backgroundColor="rgba(6, 48, 109, .5)" style="height: calc(33% ); z-index: 11;">
    <div class="boxall" style="height: calc(100% )">
      <div class="alltitle">IT设备统计</div>
      <div class="boxnav" id="echarts4" style="user-select: none; z-index: -10;" _echarts_instance_="ec_1710235324242">
        <div class="mainbox" style="position: relative; overflow: hidden; width: 100%; height: 100%; cursor: default;">

          <ul class="clearfix" style="height: inherit">
            <li style="width: 50%;">
              <dv-active-ring-chart :config="config" :key="count" style="width:100%;height:100%;" />
            </li>
            <li style="width: 50%;">
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
        animationFrame: 30,
      },
      labelConfig: [], // 将标签和对应的数量组合成对象数组
      count:0,
    }
  },
  mounted() {
    this.updateData(); // 初始更新数据
    setInterval(this.updateData, 12000); // 每10秒更新一次数据
  },
  methods: {
    updateData() {
      this.config.data.forEach(item => {
        switch (item.name) {
          case '服务器':
            item.value = Math.floor(Math.random() * 5) + 134; // 生成134-138之间的随机数
            break;
          case '配电柜':
            item.value = Math.floor(Math.random() * 5) + 28; // 生成28-32之间的随机数
            break;
          case '路由器':
            item.value = Math.floor(Math.random() * 5) + 32; // 生成32-36之间的随机数
            break;
          case '空调':
            item.value = Math.floor(Math.random() * 5) + 36; // 生成36-40之间的随机数
            break;
        };
        this.count+=1;
      });
      // 更新labelConfig
      this.labelConfig = this.config.data.map(item => ({ label: item.name, value: item.value }));
    }
  }
}
</script>


<style>
/* @charset "utf-8";
/* CSS Document */
@import "../../public/css/comon0.css";
</style>