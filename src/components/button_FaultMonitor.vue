<template>
    <dv-border-box-8 backgroundColor="rgba(6, 48, 109, .5)" 
    style="height: calc(15% ); width: calc(10% );z-index: 11; top:250px; left:340px">
        <button class="btn3" @click="handleClick">
            <span class="span1">故障监测</span>
        </button>
    </dv-border-box-8>
</template>


<script>
    export default {
      props:['monitor'],
        methods: {
            handleClick() {
                // 在这里处理点击事件
                if(this.monitor){
                  this.$emit('update:monitor', false)
                }
                else{
                  this.$emit('update:monitor', true)
                }
            }
        }
    }
</script>


<style>
    /* @charset "utf-8";
    /* CSS Document */
    @import "../../public/css/comon0.css";
    .btn3 {
        border: none;
        position: relative;
        background-color: transparent;
        width:27px;
        height:85px;
        left:5px;
        top:4px;
    }
    .btn3:active {
      background-color: rgb(0, 60, 112);
      color: rgb(2, 135, 197);
    }
    .span1{
        position: relative;
        top:3.5px;
        left:0.5px;
        writing-mode: vertical-rl;
        font-size: 16px;
        color: cyan;
    }
</style>