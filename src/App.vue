<template>
  <div id="app">
      <router-view keep-alive></router-view>
      <div class="footer">
        <ul class="box-menu">
            <template v-for="(item,index) in itemlist" >
            <li v-bind:data-index="index" v-bind:data-url="item.url" v-on:click="clickitem">
                <span v-if="item.productNum" class="product-num-icon">{{item.productNum}}</span>
                <span v-bind:class="['span-icon-box',item.className]"></span>
                <span v-text="item.name" v-bind:class="item.select ? 'font-green':''"></span>
            </li>
          </template>
        </ul>
      </div>
  </div>
</template>

<script>
import { mapGetters,mapActions} from 'vuex'

export default {
  computed: mapGetters({
    itemlist: 'getFooterButton'
  }),
  methods:{
      clickitem:function(e){
        var itemindex = e.currentTarget.getAttribute("data-index");
        var itemurl = e.currentTarget.getAttribute("data-url");
        this.$router.push({ path: itemurl });
    }
  },
  ready(){
        console.log('ready进入APP' + new Date().getTime());
        //vue-resource 模块来异步加载数据
        //console.log(this.$http);
        this.$http.get('./src/test.json', {}, {
            headers: {
                "X-Requested-With": "XMLHttpRequest"
            },
            emulateJSON: true
        }).then(function(response) {
            var data = response.data;
            this.msg = data;
        }, function(response) {
            //console.log(response);
        });
  },
  created(){
    console.log('created进入APP'  + new Date().getTime());
  }
}
</script>

<style>
    html {
      height: 100%;
    }
    body {
      display: flex;
      align-items: center;
      justify-content: center;
      height: 100%;
    }

    body,div,ul,li,span,h1,h2,h3,h4,h5,input,img{
        padding:0px;
        margin:0px;
    }

body {
  background-color:#f7f2f2;
  color: #2c3e50;
  width:100%;
  height:100%;
  min-width: 300px;
  font-family: Helvetica, Arial, 'PingFang SC', 'Microsoft YaHei', 'WenQuanYi Micro Hei', 'tohoma,sans-serif';
}
#app{
width:100%;
height:100%;
}
body a {
  color: #42b983;
  text-decoration: none;
}

.footer{
  position: fixed;
  bottom: 0px;
  left: 0px;
  width: 100%;
  background-color:white;
}

.box-menu{
  padding:5px 10px 5px 10px;
  display:flex;/*flex布局*/
  flex-direction:row;/*横向排列*/
  flex-wrap:nowarp;/*不换行*/
  justify-content:space-between;/*设置对齐方式为两端对齐*/
}
.font-green{
  color:#11cd6e;
}
.box-menu li{
  display:inline;
  list-style-type:none;
  position: relative;
}

.box-menu li span{
  display:block;
}

.span-icon-box{
 width:32px;
 height:32px; 
 margin:0 auto;
}

.icon-house{
  background:url(./assets/house.svg) no-repeat center;
}

.icon-house-c{
  background:url(./assets/house-c.svg) no-repeat center;
}

.icon-sort{
  background:url(./assets/sort.svg) no-repeat center;
}

.icon-sort-c{
  background:url(./assets/sort-c.svg) no-repeat center;
}

.icon-car{
    background:url(./assets/car.svg) no-repeat center;
}

.icon-car-c{
    background:url(./assets/car-c.svg) no-repeat center;
}

.icon-user{
  background:url(./assets/user.svg) no-repeat center;
}

.icon-user-c{
  background:url(./assets/user-c.svg) no-repeat center;
}
.product-num-icon{
    display: inline-block;
    position: absolute;
    right: 0px;
    top: 0px;
    background: red;
    border-radius: 10px;
    font-size: 12px;
    height: 12px;
    padding: 2px 4px;
}
</style>
