<template>
    <div class="blog-toc-container" v-if="toc">
        <h2>目录</h2>
        <RightList :list="tocWithSelect" @select="handleSelect"></RightList>
    </div>
</template>

<script>
import RightList from './RightList'
import {debounce} from '@/utils'
export default {
    components: {
        RightList,
    },
    data() {
        return {
            activeAnchor: 'article-md-title-1'
        }
    },
    props: {
        toc: {
            type: Array
        }
    },
    methods: {
        handleSelect(item) {
            location.hash = item.anchor
        },
        //设置active为正确的值
        setSelect(scrollDom) {
            if(!scrollDom)return
            const peak = 200;
            for (const item of this.doms) {
                if(!item){
                    continue
                }
                const top = item.getBoundingClientRect().top

                if(top>=0 && top<=peak){
                    this.activeAnchor = item.id
                    return
                }else if(top>peak){
                    //说明还没有看到这里
                    return
                }else{
                    this.activeAnchor = item.id
                }
            }
        }
    },
    computed: {
        //toc中，添加isSelected属性
        tocWithSelect() {
            const getToc = (toc = []) => {
                return toc.map(t =>
                ({
                    ...t,
                    isSelected: t.anchor === this.activeAnchor,
                    children: getToc(t.children),
                })
                )
            }
            return getToc(this.toc)
        },
        //根据doc获取对应的元素数组
        doms() {
            let doms = [];
            const addTodoms = (toc = []) => {
                for (const item of toc) {
                    doms.push(document.getElementById(item.anchor))
                    if (item.children && item.children.length) {
                        addTodoms(item.children)
                    }
                }
                return doms
            }
            return addTodoms(this.toc)
        }
    },
    created(){
        this.setSelectDebounce = debounce(this.setSelect,50)
        this.$bus.$on('mainScroll',this.setSelectDebounce)
    },
    destroyed(){
        this.$bus.$off('mainScroll',this.setSelectDebounce)
    }
}
</script>

<style scoped lang="less">
.blog-toc-container {
    h2 {
        font-weight: bold;
        letter-spacing: 2px;
        font-size: 1em;
        margin: 0;
    }
}
</style>