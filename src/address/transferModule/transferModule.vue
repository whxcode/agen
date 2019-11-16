<template>
<article class="transfer_module">
  <div class="header">
      <nav-top :title="'转账'" />
      <van-divider />
          <van-field
                  v-model.number="key"
                  center
                  clearable
                  @input="changeActive"
                  placeholder="根据首款人id查找"
          >
              <van-button slot="button" size="small" type="primary"

              @click="save"
              >查找</van-button>
          </van-field>
  </div>
    <main class="transfer_main">
        <div class="content">
            <van-tabs v-model="active" animated	>
                <van-tab ></van-tab>
                <van-tab >
                        <div class="n_l">
                            <van-field
                                    disabled
                                    label-width="auto"
                                    label="收款人"
                                    v-model="person.name"
                            />

                            <van-field
                                    disabled
                                    label-width="auto"
                                    label="联系方式"
                                    v-model="person.tel"
                            />
                        </div>


                        <div class="transfer_input">
                            <h4 class="titles">转出金额</h4>
                            <van-cell-group>
                                <van-field label="$"  placeholder="输入金额" v-model.number="price"
                                @blur="priceBlur"
                                />
                            </van-cell-group>
                            <h4 class="footer">可用余额 {{oldPrice}}</h4>
                        </div>
                        <div class="btn">

                            <van-button :disabled="!price" type="primary"
                            to="/transferInfo"
                            >
                                转出
                            </van-button>
                        </div>
                </van-tab>

            </van-tabs>

        </div>
    </main>
</article>
</template>

<script>
    import navTop from '../../components/myNavTop'
    import {Toast} from 'vant'
    export default {
        name: "transferModule",
        data() {
          return {
              active:0,
              person: {

              },
              key:'',
              price:'',
              oldPrice:1000,
              persons : [
                  {
                      id:123456,
                      name:'王恒兴',
                      tel:'127.0.0.1',
                  },
                  {
                      id:654321,
                      name:'恒兴',
                      tel:'127.0.0.1',
                  },
              ]
          }
        },
        components:{
            navTop,
        },
        watch:{
            price(old,newV) {
              if(newV > this.oldPrice) {
                  Toast.fail({
                      message: '错误',
                      className:'transfer_toast',
                      duration:100,
                  })
                  this.price = this.oldPrice
              }
            }
        },
        methods:{
            save() {
                const c = Toast.loading({
                    message: '查找中...',
                    forbidClick: true,
                    loadingType: 'spinner',
                    className:'transfer_toast',
                    duration:0,
                });

                for(let i = 0;i < this.persons.length;++ i) {
                    if(this.persons[i].id === this.key) {
                        this.person = this.persons[i]
                        this.active = 1
                        c.clear()
                        return
                    }
                }

                this.active = 0
                this.person = {}

                setTimeout(() => {
                    if(!('id' in this.person)) {
                        Toast.fail({
                            message: '没有找到...',
                            className:'transfer_toast',
                        })
                    }


                },500)
            },
            priceBlur() {
                if(this.price > this.oldPrice) {
                    Toast.fail({
                        message: '错误',
                        className:'transfer_toast',
                        duration:100,
                    })
                    this.price = this.oldPrice
                }
            },
            changeActive() {
              this.active = 0
            }
        },
    }
</script>

<style  lang="stylus">
.transfer_module
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
    .header
        background #fff
    .transfer_main
      margin-top 22px
      .content
        .n_l
             input
                text-align right !important
      .btn
         padding 0 39px
         margin-top 100px
         button
          border 0
          width 100%
          font-size 36px
          border-radius  10px
          height 88px
          background  #F21B1B
      .transfer_input
          background #fff
          .titles,.footer
            font-size 28px
            color #333
            padding 30px 39px
          input
               color #F21B1B
               font-size 60px !important
          span
            font-size 60px !important
      .van-tabs__wrap
        display none !important

.transfer_toast
     width 200px !important
     height 200px !important
     .van-loading
         transform: scale(2.5);
     .van-toast__text
         margin-top: 50px;

</style>
