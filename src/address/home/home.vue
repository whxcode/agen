<template>
    <section class="home">
        <header class="header">
        <div class="bg">
            <img src="../../../public/bg.png" alt="">
        </div>
        <div class="title">
            <h1>😊</h1>
        </div>

        <div class="card">
            <van-skeleton title :row="0"
                          :loading="!user"
            >
            <h1 class="tit">
                <strong>
                    小米(一急嗲里)
                    <van-icon name="arrow-down" />
                </strong>
                <span>代理更多品牌</span>
            </h1>
            </van-skeleton>



            <h1 class="price">
                <van-skeleton title :row="0"
                              :loading="!user"
                >
                <span>余额(元)</span>
                <p>518</p>
                </van-skeleton>
            </h1>


            <ul class="navs_top">
                <li v-for="(ix,i) in navsTop" :key="i">
                    <p>{{ix.title}}</p>
                    <h3>{{ix.price}}(元)</h3>
                </li>
            </ul>
            <ul class="navs_mi">
                <router-link v-for="(ix,i) in navsMi" :key="i"
                :to="ix.path"
                tag="li"
                >
                    <van-icon name="gold-coin" />
                    <p>{{ix.title}}</p>
                </router-link>
            </ul>

        </div>
            <ul class="navs_foo">

                <li v-for="(ix,i) in navsFoo"
                @click="goPath(ix.title)"
                >
                    <van-icon name="gold-coin" />
                    <p>{{ix.title}}</p>
                </li>

            </ul>
        </header>
        <footer class="footer">
            <article class="message_list">
                <router-link class="msg_tit"
                tag="h1"
                to="message"
                >
                   <strong>订单消息列表</strong>
                    <span>更多<van-icon name="arrow" /></span>
                </router-link>

                <!-- 订单消息列表卡片 -->
                <msg-list></msg-list>

            </article>
            <article class="Inventory_list">

                <h1 class="tit" ref="title">
                    <strong>我的库存列表</strong>
                    <p>
                        <span :class="[active || 'active']" @click="active = !active">已上架</span>
                        <span :class="[active && 'active']" @click="active = !active">已下架</span>
                    </p>
                </h1>


                <inventory-list></inventory-list>
            </article>


        </footer>
    </section>
</template>
<script>
    import msgList from './messageList'
    import inventoryList from './InventoryList'
    export default {
        name: "home",
        data() {
            return {
                active:false,
                loading:true,
                user:null,
                navsTop:[
                    {
                        title:'可以提现金额',
                        price:3450.00,
                    },
                    {
                        title:'可以提现金额',
                        price:3450.00,
                    },
                    {
                        title:'可以提现金额',
                        price:3450.00,
                    },
                ],
                navsMi:[
                    {
                        title:'充值',
                        price:3450.00,
                        path:'/recharge'
                    },
                    {
                        title:'转账',
                        price:3450.00,
                        path:'/transfer',
                    },
                    {
                        title:'提现',
                        price:3450.00,
                        path:'/cashWithdrawal',
                    },
                    {
                        title:'查看子代理',
                        price:3450.00,
                        path:'/subAgent',
                    },
                ],
                navsFoo:[
                    {
                        title:'充值记录',
                        price:3450.00,
                        path:'/transferRecord'
                    },
                    {
                        title:'转账记录',
                        price:3450.00,
                        path:'/transferRecord'
                    },
                    {
                        title:'提现记录',
                        price:3450.00,
                        path:'/transferRecord'
                    },
                    {
                        title:'余额明细',
                        price:3450.00,
                        path:'/transferRecord'
                    },
                ],

            }
        },
        methods:{
            goPath(v) {
              console.log(v)
              this.$router.push({
                  path:'/transferRecord',
                  query:{
                      v,
                  },
              })
            },
        },
        components:{
            msgList,
            inventoryList,
        },
        mounted() {
            const h = this.$refs.title.offsetTop
            window.addEventListener(`scroll`,v => {
               const wH = window.scrollY
               if(wH >= h) {
                   console.log(true)
               }
            })
            setTimeout(() => {
                this.user = {}
            },1000)
        }
    }
</script>
<style  lang="stylus">
$colorred = #F21B1B
$color333 = #333333
.home
  color $color333
  .header
    height 115.867vw
    box-shadow 0 -1px 20px 1px rgba(0,0,0,.05)
    .bg
        position relative
        width 100%
        img
            width 100%
    .title,.card
        padding 0 27px
    .title
        color #fff
        position absolute
        width 100%
        top 69px
        h1
          font-size 36px
    .card
        border-radius 12px
        background #fff
        margin 0 16px
        padding 30px 32px 0
        position absolute
        width calc(100% - 32px)
        top 145px
        height 600px
        box-shadow 0 -1px 20px 1px rgba(0,0,0,.1)
        .van-skeleton__content
            height auto
            h3
                height 50px
                width 100% !important
        .tit
           font-weight 400
           display flex
           justify-content space-between
           font-size 32px
           color $color333
           span
             color $colorred
             font-size 28px
        .price
            margin-top 34px
            text-align center
            span
               font-size 26px
               font-weight 400
               color $color333
            p

               font-size 68px
               color $colorred
        .navs_top,.navs_mi
          margin-top 50px
          display flex
          justify-content space-between
          text-align center
          li
            font-size 26px
            color #666
            flex 1
            h3
             margin-top 19px
             font-size 36px
             color $color333
        .navs_mi
            .van-icon
               color $colorred
               font-size 55px
               margin-bottom 20px
    .navs_foo
        padding 0 56px
        display flex
        justify-content space-between
        transform: translateY(50vw);
        color $color333
        text-align center
        .van-icon
          color $colorred
          font-size 55px

        p
            font-size 26px

    li
      cursor pointer
  .footer
    background #fff
    .msg_tit
        padding 34px 32px
        display flex
        align-items center
        justify-content space-between
        strong
            font-size 32px
        span
            font-size 28px
            color $color333
    .msg_list
       margin-top 34px
    .Inventory_list
          margin-top 23px
          .tit
              backdrop-filter blur(20px)
              background rgba(255,255,255,.8)
              position sticky
              top 0
              z-index 22
              padding 0 32px 30px
              text-align left
              justify-content flex-start
              align-items flex-start
              flex-flow column

              p
                  margin-top 35px
                  font-size 26px
                  span
                      margin 0 40px
                      &:first-child
                          margin 0
              .active
                color red

</style>
