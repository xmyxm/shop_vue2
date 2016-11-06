<template>
  <div class="user-box">
      <header-block title="User"> </header-block>
      <div class="user-box-bg">

      </div>
       <ul>
          <li v-for="item in userOption">
              <div v-bind:class="['user-box-ul-item',item.className]" v-text="item.name"></div>
          </li>
       </ul>
  </div>
</template>

<script>
import HeaderBlock from './HeaderBlock'

export default {
  data () {
    return {
      userOption: [{name:'我的订单',className:'',src:{path:'/B'}},
      {name:'未付款订单',className:'',src:{path:'/B'}},
      {name:'待评价订单',className:'',src:{path:'/B'}},
      {name:'退款售后',className:'',src:{path:'/B'}},
      {name:'我的卡券',className:'',src:{path:'/B'}}]
    }
  },
  methods:{
     clickback:function(){alert(this.title)}
  },
  components: { HeaderBlock }
}
</script>

<style scoped>

.user-box-ul-item{
    height:50px;
    line-height:50px;
    padding-left:50px;
    position: relative;
    border-bottom:1px solid #ddd;
}

.user-box-ul-item:before{
    background-color:#11cd6e;
    width:16px;
    height:16px;
    content:'';
    position: absolute;
    top: 17px;
    left: 17px;
}

.user-box-ul-item:after{
    display: block;
    content: "";
    width: 10px;
    height: 10px;
    border-right: 2px solid #D0CFCF;
    border-bottom: 2px solid #D0CFCF;
    -webkit-transform: rotate(-45deg);
    transform: rotate(-45deg);
    position: absolute;
    right: 22px;
    top: 20px;
}
.user-box-bg{

}


</style>