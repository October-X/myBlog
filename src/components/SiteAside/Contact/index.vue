<template>
    <ul class="contact-container">
        <li>
            <a :href="data.github">
                <div class="icon">
                    <Icon type="github"></Icon>
                </div>
                <span>{{data.githubName}}</span>
            </a>
        </li>
        <li>
            <a :href="`mailto:${data.qq}@qq.com`">
                <div class="icon">
                    <Icon type="mail"></Icon>
                </div>
                <span>{{`${data.qq}@qq.com`}}</span>
            </a>

        </li>
        <li>
            <a href="">
                <div class="icon">
                    <Icon type="qq"></Icon>
                </div>
                <span>{{data.qq}}</span>
            </a>
            <div class="pop">
                <img :src="data.qqQrCode"
                    alt="">
            </div>
        </li>
        <li>
            <a href="">
                <div class="icon">
                    <Icon type="weixin"></Icon>
                </div>
                <span>{{data.weixin}}</span>
            </a>
            <div class="pop">
                <img :src="data.weixinQrCode"
                    alt="">
            </div>
        </li>
    </ul>
</template>

<script>
import { mapState } from "vuex";
import Icon from '../../Icon'
export default {
    components: {
        Icon,
    },
    computed: {...mapState('setting',['data']),},
}
</script>

<style scoped lang="less">
@import '~@/styles/var.less';
@import '~@/styles/global.less';

.contact-container {
    list-style: none;
    padding: 20px;
    margin: 0;
    color: @dark;
    @itemHeight: 30px;

    li {
        position: relative;
        height: @itemHeight;
        line-height: @itemHeight;
        margin: 14px 0;
        a {
            display: flex;
            cursor: pointer;
            font-size:14px;
            height: @itemHeight;
            line-height: @itemHeight;
        }

        .icon {
            margin-right: 20px;
            font-size: 28px;
        }
        &:hover{
            .pop{
                transform: scaleY(1);
            }
        }

        .pop {
            position: absolute;
            top: -170px;
            left: 0;
            width: 170px;
            height: 170px;
            border-radius: 10px;
            background-color:white;
            transform: scaleY(0);
            display: flex;
            align-items: center;
            justify-content: center;
            transition:all .3s;
            transform-origin: center bottom;
            img {
                width: 150px;
                height: 150px;
            }
            &::after{
                content:'';
                position: absolute;
                bottom: -5px;
                background-color:inherit;
                width: 10px;
                height: 10px;
                transform:rotate(45deg);
            }
        }
    }

}
</style>