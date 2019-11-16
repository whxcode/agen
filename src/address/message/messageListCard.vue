<template>
    <li class="item_list">
        <van-skeleton  :row="5" :loading="loading">
        <div class="tags">
            <span :class="ix.type_n_class">直销</span>
        </div>
        <h2 class="tits">
            <span>订单编号:{{ix.oencode}}</span>
            <b><van-tag round @click="$root.copy(ix.oencode)">复制</van-tag></b>
        </h2>
        <h2 class="t_mi">
            <span>销售收益: 6547元</span>
            <span>销售收益: 6547元</span>
        </h2>
        <div class="t_c">
            <p>{{ix.content}}</p>
            <span><van-icon name="arrow" /></span>
        </div>
        <div class="t_f">
            <span>{{ix.create_time}}</span>
            <span>{{ix.status}}</span>
        </div>
        </van-skeleton>
    </li>
</template>
<script>
    export default {
        name: "messageListCard",
        props:{
            ix:Object,
        },
        data() {
          return {
              loading:true
          }
        },
        methods:{

        },
        created() {
             setTimeout(v => {
                 this.loading = false
             },1000)
        }
    }
</script>
<style  lang="stylus">
    @import "../../../public/stylus/publicFunc.styl"
    $colorred = #F21B1B
    $color333 = #333333
    .item_list
        position relative
        border-radius 12px
        overflow hidden
        margin 10px 0
        background #fff
        padding 27px 26px
        box-shadow 0 -2px 20px 2px rgba(0,0,0,.1)
        my-skeleton(304px,10px)
        h2
            font-size 24px
        .tits
            font-size 24px
            b
                margin-left 10px
            .van-tag
                font-size 24px
        .t_mi
            font-size 28px
            margin-top 32px
            display flex
            justify-content space-between
        .t_c
            margin-top 40px
            display flex
            p
                font-size 28px
            span
                flex 0 0 50px
                text-align right
                .van-icon
                    font-size 30px
        .t_f
            display flex
            justify-content space-between
            font-size 24px
            margin-top 34px
        .tags
            width 60px
            height 60px
            position absolute
            right 0
            top 0
            span
                color #fff
                transform: translate(-2.2vw,-0.533333vw) rotate(45deg);
                padding: 8px 0 0;
                display block
                width 200%
                text-align center

                background #42b983
                font-size 20px
            .bgr
                background $colorred
            .bgh
                background #F3B235
    .copy_info
        padding 20px 0 !important
        font-size 30px !important
        line-height none !important
</style>
