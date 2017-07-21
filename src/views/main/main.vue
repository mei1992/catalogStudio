<template>
  <div class="content">
    这里是内容页 <br>
    <ul>
      <li>
        <router-link to="/list1">link to list1</router-link>
      </li>
      <li>
        <router-link to="/list2">link to list2</router-link>
      </li>
    </ul>
    <router-view></router-view>
  </div>

</template>

<script>
  export default {
    name: 'content',
    data () {
      return {
        msg: ''
      }
    },
    mounted(){

    }
  }
</script>

<style>
  .content {
    width: 100%;
    height: 100%;
  }
</style>
