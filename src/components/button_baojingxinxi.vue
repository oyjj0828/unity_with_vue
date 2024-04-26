<template>
  <div style="position: absolute; width: 110px; height: 100px; left: 40.4%; top: 80px; z-index: 10;">
    <div v-if="top2">
      <dv-border-box-10 backgroundColor="rgba(6, 48, 109, .5)">
        <button class="rounded-btn" @click="handleClick" style="z-index: 20; width: inherit; height: inherit;">
          报警信息
        </button>
      </dv-border-box-10>
      <div style="position: absolute; left: -43px; top: 95px; height: 420px; width: 390px;">
        <baojingxinxi />
      </div>
    </div>
    <div v-else>
      <dv-border-box-10>
        <button class="rounded-btn" @click="handleClick" style="z-index: 20; width: inherit; height: inherit;">
          报警信息
        </button>
      </dv-border-box-10>
    </div>
  </div>
</template>
  
<script>
import baojingxinxi from '@/components/baojingxinxi.vue';

export default {
  components: {
    baojingxinxi,
  },
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
    }
  },

  methods: {
    handleClick() {
      this.$emit('update:top2', !this.top2)
      this.$emit('update:top4', false)
    }
  }
}
</script>
  