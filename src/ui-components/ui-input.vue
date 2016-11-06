<template>
  <div class="ui-input-box">
    <input type="text" class="input-box-text" v-model="textValue" v-on:change.stop="changeval" v-bind:placeholder="placeholder" />
    <a class="input-box-clear" v-if="textValue" v-on:click.stop="clearText">
        <span></span>
    </a>
  </div>
</template>

<script>
export default {
  props: ['textValue','placeholder','changeEventName'],
  methods:{
     changeval:function(){
       this.$dispatch(this.changeEventName, this.textValue);
     },
     clearText:function(){
        this.textValue = "";
     }
  }
}
</script>

<style scoped>
.ui-input-box{
    position: relative;
}

.input-box-text{
    border:1px #ccc solid;
    height:35px;
    width:100%;
    border-radius: 6px;
    padding-left:3px;
}

.input-box-clear{
    top: 10px;
    bottom: auto;
    right: 5px;
    left: auto;
    display: inline;
    position: absolute;
    z-index: 10;
    top: 0!important;
    right: 0!important;
    width: 30px;
    height: 100%;
}
.input-box-clear:hover{
    transition: color .2s linear;
}
.input-box-clear span {
    position: absolute;
    width: 16px;
    height: 16px;
    border-radius: 30px;
    top: 50%!important;
    left: 50%;
    margin: -8px 0 0 -8px;
    background: #b1b1b1;
}

.input-box-clear span:before , .input-box-clear span:after{
    position: absolute;
    content: "";
    top: 4px;
    left: 7px;
    width: 2px;
    height: 8px;
    background: #fff;
    transform: rotate(-45deg);
}

.input-box-clear span:before{
    transform: rotate(45deg);
}
</style>