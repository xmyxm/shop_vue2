<template>
  <div class="home-box">
  	<header-block title="Home"> </header-block>
  	<div>
  	   <template v-for="item in imglist">
		      <img style="width:100%;height:100%;display:block;overflow:hidden;" v-bind:src="item.src">
	     </template>
  	</div>
  	<div class="category-box">
  	   <ul>
            <li v-for="item in categorylist">
                <span v-bind:class="['category-span-box',item.clasName]"></span>
                <span v-text="item.title"></span>
            </li>
  	   </ul>
  	</div>
    <div class="home-product-box">
        <ul>
            <li v-for="item in productlist" v-on:click="clickitem" v-bind:data-id="item.id" >
                <img v-bind:src="item.imgsrc" class="home-box-product-img"/>
                <div class="home-product-content">
                    <h3 v-text="item.title" class="home-product-h3"></h3>
                    <h4 v-text="item.standard" class="home-product-h4"></h4>
                    <div class="home-product-option">
                        <span class="home-product-price">￥{{item.favorable_price}}</span>
                        <del>￥{{item.price}}</del>
                        <span class="home-product-addCart"></span>
                    </div>
                </div>
            </li>
        </ul>
    </div>
  </div>
</template>

<script>
import HeaderBlock from './HeaderBlock'
import {mapMutations} from 'vuex'
export default {
  data () {
    return {
      imglist: [{src:"https://gma.alicdn.com/simba/img/TB14ab1KpXXXXclXFXXSutbFXXX.jpg_q50.jpg",name:"新品"}],
      categorylist:[{clasName:'category-icon-hot',title:'热门'},
      {clasName:'category-icon-specialty',title:'特产'},
      {clasName:'category-icon-drinks',title:'酒水'},
      {clasName:'category-icon-tea',title:'茶叶'},
      {clasName:'category-icon-process',title:'手工'},
      {clasName:'category-icon-fruit',title:'果蔬'}],
      productlist:[{id:321251,imgsrc:'http://imgws1.fruitday.com/images/2016-06-21/bfafa417de533a932a92b5e7987a9912.jpg',title:'巨无霸-佳沛新西兰阳光金奇异果',standard:'规格:800g',favorable_price:78,price:'88'},
      {id:554215,imgsrc:'http://imgws4.fruitday.com/images/product_pic/13657/1/1-180x180-13657-SD3SKTAD.jpg',title:'美国优选有机绿牛油果',standard:'规格:300-350g',favorable_price:72,price:'79'},
      {id:741852,imgsrc:'http://imgws4.fruitday.com/images/2015-07-08/fa213aef7eca1f9dc66e44109c4c0325.jpg',title:'山东威海大樱桃',standard:'规格:500g',favorable_price:129,price:'159'},
      {id:125486,imgsrc:'http://imgws2.fruitday.com/images/product_pic/12434/1/1-180x180-12434-1U6SF4U1.jpg',title:'新疆无核白葡萄',standard:'规格:2斤',favorable_price:29.9,price:'35.8'},
      {id:986578,imgsrc:'http://imgws9.fruitday.com/images/product_pic/11693/1/1-180x180-11693-9TY8CB8C.jpg',title:'南非葡萄柚(大)',standard:'规格:6个',favorable_price:58,price:'68'}
      ]
    }
  },
  methods:{
     ...mapMutations(['UPDATEUSER','UPDATECITY','UPDATEPRODUCT']),
     setProduct(id){
          var product = {
          "321251":{
                      title:'佳沛新西兰绿奇异果',
                      price:'￥49.90',
                      explain:'12个',
                      content:'即猕猴桃的别名。1904年由一位新西兰女校长在中国旅游时发现了猕猴桃，并将它带回了新西兰，从此开始了猕猴桃的移民生涯。因为它酷似新西兰的国鸟——奇异鸟，便由此得名奇异果。简要介绍生物分类俗称： 奇异果 门： 被子植物门 中文名称： 猕猴桃 ',
                      evaluationInfo:{good:'90%',general:'7%',bad:'3%'},
                      imgList:['http://img10.yiguoimg.com/e/items/2016/160510/9288694048596138_500.jpg',
                      'http://img09.yiguoimg.com/e/items/2016/160510/9288694048628906_500.jpg',
                      'http://img10.yiguoimg.com/e/items/2016/160510/9288694048661674_500.jpg'],
                      commentList:[{userName:"小明",content:'挺好的',time:'2016-10-09 15:11:19'},
                      {userName:"楚楚",content:'包装漂亮',time:'2016-10-09 15:11:19'},
                      {userName:"叶子欣",content:'味道好',time:'2016-10-09 15:11:19'}]
                    },
          "554215":{
                      title:'美国优选有机绿牛油果',
                      price:'￥79.90',
                      explain:'12个',
                      content:'牛油果（学名：Butyrospermum parkii Kotschy），落叶乔木，高10-15米，胸径达1-1.5米；树冠开展，分枝多而密，茎枝粗壮，多节瘤，常有弯曲现象；树皮厚，不规则开裂，具乳汁。叶长圆形，先端圆或钝，基部圆或钝，幼时上面被锈色柔毛，后两面均无毛，中脉在上面呈凹槽，下面浑圆且十分凸起，侧脉30对以上，相互平行，两面稍凸起，网脉细；叶柄圆形。花梗被锈色柔毛；花萼裂片披针形，外面被毛；花有香甜味，花冠裂片卵形，全缘。浆果球形，直径3-4厘米，可食，味如柿子；种子卵圆形，黄褐色，具光泽，疤痕侧生，长圆形。花期6月，果期10月。',
                      evaluationInfo:{good:'90%',general:'7%',bad:'3%'},
                      imgList:['http://img14.yiguoimg.com/e/items/2016/160921/9288697290072373_500.jpg',
                      'http://img09.yiguoimg.com/e/items/2016/160921/9288697290105141_500.jpg',
                      'http://img13.yiguoimg.com/e/items/2016/160921/9288697290137909_500.jpg'],
                      commentList:[{userName:"小明",content:'挺好的',time:'2016-10-09 15:11:19'},
                      {userName:"楚楚",content:'包装漂亮',time:'2016-10-09 15:11:19'},
                      {userName:"叶子欣",content:'味道好',time:'2016-10-09 15:11:19'}]
                    },
          "741852":{
                      title:'山东威海大樱桃',
                      price:'￥49.90',
                      explain:'12个',
                      content:'大樱桃是一种蔷薇科、李属 植物，我国北方落叶果树中继中国樱桃之后果实成熟最早的果树树种。中医药学认为，大樱桃具有调中补气，祛风湿的功能。农业专家称：积极发展大樱桃生产，有着广阔的前景。樱桃属于蔷薇科落叶乔木果树。',
                      evaluationInfo:{good:'90%',general:'7%',bad:'3%'},
                      imgList:['http://img10.yiguoimg.com/e/items/2016/160926/9288697373106490_500.jpg',
                      'http://img10.yiguoimg.com/e/items/2016/160926/9288697373139258_500.jpg',
                      'http://img13.yiguoimg.com/e/items/2016/160926/9288697373172026_500.jpg'],
                      commentList:[{userName:"小明",content:'挺好的',time:'2016-10-09 15:11:19'},
                      {userName:"楚楚",content:'包装漂亮',time:'2016-10-09 15:11:19'},
                      {userName:"叶子欣",content:'味道好',time:'2016-10-09 15:11:19'}]
                    },
          "125486":{
                      title:'新疆无核白葡萄',
                      price:'￥49.90',
                      explain:'12个',
                      content:'光叶白粉藤，草质藤本。枝细长，横切面为钝四角形，小枝纤细，均有条纹，通常茎、枝被白粉，干时不在节上脱离；卷须细长，2叉状，与叶对生',
                      evaluationInfo:{good:'90%',general:'7%',bad:'3%'},
                      imgList:['http://img14.yiguoimg.com/e/items/2016/160726/9288696004255994_500.jpg',
                      'http://img12.yiguoimg.com/e/items/2016/160726/9288696004190458_500.jpg',
                      'http://img12.yiguoimg.com/e/items/2016/160726/9288696004223226_500.jpg'],
                      commentList:[{userName:"小明",content:'挺好的',time:'2016-10-09 15:11:19'},
                      {userName:"楚楚",content:'包装漂亮',time:'2016-10-09 15:11:19'},
                      {userName:"叶子欣",content:'味道好',time:'2016-10-09 15:11:19'}]
                    },
          "986578":{
                      title:'南非葡萄柚(大)',
                      price:'￥49.90',
                      explain:'12个',
                      content:'葡萄柚是一种芸香科、柑橘属植物，学名：Citrus paradisi Macf. 小乔木，枝略披垂，无毛。叶形与质地与柚叶类似，但一般较小，翼叶也较狭且短，嫩叶的翼叶中脉被短细毛。总状花序，稀少或单花腋生；花萼无毛；花瓣比柚花的稍小。果扁圆至圆球形，比柚小，果皮也较薄，果顶有或无环圈，瓢囊12-15瓣，果心充实，绵质，果肉淡黄白或粉红色，柔嫩，多汁，爽口，略有香气，味偏酸，个别品种兼有苦及麻舌味；种子少或无，多胚。果期10-11月',
                      evaluationInfo:{good:'90%',general:'7%',bad:'3%'},
                      imgList:['http://img12.yiguoimg.com/e/items/2016/160830/9288696798421278_500.jpg',
                      'http://img09.yiguoimg.com/e/items/2016/160830/9288696798454046_500.jpg',
                      'http://img14.yiguoimg.com/e/items/2016/160830/9288696798486814_500.jpg'],
                      commentList:[{userName:"小明",content:'挺好的',time:'2016-10-09 15:11:19'},
                      {userName:"楚楚",content:'包装漂亮',time:'2016-10-09 15:11:19'},
                      {userName:"叶子欣",content:'味道好',time:'2016-10-09 15:11:19'}]
                    }
          }
          ;

        this.UPDATEPRODUCT(product[id]);
     },
     upsity(){
        const _city = {id:20000,name:'上海市'}
        this.UPDATECITY(_city) 
     },
     clickitem(e){
        console.log('测试');
        this.upsity()
        var _id = e.currentTarget.getAttribute("data-id");
        if(_id){
            this.setProduct(_id);
        }

        this.$router.push({ name: 'detail', params: { id: _id}});
     }
  },
  components: { HeaderBlock}
}
</script>

