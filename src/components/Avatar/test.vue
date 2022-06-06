<template>
    <div id="app">
        <Avatar url="https://img2.baidu.com/it/u=4244269751,4000533845&fm=253&fmt=auto&app=138&f=JPEG?w=500&h=500"
            :size="100"></Avatar>
    </div>
</template>
<script>
import Avatar from './';
export default {
    name: "App", // 如果组件没有在注册的时候指定名字，则使用该名字
    components: {
        Avatar, 
    },
}
</script>
<style scoped>
    
</style>