<template>
  <div id="app">
    <Pager :total = 'total' :current="current" @pageChange = 'handlePageChange'></Pager>
  </div>
</template>
<script>
import Pager from './';
export default {
  name: "App", // 如果组件没有在注册的时候指定名字，则使用该名字
  components: {
    Pager,
  },
  data(){
    return{
      current:1,
      total:320,
    }
  },
  methods: {
    handlePageChange(newPage){
      this.current = newPage
    }
  }
}
</script>
<style scoped>
  
</style>