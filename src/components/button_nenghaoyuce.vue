<template>
  <div style="position: absolute; width: 150px; height: 50px; left: 50%; margin-left: -350px; bottom: 50px; z-index: 10;">
    <p v-if="view2">
      <dv-border-box-12 backgroundColor="rgba(6, 48, 109, .5)">
        <button class="rounded-btn" @click="handleClick" style="z-index: 20; width: 150px; height: 50px;">
          <span style="font-size: 18px; font-weight: bold; color: azure;">
            能耗预测
          </span>
        </button>
      </dv-border-box-12>
    </p>
    <p v-else>
      <dv-border-box-12>
        <button class="rounded-btn" @click="handleClick" style="z-index: 20; width: 150px; height: 50px;">
          <span style="font-size: 18px; font-weight: bold; color: rgba(6, 48, 109, .5);">
            能耗预测
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
},


  methods: {
    handleClick() {
      /*this.view1 = true;
      this.view2 = false;
      this.view3 = false;
      this.sendState1(this.view1);
      this.sendState2(this.view2);
      this.sendState3(this.view3);*/
      this.$emit('update:view1', false)
      this.$emit('update:view2', true)
      this.$emit('update:view3', false)        
    }
  }
}

</script>