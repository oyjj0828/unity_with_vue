<template>
    <div style="position: absolute; width: 110px; height: 100px; left:52.8%; top: 80px; z-index: 10;">
      <p v-if="top3">
        <dv-border-box-10 backgroundColor="rgba(6, 48, 109, .5)">
          <button class="rounded-btn" @click="handleClick" style="z-index: 20; width: inherit; height: inherit;">
            温度分布图
          </button>
        </dv-border-box-10>
      </p>
      <p v-else>
        <dv-border-box-10>
          <button class="rounded-btn" @click="handleClick" style="z-index: 20; width: inherit; height: inherit;">
            温度分布图
          </button>
        </dv-border-box-10>
      </p>
    </div>
  </template>
  
  <script>
import Temperature from './Temperature.vue'

  
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
      EnergyConsumptionMap: {
        type: Function,
        default: () => {},
      },
      TemperatureMap: {
        type: Function,
        default: () => {},
      },
    },
  
    methods: {
      handleClick() {
        if(this.top1){
          this.EnergyConsumptionMap()
        }
        this.$emit('update:top1', false)
        this.$emit('update:top3',!this.top3)
        this.TemperatureMap()
      }
    }
  }
  
  </script>
  