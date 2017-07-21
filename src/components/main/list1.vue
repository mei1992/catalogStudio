<template>
    <div class="list1">
        {{msg}}
    </div>
</template>

<script>
    export default {
        name: 'List1',
        data () {
            return {
                msg: '这里是列表一  list1'
            }
        },
        mounted(){

        }
    }
</script>

<style>
    .list1 {
        width: 100%;
        height: 100%;
    }
</style>
