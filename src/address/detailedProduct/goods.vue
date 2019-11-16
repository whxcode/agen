<template>
<article class="detail_goods">
    <div class="detai_swiper">
        <van-swipe :autoplay="6000">
            <van-swipe-item v-for="(image, index) in d.data.banner" :key="index">
                <img  :src="image" />
            </van-swipe-item>
        </van-swipe>
    </div>
    <div class="detai_title">
        <h2 class="detai_price">
            <strong>$ {{d.data.sprice}} <del>$ {{d.data.carriage}}</del></strong>

            <span>库存:{{0}} 件</span>
        </h2>

        <div class="detai_tit">
            <p>{{d.data.gname}}</p>
            <p>{{d.data.description}}</p>
        </div>
        <div class="detai_footer">
            <h4>
                <strong>保障</strong>
                <span><van-icon name="passed" /><i>3年保修</i></span>
                <span><van-icon name="passed" /><i>7天无理由退货</i></span>
            </h4>
        </div>
    </div>
</article>
</template>

<script>
    export default {
        name: "goods",
        props:{
            d:Object,
        }
    }
</script>

<style scoped lang="stylus">
 .detail_goods
    .detai_title
        background #fff
        padding 47px 27px 0
    h2
        display flex
        justify-content space-between

        align-items flex-end
        color   #999999
        font-size 28px
        strong
            font-size 44px
            color #F21B1B
            del
                margin-left 20px
                color   #999999
                font-size 28px

    .detai_tit
        p
            margin-top 38px
            font-size 36px
            &:last-child
                font-size 28px
    .detai_footer
        display flex
        *
            margin 0 10px
            font-style none
            &:first-child
                margin 0
        align-items center
        height 102px
        margin-top 21px
        strong
            color #999
            font-size 32px
        span
            font-size 32px
    .detai_swiper
        width 100%
        img
            width 100%

</style>
