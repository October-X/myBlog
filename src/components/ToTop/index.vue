<template>
    <div v-show="show" class="to-top-contianer" @click="handleClick">
        Top
    </div>
</template>

<script>

export default {
    data() {
        return {
            show: false,
        }
    },
    created() {
        this.$bus.$on('mainScroll', this.handleScroll);
    },
    destroyed() {
        this.$bus.$off('mainScroll', this.handleScroll);
    },
    methods: {
        handleScroll(dom) {
            if (!dom) {
                this.show = false;
                return;
            }
            this.show = dom.scrollTop >= 500;
        },
        handleClick(){
            this.$bus.$emit('setMainScoll',0)
        }
    },
}
</script>

<style scoped lang="less">
@import '~@/styles/var.less';

.to-top-contianer {
    position: fixed;
    right: 50px;
    bottom: 50px;
    background-color: @primary;
    width: 50px;
    height: 50px;
    border-radius: 50%;
    line-height: 50px;
    text-align: center;
    color: white;
    cursor: pointer;
}
</style>