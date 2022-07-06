<template>
  <Layout>
    <BlogList></BlogList>
    <template #right>
      <BlogCategory></BlogCategory>
    </template>
  </Layout>
</template>

<script>
import Layout from '@/components/Layout';
import BlogList from './components/BlogList.vue';
import BlogCategory from '@/Views/Blog/components/BlogCategory.vue';
// import BlogCategory from './components/BlogCategory.vue'
export default {
  components: {
    Layout,
    BlogList,
    BlogCategory,
  },
}
</script>

<style>
</style>