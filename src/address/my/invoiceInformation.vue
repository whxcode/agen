<template>
    <article class="invoice_information">
        <van-popup
                closeable
                v-model="config.show"
                position="bottom"
                :style="{ height: '80%'}"
        >
            <main class="main">
                <nav class="nav">
                    <h2>发票类型</h2>

                    <h3>
                        <van-tag plain type="danger" @click="activeOne = 0"
                                 :class="[activeOne ? '':'fa_nav_active']"
                        >
                            电子普通发票
                        </van-tag>
                        <van-tag plain type="warning" @click="activeOne = 1"
                                 :class="[activeOne ? 'fa_nav_active':'']"
                        >
                            增值税专用发票
                        </van-tag>
                    </h3>
                    <p class="fa_info">
                        电子普通发表与
                        电子普通发表与
                        电子普通发表与
                    </p>
                </nav>
                <section class="fa_mi">

                    <van-tabs v-model="activeOne" animated swipeable>

                        <van-tab title="电子普通发票">
                            <div class="c_1">
                                <nav class="nav">
                                    <h2>发票类型</h2>
                                    <h3>
                                        <van-tag plain type="danger" @click="activeTwo = 0"
                                                 :class="[activeTwo ? '':'fa_nav_active']"

                                        >
                                            个人
                                        </van-tag>

                                        <van-tag plain type="warning" @click="activeTwo = 1"
                                                 :class="[activeTwo ? 'fa_nav_active':'']"
                                        >
                                            单位
                                        </van-tag>

                                    </h3>
                                </nav>
                                <van-tabs v-model="activeTwo" animated >

                                    <van-tab title="个人">
                                        <div class="fa_person">

                                            <van-cell-group :border="false" title="收票人信息">
                                                <van-field
                                                        v-for="(ix,i) in personInfo"
                                                        :key="i"
                                                        :label="ix.title"
                                                        label-width="atuo"
                                                        placeholder="请输入"
                                                />
                                            </van-cell-group>

                                        </div>
                                    </van-tab>

                                    <van-tab title="单位">
                                        <div class="fa_company">
                                            <van-cell-group>
                                                <van-field
                                                        label="单位名称"
                                                        label-width="atuo"
                                                        placeholder="请输入"
                                                />

                                                <van-field
                                                        label-width="atuo"
                                                        label="纳税人id"
                                                        placeholder="@email"
                                                />
                                            </van-cell-group>

                                            <van-cell-group>
                                                <van-field
                                                        label="收票人"
                                                        label-width="atuo"
                                                        placeholder="请输入"
                                                />

                                                <van-field
                                                        label-width="atuo"
                                                        label="邮箱"
                                                        placeholder="@email"
                                                />
                                            </van-cell-group>
                                        </div>
                                    </van-tab>

                                </van-tabs>

                            </div>
                        </van-tab>


                        <van-tab title="增值税专用发票" :bordere="false">
                            <div class="c_2">
                                <van-cell-group :border="false" title="增票资质">
                                    <van-field
                                            v-for="(ix,i) in zpzz"
                                            :key="i"
                                            :label="ix.title"
                                            label-width="atuo"
                                            placeholder="请输入"
                                    />


                                </van-cell-group>
                                <van-cell-group :border="false" title="收票人信息">
                                    <van-field
                                            v-for="(ix,i) in personInfo"
                                            :key="i"
                                            :label="ix.title"
                                            label-width="atuo"
                                            placeholder="请输入"
                                    />
                                </van-cell-group>
                            </div>
                        </van-tab>

                    </van-tabs>

                </section>
            </main>
        </van-popup>
    </article>
</template>
<script>
    export default {
        name: "invoiceInformation",
        data() {
            return {
                activeOne:0,
                activeTwo:0,
                zpzz:[
                    {
                        title:'单位名称',
                    },
                    {
                        title:'纳税人识别号',
                    },
                    {
                        title:'单位地址',
                    },
                    {
                        title:'注册电话',
                    },
                    {
                        title:'注册电话',
                    },
                    {
                        title:'开户银行',
                    },
                    {
                        title:'开户账号',
                    },
                ],
                personInfo:[
                    {
                        title:'收票人',
                    },
                    {
                        title:'手机号',
                    },
                    {
                        title:'所在区域',
                    },
                    {
                        title:'详细地址'
                    },
                ]
            }
        },
        props:{
            config:Object,
        }
    }
</script>
<style  lang="stylus">
.invoice_information
    .main
        padding-bottom 20px
        h2
            font-size 4.267vw
            padding 20px 0
        .nav
            padding 0 4.2666666667vw
            h3
                justify-content flex-start
                span
                    color #666
                    font-size 30px
                    &:last-child
                        margin-left 20px
            .fa_info
                font-size 3.467vw
                margin 5.6vw 0
        .fa_mi
            .van-tabs__nav
                display none
            .van-cell__title
                width auto

            .van-field__body
                input
                    font-size 32px !important
                    text-align right
    .van-cell
          margin-top 22px
          display flex
          align-items center
          padding 20px 32px !important
          line-height  inherit !important
          span,i,textarea,
              font-size 34px !important

    .van-cell-group__title
        padding 0 4.2666666667vw
        font-size 32px !important
    .van-cell__title
        span
            font-size 32px
    .van-tabs__wrap
        display none
    .van-cell-group
        padding-top 20px
        margin 0
    .van-tabs__content
        padding-top 0
.fa_nav_active
      color red !important
</style>
