<template>
    <article class="compnent_goods_info">
        <van-divider />
        <van-tabs  animated swipeable>
            <van-tab title="图文详情">
                <div class="detail_img_info" v-html="d.data.img">

                </div>
            </van-tab>

            <van-tab title="规格参数">
                <div class="detail_gg_cs">
                    <van-collapse v-model="activeName" :accordion="true">
                        <van-collapse-item
                                :title="ix.title"
                                :name="i + 1"
                                v-for="(ix,i) in d.data.g_params"
                                :key="i"

                        >
                            {{ix.content}}
                        </van-collapse-item>

                    </van-collapse>
                </div>
            </van-tab>

            <van-tab title="包装售后">
                <div class="detail_sh">
                    <van-collapse v-model="activeName1" accordion>
                        <van-collapse-item
                                :title="ix.title"
                                :name="i + 1"
                                v-for="(ix,i) in d.data.a_sale"
                                :key="i"

                        >
                            {{ix.content}}
                        </van-collapse-item>

                    </van-collapse>
                </div>
            </van-tab>
        </van-tabs>
    </article>
</template>

<script>
    export default {
        name: "goodsInfo",
        data() {
          return {
              activeName:'1',
              activeName1:'1',
          }
        },
        props:{
            d:Object,
        },
    }
</script>

<style  lang="stylus">
.compnent_goods_info
    .van-collapse-item__content
        text-indent 20px
        font-size 24px
    .van-cell
        margin-top 1px
        display flex
        align-items center
        padding 20px 32px !important
        line-height  inherit !important
        span,i
            font-size 36px !important
    .van-tabs__nav
        height 80px
    .van-tab
        font-size 28px
        display: flex;
        line-height: 15.866667vw;
        justify-content: center;
        align-items: center;
    .van-tabs__wrap
        font-size 30px !important
        height auto !important
    .van-tabs__line
        height .8vw
    .detail_img_info
        width 100%
        img
            width 100%
</style>
