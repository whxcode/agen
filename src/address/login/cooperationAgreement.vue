<template>
    <article class="cooperationa_agreement">
        <van-popup v-model="config.show">
            <article class="show_main">
                <h1 class="tit_m">
                    《合作协议》
                </h1>
                <div class="tit_h_m">
                    用户使用“飞鸽智能平台在线注册系统”前请认真阅读并理解本协议内容，本协议内容中以加粗方式显著标识的条款，请用户着重阅读、慎重考虑。
                    <van-divider />
                </div>
                <div class="m">
                    暂无内容
                </div>
                <div class="s_close" @click="config.show = !config.show">
                    <van-icon name="cross" />
                </div>
            </article>
        </van-popup>
    </article>
</template>
<script>
    export default {
        name: "cooperationAgreement",
        props:{
            config:Object,
        }
    }
</script>

<style scoped lang="stylus">
.cooperationa_agreement
    .van-popup
        box-shadow 2px 2px 40px 20px rgba(0,0,0,.2)
        border-radius 12px
        overflow hidden
    .show_main
        padding 47px
        height 800px
        width 624px


        position relative
        font-size  26px
        .s_close
            top 10px
            position absolute
            right 10px
        .tit_m
            text-align center
            font-size 40px
            color  #F21B1B
            padding-bottom 60px
        .tit_h_m
            color #333
</style>
