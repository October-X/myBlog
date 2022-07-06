<template>
  <div class="blog-category-container" v-loading="isLoading">
    <div v-if="!isLoading">
      <h2>文章分类</h2>
      <RightList :list="list" @select="handleSelect" ></RightList>
    </div>
  </div>
</template>

<script>
import RightList from './RightList.vue'
import { getBlogTypes } from '@/api/blog.js'
import fetchData from '@/mixins/fetchData'
export default {
  mixins: [fetchData([])],
  components: {
    RightList,
  },
  computed: {
    categoryId() {
      return +this.$route.params.categoryId || -1
    },
    list() {
      const totalArticleCount = this.data.reduce((a, b) => a + b.articleCount, 0)
      const result = [
        { name: '全部', id: -1, articleCount: totalArticleCount, },
        ...this.data,
      ]
      return result.map(item => ({
        ...item,
        isSelected: item.id === this.categoryId,
        aside: `${item.articleCount}篇`
      }))
    }
  },
  methods: {
    async fetchData() {
      return await getBlogTypes()
    },
    handleSelect(item) {
      const query = {
        page: 1,
        limit: this.$route.query.limit
      }
      if (item.id === -1) {
        // /blog?page=${newPage}&limit=${this.routeInfo.limit}
        this.$router.push({
          name: "Blog",
          query,
        })
      } else {
        this.$router.push({
          name: "CategoryBlog",
          params: {
            categoryId: item.id
          },
          query,
        })
      }
    }
  }
}
</script>

<style scoped lang="less">
.blog-category-container {
  width: 300px;
  box-sizing: border-box;
  padding: 20px;
  position: relative;
  height: 100%;
  overflow-y: auto;

  h2 {
    font-weight: border;
    letter-spacing: 2px;
    font-size: 1em;
    margin: 0;
  }
}
</style>