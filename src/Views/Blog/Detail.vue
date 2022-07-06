<template>
    <div class="detail-container">
        <Layout>
            <!-- 有data才显示 -->
            <div ref="mainContainer" class="main-container" v-loading="isLoading">
                <BlogDetail :blog="data" :v-if="data"></BlogDetail>
                <BlogComment v-if="!isLoading"></BlogComment>
            </div>
            <template #right>
                <div class="right-container" v-loading="isLoading">
                    <BlogTOC :toc="data.toc" v-if="data"></BlogTOC>
                </div>
            </template>
        </Layout>

    </div>
</template>

<script>
import BlogComment from './components/BlogComment'
import BlogDetail from "./components/BlogDetail"
import BlogTOC from "./components/BlogTOC"
import fetchData from '@/mixins/fetchData'
import { getBlog } from '@/api/blog'
import { titleController } from '@/utils'
import Layout from '@/components/Layout'
import mainScroll from '@/mixins/mainScroll'
import { mapState } from 'vuex'
export default {
    mixins: [fetchData(), mainScroll('mainContainer')],//设置默认值为null
    components: {
        Layout,
        BlogDetail,
        BlogTOC,
        BlogComment
    },
    computed: {
        ...mapState('setting', { settingData: 'data' })
    },
    methods: {
        async fetchData() {
            let resp = await getBlog(this.$route.params.id);
            // resp = null;
            if (!resp) {
                //文章不存在
                // this.$router.push({name: 'NotFound'})
                this.$router.push('/404')
                return
            }
            titleController.setSiteTitle(resp.title)
            return resp
        },
        // handleScroll(){
        //     //滚动条变化
        //     this.$bus.$emit('mainScroll',this.$refs.mainContainer)
        // },
        // handleSetMainScroll(top){
        //     this.$refs.mainContainer.scrollTop = top;
        // },
    },
    // mounted(){
    //     this.$bus.$on('setMainScoll',this.handleSetMainScroll)
    //     this.$refs.mainContainer.addEventListener('scroll',this.handleScroll)
    // },
    // beforeDestroyed() {
    //     this.$bus.$emit('mainScroll');
    //     this.$bus.$off('setMainScoll',this.handleSetMainScroll)
    //     this.$refs.mainContainer.removeEventListener('scroll',this.handleScroll)
    // },
    updated() {
        const hash = location.hash;
        location.hash = ''
        setTimeout(() => {
            location.hash = hash
        }, 50)
    },
    destroyed() {
        const siteTitle = this.settingData.siteTitle
        siteTitle ? titleController.setSiteTitle(siteTitle) : siteTitle
    }
}
</script>

<style scoped lang="less">
.detail-container {
    height: 100%;

    .main-container {
        overflow-y: scroll;
        width: 100%;
        height: 100%;
        box-sizing: border-box;
        padding: 20px;
        position: relative;
        overflow-x: hidden;
        scroll-behavior: smooth;
    }

    .right-container {
        width: 300px;
        height: 100%;
        overflow-y: scroll;
        box-sizing: border-box;
        position: relative;
        padding: 20px;
    }
}
</style>