/**
 * Created by xuanfengchen on 16-8-30.
 */
function l(){
    var seeHeight = document.documentElement.clientHeight;
    var imgDom = document.querySelectorAll('img[alt=打开必应主页]');
    var imgNum = imgDom.length;
    var count = 0;
   return function(){
       var scrollTop = document.documentElement.scrollTop || document.body.scrollTop;
       var seeTop = seeHeight + scrollTop;
       if(scrollTop > 0 && imgNum > 0){
           for(var i = count;i<imgNum;i++){
               if(imgDom[i].offsetTop < seeTop){
                   if(imgDom[i].getAttribute("src") == ""){
                       var img = new Image();
                       img.src = imgDom[i].getAttribute("load-img");
                       (function (img) {
                           if (img.complete == true || img.onload == true) imgDom[i].src = imgDom[i].getAttribute("load-img");
                       })(img);
                   }
               }
               if(imgDom[i].offsetTop > seeTop){
                   count = i;
                   break;
               }
           }
       }
   }
}
