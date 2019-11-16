<template>
    <article class="verification_phone">
        <van-cell-group :border="false">
        <van-field
                type="tel"
                label="手机号"
                v-model="tel"
                placeholder="请输入手机号"
                :border="true"
        />
        <div class="tel">
            <van-field
                    center
                    clearable
                    v-model="config.sms"
                    label="短信验证码"
                    placeholder="请输入短信验证码"
            >
                <van-button
                        slot="button"
                        size="small"
                        type="primary"
                        @click="send"
                        :disabled="flag"
                >{{info}}</van-button>
            </van-field>
        </div>
     </van-cell-group>
    </article>
</template>

<script>
    export default {
        name: "verificationPhone",
        data() {
            return {
                tel:'',
                info:'发送验证码',
                flag:false,
            }
        },
        props:{
            config:{
                type:Object
            }
        },
        methods:{
            send() {
                this.info = 0
                this.flag = !this.flag
                let id = setInterval(() => {
                    this.info ++
                    if(this.info >= 60) {
                        window.clearInterval(id)
                        this.info = '发送验证码'
                        this.flag = !this.flag
                    }
                },1000)
            },
        },
    }
</script>

<style  lang="stylus">
.verification_phone
    .van-cell
        display flex
        align-items center
        margin 10px 0
        padding 44px 0
        *
            width auto
            height auto !important
            line-height inherit !important
            input,textarea,span
                width 100%
                font-size 32px !important
            input
                text-align right
    .tel
        .van-icon
            font-size 30px !important
        .van-field__control
            text-align center !important
        button
            padding 10px 10px !important
    .h
        height 50px
        background red

</style>
