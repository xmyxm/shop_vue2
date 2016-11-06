<template>
  <div class="head-box">
	<span v-on:click="clickback" class="head-box-left">
		<i class="icon-back"></i>
	</span>
  <span class="head-box-right">
    <i class="icon-menu"></i>
  </span>
	<h1>{{title}}</h1>
  </div>
</template>

<script>
export default {
  data () {
    return {
      msg: '我是页头'
    }
  },
  props: ['title'],
  methods:{
     clickback:function(){
     //history.go(-1);
     history.back();
     //alert(this.title)
     }
  }
}
</script>

<style scoped>

.head-box {
  width:100%;
  height:50px;
  background:#11cd6e;
}

.head-box span{
  display:inline-block;
  width: 50px;
}

.head-box .head-box-left{
    float:left;
    margin-left:0px;
    text-align: center;
}

.head-box .head-box-right{
    float:right;
    margin-right:0px;
    text-align: center;
}

.head-box h1{
  color:white;
  display:block;
  position:absolute;
  left:100px;
  right:100px;
  top:0px;
  text-align:center;
  line-height:50px;
}

.head-box .icon-back{
  width: 50px;
  height: 50px;
  line-height: 50px;
}

.head-box .icon-back:before{
  content: "";
  display: inline-block;
  width: 10px;
  height: 10px;
  vertical-align: middle;
  border-left: 2px solid #fff;
  border-bottom: 2px solid #fff;
  -webkit-transform: rotate(45deg);
  transform: rotate(45deg);
  -webkit-box-sizing: border-box;
  box-sizing: border-box;
}

.head-box .icon-menu{
  width: 50px;
  height: 50px;
  line-height: 50px;
}

.head-box .icon-menu:before{
  content: "";
  display: inline-block;
  width: 14px;
  height: 14px;
  vertical-align: middle;
  border: 2px solid #fff;
  border-radius:7px;
  -webkit-transform: rotate(45deg);
  transform: rotate(45deg);
  -webkit-box-sizing: border-box;
  box-sizing: border-box;
}
</style>