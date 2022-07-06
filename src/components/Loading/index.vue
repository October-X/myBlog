<template>
    <div class="loading-container">
        <img :src="loadingUrl" alt="">
        <!-- <img src="@/assets/loading.svg" alt=""> -->
        <!-- 这个路径如果使用动态路径，就不会进行转换，导致网页中找不到该路径。所以可以使用导入的方式 -->
    </div>
</template>

<script>
import loadingUrl from "@/assets/loading.svg"
export default {
    data(){
        return{
            loadingUrl,
        }
    }
}
</script>

<style scoped lang="less">
@import '~@/styles/mixin.less';

.loading-container {
    .self-center ();
}
</style>