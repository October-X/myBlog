<template>
    <div class="blog-list-container" v-loading="isLoading" ref="mainContainer">
        <Empty v-if="data.rows.length === 0 && !isLoading"></Empty>
        <ul>
            <li v-for="item in data.rows" :key="item.id">
                <div class="thumb" v-if="item.thumb">
                    <router-link :to="{ name: 'BlogDetail', params: { id: item.id } }">
                        <img v-lazy="item.thumb" :alt="item.title" :title="item.title">
                    </router-link>
                </div>
                <div class="main">
                    <router-link :to="{ name: 'BlogDetail', params: { id: item.id } }">
                        <h2>{{ item.title }}</h2>
                    </router-link>
                    <div class="aside">
                        <span>日期：{{ formatDate(item.createDate) }}</span>
                        <span>浏览：{{ item.scanNumber }}</span>
                        <span>评论{{ item.commentNumber }}</span>
                        <RouterLink :to="{ name: 'CategoryBlog', params: { categoryId: item.category.id } }">
                            {{ item.category.name }}
                        </RouterLink>
                    </div>
                    <div class="desc">
                        {{ item.description }}
                    </div>
                </div>
            </li>
        </ul>
        <!-- 分页放到这里 -->
        <Pager v-if="data.total" :current="routeInfo.page" :total="data.total" :limit="routeInfo.limit"
            :visibleNumber="10" @pageChange="handlePageChange"></Pager>
    </div>
</template>
<script>
import { formatDate } from "@/utils"
import Pager from '@/components/Pager'
import fetchData from '@/mixins/fetchData'
import { getBlogs } from '@/api/blog.js'
import mainScroll from "@/mixins/mainScroll"
import Empty from '@/components/Empty'
export default {
    mixins: [fetchData({ total: 0, rows: [] }), mainScroll('mainContainer')],
    components: {
        Pager,
        Empty,
    },
    computed: {
        routeInfo() {
            const id = +this.$route.params.categoryId || -1
            const page = +this.$route.query.page || 1
            const limit = +this.$route.query.limit || 10
            return {
                categoryId: id,
                page,
                limit
            }
        }
    },
    watch: {
        //观察this.$route有没有变化,改变了就会调用函数
        async $route() {
            this.isLoading = true;
            //设置滚动高度为0
            this.$refs.mainContainer.scrollTop = 0;
            this.data = await this.fetchData();
            this.isLoading = false;
        }
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
    methods: {
        formatDate,
        async fetchData() {
            return await getBlogs(this.routeInfo.page, this.routeInfo.limit, this.routeInfo.categoryId)
        },
        // handleScroll(){
        //     //滚动条变化
        //     this.$bus.$emit('mainScroll',this.$refs.mainContainer)
        // },
        // handleSetMainScroll(top){
        //     this.$refs.mainContainer.scrollTop = top;
        // },
        handlePageChange(newPage) {
            //改变路由
            if (this.routeInfo.categoryId === -1) {
                // /blog?page=${newPage}&limit=${this.routeInfo.limit}
                this.$router.push({
                    name: "Blog",
                    query: {
                        page: newPage,
                        limit: this.routeInfo.limit
                    }
                })
            } else {
                // /blog/cate/${this.routeInfo.categoryId}?page=${newPage}&limit=${this.routeInfo.limit}
                this.$router.push({
                    name: "CategoryBlog",
                    params: {
                        categoryId: this.routeInfo.categoryId
                    },
                    query: {
                        page: newPage,
                        limit: this.routeInfo.limit
                    }
                })
            }
        },
    }
}
</script>

<style scoped lang="less">
@import "~@/styles/var.less";

.blog-list-container {
    line-height: 1.7;
    position: relative;
    padding: 20px;
    overflow-y: scroll;
    width: 100%;
    height: 100%;
    box-sizing: border-box;
    scroll-behavior: smooth;

    ul {
        list-style: none;
        margin: 0;
        padding: 0;
    }
}

li {
    display: flex;
    padding: 15px 0;
    border-bottom: 1px solid @gray;

    .thumb {
        flex: 0 0 auto;
        margin-right: 15px;

        img {
            display: block;
            max-width: 200px;
            border-radius: 5px;
        }
    }

    .main {
        flex: 1 1 auto;

        h2 {
            margin: 0;
        }
    }

    .aside {
        font-size: 12px;
        color: @gray;

        span {
            margin-right: 15px;
        }
    }

    .desc {
        margin: 15px 0;
        font-size: 14px;
    }
}
</style>
