<template>
    <div style="position: absolute; width: 110px; height: 100px; left: 65.2%; top: 80px; z-index: 10;">
      <div v-if="top4">
        <dv-border-box-10 backgroundColor="rgba(6, 48, 109, .5)">
          <button class="rounded-btn" @click="handleClick" style="z-index: 20; width: inherit; height: inherit;">
            碳排放监测
          </button>
        </dv-border-box-10>

        <div style="position: absolute; left: -422px; top: 95px; height: 420px; width: 390px;">
          <Tanpaifangjiance />
        </div>

      </div>
      <div v-else>
        <dv-border-box-10>
          <button class="rounded-btn" @click="handleClick" style="z-index: 20; width: inherit; height: inherit;">
            碳排放监测
          </button>
        </dv-border-box-10>
      </div>
    </div>
  </template>
  
  <script>
  import Tanpaifangjiance from './Tanpaifangjiance.vue';
  export default {
    components: {
      Tanpaifangjiance
    },
    props: {
      top4: {
        type: Boolean,
        default: false,
      }
    },
  
    methods: {
      handleClick() {
        this.$emit('update:top4', !this.top4)   
      }
    }
  }
  
  </script>
  