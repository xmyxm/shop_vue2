<template>
  <div class="test-box">
      <div class="test-box-header"> UI库 </div>
      <div class="test-box-item">
          <div class="title">switch切换</div>
          <div class="button"><uiswitch checked="true"></uiswitch></div>
      </div>

      <div class="test-box-item">
          <div class="title">数字插件</div>
          <div class="button"><uinum num-value="1" unit="份" min-value="1" max-value="10" change-event-name="child-ui-num"></uinum></div>
      </div>

      <div class="test-box-item">
          <div class="title">input输入框</div>
          <div class="button"><uiinput text-value="" change-event-name="child-ui-input" placeholder="name" ></uiinput></div>
      </div>

      <div class="test-box-item">
          <div class="title">tabs切换</div>
          <div class="button"><uitabs></uitabs></div>
      </div>
  </div>
</template>

<script>
import uiswitch from '../ui-components/ui-switch'
import uinum from '../ui-components/ui-num'
import uiinput from '../ui-components/ui-input'
import uitabs from '../ui-components/ui-tabs'

export default {
  data () {  
    return {
        title:'趁青春还在',
    	price:29,
		count:967,
		color:'藏蓝',
		buy:'<input type="button" value="购买" />',
		comments:[{name:'小五',content:'很赞！'},{name:'薛之谦',content:'神经病啊！'}]
    }
  },
  components: { uiswitch,uinum,uiinput,uitabs },
  	watch:{
  		'count':function (){console.log(this.count);}
  	},
	methods:{
		btnBuy:function(e){this.count--;}
	},
	events: {
        'child-ui-switch': function (msg) {
          // 事件回调内的 `this` 自动绑定到注册它的实例上
          // 如果同时显示多个相同子组件，需要在父组件中switch分离传参判断不同操作
          console.log('滑动按钮'+msg);
        },
        'child-ui-num':function(msg){
            console.log('数字插件'+msg);
        },
        'child-ui-input':function(msg){
            console.log('input插件'+msg);
        }
    }
}
</script>

<style scoped>
.test-box-item{
    padding:5px;
    border-bottom:1px solid #bcbcbc;
    display:flex;
}
.test-box-header{
    padding:5px;
    border-bottom:1px solid #bcbcbc;
    text-align:center;
}
.test-box-item div{
 display:inline-block;
}
.test-box-item .title{
width:100px;
border-right:1px solid #bfb8b8;
}

.test-box-item .button{
flex:1;
padding-left:100px;
}
</style>