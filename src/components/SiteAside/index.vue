<template>
    <div class="site-aside-container">
        <Avatar url="https://img2.baidu.com/it/u=4244269751,4000533845&fm=253&fmt=auto&app=138&f=JPEG?w=500&h=500"
            :size="100"></Avatar>
        <h1 class="title">October</h1>
        <Menu />
        <Contact />
        <!--  -->
    </div>
</template>

<script>
import Avatar from "@/components/Avatar";
import Menu from "./Menu";
import Contact from "./Contact";
export default {
    components: {
        Avatar,
        Menu,
        Contact,
    }
}
</script>

<style scoped lang="less">
@import '~@/styles/var.less';
.site-aside-container {
    width: 100%;
    height: 100%;
    background: @dark;
    text-align: center;
    padding: 20px 0;
    // display:flex;
    // flex-direction: column;
    align-items: center;
    box-sizing: border-box;
    overflow-x: hidden;
    overflow-y: auto;

    .avatar-container {
        margin:0 auto;
    }

    h1 {
        font-size: 28px;
        color: white;
    }

    .menu-container {
        margin: 20px 0;
    }
}
</style>