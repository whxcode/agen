<template>

    <article class="Inventory_list">

        <!-- 库存列表 -->

        <article class="ity_list">
            <van-list
                    v-model="loading"
                    :finished="finished"
                    finished-text="没有更多了"
                    @load="onLoad"
            >

                <inventory-list-card v-for="(d,i) in list" :key="i"
                    :d="d"
                    @changes="changes"
                />

            </van-list>
        </article>


        <accessionPurchase :config="config"  />
    </article>

</template>

<script>
    import accessionPurchase from '../../components/accessionPurchase'

    import InventoryListCard from '../Inventory/InventoryListCard.vue'

    export default {
        name: "InventoryList",
        data() {
            return {
                show:false,
                config:{
                    show:false,
                    data:{},
                },

                d:{
                    gid: 88,
                    banner: "https://qhome.zxshowstar.com/2019/08/e957820190801890.gif",
                    gname: "测试商品",
                    fprice: "4.00",
                    sprice: 6.4,
                    stock: 6,
                    descr: "测试数据",
                    tid: 1,
                    comment_num: "0",
                    gcommentid: null,
                    atid_con: "特约合作商价",
                    good: 0
                },

                loading: false,
                finished: false,
                list:[],
            }
        },
        methods: {

            onLoad() {
                // 异步更新数据
                setTimeout(() => {
                    for (let i = 0; i < 2; i++) {

                        const dx = Object.assign({},this.d)
                        dx.sprice += i
                        this.list.push(dx);
                    }
                    // 加载状态结束
                    this.loading = false;

                    // 数据全部加载完成
                    if (this.list.length >= 10) {
                        this.finished = true;
                    }
                }, 100);
            },
            changes(d) {
                this.config.show = !this.config.show
                this.config.data = d
            },


        },
        components:{
            InventoryListCard,
            accessionPurchase,
        },
        created() {
                this.loading = false
                this.finished =  false
                this.list = []
        }
    }
</script>

<style  lang="stylus">
    .Inventory_list
        padding 0 32px
        .van-loading
           span
                font-size 32px
    .ity_list
            .van-list__finished-text
                font-size 32px

    .van-overlay
       backdrop-filter blur(5px)
    .add
        margin-top 41px
        text-align right
        .van-tag
            width 118px
            margin 0 10px
            text-align center
            font-size 24px

    .van-sku-container
        border-radius-top-left 60px
        border-radius-top-right 60px
        .van-sku-header
            .van-sku-header__img-wrap
               width 220px
               height 220px
               img
                 width 100%
            .van-sku-header__goods-info
               height 220px
               isplay: flex;
               justify-content: space-between;
               .van-sku__price-symbol,.van-sku__price-num
                  font-size 40px !important
               .van-sku-header-item
                   font-size 26px !important
                 *
                  font-size 26px !important
        .van-sku-body
           margin-top 20px
           .van-sku-row__title
             font-size 32px
             margin-bottom 37px
           .van-sku-row__item-name
                margin 0 10px
                font-size 26px
        .van-popup__close-icon--top-right
           font-size 30px
        .van-sku-stepper-stock
            margin-top 50px
            .van-sku-stepper-container
                height 50px
                font-size 32px
                display flex
                align-items center
                justify-content space-between
                .van-stepper.van-sku__stepper
                   *
                     font-size 35px
                   button
                      width 50px
                      height 50px
                   input
                      width 80px
                      height 50px
        .van-sku-actions
            height 80px
            *
             text-space 8px
             height 100% !important
             font-size 34px

    .van-toast
        font-size 28px !important
        height: 100px !important
        width: 250px !important


</style>
