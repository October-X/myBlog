<template>
    <div class="blog-detail-container" v-if="blog.category">
        <!-- 加入v-if="blog.category"是防止存在报错，加载过程中可能不存在这个blog.category -->
        <h1>{{ blog.title }}</h1>
        <div class="aside">
            <span>日期: {{ formatDate(blog.createDate) }}</span>
            <span>浏览: {{ blog.scanNumber }}</span>
            <a href="#data-form-container">评论: {{ blog.commentNumber }}</a>
            <router-link :to="{
                name:'CategoryBlog',
                params:{
                    categotyId:blog.category.id
                }
            }">{{ blog.category.name }}</router-link>
        </div>
        <div class="markdown-body" v-html="blog.htmlContent">
        </div>
    </div>
</template>

<script>
import formatDate from '@/utils/formatDate'
import "highlight.js/styles/github.css";
import "@/styles/markdown.css";
export default {
    props: {
        blog: {
            type: Object,
            required: true,
        },
    },
    methods: {
        formatDate,
    }
}
</script>

<style scoped lang="less">
@import '~@/styles/var.less';

.aside {
    font-size: 12px;
    color: @gray;

    span,
    a {
        margin-right: 15px;
    }
}

.markdown-body {
    margin: 2em 0;
}
</style>