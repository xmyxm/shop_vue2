<template>
  <div class="cart-box">
  	<header-block title="Cart"> </header-block>
  	<div>
		<h2></h2>
		<div class="cart-box-list">
			<div>
         		<div class="cart-box-check-wrap">
         			<i v-on:click="selectAll" v-bind:class="{'checked':isALL,'unchecked':!isALL}" data-groupid="1"></i> VV超市在线商家
         		</div>
			</div>
			<div v-for="(item,index) in productlist" class="cart-box-item">
				<div class="cart-box-select">
					<span v-on:click="selectItem" v-bind:data-index="index" v-bind:class="{'checked':item.checked,'unchecked':!item.checked}"></span>
				</div>
				<img v-bind:src="item.src" class="cart-box-img" />
				<div class="cart-box-des">
					<h5 v-text="item.title"></h5>
<!-- 					<span>
	<a class="cart-box-des-a">-</a>
	<input class="cart-box-des-number" type="number" min="1" v-bind:class="item.count" pattern="[0-9]" autocomplete="off" />
	<a class="cart-box-des-a">+</a>
</span> -->
<uinum num-value="1" unit="份" min-value="1" max-value="10" change-event-name="child-ui-num"></uinum>
				</div>
				<div class="cart-box-option">
                    <div class="cart-box-option-count">数量 x{{item.count}}</div>
                    <div class="cart-box-option-price">￥{{item.favourablePrice}}</div>
                    <div class="cart-box-option-del"></div>
				</div>
			</div>
		</div>
    </div>
  </div>
</template>

<script>
import HeaderBlock from './HeaderBlock'
import uinum from '../ui-components/ui-detail-num'
export default {
  data () {
    return {
    	isALL:true,
		productlist:[{title:'阳光味道 四川蒲江红心猕猴桃奇异果 20-24粒原箱装 约2kg 自营水果',
		src:'http://img10.360buyimg.com/n7/jfs/t3256/198/656686649/396841/1e0467fb/57bd05daN2a40ca1d.jpg!q70.jpg',favourablePrice:28.6,count:1,originalPrice:35.7,checked:true},
                     {title:'展卉 泰国进口 椰青4个装 约750g/个 自营水果',
        src:'http://img10.360buyimg.com/n7/jfs/t3166/286/206279175/67163/663e28ad/57aadfb3Nbcb0d2d1.jpg!q70.jpg',favourablePrice:28.6,count:3,originalPrice:35.7,checked:false}
		]
    }
  },
  components: { HeaderBlock,uinum },
  methods:{
      selectItem:function(e){
			var itemindex = e.currentTarget.getAttribute("data-index");
			var itemdata = this.productlist[itemindex];
			itemdata.checked = !itemdata.checked;
			var array = this.productlist.filter(function(item,index){return item.checked == true;});
			if(array.length == this.productlist.length){
				this.isALL = true;
			}else if(array.length == 0){
 				this.isALL = false;
			}
      },
      selectAll:function(e){
      	//var status = this.productlist.some(function(item,index){return item.checked});
      	let status = !this.isALL;
		this.productlist.forEach(function(item,index){item.checked = status;});
		this.isALL= status;
      }
  }
}
</script>

<style scoped>
.cart-box-list{
	width:100%;
}
.cart-box-item{
	width:100%;
	min-height:100px;
	display:flex;
	margin-bottom:10px;
	-ms-flex-align: center;
	-webkit-align-items: center; 
	align-items:center;
	-ms-flex-pack: center; 
	-webkit-justify-content: center; 
	justify-content: center;
	border-bottom: 1px #ddd solid;
}
.cart-box-select{
	width:50px;
	-webkit-box-pack:center;/*居中div的子元素*/
	-webkit-box-align:center;/*居中div的子元素*/
	position:relative;
}
.cart-box-select span{
	display:block;
	width:24px;
	height:24px;
	position:absolute;
	left:50%;
	top:50%;
	transform:translate(-50%,-50%);
	    border: 1px solid #51f1a0;
	        border-radius: 12px;
}
.cart-box-select .checked,.cart-box-check-wrap .checked{
  	background:url(../assets/checked.svg) no-repeat center;
}

