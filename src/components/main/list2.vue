<template>
  <div class="list2">
    {{msg}}
  </div>
</template>

<script>
  export default {
    name: 'List2',
    data () {
      return {
        msg: '这里是列表二  list2'
      }
    },
    mounted(){

    }
  }
</script>

<style>
  .list2 {
    width: 100%;
    height: 100%;
  }
</style>
