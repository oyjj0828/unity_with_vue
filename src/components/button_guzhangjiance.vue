<template>
  <div style="position: absolute; width: 50px; height: 200px; left: 96.5%; top: 30%; z-index: 10;">
    <div v-if="chart">
      <dv-border-box-8 backgroundColor="rgba(6, 48, 109, .5)">
        <button class="btn_test" @click="handleClick" style="z-index: 20; width: 50px; height: 200px;">
          <span style="font-size: 21px; font-weight: bold; color: azure;">
            故障检测
          </span>
        </button>
      </dv-border-box-8>
      <div style="position: absolute; right: 55px; top: -80px; height: 400px; width: 370px;">
      
        <ErrorAct />
    
      </div>
    
    </div>
  
    <div v-else>
      <dv-border-box-8 style="width: 72dx;">
        <button class="btn_test" @click="handleClick" style="z-index: 20; width: 50px; height: 200px; left: -11px">
          <span style="font-size: 21px; font-weight: bold; color: azure;">
            故障检测
          </span>
        </button>
      </dv-border-box-8>
    </div>
  </div>
</template>

<script>
import ErrorAct from './ErrorAct.vue';
export default {
  

  components: {
    ErrorAct
  },
  props: ['chart'],


  methods: {
    handleClick() {
      this.$emit('update:chart', !this.chart)     
    }
  }
}

</script>

<style>
.btn_test {
  border: none;
  /* 去除默认边框 */
  background-color: transparent;
  /* 设置背景色 */
  color: rgb(0, 174, 255);
  /* 设置字体颜色 */
  padding: 12px;
  /* 调整按钮大小 */
  text-align: center;
  /* 居中显示文本 */
  font-size: 18px;
  /* 设置字号 */
  cursor: pointer;
  /* 光标变成手型 */
  border-radius: 100px;
  /* 设置圆角 */
}

/* 定义过渡效果 */
.fade-enter-active,
.fade-leave-active {
  transition: opacity 1s;
}
.fade-enter,
.fade-leave-to {
  opacity: 0;
}
</style>