<template>
    <div class="test-container">
        <SiteAside></SiteAside>
    </div>
</template>

<script>
import SiteAside from './'
import "@/styles/global.less";
export default {
    components: {
        SiteAside,
    }
}
</script>

<style>
.test-container {
    width: 250px;
    height: 680px;
    border: 2px solid;
    margin: 0 auto;
    background-color: black;
}
</style>