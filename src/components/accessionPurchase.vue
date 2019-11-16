<template>
    <article class="accession_purchase">
        <van-sku
                v-model="config.show"
                :sku="sku"
                :goods="goods"
                :goods-id="goodsId"
                :hide-stock="sku.hide_stock"
                @open-preview="open"
        >
            <template slot="sku-actions" slot-scope="props">
                <div class="van-sku-actions">
                    <van-button
                            square
                            size="large"
                            type="warning"
                            @click="onPointClicked"
                    >
                        上架
                    </van-button>
                    <!-- 直接触发 sku 内部事件，通过内部事件执行 onBuyClicked 回调 -->
                    <van-button
                            square
                            size="large"
                            type="danger"
                            @click="props.skuEventBus.$emit('sku:buy')"
                    >
                        下架
                    </van-button>
                </div>
            </template>
        </van-sku>
    </article>
</template>

<script>
    export default {
        name: "accessionPurchase",
        props:{
            config:Object,
        },
        data() {
            return {
                sku: {
                    // 所有sku规格类目与其值的从属关系，比如商品有颜色和尺码两大类规格，颜色下面又有红色和蓝色两个规格值。
                    // 可以理解为一个商品可以有多个规格类目，一个规格类目下可以有多个规格值。
                    tree: [
                        {
                            k: '颜色', // skuKeyName：规格类目名称
                            v: [
                                {
                                    id: '30349', // skuValueId：规格值 id
                                    name: '红色', // skuValueName：规格值名称

                                },
                                {
                                    id: '1215',
                                    name: '蓝色',

                                }
                            ],
                            k_s: 's1' // skuKeyStr：sku 组合列表（下方 list）中当前类目对应的 key 值，value 值会是从属于当前类目的一个规格值 id
                        }
                    ],
                    // 所有 sku 的组合列表，比如红色、M 码为一个 sku 组合，红色、S 码为另一个组合
                    list: [
                        {
                            id: 2259, // skuId，下单时后端需要
                            price: 100, // 价格（单位分）
                            s1: '1215', // 规格类目 k_s 为 s1 的对应规格值 id
                            s2: '30349', // 规格类目 k_s 为 s2 的对应规格值 id
                            s3: '0', // 最多包含3个规格值，为0表示不存在该规格
                            stock_num: 6 // 当前 sku 组合对应的库存
                        },

                    ],
                    price: '1.00', // 默认价格（单位元）
                    stock_num: 6, // 商品总库存
                    collection_id: 2261, // 无规格商品 skuId 取 collection_id，否则取所选 sku 组合对应的 id
                    none_sku: false, // 是否无规格商品
                    messages: [],
                    hide_stock: false // 是否隐藏剩余库存
                },

                goodsId:1,

                initialSku:{
                    // 键：skuKeyStr（sku 组合列表中当前类目对应的 key 值）
                    // 值：skuValueId（规格值 id）
                    s1: '30349',
                    s2: '1193',
                    // 初始选中数量
                    selectedNum: 3
                },

                goods: {
                    // 商品标题
                    title: '测试商品',
                    // 默认商品 sku 缩略图
                    picture: ['https://qhome.zxshowstar.com/2019/08/e957820190801890.gif']
                },

                customStepperConfig: {
                    // 自定义限购文案
                    quotaText: '每次限购xxx件',
                    // 自定义步进器超过限制时的回调
                    handleOverLimit: (data) => {
                        const { action, limitType, quota, quotaUsed } = data;

                        if (action === 'minus') {
                            Toast('至少选择一件商品');
                        } else if (action === 'plus') {
                            // const { LIMIT_TYPE } = Sku.skuConstants;
                            if (limitType === LIMIT_TYPE.QUOTA_LIMIT) {
                                let msg = `单次限购${quota}件`;
                                if (quotaUsed > 0) msg += `，你已购买${quotaUsed}`;
                                Toast(msg);
                            } else {
                                Toast('库存不够了');
                            }
                        }
                    },
                    // 步进器变化的回调
                    handleStepperChange: currentValue => {},
                    // 库存
                    stockNum: 1999,
                    // 格式化库存
                    stockFormatter: stockNum => {},
                },

                skuData: {
                    // 商品 id
                    goodsId: '946755',
                    // 留言信息
                    messages: {
                        message_0: '12',
                        message_1: ''
                    },
                    // 另一种格式的留言，key 不同
                    cartMessages: {
                        '留言1': 'xxxx'
                    },
                    // 选择的商品数量
                    selectedNum: 1,
                    // 选择的 sku 组合
                    selectedSkuComb: {
                        id: 2257,
                        price: 100,
                        s1: '30349',
                        s2: '1193',
                        s3: '0',
                        stock_num: 111
                    }
                },
            }
        },
        methods:{
            open() {
                console.log(123123)
            },

            onBuyClicked() {

            },

            onAddCartClicked() {

            },

            onPointClicked() {

            },
        },
        created() {
            this.sku.price = this.config.data.sprice
        },
        updated() {
            this.sku.price = this.config.data.sprice
        }
    }
</script>

<style scoped lang="stylus">

</style>
