<template>
  <div id="app" class="app-container">
    <Layout>
      <template #left>
        <div class="aside">
          <SiteAside></SiteAside>
        </div>
      </template>
      <template #default>
        <RouterView></RouterView>
      </template>
    </Layout>
  </div>
</template>

<script>
import Layout from './components/Layout'
import SiteAside from './components/SiteAside'
export default {
  components: {
    Layout,
    SiteAside,
  }
}
</script>
<style scoped lang="less">
@import '~@/styles/var.less';
@import '~@/styles/global.less';
@import '~@/styles/mixin.less';

.app-container {
  .self-fill(fixed);
  .aside{
    width: 250px;
    height: 100%;
  }
}
</style>