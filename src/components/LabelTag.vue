<!-- LabelTag.vue -->
<template>
  <div v-if="mergedConfig" class="label-tag">
    <div class="label-item" v-for="(item, i) in mergedConfig" :key="item.label">
      <div :style="`background-color: ${item.color};`"></div>
      <span>{{ item.label }} ({{ item.value }})</span>
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
      type: Array,
      default: () => ([])
    }
  },
  data() {
    return {
      defaultConfig: {
        data: [],
        colors: ['#3062FF', '#1C6FAE', '#0F98A6', '#8C997E']
      },
      mergedConfig: null
    }
  },
  watch: {
    config() {
      this.mergeConfig()
    }
  },
  methods: {
    mergeConfig() {
      this.mergedConfig = this.config.map((item, i) => ({
        label: item.label,
        value: item.value,
        color: this.defaultConfig.colors[i % this.defaultConfig.colors.length]
      }))
    }
  },
  mounted() {
    this.mergeConfig()
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
      border-radius: 5px;
    }
  }
}
</style>
