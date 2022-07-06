<template>
    <ul class="right-list-container">
        <li v-for="(item, i) in list" :key="i">
            <span :class="{ active: item.isSelected }" @click="handleClick(item)">{{ item.name }}</span>
            <span :v-if="item.aside" class="aside" :class="{ active: item.isSelected }" @click="handleClick(item)">{{item.aside}}</span>
            <!-- 显示当前组件 -->
            <RightList :list="item.children" @select="handleClick"></RightList>
        </li>
    </ul>
</template>

<script>
export default {
    name: 'RightList',
    props: {
        //[{name:xxx, isSelected:true, children:[{name:yyy, isSeleted:false, children...}]}]
        //这种情况我们要循环渲染
        list: {
            type: Array,
            default: () => [],//默认值是数组或者对象的时候我们要写成一个函数，主要是为了防止识别错误。
        }
    },
    methods: {
        handleClick(item) {
            if (!item.isSelected) {
                this.$emit('select', item)//抛出事件
            }
        }
    }
}
</script>

<style scoped lang="less">
@import '~@/styles/var.less';

.right-list-container {
    list-style-type: none;
    padding: 0;

    .right-list-container {
        margin-left: 1em;
    }

    li {
        min-height: 40px;
        line-height: 40px;
        cursor: pointer;

        .active {
            color: @warn;
            font-weight: bold;
        }
    }
    .aside{
        font-size: 12px;
        margin-left: 1em;
        color: @gray;
    }
}
</style>