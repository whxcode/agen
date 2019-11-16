<template>
    <article class="my">
        <top></top>
        <main class="main">
            <nav class="nav">
                <h3 @click="$router.push('/order/0')"><strong>我的订单</strong><span>查看全部</span></h3>
                <div class="body">
                    <ul>
                        <router-link :to="'order/' + i" v-for="(ix,i) in navs" :key="i" tag="li">
                            <van-icon :name="ix.icon" />
                            <p>{{ix.title}}</p>
                        </router-link>
                    </ul>
                </div>
            </nav>
        </main>
        <footer class="footer">
            <van-cell title="我的合同" is-link to="/treaty"/>
            <van-cell title="我的信息" is-link to="/myInfo"/>
            <program />
            <contact />
            <set-up />
        </footer>
    </article>
</template>

<script>
    import top from './top'
    import setUp from './setUp'
    import contact from './contact'
    import program from './program'
    export default {
        name: "my",
        data() {
          return {
              show:false,
              navs:[
                  {
                      title:'待支付',
                      icon:'balance-o',
                      show:false,

                  },
                  {
                      title:'待发货',
                      icon:'gift-card-o',
                      show:false,
                  },
                  {
                      title:'待收货',
                      show:false,
                      icon:'free-postage',

                  },
                  {
                      title:'已完成',
                      icon:'certificate',
                      show:false,
                  },
              ],
              sets:[
                  {
                      title:'我的店铺小程序',
                  },
                  {
                      title:'代理信息',
                  },
                  {
                      title:'我的合同'
                  },
                  {
                      title:'联系我们'
                  },
                  {
                      title:'设置'
                  },
              ],
          }
        },
        methods:{
            fopen(v) {
                this.show = !this.show
                v.show = !v.show
            }
        },
        components:{
            top,
            setUp,
            contact,
            program,
        },
    }
</script>
<style  lang="stylus">
.my
    .main
        .nav
            padding 0 33px
            background #fff
           h3
             padding 26px 0
             display flex
             align-items center
             border-bottom  2px solid #ccc
             justify-content space-between
             strong
                font-size 28px
             span
                font-size 24px
                color #666
           .body
                padding 20px 0

                ul
                  justify-content space-around
                  display flex
                  li

                    display flex
                    flex-flow column
                    align-items center
                    i
                      color #F21B1B
                      font-size 50px
                    p
                      font-size 24px
                      margin-top 20px
    .footer
        .van-cell
            margin-top 22px
            display flex
            align-items center
            padding 20px 32px !important
            line-height  inherit !important
            span,i,textarea
                font-size 36px !important
</style>