.cart-box-select .unchecked,.cart-box-check-wrap .unchecked{
 	background:url(../assets/unchecked.svg) no-repeat center;
}
.cart-box-select .checked,.cart-box-select .unchecked{
	background-size:26px 26px;
}
.cart-box-check-wrap .checked,.cart-box-check-wrap .unchecked{
	background-size:24px 24px;
}

.cart-box-check-wrap{
	height:36px;    
	line-height:36px;
	border-bottom: 1px #ddd solid;
}
.cart-box-check-wrap i{
	display:inline-block;
	width:24px;
	height:24px;
	vertical-align: middle;
	margin-left:10px;
	margin-right:10px;
	border: 1px solid #51f1a0;
	border-radius: 12px;
}

.cart-box-img{
  width: 58px;
  height: 58px;
  display:block;
  border: 1px solid #ddd;
}

.cart-box-des{
	padding:0 10px;
	-webkit-box-orient:vertical;
	-webkit-box-pack:center;
	flex:1;
}

.cart-box-des h5{
    overflow: hidden;
    text-overflow: ellipsis;
    display: -webkit-box;
    -webkit-box-orient: vertical;
    line-height: 20px;
    -webkit-line-clamp: 2;
}

.cart-box-des-a{
	display: inline-block;
	border: 1px solid #ddd;
	text-align: center;
	background-color: #FFF;
	color: #E1E1E1;
	font-style: normal;
	font-size: 16px;
	vertical-align: top;
	font-weight: 500;
	width: 23px;
	-webkit-user-select: none;
	height: 23px;
	line-height: 23px;
}

.cart-box-des-number{
		height: 23px;
		width:28px;
		dispaly:inline-block;
		text-align:center;
		border:1px solid #ddd;
}

.cart-box-option{
  width: 60px;
  -webkit-box-orient: vertical;
  font-size: 11px;
  text-align: right;
  white-space: nowrap;
  word-break: break-all;
  text-overflow: ellipsis;
  overflow: hidden;
}

.cart-box-option-price,.cart-box-option-count{
	height:18px;
	padding-right:15px;
}
.cart-box-option-del{
	height: 27px;
    background:url(data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAB4AAAAiCAYAAABIiGl0AAAAGXRFWHRTb2Z0d2FyZQBBZG9iZSBJbWFnZVJlYWR5ccllPAAAAZFJREFUeNrsV7GKwkAQfRuiWEQDAYPaWOQTBMEqnVZ+oB+RRltrsbUTFEu1UERQQjS6lwkId2STy55B7448CCHzJrydmZ1lh3HOIcLpdOKz2QyHwwFxPnHQdR3tdhulUonF+agi4/V65cPhEK7rolqtgjEmJbxYLMLF2rYNKeHtdksRo9frodlsyqkGGI/HfLPZJPooIuPtdgvfmqbhJ1BVFff7XV74FVAvl0tk5/i+/6g1RPx3eEQb9y9lhA0GA/7qaLvdLtROpyOs8W63g2ma0js6DQzDAJPt0azwts31RXi1WvHRaMTpAMlKYDKZcHoSD5Dz+Qxq/CzTv9/vf3Gqk0A9GayeBz0u6vuQk+n51MLr9RqO4+B4PEY4shFHPn9rV+fCuXAunAv/L+FgKkC9XkehUIhwZCOOfFLfMtM61mo11u/3hVylUonl8hq/f5L4/FEsFsP3fD6nuj198aJJhMbcRqORLGxZFpbLJabTaWaRBQGg1WpF7MILPQ3lnuc9n85gRiqXy1AUJTKOfAgwAJNbtMuB0NV1AAAAAElFTkSuQmCC) 100% 5px no-repeat;
    background-size: 16px 18px;
    background-position: 28px 5px;
}
</style>

