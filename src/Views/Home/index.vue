<template>
  <div class="home-container" ref="container" @wheel="handleWheel" v-loading="loading">
    <!-- v-loading为自定义指令 -->
    <ul class="carousel-container" :style="{ marginTop, }" @transitionend="handletransitionend">
      <li v-for="item in data" :key="item.id">
        <CarouselItem :carousel="item"></CarouselItem>
      </li>
    </ul>
    <div v-show="index >= 1" class="icon arrow-up" @click="switchTo(index - 1)">
      <Icon type="arrowUp"></Icon>
    </div>
    <div v-show="index < data.length - 1" class="icon arrow-down" @click="switchTo(index + 1)">
      <Icon type="arrowDown"></Icon>
    </div>
    <ul class="indivator">
      <li v-for="(item, i) in data" :key="item.id" :class="{ active: index === i }" @click="switchTo(i)"></li>
    </ul>
  </div>
</template>

<script>
// import { getBanners } from "@/api/banner"
import CarouselItem from "./CarouselItem"
import Icon from "@/components/Icon"
import {mapState} from 'vuex'
// import fetchData from '@/mixins/fetchData.js'
export default {
  // mixins: [fetchData()],
  components: {
    CarouselItem,
    Icon,
  },
  data() {
    return {
      index: 0,//当前是第几张图片
      containerHeight: 0,//也是一张图片容器的高度
      switching: false,//是否正在切换中
    }
  },
  computed: {
    ...mapState('banner',['loading','data']),
    marginTop() {
      return -this.index * this.containerHeight + 'px'
    }
  },
  created() {
    this.$store.dispatch('banner/fetchBanner')
  },
  mounted() {
    this.containerHeight = this.$refs.container.clientHeight;
    window.addEventListener("resize", this.handleresize)
  },
  destroyed() {
    window.removeEventListener("resize", this.handleresize)
  },
  methods: {
    // async fetchData(){
    //   return await getBanners();
    // },
    switchTo(i) {
      this.index = i;
    },
    handleWheel(e) {
      if (this.switching) return;
      if (this.index > 0 && e.deltaY < 0) {
        this.switching = true;
        this.index--
      } else if (this.index < this.data.length - 1 && e.deltaY > 0) {
        this.switching = true;
        this.index++
      }
    },
    handletransitionend() {
      this.switching = false;
    },
    handleresize() {
      // console.log('change');
      this.containerHeight = this.$refs.container.clientHeight;
    }
  }
};
</script>

<style scoped lang="less">
@import '~@/styles/var.less';
@import '~@/styles/mixin.less';

.home-container {
  position: relative;
  overflow: hidden;
  width: 100%;
  height: 100%;
  background-color: @light;

  ul {
    margin: 0;
    list-style: none;
    padding: 0;
  }

  .icon {
    .self-center();
    font-size: 28px;
    color: @gray;
    @gap-top: 20px;
    transform: translateX(-50%);
    cursor: pointer;

    &.arrow-up {
      top: @gap-top;
      animation: jumpup 1s infinite;
    }

    &.arrow-down {
      bottom: @gap-top;
      top: auto;
      animation: jumpdown 1s infinite;
    }

    @jump: 5px;

    @keyframes jumpup {
      0% {
        transform: translate(-50%, @jump)
      }

      ;

      50% {
        transform: translate(-50%, -@jump)
      }

      ;

      100% {
        transform: translate(-50%, @jump)
      }
    }

    @keyframes jumpdown {
      0% {
        transform: translate(-50%, -@jump)
      }

      ;

      50% {
        transform: translate(-50%, @jump)
      }

      ;

      100% {
        transform: translate(-50%, -@jump)
      }
    }
  }

  .carousel-container {
    width: 100%;
    height: 100%;
    transition: all .3s;

    li {
      width: 100%;
      height: 100%;
    }
  }

  .indivator {
    position: absolute;
    top: 50%;
    right: 20px;
    transform: translateY(-50%);
    cursor: pointer;

    li {
      width: 7px;
      height: 7px;
      border-radius: 50%;
      border: 2px solid white;
      background-color: @words;
      margin: 10px;

      &.active {
        background-color: white;
      }
    }
  }
}
</style>
