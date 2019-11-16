<template>
    <van-sticky>
    <header class="my_top header">
        <nav-top :title="'我的'" />
        <aside class="body">
            <div class="title">
                <div class="left">
                    <van-image
                            :src="require('../../../public/1.jpeg')"
                    />
                </div>
                <div class="right">
                    <h2>可爱的鸭 <van-icon name="records" @click="$router.push('/edit')"/></h2>
                    <p>推荐码: 1123 <span @click="$root.copy(1123)">复制</span></p>
                </div>
            </div>
            <footer>
                我的保证金: 10000元
            </footer>
        </aside>
    </header>
    </van-sticky>
</template>

<script>
    import navTop from '../../components/myNavTop'
    export default {
        name: "header",
        components:{
            navTop,
        },
    }
</script>

<style scoped lang="stylus">
.my_top
        background #fff
    .body
        color #fff
        background #ff0032
        padding 41px 0 0
        position relative
        .title
            padding 0 33px 59px
            display flex
            .left
                display flex
                align-items center
                justify-content center
                width 138px
                height 138px
                overflow hidden
                border 1px solid red
                border-radius 50%
                margin-right 20px
                img
                    width 100%
            .right
                display flex
                flex-flow column
                justify-content space-between
                h2
                    font-size 36px
                    .van-icon
                        font-size 50px
                        margin-left 33px
                p
                    font-size 24px
                    span
                        margin-left 33px
                        border 1px solid #ccc
                        border-radius 6px
                        padding 2px 15px
                        font-size 20px

        footer
            height 78px
            padding 0 33px
            font-size 32px
            display flex
            align-items center
            background #FC3548
</style>
