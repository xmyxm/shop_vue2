<template>
  <div class="detail-box">
    <header-block title="Detail"> </header-block>
    <div class="detail-img">
      <ol class="detail-imgbox">
        <li v-for="(item,key) in productinfo.imgList">
            <img v-bind:src="item" />
        </li>
      </ol>
    </div>
    <div class="detail-buy">
      <div class="buy-title">{{productinfo.title}}</div>
      <div class="buy-count">
          <span>规格:</span>
          <span>{{productinfo.explain}}</span>
          <span class="buy-num">
          <uinum num-value="1" unit="份" min-value="1" max-value="10" change-event-name="child-ui-num"></uinum>
          </span>
      </div>
      <div class="user-buy">
          <span>{{productinfo.price}}</span>
          <span class="buy-card"><input type="button" class="buy-btn" value="加入购物车"/></span>
          <span class="buy-now"><input type="button" class="buy-btn" value="立即购买"/></span>
      </div>
    </div>
    <div class="detail-content">
        <uitabs v-bind:change-event-name="switchtabs" v-bind:tabs-data="tabsData"></uitabs>
        <div v-bind:class="tabStatus.introduceBox">
            {{productinfo.content}}
        </div>

        <div v-bind:class="tabStatus.commentBox">

          <div class="comment-item">
            <div class="header">
              <div class="icon">ser</div> 
            </div>
            <div class="comment">
                <div class="text">刚收到就吃了一个，不错，酸酸甜甜的</div>
                <div class="time">2016-10-10 14:14:25</div>
            </div>
          </div>

          <div class="comment-item">
            <div class="header">
                <div class="icon">东子</div>
            </div>
            <div class="comment">
                <div class="text">好吃！比金奇异果酸一点</div>
                <div class="time">2016-10-10 14:15:50</div>
            </div>
          </div>

          <div class="comment-item">
            <div class="header">
                <div class="icon">sun</div>
            </div>
            <div class="comment">
                <div class="text">个头大水份足、</div>
                <div class="time">2016-10-10 14:14:25</div>
            </div>
          </div>

          <div class="comment-item">
            <div class="header">
                <div class="icon">win</div>
            </div>
            <div class="comment">
                <div class="text">很新鲜</div>
                <div class="time">2016-10-10 14:14:25</div>
            </div>
          </div>


        </div>
    </div>

  </div>
</template>

<script>
import HeaderBlock from './HeaderBlock'
import uinum from '../ui-components/ui-detail-num'
import uitabs from '../ui-components/ui-detail-tabs'
import { mapGetters} from 'vuex'

export default {
  data () {
    return {
      tabsData:[{text:'详细信息'},{text:'用户评价'}],
      tabStatus:{commentBox:'dspnone',introduceBox:''}
    }
  },
  computed: mapGetters({
    citydata: 'getCity',productinfo:'getProduct'
  }),
  methods:{
      switchtabs(e){
         const i = e.target.getAttribute("data-index");
         if(i == 0){
            if(/dspnone/g.test(this.tabStatus.introduceBox)){
                this.tabStatus.introduceBox = "introduce-box";
                this.tabStatus.commentBox = "comment-box dspnone";
            }
         }else{
           if(/dspnone/g.test(this.tabStatus.commentBox)){
                  this.tabStatus.commentBox = "comment-box";
                  this.tabStatus.introduceBox = "introduce-box dspnone";
              }
         }
      }
  },
   mounted () {
   //console.log('mounted进入Home' + new Date().getTime());
    console.log('拿到参数ID' + this.$route.params.id);console.log(JSON.stringify(this.citydata));
   },
  components: {  HeaderBlock,uinum,uitabs }
}
</script>

<style scoped>
.detail-img{
  height:200px;
  width:100%;
  overflow: hidden;
}
.detail-imgbox{
  padding: 0px;
  margin:0px; 
  list-style: none;
  position: relative;
}
.detail-imgbox li{
  width:100%;
}
.detail-imgbox li img{
  width:100%;
}
.detail-buy .buy-count{
  height:30px;
  width:100%;
}
.detail-buy .buy-count span{
  display:inline-block;
}
.detail-buy .buy-num{
  position:absolute;
  right:10px;
}
.user-buy{
  padding:5px 0px;
}
.user-buy .buy-card{
    position:absolute;
    right:100px;
}
.user-buy .buy-now{
    position:absolute;
    right:10px;
}

.detail-buy .buy-title,.detail-buy .buy-count,.detail-buy .user-buy{
  padding-left:10px;
  padding-right:10px;
}
.detail-buy .buy-count{
  height:50px;
  line-height:50px;
}
.detail-buy .buy-title{
  height:30px;
  line-height:30px;
  color:16px;
}
.detail-buy .user-buy{
  height:30px;
  line-height:30px;
}
.buy-btn{
  color:#FFF;
  font-weight: 600;
  font-size: 16px;
  text-decoration: none;
  text-align: center;
  line-height: 30px;
  height: 30px;
  margin: 0;
  display: inline-block;
  padding:0px 10px;
  appearance: none;
  cursor: pointer;
  border: none;
  box-sizing: border-box;
  transition-property: all;
  transition-duration: .3s; 
  background-color: #FEAE1B;
  border-color: #FEAE1B;
  border-radius: 4px;
}
.comment-item{
  height:50px;
}
.comment-item .header{
  height:50px;
  line-height:50px;
  width:50px;
  display:inline-block;
  vertical-align:top;
  text-align: center;
}

.comment-item .header .icon{
  display:inline-block;
  height:40px;
  line-height:40px;
  width:40px;
  border-radius: 20px;
  background:#b0f3b0;
}

.comment-item .comment{
  height:50px;
  padding-left:10px;
  padding-right:10px;
  display:inline-block;
}

.comment-item .comment .text{
  padding:5px 0px;
  color:#323232;
}

.comment-item .comment .time{
  font-size:14px;
  color:#ccc;
}
.detail-content{
  position:relative;
}
.detail-content .introduce-box,.detail-content .comment-box{
  position:absolute;
  top:35px;
  left:0px;
  background:#f7f2f2;
  width:100%;
}

.detail-content .comment-box{
  
}
.dspnone{
  display:none;
}
</style>
