<template>
  <div style="position: absolute; width: 120px; height: 50px; left: 50%; margin-left: 150px; bottom: 50px; z-index: 10;">
    <p v-if="view3">
      <dv-border-box-12 backgroundColor="rgba(6, 48, 109, .5)">
        <button class="rounded-btn" @click="handleClick" style="z-index: 20; width: inherit; height: inherit;">
          <span style="font-size: 18px; font-weight: bold; color: rgb(255, 174, 13);">
            优化控制
          </span>
        </button>
      </dv-border-box-12>
    </p>
    <p v-else>
      <dv-border-box-12>
        <button class="rounded-btn" @click="handleClick" style="z-index: 20; width: inherit; height: inherit;">
          <span style="font-size: 18px; font-weight: bold; color:rgb(255, 174, 13);">
            优化控制
          </span>
        </button>
      </dv-border-box-12>
    </p>
  </div>
</template>

<script>

export default {
  //props: ['view1', 'view2', 'view3'],
  props: {
  view1: {
    type: Boolean,
    default: false,
  },
  view2: {
    type: Boolean,
    default: false,
  },
  view3: {
    type: Boolean,
    default: false,
  },
  chart: {
    type: Boolean,
    default: false,
  }
},


  methods: {
    handleClick() {
      this.$emit('update:view1', false)
      this.$emit('update:view2', false)
      this.$emit('update:view3', true)
      this.$emit('update:chart', false)        
    }
  }
}

</script>