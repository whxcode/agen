<template>
    <article class="addr_select_card">
        <address class="order_main_title">
            <div class="left">
                <div class="con">
                    <van-icon name="certificate" />
                </div>
            </div>
            <div class="right">
                <h1><strong>王先生</strong><span>17345241280</span></h1>
                <p>广东广东广东广东广东广东广东广东广东广东广东广东广东广东广东广东</p>
            </div>
        </address>
    </article>
</template>

<script>
    export default {
        name: "addrSelectCard"
    }
</script>

<style scoped lang="stylus">
  .addr_select_card
    .order_main_title
        font-style normal
        padding 30px 28px 20px
        display flex
        background #fff
        border-radius 22px
        .left
            display flex
            align-items center
            justify-content center
            .van-icon
                color #F21B1B
                font-size 60px
        .right
            margin-left 30px
            h1
                font-size 32px
                span
                    margin-left 20px
                    color  #666666
                    font-size 28px
            p
                font-size 28px
</style>