<style scoped>

.home-box{
  padding-bottom:63px;
}
h1 {
  color: #42b983;
}
.category-box{
  margin:10px 10px 0px 10px;
  background-color:white;
}
.category-box ul{
  display:flex;/*flex布局*/
  flex-direction:row;/*横向排列*/
  flex-wrap:wrap;/*换行*/
  justify-content:flex-start;/*设置对齐方式为两端对齐*/
}
.category-box ul li{
  margin-bottom: 10px;
  list-style-type:none;
  flex-shrink:0;/*当空间不足时，各项都不会等比例缩小*/
  flex-basis:33.333%;/*设置item所占用空间*/
}
.category-box span {
	display:block;
  text-align:center;
}
.category-icon-hot{
  background:url(../assets/hot_119x119.png) no-repeat center;
} 
.category-icon-specialty{
  background:url(../assets/specialty_119x119.png) no-repeat center;
} 
.category-icon-drinks{
  background:url(../assets/drinks_119x119.png) no-repeat center;
} 
.category-icon-tea{
  background:url(../assets/tea_119x119.png) no-repeat center;
} 
.category-icon-process{
  background:url(../assets/process_119x119.png) no-repeat center;
} 
.category-icon-fruit{
  background:url(../assets/fruit_119x119.png) no-repeat center;
} 
.category-span-box{
  width:48px;
  height:48px;
  margin:0px auto;
  border-radius:20px;
  background-size: 48px 48px;
}
.home-product-box{
margin:10px;
background-color:white;
}
.home-product-box ul li{
display:flex;
border-bottom:1px solid #ddd;
padding: 2px 0px;
}

.home-box-product-img{
    width:85px;
    height:85px;
    display:inline-block;
}
.home-product-content{
display:inline-block;
flex:1;
position:relative;
 padding-left: 5px;
}

.home-product-h3{
  height: 20px;
  font-size: 14px;
  color: #323232;
  font-weight: 500;
}

.home-product-h4{
  font-size: 12px;
  color: #a7a7a7;
  line-height: inherit;
  overflow: hidden;
  text-overflow: ellipsis;
  white-space: nowrap;/*不换行*/
}
.home-product-price{
  height: 25px;
  font-size:16px;
  color: #f6ab00;
}

.home-product-addCart{
  display:inline-block;
  width:24px;
  height:24px;
  background:url(../assets/addCart.svg) no-repeat center;
  position:absolute;
  bottom:0px;
  right: 15px;
  background-size: 24px;
}

.home-product-option{
    width:100%;
    bottom:0px;
    position:absolute;
}
.home-product-option del{
font-size:12px;
color:#a7a7a7;
}
</style>
