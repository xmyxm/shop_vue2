<template>
  <div class="ui-tabs-box">
    <ul class="tabs-ul" v-on:click="clickitem">
        <template v-for="(item,index) in tabsData">
             <li v-bind:data-index="index" v-bind:class="[selectindex == index ? 'li-current':'']">{{item.text}}</li>
        </template>
        <i class="tabs-ul-i"></i>
    </ul>
  </div>
</template>

<script>
export default {
  data(){
  return {selectindex:0}
  },
  props: ['textValue','changeEventName','tabsData'],
  methods:{
    clickitem:function(e){
        //e.target 指向触发该事件的元素
        //e.currentTarget 识别事件的当前目标对象,事件绑定在谁上面就指向谁
        this.selectindex = e.target.getAttribute('data-index');
		this.changeEventName && this.changeEventName(e);
    }
  }
}
</script>

<style scoped>
.ui-tabs-box {
    width:100%;
    height:30px;
    border-top:1px solid #FFF;
}

.ui-tabs-box .tabs-ul{
    width:100%;
    height:100%;
    display:flex;
    position: relative;
}

.ui-tabs-box .tabs-ul li{
    flex: 1;
    text-align: center;
      list-style-type:none;
}

.tabs-ul-i{
    transform: translate3d(100%,0,0);
    z-index: 2;
    position: absolute;
    left: 0;
    height: 1px;
    bottom: -1px;
    background-color: #11cd6e;
    transition: transform 300ms ease-in-out;
    width: 50%;
}

.tabs-ul .li-current{
	color: #11cd6e;
}

.tabs-ul li:nth-of-type(1).li-current~.tabs-ul-i{
    transform: translate3d(0,0,0);
}

.tabs-ul li:last-of-type.li-current+.tabs-ul-i{
    transform: translate3d(100%,0,0);
}
</style>