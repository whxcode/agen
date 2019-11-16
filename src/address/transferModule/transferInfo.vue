<template>
    <article class="transfer_info">
        <header class="header">
            <nav-top :title="'转账详情'"/>
        </header>
        <main class="main">
            <div class="top">
                <h4>转账-猪</h4>
                <h2>-1000</h2>
                <p>交易成功</p>
            </div>
            <footer class="footer">
                <van-cell-group>
                    <van-cell title="单元格" value="内容" :border="false"/>
                    <van-cell title="单元格" value="内容"  :border="false"/>
                </van-cell-group>
                <van-divider />
                <van-cell-group>
                    <van-cell title="单元格" value="内容" :border="false"/>
                    <van-cell title="单元格" value="内容"  :border="false"/>
                </van-cell-group>
            </footer>
        </main>
        <footer class="footer">
            <div class="btn">
                <van-button  type="primary"
                            to="/home"
                >
                    回到首页
                </van-button>
                <p>转账记录</p>
            </div>
        </footer>
    </article>
</template>
<script>
    import navTop from '../../components/myNavTop'
    export default {
        name: "transferInfo",
        components:{
            navTop,
        },
        created() {

        }
    }
</script>
<style scoped lang="stylus">
.transfer_info
    .header
        background #fff
        border 2px solid #ccc
    .main
        background #fff
        padding 73px 40px 0
        .top
            text-align center
            font-size 32px
            h4

                color #333
            h2
                margin  41px 0 29px
                font-size 68px
            p
                color #999
        .footer
            margin-top 114px
            *
                line-height inherit
                font-size 32px
                padding 0
            .van-cell
                padding 30px 0
                .van-cell__title
                    color #999
                .van-cell__value
                    color #333
    .footer
        padding 0 40px
        margin-top 50px
        button
            border 0
            width 100%
            font-size 36px
            border-radius  10px
            height 88px
            background  #F21B1B
        p
            text-align center
            margin-top 34px
            font-size 28px
</style>
