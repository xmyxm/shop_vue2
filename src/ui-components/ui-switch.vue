<template>
  <div class="ui-switch">
    <div v-bind:class="['ui-switch-box',checked?'current':'']" v-on:click="clickSwitch">
        <div v-bind:class="['ui-switch-bg',checked?'current':'']"></div>
        <div class="ui-switch-ball"></div>
    </div>
  </div>
</template>

<script>
export default {
  data () {
    return {
    }
  },
  props: ['checked'],
  methods:{
     clickSwitch:function(){
        this.checked = !this.checked;
        console.log(this.checked);
        this.$dispatch('child-ui-switch', this.checked);// 派发自定义事件，事件沿着父链冒泡，给父组件传递参数
     }
  }
}
</script>

<style scoped>
.ui-switch{
    width:44px;
    height:24px;
    border-radius: 24px;
}

.ui-switch-box{
    position: relative;
    width: 44px;
    height: 24px;
    display: inline-block;
    vertical-align: middle;
    border-radius: 24px;
    background-color: #ccc;
    cursor: pointer;
    -webkit-transition: 200ms background-color ease-in;
    -moz-transition: 200ms background-color ease-in;
    transition: 200ms background-color ease-in;
    -webkit-appearance:none;
    -webkit-tap-highlight-color:rgba(255,255,255,0);/*点击时默认样式改为透明色*/
    -webkit-tap-highlight-color:transparent;/*点击时默认样式改为透明色*/
}
.ui-switch-box.current{background-color: #099fde;}
.ui-switch-bg{
    position: absolute;
    top: 0;
    left: 0;
    width: 44px;
    height: 24px;
    border-radius: 24px;
    background-color: #ccc;
    -webkit-transform: scale(1,1);
    -moz-transform: scale(1,1);
    transform: scale(1,1);
    transform-origin: center center;
    -webkit-transition: 200ms -webkit-transform ease-in;
    -moz-transition: 200ms -moz-transform ease-in;
    transition: 200ms transform ease-in;
}

.ui-switch-bg.current{
    width: 44px;
    height: 24px;
    -webkit-transform: scale(0,0);
    -moz-transform: scale(0,0);
    transform: scale(0,0);
}

.ui-switch-ball{
    position: absolute;
    top: 1px;
    left: 1px;
    right: 21px;
    height: 22px;
    border-radius: 22px;
    background-color: #fff;
    -webkit-transition: 200ms width ease-in,200ms left ease-in,200ms right ease-in;
    -moz-transition: 200ms width ease-in,200ms left ease-in,200ms right ease-in;
    transition: 200ms width ease-in,200ms left ease-in,200ms right ease-in;
}
.ui-switch-box.current .ui-switch-ball{
    left: 21px;
    right: 1px;
}

</style>