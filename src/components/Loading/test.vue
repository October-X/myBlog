<template>
    <div class="test-container" style="position:relative;">
            <Loading  v-show="isLoading"></Loading>
        <button @click="isLoading = !isLoading">切换显示隐藏</button>
    </div>
</template>

<script>
import Loading from './'
export default {
    components: {
        Loading,
    },
    data() {
        return {
            isLoading: true,
        }
    }
}
</script>

<style>
</style>