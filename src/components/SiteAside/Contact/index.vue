<template>
    <ul class="contact-container">
        <li>
            <a href="https://github.com/October-X">
                <div class="icon">
                    <Icon type="github"></Icon>
                </div>
                <span>October-X</span>
            </a>
        </li>
        <li>
            <a href="mailto:2290512627@qq.com">
                <div class="icon">
                    <Icon type="mail"></Icon>
                </div>
                <span>2290512627@qq.com</span>
            </a>

        </li>
        <li>
            <a href="">
                <div class="icon">
                    <Icon type="qq"></Icon>
                </div>
                <span>2290512627</span>
            </a>
            <div class="pop">
                <img src="https://img2.baidu.com/it/u=4244269751,4000533845&fm=253&fmt=auto&app=138&f=JPEG?w=500&h=500"
                    alt="">
            </div>
        </li>
        <li>
            <a href="">
                <div class="icon">
                    <Icon type="weixin"></Icon>
                </div>
                <span>c2290512627</span>
            </a>
            <div class="pop">
                <img src="https://img2.baidu.com/it/u=4244269751,4000533845&fm=253&fmt=auto&app=138&f=JPEG?w=500&h=500"
                    alt="">
            </div>
        </li>
    </ul>
</template>

<script>
import Icon from '../../Icon'
export default {
    components: {
        Icon,
    }
}
</script>

<style scoped lang="less">
@import '~@/styles/var.less';
@import '~@/styles/global.less';

.contact-container {
    list-style: none;
    padding: 20px;
    margin: 0;
    color: @gray;
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