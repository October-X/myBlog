// 类似于图片懒加载
<template>
    <div class="image-loader-container">
        <img :src="placeholder" class="placeholder" v-if="!everythingDone">
        <img :src="src" alt="" :style="{ opacity: originalOpacity, transition: `${duration}s` }" @load="handleLoad">
    </div>
</template>

<script>
export default {
    props: {
        src: {
            type: String,
            required: true,
        },
        placeholder: {
            type: String,
            required: true,
        },
        duration: {
            type: Number,
            default: 0.5,
        }
    },
    data() {
        return {
            originLoaded: false, //  原图是否加载完成
            everythingDone: false, // 是否一切都尘埃落定了
        }
    },
    computed: {
        originalOpacity() {
            return this.originLoaded ? 1:0
        }
    },
    methods: {
        handleLoad(){
            this.originLoaded = true;
            setTimeout(() => {
                this.everythingDone = true;
                this.$emit('load');
            },this.duration)
        }
    }
}
</script>

<style scoped lang="less">
@import '~@/styles/mixin.less';

.image-loader-container {
    width: 100%;
    height: 100%;
    position: relative;
    overflow: hidden;

    img {
        .self-fill();
        object-fit: center;
    }

    .placeholder {
        filter: blur(2vw);
    }
}
</style>