<template>
    <article class="confirm_order">
        <header class="header">
            <nav-top :title="'确定订单'"/>
            <van-divider />
        </header>
        <main class="confirm_order_main">
            <addr-select-card @click.native="toAddr" />
            <div class="order_main_content">
                <card :d="d">
                    <template #info>
                        {{d.status}}
                    </template>
                    <template #footer>
                        <footer class="footer">
                            <h3 class="f_tit">
                                <strong>购买数量</strong>
                                <van-stepper v-model="count" min="5" max="8" />
                            </h3>
                            <h4 class="f_fa" @click="config.show = true">
                                <strong>发票</strong>
                                <van-icon name="arrow" />
                            </h4>
                            <van-field
                                    v-model="msg"
                                    rows="1"
                                    autosize
                                    label="留言"
                                    type="textarea"
                                    placeholder="请输入留言"
                            />

                            <p>共{{count}} 小记: <strong>${{price}}</strong></p>
                        </footer>
                    </template>
                </card>
            </div>
        </main>
        <footer class="confirm_order_footer">
            <p>共{{count}} 小记: <strong>${{price}}</strong></p>
            <div class="btn">
                余额支付
            </div>
        </footer>
        <invoice-information :config="config"></invoice-information>
    </article>
</template>
<script>
    import card from './orderListCard'
    import navTop from '../../components/myNavTop'
    import invoiceInformation from '../../address/my/invoiceInformation'
    import addrSelectCard from './addrSelectCard'
    export default {
        name: "confirmOrder",
        props:['id'],
        data() {
          return {
              d: {
                  oid: 376,
                  atid: 205,
                  name: "天津市河东区吧乐吧体验店1",
                  log: "http://qhome.zxshowstar.com/2019/07/64ce8201907042120.jpg",
                  code: "201907251604792570",
                  status: "交易完成",
                  ostatus: "7",
                  create_time: "2019-07-25 20:46:37",
                  sprice: "0.01",
                  all: 1,
                  gcidList: [
                      {
                          oid: 376,
                          gid: 58,
                          gcid: 43,
                          gname: "自动下滑滑盖指纹锁",
                          gcname: "RX0822半导体",
                          gcimg: "http://qhome.zxshowstar.com/2019/07/66279201907045066.jpg",
                          two_name: "红古铜",
                          oprice: "750.00",
                          sprice: "0.01",
                          num: 0
                      }
                  ]
              },
              count:1,
              price:1,
              msg:'',
              config:{
                  show:false,
              },
          }
        },
        methods:{
            toAddr() {
                this.$router.push({
                    path:'/addr',
                    query:{flag:1}
                })



            }
        },
        components:{
            navTop,
            card,
            invoiceInformation,
            addrSelectCard,
        },
    }
</script>
<style  lang="stylus">
.confirm_order
    .header
        background #fff
    .confirm_order_main
       background none
       padding 0 24px
       .order_main_content
          border-radius 22px
          margin-top 28px
          background #fff
          .footer
            margin 30px 0
            .f_tit,.f_fa
                display flex
                align-items center
                justify-content space-between
                *
                    font-size 28px
                    line-height inherit
                .van-stepper__input
                    width 106px !important
                    height 60px !important
            button
                width 22px !important
                height 22px !important
            .f_fa
                margin 30px 0
                .van-icon
                    color #999
            .van-cell
                margin-top 22px
                display flex
                align-items center
                height auto
                padding 0 !important
                line-height  inherit !important
                span,i,input,textarea
                    font-size 28px !important

   .confirm_order_footer
        display flex
        position fixed
        bottom 0
        background #fff
        height 128px
        width 100%
        padding 0 26px
        align-items center
        justify-content flex-end
        .btn
           color #fff
           width 200px
           border-radius 35px
           height 66px
           background #F21B1B
           font-size  28px
           display flex
           margin-left 28px
           align-items center
           justify-content:center
   .confirm_order_footer,.order_main_content .footer
       p
           margin-top 20px
           justify-content flex-end
           display flex
           align-items center
           strong
               color #F21B1B
               margin-left 20px
</style>
