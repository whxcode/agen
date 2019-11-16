<template>
    <article class="order_details_footer_card">
        <div class="title">
            <p><span>发票抬头:</span><strong>王先生</strong></p>
            <p><span>发票抬头:</span><strong>电子普通发票</strong></p>
        </div>
        <div class="mi">
            <p><span>付款方式:</span><strong>余额支付</strong></p>
            <p class="mi_one"><span>商品金额:</span><strong>¥ 299.00</strong></p>
            <h2><strong>实付金额:</strong><span>¥ 299.00</span></h2>
        </div>

        <div class="footer">
        <p><span>订单号:</span><strong>123213<van-tag plain @click="$root.copy('11111')">复制</van-tag></strong> </p>
            <p><span>下单时间:</span><strong>2019-18-24</strong></p>
        </div>
    </article>
</template>

<script>
    export default {
        name: "orderDetailsFooterCard"
    }
</script>

<style scoped lang="stylus">
.order_details_footer_card
    .title,.mi,.footer
        p
            font-size 28px
            display flex
            justify-content space-between
            &:last-child
              padding 26px 0 32px
              border-bottom  1px solid #efefef
            span
                color #999
            strong
                color #333
    .mi
        margin-top 36px
        .mi_one
            margin-top 20px
        h2
         padding 28px 0
         font-size 28px
         display flex
         justify-content space-between
         border-bottom  1px solid #efefef
         span
            color #F21B1B
    .footer
         margin-top 30px
         p
           &:last-child
             border none
             padding-bottom 0
         .van-tag
            font-size 24px
            margin-left 20px


</style>
