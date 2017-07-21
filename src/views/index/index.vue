<template>
  <div class="home">
    <p>这里是首页</p>
    <a href="../main/main.html">跳转到内容页 </a>
  </div>
</template>

<script>
  import Vue from 'vue';

  export default {
    name: 'home',
    data () {
      return {
        msg: '数据信息data显示出来'
      }
    },
    mounted(){

    }
  }
</script>

<style>
  .home {
    color: #000;
    width: 100%;
    height: 100%;
  }
</style>
