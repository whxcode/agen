<template>
    <article class="cashWithdrawal_info">
        <header class="header">
            <navTop :title="'提现详情'"/>
        </header>
        <main class="main">
            <div class="top">
                <h1><van-icon name="checked" /></h1>
                <p><strong>提现申请提成功</strong></p>
                <span>提现后24小时内到账</span>
            </div>
            <div class="line">
                <div class="line_d1"></div>
                <div class="line_d2"></div>
                <van-divider :dashed="true" />
            </div>
            <footer class="footer">
                <h2><strong>首款账号</strong><span>中国银行</span></h2>
                <h2><strong>提现金额</strong><span>7000 元</span></h2>
            </footer>
        </main>
        <footer class="footer">
            <pub-btn :config="config" @click.native="$router.push('/home')"/>
            <p @click="$router.push('/transferRecord?v=提现记录')">查看提现记录</p>
        </footer>
    </article>
</template>

<script>
    import navTop from '../../components/myNavTop'
    import pubBtn from '../../components/publicBtn'
    export default {
        name: "cashWithdrawalInfo",
        data() {
          return {
              config:{
                  val:'回到首页',
                  price:'1',
              }
          }
        },
        components:{
            navTop,
            pubBtn,
        },
    }
</script>

<style scoped lang="stylus">
.cashWithdrawal_info
    background #F7F7F7
    overflow-x hidden
    .footer
        padding 0 44px
        p
         margin-top 20px
         text-align center
         color #666
    .header
        background #fff
    .main
        background #fff
        margin  34px
        .footer
            padding 0 44px
            h2
              display flex
              justify-content space-between
              &:last-child
                margin 32px 0
                padding-bottom 50px
              span
                color #999
            *
             color #333
             font-size 28px
        .line
            position relative
            .line_d2,.line_d1
                top 50%
                transform translateY(-50%) translateX(-50%)
                border-radius 50%
                position absolute
                width 100px
                height 100px
                background #F7F7F7

            .line_d2
                right 0
                transform translateY(-50%) translateX(50%)
        .van-divider
              width calc(100% - 100px)
              margin 120px auto 60px
        .top
          padding-top 64px
          text-align center

          .van-icon
            color red
            font-size 200px !important
          p
            margin 35px 0
            font-size 36px
          span
            font-size 28px
            color #999
</style>
