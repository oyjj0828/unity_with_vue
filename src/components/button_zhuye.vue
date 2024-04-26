<template>
  <div style="position: absolute; width: 120px; height: 50px; left: 50%; margin-left: -60px; bottom: 25px; z-index: 10;">
    <div>
      <p v-if="view1">
        <dv-border-box-12 backgroundColor="rgba(6, 48, 109, .5)">
          <button class="rounded-btn" @click="handleClick_overview" style="z-index: 20; width: inherit; height: inherit;">
            <span style="font-size: 18px; font-weight: bold; color: azure">
              总览
            </span>
          </button>
        </dv-border-box-12>
      </p>
      <p v-else>
        <dv-border-box-12>
          <button class="rounded-btn" @click="handleClick_overview" style="z-index: 20; width: inherit; height: inherit;">
            <span style="font-size: 18px; font-weight: bold; color:azure">
              总览
            </span>
          </button>
        </dv-border-box-12>
      </p>
    </div>
    <!-- <div style="display: flex; justify-content: center;"> -->
    <div style="position:relative; bottom:265px; left:360px; display: flex; flex-direction:column; justify-content: center; align-items: center; z-index: 10;">
      <p v-if="floor5" style="margin-bottom: 20px;">
        <dv-border-box-7 backgroundColor="rgba(6, 48, 109, .5)" style="width: 80px; height: 36px">
          <button class="rounded-btn2" @click="handleClick_floor5" style=" width: inherit; height: inherit;">
            <span style="font-size: 14px; font-weight: bold; color:azure; margin: auto;">
              5F
            </span>
          </button>
        </dv-border-box-7>
      </p>
      <p v-else style="margin-bottom: 20px;">
        <dv-border-box-7 style="width: 80px; height: 36px">
          <button class="rounded-btn2" @click="handleClick_floor5" style="width: inherit; height: inherit;">
            <span style="font-size: 14px; font-weight: bold; color:azure; margin: auto;">
              5F
            </span>
          </button>
        </dv-border-box-7>
      </p>


      <p v-if="floor4" style="margin-bottom: 20px;">
        <dv-border-box-7 backgroundColor="rgba(6, 48, 109, .5)" style="width: 80px; height: 36px;">
          <button class="rounded-btn2" @click="handleClick_floor4" style="z-index: 20; width: inherit; height: inherit;">
            <span style="font-size: 14px; font-weight: bold; color:azure; margin: auto;">
              4F
            </span>
          </button>
        </dv-border-box-7>
      </p>
      <p v-else style="margin-bottom: 20px;">
        <dv-border-box-7 style="width: 80px; height: 36px;">
          <button class="rounded-btn2" @click="handleClick_floor4" style="z-index: 20; width: inherit; height: inherit;">
            <span style="font-size: 14px; font-weight: bold; color:azure; margin: auto;">
              4F
            </span>
          </button>
        </dv-border-box-7>
      </p>

      <p v-if="floor3" style="margin-bottom: 20px;">
        <dv-border-box-7 backgroundColor="rgba(6, 48, 109, .5)" style="width: 80px; height: 36px">
          <button class="rounded-btn2" @click="handleClick_floor3" style="z-index: 20; width: inherit; height: inherit;">
            <span style="font-size: 14px; font-weight: bold; color:azure; margin: auto;">
              3F
            </span>
          </button>
        </dv-border-box-7>
      </p>
      <p v-else style="margin-bottom: 20px;">
        <dv-border-box-7 style="width: 80px; height: 36px;">
          <button class="rounded-btn2" @click="handleClick_floor3" style="z-index: 20; width: inherit; height: inherit;">
            <span style="font-size: 14px; font-weight: bold; color:azure; margin: auto;">
              3F
            </span>
          </button>
        </dv-border-box-7>
      </p>

      <p v-if="floor2" style="margin-bottom: 20px;">
        <dv-border-box-7 backgroundColor="rgba(6, 48, 109, .5)" style="width: 80px; height: 36px">
          <button class="rounded-btn2" @click="handleClick_floor2" style="z-index: 20; width: inherit; height: inherit; ">
            <span style="font-size: 14px; font-weight: bold; color:azure; margin: auto;">
              2F
            </span>
          </button>
        </dv-border-box-7>
      </p>
      <p v-else style="margin-bottom: 20px;">
        <dv-border-box-7 style="width: 80px; height: 36px">
          <button class="rounded-btn2" @click="handleClick_floor2" style="z-index: 20; width: inherit; height: inherit;">
            <span style="font-size: 14px; font-weight: bold; color:azure; margin: auto;">
              2F
            </span>
          </button>
        </dv-border-box-7>
      </p>

      <p v-if="floor1" style="margin-bottom: 20px;">
        <dv-border-box-7 backgroundColor="rgba(6, 48, 109, .5)" style="width: 80px; height: 36px">
          <button class="rounded-btn2" @click="handleClick_floor1" style="z-index: 20; width: inherit; height: inherit; ">
            <span style="font-size: 14px; font-weight: bold; color:azure; margin: auto;">
              1F
            </span>
          </button>
        </dv-border-box-7>
      </p>
      <p v-else style="margin-bottom: 20px;"> 
        <dv-border-box-7 style="width: 80px; height: 36px">
          <button class="rounded-btn2" @click="handleClick_floor1" style="z-index: 20; width: inherit; height: inherit;">
            <span style="font-size: 14px; font-weight: bold; color:azure; margin: auto;">
              1F
            </span>
          </button>
        </dv-border-box-7>
      </p> 
    </div>
  </div>
