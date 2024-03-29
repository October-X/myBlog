<template>
    <div class="carousel-item-container" ref="container" @mousemove="handleMouseMove" @mouseleave="handleMouseLeave">
        <div class="carousel-img" ref="image" :style="imagePosition">
            <ImageLoader @load="this.showText" :src="carousel.bigImg" :placeholder="carousel.midImg"></ImageLoader>
        </div>
        <div class="carousel-title" ref="title">
            {{ carousel.title }}
        </div>
        <div class="carousel-desc" ref="desc">
            {{ carousel.description }}
        </div>
    </div>
</template>

<script>
import ImageLoader from '@/components/ImageLoader'
export default {
    props: ['carousel'],
    components: {
        ImageLoader,
    },
    data() {
        return {
            titleWidth: 0,
            descWidth: 0,
            containerSize: null, // 外层容器的尺寸
            innerSize: null, // 里层图片的尺寸
            mouseX: 0, // 鼠标的横坐标
            mouseY: 0, // 鼠标的纵坐标
        }
    },
    mounted() {
        this.titleWidth = this.$refs.title.clientWidth;
        this.descWidth = this.$refs.desc.clientWidth;
        this.setSize();
        this.mouseX = this.center.x;
        this.mouseY = this.center.y;
        window.addEventListener("resize", this.setSize);
    },
    destroyed() {
        window.removeEventListener("resize", this.setSize);
    },
    computed: {
        //得到图片的左边
        imagePosition() {
            if (!this.innerSize || !this.containerSize) {
                return;
            }
            const extraWidth = this.innerSize.width - this.containerSize.width
            const extraHeight = this.innerSize.height - this.containerSize.height
            const left = -(extraWidth / this.innerSize.width) * this.mouseX;
            const top = -(extraHeight / this.innerSize.height) * this.mouseY;
            return {
                transform: `translate(${left}px,${top}px)`,
            }
        },
        center() {
            return {
                x: this.innerSize.width / 2,
                y: this.innerSize.height / 2
            }
        },
    },
    methods: {
        //显示文字的方法
        showText() {
            this.$refs.title.style.opacity = 1
            this.$refs.title.style.width = 0;
            //强制渲染，reflow
            this.$refs.title.clientWidth;
            this.$refs.title.style.transition = '1s'
            this.$refs.title.style.width = this.titleWidth + 'px';

            this.$refs.desc.style.opacity = 1
            this.$refs.desc.style.width = 0;
            //强制渲染，reflow
            this.$refs.desc.clientWidth;
            this.$refs.desc.style.transition = '2s 1s'
            this.$refs.desc.style.width = this.descWidth + 'px';
        },
        setSize() {
            this.containerSize = { width: this.$refs.container.clientWidth, height: this.$refs.container.clientHeight }
            this.innerSize = { width: this.$refs.image.clientWidth, height: this.$refs.image.clientHeight }
        },
        handleMouseMove(e) {
            const rect = this.$refs.container.getBoundingClientRect();
            this.mouseX = e.clientX - rect.left;
            this.mouseY = e.clientY - rect.top;
        },
        handleMouseLeave() {
            this.mouseX = this.center.x;
            this.mouseY = this.center.y;
        }
    }
}
</script>

<style scoped lang="less">
@import '~@/styles/var.less';

.carousel-item-container {
    background: @dark;
    width: 100%;
    height: 100%;
    color: #fff;
    position: relative;
    overflow: hidden;

    .carousel-img {
        position: absolute;
        width: 110%;
        height: 110%;
        transition: all linear .3s;
    }

    .carousel-title,
    .carousel-desc {
        position: absolute;
        letter-spacing: 10px;
        white-space: nowrap;
        overflow: hidden;
        left: 25px;
        opacity: 0;
        text-shadow: 1px 0 0 rgba(0, 0, 0, .5), -1px 0 0 rgba(0, 0, 0, .5),
            0 1px 0 rgba(0, 0, 0, .5), 0 -1px 0 rgba(0, 0, 0, .5);
    }

    .carousel-title {
        top: calc(50% - 40px);
        font-size: 2em;
    }

    .carousel-desc {
        top: calc(50% + 20px);
        font-size: 1.2em;
    }
}
</style>