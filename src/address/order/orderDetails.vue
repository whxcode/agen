<template>
<article class="order_details">
    <header class="header">
        <van-sticky @scroll="$root.scroll">
        <div class="order_details_nav">
            <nav-top :title="'订单详情'" />
        </div>
        </van-sticky>
        <section class="top">
            <h1 class="title">等待买家发货</h1>
            <h2>买家正准备发货，请耐心等待</h2>
        </section>
        <div class="order_details_addr">
            <addr-card >

            </addr-card>
        </div>
    </header>
    <main class="order_details_main">
        <div class="order_details_order_card">
            <card :d="d">
                <template #info>
                     <span class="my_self">
                        <van-icon name="phone-o" />
                         联系客户
                     </span>
                </template>
            </card>
        </div>

    </main>
    <footer class="order_details_footer">
        <order-details-footer-card />
    </footer>
</article>
</template>
<script>
    import navTop from '../../components/myNavTop'
    import addrCard from './addrSelectCard'
    import card from './orderListCard'
    import orderDetailsFooterCard from './orderDetailsFooterCard'
    export default {
        name: "orderDetails",
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
            }
        },
        components:{
            navTop,
            addrCard,
            card,
            orderDetailsFooterCard,
        },
    }
</script>
<style scoped lang="stylus">
.order_details
    padding-bottom 20px
    .header
        height 66.7777vw
        position relative
        .order_details_nav
            background rgba(255,255,255,.5)
            backdrop-filter blur(20px)
        .top
          padding-left 83px
          background #FC3548
          h1,h2
            color #fff
          .title
             padding 72px 0 28px
             font-size 36px
          h2
            font-size 28px
            padding-bottom 114px
        .order_details_addr
           top 326px
           position absolute
           transform translateX(24px)
           width calc(100% - 48px)
    .order_details_main
        margin  24px 24px 0
        .order_details_order_card
            background #fff
            border-radius 22px
    .order_details_footer
        margin  26px 24px 0
        border-radius 22px
        background #fff
        padding 38px 28px

</style>
