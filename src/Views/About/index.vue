<template>
  <div class="about-container">
    <iframe  class="about-content" :src="data" frameborder="0" v-loading="srcLoaded" @load="srcLoaded = true"></iframe>
  </div>
</template>

<script>
import { mapState } from 'vuex';
export default {
  data(){
    return{
      srcLoaded:false,
    }
  },
  computed: {
    ...mapState('about',['loading','data'])
  },
  created(){
    this.$store.dispatch('about/fetchAbout')
  }
}
</script>

<style lang="less" scoped>

.about-container{
  width: 100%;
  height: 100%;
  overflow: hidden;
  position: relative;
}
.about-content{
  width: 100%;
  height: 100%;
}

</style>