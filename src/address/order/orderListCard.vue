<template>
    <aside class="order_list_card">
        <div class="list_card">
            <h2 class="title">
                       <span>
                           <strong>
                           <img :src="d.log" alt="">
                          </strong>
                        <span>{{d.name}}</span>
                        <span class="left">
                            <van-icon name="arrow" />
                        </span></span>

                <span class="info">
                    <slot name="info"></slot>
                </span>
            </h2>
            <aside class="card_main">
                <div class="left">
                    <img :src="d.gcidList[0].gcimg" alt="">
                </div>
                <div class="right">
                    <div class="r_l">
                        <h3>{{d.gcidList[0].gname}}</h3>
                        <span class="r_l_i">
                                {{d.gcidList[0].gcname}}
                                </span>
                    </div>
                    <div class="r_r">
                        <strong>
                            $ {{d.gcidList[0].sprice}}
                        </strong>
                        <p>
                            x {{d.all}}
                        </p>
                    </div>
                </div>
            </aside>
            <h2 class="info_footer" v-if="d.gcidList[0].num">
                共{{d.gcidList[0].num}}件 合集:${{d.gcidList[0].sprice}}
            </h2>
            <div class="btn">
                <van-button plain round type="primary"
                            v-for="(ix,i) in d.btns"
                            :key="i"
                            :class="ix.c"
                            @click.stop="$router.push(ix.path)"
                >
                    {{ix.val}}
                </van-button>
            </div>
            <slot name="footer">

            </slot>
        </div>
    </aside>
</template>

<script>
    export default {
        name: "orderListCard",
        props:{
            d:Object,
        }
    }
</script>

<style scoped lang="stylus">
  .order_list_card
    .list_card
        padding 0 30px 24px
        border-radius 22px
        .title
            display flex
            align-items center
            justify-content space-between
            font-size 28px
            padding 30px 0 54px
            strong
                width 46px
                margin-right 14px
                img
                    width 46px !important
            .left
                margin-left 20px
            .info
                color  #F21B1B


        .card_main
            display flex
            .left
                width 208px
                margin-right 27px
                img
                    width 100%
            .right
                flex 1
                display flex
                justify-content space-between
                .r_l
                    margin-right 30px
                    text-align center
                    *
                        font-size 28px
                    h3
                        margin-bottom 18px
                    .r_l_i

                        padding 12px 18px
                        background   #F9F9F9
                        color  #999999
                .r_r
                    min-width 120px
                    text-align right
                    strong
                        margin-bottom 30px
                        font-size 30px
                    p
                        font-size 28px
                        color #333
        .info_footer
            font-size 28px
            margin 40px 0
            text-align right
        .btn
            text-align right
            button
                border 1px solid #ccc
                font-size 28px
                color #666
                height auto !important
                line-height inherit !important
                padding 20px 46px !important
                &:last-child
                    margin-left 26px
            .w_c,.q_z_f
                color #F21B1B
                border 1px solid #F21B1B !important

</style>
