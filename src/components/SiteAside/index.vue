<template>
    <div class="site-aside-container">
        <Avatar :url="data.avatar?data.avatar:'https://img0.baidu.com/it/u=1163738942,3423870633&fm=253&app=138&size=w931&n=0&f=JPEG&fmt=auto?sec=1656954000&t=74c425a40cacc07fbf0b77a5d31002cc'"
            :size="100"></Avatar>
        <h1 class="title">{{data.siteTitle}}</h1>
        <Menu />
        <Contact />
        <!--  -->
    </div>
</template>

<script>
import {mapState} from 'vuex'
import Avatar from "@/components/Avatar";
import Menu from "./Menu";
import Contact from "./Contact";
export default {
    components: {
        Avatar,
        Menu,
        Contact,
    },
    computed:{
        ...mapState('setting',['data'])
    }
}
</script>

<style scoped lang="less">
@import '~@/styles/var.less';
.site-aside-container {
    width: 100%;
    height: 100%;
    background: white;
    text-align: center;
    padding: 20px 0;
    // display:flex;
    // flex-direction: column;
    align-items: center;
    box-sizing: border-box;
    overflow-x: hidden;
    overflow-y: auto;
    border-right: 2px solid rgb(244, 244, 244);

    
    .avatar-container {
        margin:0 auto;
    }

    h1 {
        font-size: 28px;
        color: @primary;
    }

    .menu-container {
        margin: 20px 0;
    }
}
</style>