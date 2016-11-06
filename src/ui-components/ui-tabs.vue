<template>
  <div class="ui-tabs-box">
    <ul class="tabs-ul" v-on:click="clickitem">
        <template v-for="(item,index) in itemData">
             <li v-bind:data-index="index" v-bind:class="[selectindex == index ? 'li-current':'']">{{item.text}}</li>
        </template>
        <i class="tabs-ul-i"></i>
    </ul>
  </div>
</template>

<script>
export default {
  data(){
  return {selectindex:0,itemData:[{text:'详细信息'},{text:'用户评价'},{text:'相似推荐'}]}
  },
  props: ['textValue','changeEventName'],
  methods:{
    clickitem:function(e){
        //e.target 指向触发该事件的元素
        //e.currentTarget 识别事件的当前目标对象,事件绑定在谁上面就指向谁
        this.selectindex = e.target.getAttribute('data-index');console.log(this.itemData);
    }
  }
}
</script>

<style scoped>
.ui-tabs-box {
    width:100%;
    height:30px;
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
    background-color: #099fde;
    transition: transform 300ms ease-in-out;
    width: 33.33333%;
}

.tabs-ul .li-current{
color: #099fde;
}

.tabs-ul li:nth-of-type(1).li-current~.tabs-ul-i{
    transform: translate3d(0,0,0);
}

.tabs-ul li:nth-of-type(2).li-current~.tabs-ul-i{
    transform: translate3d(100%,0,0);
}

.tabs-ul li:last-of-type.li-current+.tabs-ul-i{
    transform: translate3d(200%,0,0);
}
</style>