<template>
<div class="ui-num">
    <span class="ui-num-ma">
        <i v-on:click="clickMinus" v-bind:class="['ui-num-minus',numValue <= minValue?'num-invalid':'']"></i>
        <input type="tel" class="ui-num-value-txt" data-key="5" v-bind:value="numValue + unit" />
        <i v-on:click="clickAdd" v-bind:class="['ui-num-add',numValue >= maxValue?'num-invalid':'']"></i>
    </span>
</div>
</template>

<script>
export default {
  data () {
    return {
    }
  },
  props: ['numValue','unit','minValue','maxValue','changeEventName'],//默认值，单位，最小值，最大值，父级组件事件名称
  methods:{
     clickMinus:function(){
        if(!isNaN(Number(this.maxValue))){
            if(this.numValue > this.minValue){
              --this.numValue;
              this.$dispatch(this.changeEventName, this.numValue);// 派发自定义事件，事件沿着父链冒泡，给父组件传递参数
           }
        }
     },
      clickAdd:function(){
         if(!isNaN(Number(this.maxValue))){
             if(this.numValue < this.maxValue){
               ++this.numValue;
               this.$dispatch(this.changeEventName, this.numValue);// 派发自定义事件，事件沿着父链冒泡，给父组件传递参数
            }
         }
     }
  }
}
</script>

<style scoped>
.ui-num-ma{
    min-width: 100px;
    height: 29px;
    line-height: 29px;
    text-align: center;
    position: relative;
    border: silver 1px solid;
    background: #fff;
    display: inline-block;
}

.ui-num-ma i.ui-num-minus {
    left: -10px;
    font: 400 2.8em/25px Arial;
}
.ui-num-ma i {
    width: 50px;
    height: 44px;
    position: absolute;
    top: -7px;
}

.ui-num-ma i.ui-num-minus:after {
    content: "-";
    left: 10px;
    top: 7px;
}

.ui-num-ma i:after {
    color: #fff;
    text-align: center;
    width: 32px;
    height: 29px;
    position: absolute;
    background: #099fde;
}

.ui-num-value-txt {
    width: 33px;
    height: 100%;
    padding: 0;
    color: #000;
    margin: 0 33px;
    text-align: center;
    border: none;
    font:400 14px/1.5 Arial,"Lucida Grande",Verdana,"Microsoft YaHei",hei;
}

.ui-num-ma i.ui-num-add {
    right: -10px;
    font: 400 2.2em/29px Arial;
}
.ui-num-ma i {
    width: 50px;
    height: 44px;
    position: absolute;
    top: -7px;
}

.ui-num-ma i.ui-num-add:after {
    content: "+";
    right: 10px;
    top: 7px;
}

.ui-num-ma i.num-invalid:after {
    color: #d9d9d9;
    background: #f4f4f4;
}

</style>