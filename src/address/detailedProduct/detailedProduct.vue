<template>
    <article class="detailed_product">
        <header class="header">
            <nav-top :title="'商品详细'"></nav-top>
            <van-sticky>
            <nav class="nav" ref="nav">
                <h2 @click="getGoods">商品</h2>
                <h2 @click="getGoodsInfo">详情</h2>
                <h2 @click="changes">加入库存</h2>
            </nav>
            </van-sticky>
        </header>
        <main class="main">
            <section class="goods" ref="goods">
                <goods :d="d" />
            </section>

            <section class="goods_info" ref="goodsInfo">
                <goods-info :d="d" />
            </section>
        </main>
        <accession-purchase :config="config"/>
    </article>
</template>

<script>

    import navTop from '../../components/myNavTop'
    import goods from './goods'
    import goodsInfo from './goodsInfo'
    import accessionPurchase from '../../components/accessionPurchase'
    export default {
        name: "detailedProduct",
        data() {
          return {
              d:{
                  code:0,
                  msg:"success",
                  data: {
                      sprice: 0.01,
                      gid: 57,
                      ggid_list: [{"ggid":1,"ggname":"3年保修"},{"ggid":2,"ggname":"7天无理由退货"}],
                      banner: ["https://qhome.zxshowstar.com/2019/07/88ab5201907166713.jpg","https://qhome.zxshowstar.com/2019/07/88ab5201907166713.jpg"],
                      img: `<p><img src="https://static.zxshowstar.com/qmkt/2019/07/d73a8201907048320.jpg" alt="" />
                                <img src="https://static.zxshowstar.com/qmkt/2019/07/03633201907041523.jpg" />
                            </p>`,
                      vedio: [],
                      gname: "自动下滑滑盖指纹锁",
                      description: "含锁芯 标配锁体",
                      one: "尺寸",
                      two: "色彩",
                      two_list: `["红古铜","土豪金","科技银"]`,
                      cost: "0.00",
                      carriage: "0.00",
                      g_params: [
                            {"title":"外材质","content":"锌合金"},
                            {"title":"内材质","content":"锌合金"},
                          ],
                      a_sale: [{"title":"7天包退","content":"7天内非故意损坏无理由退换"}],
                      classify: [
                          {
                              gid: 57,
                              gcid: 42,
                              gcname: "单人座",
                              gcimg: "http://qhome.zxshowstar.com/2019/07/66279201907045066.jpg",
                              fprice: "0.01",
                              oprice: "0.01",
                              sprice: 0.01,
                              stock: 0
                          }
                      ]
                  }
              },
              config:{show:false,data:{}}
          }
        },
        components:{
            navTop,
            goods,
            goodsInfo,
            accessionPurchase,
        },
        created() {
            console.log(1)
          this.config.data = this.d.data
        },
        props:{
            id:{
                required:true,
            }
        },
        methods:{
            getGoods() {
                 const h = this.$refs.goods.offsetTop
                console.log(h)
                this.doWorkScroll(h)
            },
            getGoodsInfo() {

                const h = this.$refs.goodsInfo.offsetTop
                console.log(h)
                this.doWorkScroll(h)
            },
            doWorkScroll(h) {
                let i = window.scrollY
                h -= this.$refs.nav.offsetHeight
                const id = window.setInterval(v => {
                    if(i < h) {
                        if(i >= (h - 10)) {
                            window.clearInterval(id)
                        }
                        console.log(i,h)
                        window.scrollTo(0,i += 10)
                    } else {
                        if(i <= h) {
                            window.clearInterval(id)
                        }
                        window.scrollTo(0,i -= 10)
                    }

                })
            },
            active() {

            },
            changes() {
                console.log(1)
              this.config.show = !this.config.show
            }
        },
    }
</script>

<style  lang="stylus">
.detailed_product
    background #EFEFEF
    .header
        background #fff
        .nav
           height 88px
           background rgba(255,255,255,.8)
           backdrop-filter blur(20px)
           padding 26px 0
           justify-content space-around
           display flex
           h2
             font-size 36px

</style>

