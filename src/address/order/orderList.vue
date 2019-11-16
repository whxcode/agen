<template>
    <article class="order_list">
        <!-- 库存列表 -->
        <article class="ity_list">
            <van-list
                    v-model="loading"
                    :finished="finished"
                    finished-text="没有更多了"
                    @load="onLoad"
            >
                <div class="con_ity_list" v-for="(ix,i) in jiaList.data"

                @click="$router.push('/orderDetails')"
                >
                        <card :d="ix" :key="i">
                            <template #info>
                                {{ix.status}}
                            </template>
                        </card>
                </div>
            </van-list>
        </article>
    </article>
</template>
<script>
    import card from './orderListCard'
    export default {
        name: "orderList.vue",
        data() {
            return {
                show:false,
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
                jiaList:{
                    code: 0,
                    msg: "success",
                    data: [
                        {
                            oid: 376,
                            atid: 205,
                            name: "天津市河东区吧乐吧体验店1",
                            log: "http://qhome.zxshowstar.com/2019/07/64ce8201907042120.jpg",
                            code: "201907251604792570",
                            status: "交易完成",
                            ostatus: "7",
                            create_time: "2019-07-25 20:46:37",
                            sprice: "0.01",
                            all: 1,
                            gcidList: [
                                {
                                    oid: 376,
                                    gid: 58,
                                    gcid: 43,
                                    gname: "自动下滑滑盖指纹锁",
                                    gcname: "RX0822半导体",
                                    gcimg: "http://qhome.zxshowstar.com/2019/07/66279201907045066.jpg",
                                    two_name: "红古铜",
                                    oprice: "750.00",
                                    sprice: "0.01",
                                    num: 1
                                }
                            ]
                        },
                        {
                            oid: 375,
                            atid: 205,
                            name: "天津市河东区吧乐吧体验店1",
                            log: "http://qhome.zxshowstar.com/2019/07/64ce8201907042120.jpg",
                            code: "201907256662112742",
                            status: "交易完成",
                            ostatus: "7",
                            create_time: "2019-07-25 20:46:28",
                            sprice: "1.15",
                            all: 1,
                            gcidList: [
                                {
                                    oid: 375,
                                    gid: 86,
                                    gcid: 97,
                                    gname: "二十四史",
                                    gcname: "二十册史书",
                                    gcimg: "https://qhome.zxshowstar.com/2019/07/6e962201907154843.png",
                                    two_name: "中国古代史",
                                    oprice: "39.00",
                                    sprice: "1.15",
                                    num: 1
                                }
                            ]
                        },
                        {
                            oid: 363,
                            atid: 205,
                            name: "天津市河东区吧乐吧体验店1",
                            log: "http://qhome.zxshowstar.com/2019/07/64ce8201907042120.jpg",
                            code: "201907253087865783",
                            status: "等待卖家发货",
                            ostatus: "2",
                            create_time: "2019-07-25 17:54:01",
                            sprice: "6.07",
                            all: 4,
                            gcidList: [
                                {
                                    oid: 363,
                                    gid: 58,
                                    gcid: 43,
                                    gname: "自动下滑滑盖指纹锁",
                                    gcname: "RX0822半导体",
                                    gcimg: "http://qhome.zxshowstar.com/2019/07/66279201907045066.jpg",
                                    two_name: "红古铜",
                                    oprice: "750.00",
                                    sprice: "0.01",
                                    num: 4
                                }
                            ]
                        },
                        {
                            oid: 362,
                            atid: 205,
                            name: "天津市河东区吧乐吧体验店1",
                            log: "http://qhome.zxshowstar.com/2019/07/64ce8201907042120.jpg",
                            code: "201907258594307987",
                            status: "等待买家付款",
                            ostatus: "1",
                            create_time: "2019-07-25 17:53:47",
                            sprice: "1.15",
                            all: 1,
                            gcidList: [
                                {
                                    oid: 362,
                                    gid: 86,
                                    gcid: 97,
                                    gname: "二十四史",
                                    gcname: "二十册史书",
                                    gcimg: "https://qhome.zxshowstar.com/2019/07/6e962201907154843.png",
                                    two_name: "中国古代史",
                                    oprice: "39.00",
                                    sprice: "1.15",
                                    num: 1
                                }
                            ]
                        },
                        {
                            oid: 361,
                            atid: 205,
                            name: "天津市河东区吧乐吧体验店1",
                            log: "http://qhome.zxshowstar.com/2019/07/64ce8201907042120.jpg",
                            code: "201907257850571133",
                            status: "等待买家付款",
                            ostatus: "1",
                            create_time: "2019-07-25 15:59:46",
                            sprice: "1.15",
                            all: 1,
                            gcidList: [
                                {
                                    oid: 361,
                                    gid: 86,
                                    gcid: 97,
                                    gname: "二十四史",
                                    gcname: "二十册史书",
                                    gcimg: "https://qhome.zxshowstar.com/2019/07/6e962201907154843.png",
                                    two_name: "中国古代史",
                                    oprice: "39.00",
                                    sprice: "1.15",
                                    num: 1
                                }
                            ]
                        },
                        {
                            oid: 350,
                            atid: 205,
                            name: "天津市河东区吧乐吧体验店1",
                            log: "http://qhome.zxshowstar.com/2019/07/64ce8201907042120.jpg",
                            code: "201907254156406562",
                            status: "等待买家付款",
                            ostatus: "1",
                            create_time: "2019-07-25 12:31:24",
                            sprice: "115.00",
                            all: 1,
                            gcidList: [
                                {
                                    oid: 350,
                                    gid: 85,
                                    gcid: 96,
                                    gname: "711商品",
                                    gcname: "商品2",
                                    gcimg: "https://qhome.zxshowstar.com/2019/07/0f19a201907114940.png",
                                    two_name: "白色",
                                    oprice: "250.00",
                                    sprice: "115.00",
                                    num: 1
                                }
                            ]
                        },
                        {
                            oid: 349,
                            atid: 205,
                            name: "天津市河东区吧乐吧体验店1",
                            log: "http://qhome.zxshowstar.com/2019/07/64ce8201907042120.jpg",
                            code: "201907250724969993",
                            status: "交易完成",
                            ostatus: "7",
                            create_time: "2019-07-25 12:29:36",
                            sprice: "0.04",
                            all: 4,
                            gcidList: [
                                {
                                    oid: 349,
                                    gid: 58,
                                    gcid: 43,
                                    gname: "自动下滑滑盖指纹锁",
                                    gcname: "RX0822半导体",
                                    gcimg: "http://qhome.zxshowstar.com/2019/07/66279201907045066.jpg",
                                    two_name: "红古铜",
                                    oprice: "750.00",
                                    sprice: "0.01",
                                    num: 4
                                }
                            ]
                        },
                        {
                            oid: 348,
                            atid: 205,
                            name: "天津市河东区吧乐吧体验店1",
                            log: "http://qhome.zxshowstar.com/2019/07/64ce8201907042120.jpg",
                            code: "201907255388144405",
                            status: "交易完成",
                            ostatus: "7",
                            create_time: "2019-07-25 11:48:01",
                            sprice: "0.01",
                            all: 1,
                            gcidList: [
                                {
                                    oid: 348,
                                    gid: 54,
                                    gcid: 39,
                                    gname: "自动下滑滑盖指纹锁",
                                    gcname: "单人座",
                                    gcimg: "https://static.zxshowstar.com/qmkt/2019/07/ba47420190703811.jpg",
                                    two_name: "粉色",
                                    oprice: "0.01",
                                    sprice: "0.01",
                                    num: 1
                                }
                            ]
                        },
                        {
                            oid: 331,
                            atid: 205,
                            name: "天津市河东区吧乐吧体验店1",
                            log: "http://qhome.zxshowstar.com/2019/07/64ce8201907042120.jpg",
                            code: "201907259277445066",
                            status: "等待买家付款",
                            ostatus: "1",
                            create_time: "2019-07-25 10:44:26",
                            sprice: "1.15",
                            all: 1,
                            gcidList: [
                                {
                                    oid: 331,
                                    gid: 86,
                                    gcid: 97,
                                    gname: "二十四史",
                                    gcname: "二十册史书",
                                    gcimg: "https://qhome.zxshowstar.com/2019/07/6e962201907154843.png",
                                    two_name: "中国古代史",
                                    oprice: "39.00",
                                    sprice: "1.15",
                                    num: 1
                                }
                            ]
                        },
                        {
                            oid: 330,
                            atid: 205,
                            name: "天津市河东区吧乐吧体验店1",
                            log: "http://qhome.zxshowstar.com/2019/07/64ce8201907042120.jpg",
                            code: "201907259146830572",
                            status: "等待卖家发货",
                            ostatus: "2",
                            create_time: "2019-07-25 10:34:37",
                            sprice: "0.01",
                            all: 1,
                            gcidList: [
                                {
                                    oid: 330,
                                    gid: 57,
                                    gcid: 42,
                                    gname: "自动下滑滑盖指纹锁",
                                    gcname: "单人座",
                                    gcimg: "http://qhome.zxshowstar.com/2019/07/66279201907045066.jpg",
                                    two_name: "红古铜",
                                    oprice: "0.01",
                                    sprice: "0.01",
                                    num: 1
                                }
                            ]
                        }
                    ]
                },
                list:[],
            }
        },

        methods: {
            onLoad() {
                // 异步更新数据
                setTimeout(() => {
                    for (let i = 0; i < 2; i++) {
                        this.list.push(this.d);
                    }
                    // 加载状态结束
                    this.loading = false;

                    // 数据全部加载完成
                    if (this.list.length >= 5) {
                        this.finished = true;
                    }
                }, 500);
            },


        },
        components:{
            card,
        },
        created() {
            this.loading = false
            this.finished =  false
            this.list = []
            this.jiaList.data.forEach(v => {
                v.btns = []
                if(+v.ostatus === 7) {
                    v.btns.push({
                        val:`再次购买`,
                        c:'w_c',
                        path:'/confirmOrder/0'
                        })
                }
                if(+v.ostatus === 1) {
                    v.btns.push({
                        val:'取消订单',
                        c:'q_x_d_d',

                    },
                        {
                            val:'去支付',
                            c:'q_z_f',
                            path:'/confirmOrder/0'
                        })
                }
            })
        }
    }
</script>

<style  lang="stylus">
        .van-tabs__content
            background #efefef
            padding 24px 0
        .con_ity_list
                background #fff
                margin 20px 26px
                border-radius 22px
</style>
