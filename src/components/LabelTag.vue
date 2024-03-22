<template>
  <div v-if="mergedConfig" class="label-tag">
      <div class="label-item" v-for="(label, i) in mergedConfig.data" :key="label">
        <div :style="`background-color: ${mergedConfig.colors[i % mergedConfig.colors.length]};`" />{{ label }}
      </div>   
  </div>
</template>

<script>
import { deepMerge } from '@jiaminghi/charts/lib/util/index'

import { deepClone } from '@jiaminghi/c-render/lib/plugin/util'

export default {
  name: 'LabelTag',
  props: {
    config: {
      type: Object,
      default: () => ([])
    }
  },
  data() {
    return {
      defaultConfig: {
        /**
         * @description Label data
         * @type {Array<String>}
         * @default data = []
         * @example data = ['label1', 'label2']
         */
        data: [],
        /**
         * @description Label color (Hex|Rgb|Rgba|color keywords)
         * @type {Array<String>}
         * @default colors = ['#00baff', '#3de7c9', '#fff', '#ffc530', '#469f4b']
         * @example colors = ['#666', 'rgb(0, 0, 0)', 'rgba(0, 0, 0, 1)', 'red']
         */
        colors: ['#3062FF', '#1C6FAE', '#0F98A6', '#8C997E']
      },

      mergedConfig: null
    }
  },
  watch: {
    config() {
      const { mergeConfig } = this

      mergeConfig()
    }
  },
  methods: {
    mergeConfig() {
      let { config, defaultConfig } = this

      this.mergedConfig = deepMerge(deepClone(defaultConfig, true), config || {})
    }
  },
  mounted() {
    const { mergeConfig } = this

    mergeConfig()
  }
}
</script>

<style>
.label-tag {
  justify-content: center;
  align-items: center;
  height: 100%;

  .label-item {
    margin: 5px;
    height: 20%;
    font-size: 15px;
    display: flex;
    align-items: center;
    text-shadow: 0 0 3px #1e82be, 0 0 4px #1e82be, 0 0 5px #1e82be, 0 0 6px #1e82be !important;

    div {
      width: 20px;
      height: 20px;
      margin-left: 5px;
      margin-right: 5px;
      border-radius:5px;
    }
  }
}
</style>