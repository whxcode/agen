<template>
    <article class="add_bank_card">
        <bup-sty :title="'添加银行卡'"  @saves="saves">
            <template #body>
                <div class="add_ban_main">
                    <van-cell-group>
                        <van-field
                                label="持卡人"
                                label-width="auto"
                                placeholder="请输入用户名"
                                :border="true"
                        />

                        <van-field
                                label="卡号"
                                label-width="auto"
                                placeholder="请输入密码"
                                :border="true"
                        />

                        <van-field
                                label="开户银行"
                                placeholder="请输入"
                                :border="true"
                                label-width="auto"
                        />
                        <van-field
                                label-width="auto"
                                label="手机好"
                                placeholder="请输入"
                                :border="true"
                        />
                    </van-cell-group>
                    <van-cell-group>
                        <van-field
                                label="持卡人"
                                label-width="auto"
                                placeholder="请输入用户名"
                                :border="true"
                        />

                        <van-field
                                label-width="auto"
                                label="开户地"
                                placeholder="请输入"
                                :border="true"
                        />

                        <van-field
                                label-width="auto"
                                label="分支行"
                                placeholder="请输入"
                                :border="true"
                        />

                    </van-cell-group>
                </div>

            </template>
        </bup-sty>
    </article>
</template>

<script>
    import navTop from '../../components/myNavTop'
    import bupSty from '../../components/publicStyle'
    export default {
        name: "addBankCard",
        methods:{
            saves() {
                console.log(123)
            }
        },
        components:{
            navTop,
            bupSty,
        }
    }
</script>

<style  lang="stylus">
.add_bank_card
    .header
       background #fff
    .add_ban_main
     .van-cell
        margin-top 22px
        display flex
        align-items center
        padding 20px 32px !important
        line-height  inherit !important
        span,input,textarea,button
            text-align right !important
            font-size 30px !important
        .van-button--small
            line-height inherit !important
        height auto !important
   .van-cell-group
        margin-top 30px
</style>
