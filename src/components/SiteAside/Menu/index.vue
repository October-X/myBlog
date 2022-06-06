<template>
    <nav class="menu-container">
        <router-link :exact="item.exact" v-for="(item, i) in items" :key="i" :to="{name: item.name}" active-class="selected" exact-active-class="">
            <div class="icon">
                <Icon :type="item.icon"></Icon>
            </div>
            <span>{{ item.title }}</span>
        </router-link>
    </nav>
</template>
    
<script>
import Icon from '../../Icon';
export default {
    components: {
        Icon,
    },
    data() {
        return {
            items: [
                {
                    name: "Home",
                    title: "首页",
                    icon: "home",
                    exact:true,
                },
                {
                    name: "Blog",
                    title: "文章",
                    icon: "blog",
                    exact: false, // 激活状态是否要精确匹配
                },
                {
                    name: "About",
                    title: "关于我",
                    icon: "about",
                    exact:true,
                },
                {
                    name: "Project",
                    title: "项目&效果",
                    icon: "code",
                    exact:true,
                },
                {
                    name: "Message",
                    title: "留言板",
                    icon: "chat",
                    exact:true,
                },
            ],
        }
    },
}
</script>

<style scoped lang="less">
@import '~@/styles/var.less';
@import '~@/styles/global.less';

.menu-container {
    color: @gray;
    @height: 45px;
    margin: 24px 0;
    a {
        height: @height;
        padding: 0 50px;
        line-height: @height;
        display:flex;
        align-items: center;
        .icon {
            width: 24px;
            margin-right: 20px;
        }
        &.selected {
            background: darken(@words, 3%);//加深
            color: white;
        }
        &:hover {
            color: white;
        }
    }
}
</style>