</template>

<script>
import { Upload } from 'element-ui'


export default {
  data() {
    return {
      name: '总览',
    }
  },
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
    view4: {
      type: Boolean,
      default: false,
    },
    view5: {
      type: Boolean,
      default: false,
    },
    overview: {
      type: Function,
      default: () => {},
    },
    Go1F: {
      type: Function,
      default: () => {},
    },
    Go2F: {
      type: Function,
      default: () => {},
    },
    Go3F: {
      type: Function,
      default: () => {},
    },
    Go4F: {
      type: Function,
      default: () => {},
    },
    Go5F: {
      type: Function,
      default: () => {},
    },
    floor1: {
      type: Boolean,
      default: false,
    },
    floor2: {
      type: Boolean,
      default: false,
    },
    floor3: {
      type: Boolean,
      default: false,
    },
    floor4: {
      type: Boolean,
      default: false,
    },
    floor5: {
      type: Boolean,
      default: false,
    },
  },


  methods: {
    // sendClose(){
    //   this.$emit('update:view1', false)
    //   this.$emit('update:view2', false)
    //   this.$emit('update:view3', false) 
    //   this.$emit('update:view4', false)  
    //   this.$emit('update:view5', false)
    // },

    handleClick_overview()
    {
      this.$emit('update:view1', true)
      this.$emit('update:view2', false)
      this.$emit('update:view3', false) 
      this.$emit('update:view4', false)  
      this.$emit('update:view5', false)
      this.$emit('update:view5', false)
      this.$emit('update:floor1', false)
      this.$emit('update:floor2', false)
      this.$emit('update:floor3', false)
      this.$emit('update:floor4', false)
      this.$emit('update:floor5', false)
      this.overview()
    },

    handleClick_floor1()
    {
      this.$emit('update:view1', false)
      this.$emit('update:view2', false)
      this.$emit('update:view3', false) 
      this.$emit('update:view4', false)  
      this.$emit('update:view5', false)
      this.$emit('update:floor1', true)
      this.$emit('update:floor2', false)
      this.$emit('update:floor3', false)
      this.$emit('update:floor4', false)
      this.$emit('update:floor5', false)
      this.Go1F()
    },

    handleClick_floor2()
    {
      this.$emit('update:view1', false)
      this.$emit('update:view2', false)
      this.$emit('update:view3', false) 
      this.$emit('update:view4', false)  
      this.$emit('update:view5', false)
      this.$emit('update:floor1', false)
      this.$emit('update:floor2', true)
      this.$emit('update:floor3', false)
      this.$emit('update:floor4', false)
      this.$emit('update:floor5', false)
      this.Go2F()
    },

    handleClick_floor3()
    {
      this.$emit('update:view1', false)
      this.$emit('update:view2', false)
      this.$emit('update:view3', false) 
      this.$emit('update:view4', false)  
      this.$emit('update:view5', false)
      this.$emit('update:floor1', false)
      this.$emit('update:floor2', false)
      this.$emit('update:floor3', true)
      this.$emit('update:floor4', false)
      this.$emit('update:floor5', false)
      this.Go3F()
    },

    handleClick_floor4()
    {
      this.$emit('update:view1', false)
      this.$emit('update:view2', false)
      this.$emit('update:view3', false) 
      this.$emit('update:view4', false)  
      this.$emit('update:view5', false)
      this.$emit('update:floor1', false)
      this.$emit('update:floor2', false)
      this.$emit('update:floor3', false)
      this.$emit('update:floor4', true)
      this.$emit('update:floor5', false)
      this.Go4F()
    },

    handleClick_floor5()
    {
      this.$emit('update:view1', false)
      this.$emit('update:view2', false)
      this.$emit('update:view3', false) 
      this.$emit('update:view4', false)  
      this.$emit('update:view5', false)
      this.$emit('update:floor1', false)
      this.$emit('update:floor2', false)
      this.$emit('update:floor3', false)
      this.$emit('update:floor4', false)
      this.$emit('update:floor5', true)
      this.Go5F()
    },


    // handleClick(command) { 
    //   if (command == "overview") {
    //     this.$emit('update:view1', true)
    //     this.$emit('update:view2', false)
    //     this.$emit('update:view3', false)   
    //     this.overview();
    //     this.name = "总览"
    //   }
    //   else if (command == "1F") {
    //     this.sendClose()
    //     this.Go1F();
    //     this.name = "1F"
    //   }
    //   else if (command == "2F") {
    //     this.sendClose()
    //     this.Go2F();
    //     this.name = "2F"
    //   }
    //   else if (command == "3F") {
    //     this.sendClose()   
    //     this.Go3F();
    //     this.name = "3F"
    //   }
    //   else if (command == "4F") {
    //     this.sendClose()  
    //     this.Go4F();   
    //     this.name = "4F"
    //   }
    //   else if (command == "5F") {
    //     this.sendClose()   
    //     this.Go5F();
    //     this.name = "5F"
    //   }
    // }
  }
}

</script>

<style>

.rounded-btn2{
  white-space: nowrap;
  border: none;
  /* 去除默认边框 */
  background-color: transparent;
  /* 设置背景色 */
  font-weight: bold;
  color: azure;
  /* 设置字体颜色 */
  padding: 0px 0px;
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

</style>
