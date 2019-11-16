<template>
    <article class="order">
        <header class="header">
            <nav-top-s-t :navs="navs"
            @changeKey="changesKey"
            :title="'我的订单'"

            />
        </header>

    </article>
</template>

<script>
    import navTopST from './myNavTopSearchTables'
    export default {
        name: "order",
        components:{
            navTopST
        },
        data() {
            return {
                key:1,
                navs:['全部','待支付','待发货','待收货','已完成']
            }
        },
        methods:{
            changesKey(k) {
                this.key = k
            }
        }
    }
</script>

<style  lang="stylus">
.order
    position relative
    .header
       background #fff
    .van-tabs__content
        transform: translateY(8.666667vw);
        padding-bottom 8.666667vw
        // z-index 222
        // width 100%
        // top 26.333333vw
        // position absolute
</style>
