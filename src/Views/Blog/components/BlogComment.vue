<template>
  <div class="blog-comment-container">
    <MessageArea title="评论列表" :subTitle="`(${data.total})`" :list="data.rows" :isListLoading="isLoading"
      @submit="handleSubmit" />
  </div>
</template>

<script>
import MessageArea from "@/components/MessageArea";
import fetchData from "@/mixins/fetchData.js";
import { getComments, postComment } from "@/api/blog.js";
import { debounce } from '@/utils';
export default {
  mixins: [fetchData({ total: 0, rows: [] })],
  components: {
    MessageArea,
  },
  data() {
    return {
      page: 1,
      limit: 10,
    };
  },
  computed: {
    hasMore() {
      return this.data.rows.length < this.data.total
    }
  },
  created() {
    this.setSelectDebounce = debounce(this.handleScroll, 50)
    this.$bus.$on('mainScroll', this.setSelectDebounce)
  },
  destroyed() {
    this.$bus.$off('mainaScroll', this.setSelectDebounce)
  },
  methods: {
    async fetchData() {
      return await getComments(this.$route.params.id, this.page, this.limit);
    },
    async fetchMore() {
      if (!this.hasMore) return
      this.isLoading = true;
      this.page++;
      const resp = await this.fetchData();
      this.data.total = resp.total;
      this.data.rows = this.data.rows.concat(resp.rows);
      this.isLoading = false;
    },
    async handleSubmit(formData, callback) {
      const resp = await postComment({
        blogId: this.$route.params.id,
        ...formData,
      });
      this.data.rows.unshift(resp);//将提交的内容加入数据中
      this.data.total++;
      callback("评论成功"); // 告诉子组件，我这边处理完了，你继续
    },
    async handleScroll(dom) {
      if (this.isLoading || !dom) {
        //正在加载
        return
      }
      const range = 100;//定义一个可接受的范围
      const dec = Math.abs((dom.scrollTop + dom.clientHeight) - dom.scrollHeight);
      if (dec <= range) {
        //到达了底部
        this.fetchMore()
      }
    }
  },
};
</script>

<style scoped lang="less">
.blog-comment-container {
  margin: 30px 0;
}
</style>
 