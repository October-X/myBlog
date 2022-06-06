<template>
    <div class="test-container">
        <Layout>
        <!-- <template #left class="left">
            <div>
                左边栏区域，宽度适应内容，溢出隐藏
            </div>
        </template> -->
        <div class="main">
            主区域，宽度占满剩余空间，溢出隐藏
        </div>
        <template #right class="right">
            <div>
                右边栏区域，宽度适应内容，溢出隐藏
            </div>
        </template>
    </Layout>
    </div>
</template>

<script>
import Layout from './'
export default {
    components: {
        Layout,
    }
}
</script>

<style scoped>
    .test-container {
        width: 1000px;
        height: 600px;
        margin:0 auto;
        background-color:#ccc;
    }
    .left{
        width: 200px;
        height: 100%;
        background-color:rgb(129, 228, 162);
    }
    .main{
        width: 100%;
        height: 100%;
        background-color:pink;
    }
    .right{
        width: 200px;
        height: 100%;
        background-color:lightblue;
    }
</style>