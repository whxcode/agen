<template>
    <article class="recharge">
        <header class="header">
            <nav-top :title="'充值'"/>
        </header>
        <main class="main">
            <van-cell-group>
                <van-field v-model="config.price" placeholder="请输入金额" />
            </van-cell-group>
            <div class="btns">
                <btn :config="config"/>
            </div>

        </main>
    </article>
</template>


<script>
    import navTop from '../../components/myNavTop'

    import btn from '../../components/publicBtn'

    export default {
        name: "recharge",
        data() {
          return {
              value:'',
              config:{
                  price:'',
                  val:'确定'
              }
          }
        },
        components:{
            navTop,
            btn,
        },
    }
</script>

<style  lang="stylus">
.recharge

    .btns
        padding 0 30px
        margin-top 20px
    .header
        background #fff
        border 2px solid #eee
    .van-cell
              margin-top 22px
              display flex
              align-items center
              padding 20px 32px !important
              line-height  inherit !important
              span,input,textarea
                  font-size 36px !important
</style>
