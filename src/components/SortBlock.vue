<template>
  <div class="sort-box">
  	<header-block title="Sort"> </header-block>
	<div class="sort-content">
		<ul class="sort-class" v-on:click="switchclass">
			<li v-for="item in provincelist" v-bind:class="item.ischeck?'brnone':''">
				<span v-bind:class="item.className"></span>
				<span v-text="item.name" v-bind:data-id="item.id"></span>
			</li>
		</ul>
		<div class="sort-subclass">
			<ol class="sub-content">
				<li  v-for="item in defautSubClass">
					{{item.title}}
				</li>
			</ol>
		</div>
	</div>
  </div>
</template>

<script>
import HeaderBlock from './HeaderBlock'

export default {
  components: { HeaderBlock },
  data () {
    return {
		provincelist:[{name:'温情好礼',id:'1',className:'',ischeck:true},
					{name:'美食肌密',id:'2',className:''},
					{name:'辣妈萌宝',id:'3',className:''},
					{name:'冬日养生',id:'4',className:''},
					{name:'懒人福音',id:'5',className:''},
					{name:'新鲜水果',id:'6',className:''},
					{name:'肉类禽蛋',id:'7',className:''},
					{name:'蔬菜瓜果',id:'8',className:''},
					{name:'水产海鲜',id:'9',className:''},
					{name:'乳品专区',id:'10',className:''},
					{name:'速食调料',id:'11',className:''}],
		defautSubClass:[{title:'送孕妈',id:101},
					{title:'送长辈',id:101},
					{title:'送友人',id:101},
					{title:'送闺蜜',id:101},
					{title:'送同学',id:101},
					{title:'送老师',id:101},
					{title:'送小宝',id:101}],
			SubClassArray:[
			[{title:'送孕妈',id:101},{title:'送长辈',id:101},{title:'送友人',id:101},{title:'送闺蜜',id:101},{title:'送同学',id:101},{title:'送老师',id:101},{title:'送小宝',id:101}],
[{title:'吃敷两用',id:101},{title:'补水能手',id:101},{title:'胶原蛋白',id:101}],
[{title:'辅食果泥',id:101},{title:'丰富叶酸',id:101},{title:'DHA之源',id:101},{title:'VC达人',id:101},{title:'补充钙质',id:101},{title:'全部',id:101}],
[{title:'煲汤必备',id:101},{title:'润肺养胃',id:101},{title:'益气补血',id:101},{title:'全部',id:101}],
[{title:'开盘菜',id:101},{title:'蒸蒸就吃',id:101},{title:'方便吃',id:101},{title:'全部',id:101}],
[{title:'牛油果',id:101},{title:'奇异果',id:101},{title:'橘子',id:101},{title:'柚子',id:101},{title:'芒果',id:101},{title:'柠檬',id:101},{title:'菠萝',id:101},{title:'香蕉',id:101},{title:'蓝莓',id:101},{title:'百香果',id:101}],
[{title:'牛肉',id:101},{title:'鸡肉',id:101},{title:'猪肉',id:101},{title:'蛋类',id:101},{title:'香肠',id:101},{title:'鸭肉',id:101}],
[{title:'绿叶菜',id:101},{title:'豆类',id:101},{title:'土豆',id:101},{title:'玉米',id:101},{title:'西红柿',id:101},{title:'南瓜',id:101},{title:'丝瓜',id:101}],
[{title:'石斑鱼',id:101},{title:'三文鱼',id:101},{title:'北极贝',id:101},{title:'秋刀鱼',id:101},{title:'鱿鱼',id:101},{title:'象拔蚌',id:101}],
[{title:'牛奶',id:101},{title:'酸奶',id:101},{title:'黄油',id:101}],
[{title:'包子馒头',id:101},{title:'年糕',id:101},{title:'冷菜即食',id:101},{title:'冷冻素食',id:101},{title:'调料',id:101},{title:'米面杂粮',id:101},{title:'食用油',id:101}]]
    }
  },
  methods:{
    switchclass(e){
    var _self = this;
       var _id = e.target.getAttribute("data-id");
		_self.provincelist.forEach(function(item,index){
			if(item.id == _id){
			_self.provincelist[index].ischeck =true;
			}else{
			_self.provincelist[index].ischeck =false;
			}
		});
       _id = parseInt(_id,10) - 1;
       _self.defautSubClass = _self.SubClassArray[_id];
    }
  }
}
</script>

<style scoped>
.sort-box{
	position: relative;
	padding-top: 50px;
	padding-bottom: 50px;
	height: auto;
	min-height: 100%;
}
.head-box{
	position: absolute;
	top:0px;
	left: 0px;
}
.sort-content{
	display:flex;/*flex布局*/
}
.sort-class{
  display:flex;/*flex布局*/
  flex-direction:column;/*纵向排列*/
  flex-wrap:wrap;/*换行*/
  justify-content:flex-start;/*设置对齐方式为两端对齐*/	
  width:80px;
}

.sort-class li{
  text-align:center;
  display:block;
  list-style-type:none;
  flex-shrink:0;/*当空间不足时，各项都不会等比例缩小*/
  flex-basis:8.3%;
  height:50px;
  line-height:50px;
  border-bottom:1px solid #e0e0e0;
  border-right:1px solid #e0e0e0;
  width: 100%;
}

.sort-class span{
   display:block;
}

.sort-subclass{
	flex:1;
	background: white;
}
.sub-content{
	display:block;
	padding:0px;
	margin:0px;
}
.sub-content li{
	list-style:none;
	display:inline-block;
	padding:15px 9px;
}
.brnone{
	border-right:none!important;
	background: white;
}
</style>

