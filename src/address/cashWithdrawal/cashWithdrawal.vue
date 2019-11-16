<template>
    <article class="cash_withdrawal">

        <header class="header">
            <nav-top :title="'提现'"/>
            <van-divider />
            <div class="to_bank" @click="show = !show">
                <h1><strong>🏦</strong><span>{{curBank.name}}</span></h1>
                <van-icon name="arrow" />
            </div>
        </header>

        <main class="main">
            <p class="t_x">提现金额</p>
            <van-cell-group>
                <van-field v-model="config.price" placeholder="请输入金额" />
            </van-cell-group>
            <p class="q_b">
                <span>可提现金额 {{countPrice}} 元</span>

                <span class="i" @click="config.price = countPrice">
                    全部提现
                </span>
            </p>
            <div class="btn">
                <pub-btn :config="config" @saves="saves"/>
            </div>
        </main>

        <footer class="footer">
            <h2>温馨提示</h2>
            <ul>
                <li v-for="(ix,i) in tips" :key="i">
                    {{i}}、{{ix}}
                </li>
            </ul>
        </footer>

        <van-popup
                v-model="show"
                round
                position="bottom"

        >
            <div class="b"  v-for="(ix,i) in banks" :key="i">


            <div class="to_bank" @click="c(ix)">
                <h1><strong>🏦</strong><span>{{ix.name}}</span></h1>
                <van-icon name="arrow" />

            </div>

                <van-divider />
            </div>
            <div class="b">


                <div class="to_bank" @click="$router.push('/addBankCard')">
                    <h1><strong>🏦</strong><span>添加银行卡</span></h1>
                    <van-icon name="arrow" />

                </div>

                <van-divider />
            </div>
        </van-popup>
    </article>
</template>

<script>
    import navTop from '../../components/myNavTop'
    import pubBtn from '../../components/publicBtn'
    export default {
        name: "cashWithdrawal",
        data() {
          return {
              show:false,
              countPrice:'4468.60',
              config:{
                  val:'确定',
                  price:'',
              },
              tips:[
                  '提现手续费按照金额的 1% 收取',
                  '工作人17xxxxxxx',
              ],
              curBank:null,
              banks:[
                  {
                      icon:'',
                      name:'中国邮政',
                  },
                  {
                      icon:'',
                      name:'中国银行',
                  },
                  {
                      icon:'',
                      name:'中国农业',
                  },
              ]
          }
        },
        components:{
            navTop,
            pubBtn,
        },
        methods:{
            c(v) {
                this.curBank = v
                this.show = !this.show
            },
            saves() {
               this.$router.push('/cashWithdrawalInfo')
            }
        },
        created() {
            this.curBank = this.banks[0]
        }
    }
</script>

<style  lang="stylus">
.cash_withdrawal
    .footer
        margin-top 110px
        padding 0 38px
        h2
            color: #000
            font-size 36px
            margin-bottom 57px
        li
            color #999
            font-size 28px

    .main
        margin-top 20px
        padding 31px 38px
        background #fff
        .btn
            margin-top 40px
        .van-cell
            margin-top 22px
            display flex
            align-items center
            padding 20px 32px !important
            line-height  inherit !important
            span,input,textarea,button
                font-size 36px !important
            .van-button--small
                line-height inherit !important
            height auto !important
        .t_x, .q_b
           color #333
           font-size 28px
        .q_b
            margin-top 30px
        .i
            margin-left 20px
            color #F21B1B


    .header
        background #fff
    .to_bank
           display flex
           align-items center
           justify-content space-between
           padding 32px 38px
           font-size 40px
           h1
            color #333
            font-size 40px
            strong
               margin-right 20px


</style>
