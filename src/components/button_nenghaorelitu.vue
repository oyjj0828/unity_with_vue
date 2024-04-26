<template>
    <div style="position: absolute; width: 110px; height: 100px; left: 28%; top: 80px; z-index: 10;">
      <p v-if="top1">
        <dv-border-box-10 backgroundColor="rgba(6, 48, 109, .5)">
          <button class="rounded-btn" @click="handleClick" style="z-index: 20; width: inherit; height: inherit;">
            能耗热力图
            <!-- <span style="font-size: 15px; font-weight: bold; color: azure;">
                能耗热力图
            </span> -->
          </button>
        </dv-border-box-10>
      </p>
      <p v-else>
        <dv-border-box-10>
          <button class="rounded-btn" @click="handleClick" style="z-index: 20; width: inherit; height: inherit;">
            能耗热力图
            <!-- <span style="font-size: 15px; font-weight: bold; color: azure;">
                能耗热力图
            </span> -->
          </button>
        </dv-border-box-10>
      </p>
    </div>
  </template>
  
  <script>
  
  export default {
    props: {
      top1: {
        type: Boolean,
        default: false,
      },
      top2: {
        type: Boolean,
        default: false,
      },
      top3: {
        type: Boolean,
        default: false,
      },
      top4: {
        type: Boolean,
        default: false,
      },
      EnergyConsumptionMap:{
        type: Function,
        default: () => {},
      },
      TemperatureMap:{
        type: Function,
        default: () => {},
      },
    },
  
    methods: {
      handleClick() {
        if(this.top3){
          this.TemperatureMap()
        }
        this.$emit('update:top1', !this.top1)
        this.$emit('update:top3', false)
        this.EnergyConsumptionMap()
      }
    }
  }
  
  </script>
  