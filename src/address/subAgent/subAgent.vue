<template>
    <article class="sub_agent">
        <van-sticky @scroll="$root.scroll">
            <header class="header">
                <navTop  :title="'子代理'"/>
            </header>

        </van-sticky>
        <main class="main">
            <van-tabs v-model="active" :border="false">
                <van-tab title="子代理">
                    <usbAgentInfo />
                </van-tab>
                <van-tab title="销售订单">
                    <sales-order />
                </van-tab>
            </van-tabs>
        </main>
    </article>
</template>
<script>
    import navTop from '../../components/myNavTop'
    import usbAgentInfo from './usbAgentInfo'
    import salesOrder from './salesOrder'
    export default {
        name: "subAgent.vue",
        data() {
          return {
              active:1,
          }
        },
        components:{
            navTop,
            usbAgentInfo,
            salesOrder,
        }
    }
</script>
<style  lang="stylus">
    .sub_agent
        .header
            background rgba(255,255,255,.8)
            backdrop-filter blur(20px)
        .main
           borer 1px solid red
           .van-tabs__wrap
               padding-top 0
               padding-bottom 30px
               height auto !important
              *
                line-height inherit !important
                height auto
                font-size 28px !important
               .van-tabs__line
                   height 6px
                   width 100px !important
               .van-tab
                   padding-bottom 20px







</style>
