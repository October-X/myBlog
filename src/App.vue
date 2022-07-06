<template>
  <div id="app" class="app-container">
    <Layout>
      <!-- 调用的插槽 -->
      <template #left>
        <div class="aside">
          <SiteAside></SiteAside>
        </div>
      </template>
      <template #default>
        <RouterView></RouterView>
      </template>
    </Layout>
    <ToTop></ToTop>
  </div>
</template>

<script>
import Layout from './components/Layout'
import SiteAside from './components/SiteAside'
import ToTop from './components/ToTop'

// 异步组件，这样写，是可以当正常组件引用的。
// const AsynvComponent = () => {
//   return new Promise((resolve)=>{
//     setTimeout(async()=>{
//       const Mycomp = await import('./组件')
//       resolve(Mycomp);
//     })
//   })
// }

export default {
  components: {
    Layout,
    SiteAside,
    ToTop,
  }
}
</script>
<style scoped lang="less">
@import '~@/styles/var.less';
@import '~@/styles/global.less';
@import '~@/styles/mixin.less';

.app-container {
  .self-fill(fixed);

  .aside {
    width: 250px;
    height: 100%;
  }
}
</style>