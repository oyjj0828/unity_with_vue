<template>
  <div style="position: absolute; width: 120px; height: 50px; left: 50%; margin-left: -60px; bottom: 50px; z-index: 10;">
    <dv-border-box-12>
      <el-row class="block-col-2" style="text-align: center; height: 100%;">
          <el-col :span="12" style="width: 100%; height: 100%;">
            <el-dropdown @command="handleClick" style="width: inherit; height: inherit; align-content: center;">
              <span class="el-dropdown-link" style="font-size: 18px; font-weight: bold; color: rgb(255, 174, 13);">
                {{name}}<!-- <i class="el-icon-arrow-down el-icon--right"></i> -->
              </span>
              <el-dropdown-menu slot="dropdown">
                <el-dropdown-item command="overview" ><i class="el-icon-office-building"></i></el-dropdown-item>
                <el-dropdown-item command="1F">1F</el-dropdown-item>
                <el-dropdown-item command="2F">2F</el-dropdown-item>
                <el-dropdown-item command="3F">3F</el-dropdown-item>
                <el-dropdown-item command="4F">4F</el-dropdown-item>
                <el-dropdown-item command="5F">5F</el-dropdown-item>
              </el-dropdown-menu>
            </el-dropdown>
          </el-col>
        </el-row>
    </dv-border-box-12>
  </div>
</template>

<script>

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
  },


  methods: {
    handleClick(command) {

      if (command == "overview") {
        this.$emit('update:view1', true)
        this.$emit('update:view2', false)
        this.$emit('update:view3', false)   
        this.overview();
        this.name = "总览"
      }
      else if (command == "1F") {
        this.$emit('update:view1', false)
        this.$emit('update:view2', false)
        this.$emit('update:view3', false)   
        this.Go1F();
        this.name = "1F"
      }
      else if (command == "2F") {
        this.$emit('update:view1', false)
        this.$emit('update:view2', false)
        this.$emit('update:view3', false)   
        this.Go2F();
        this.name = "2F"
      }
      else if (command == "3F") {
        this.$emit('update:view1', false)
        this.$emit('update:view2', false)
        this.$emit('update:view3', false)   
        this.Go3F();
        this.name = "3F"
      }
      else if (command == "4F") {
        this.$emit('update:view1', false)
        this.$emit('update:view2', false)
        this.$emit('update:view3', false)   
        this.Go4F();   
        this.name = "4F"
      }
      else if (command == "5F") {
        this.$emit('update:view1', false)
        this.$emit('update:view2', false)
        this.$emit('update:view3', false)   
        this.Go5F();
        this.name = "5F"
      }
    }
  }
}

</script>
