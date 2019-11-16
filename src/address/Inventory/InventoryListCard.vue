<template>
    <router-link class="content" :to="'/detailedProduct/' + d.gid" tag="div">
        <van-skeleton  :row="3" :loading="loading">
        <div class="titles">
            <div class="left">
                <van-image
                        fit="contain"
                        :src="d.banner"
                />
            </div>
            <div class="right">
                <p class="na">
                    {{d.gname}}
                </p>
                <p class="descr">
                    {{d.descr}}
                </p>
                <p class="price">
                    <span class="p">$:{{d.sprice}}</span>
                    <van-tag plain>{{d.atid_con}}</van-tag>
                    <span class="stock">库存:{{d.stock}}</span>
                </p>
            </div>
        </div>
        <div class="add">
            <van-tag color="#F3B235" @click.stop.native="add(d)">加库存</van-tag>
            <van-tag color="#F21B1B">下架</van-tag>
        </div>
        <van-divider />
        </van-skeleton>
    </router-link>
</template>
<script>
    export default {
        name: "InventoryListCard",
        props:{
            d:Object,
        },
        data() {
            return {
                loading:true,
            }
        },
        created() {
          setTimeout(v => {
              this.loading = false
          },50)
        },
        methods:{
            add(d) {
               this.$emit('changes',d)
            }
        },
    }
</script>
<style scoped lang="stylus">
    @import "../../../public/stylus/publicFunc.styl"
    .content
        background #fff
        overflow hidden
        border-radius 32px
        margin 20px 0
        my-skeleton(150px,10px)
        .titles
            display flex
            .left
                display flex
                justify-content center
                align-items center
                width 200px
                img
                    width 100%
            .right
                flex 1
                display flex
                flex-flow column
                justify-content space-between
                margin-left 20px
                color #666
                .na
                    font-size 26px
                .descr
                    font-size 24px
                .price
                    display flex
                    justify-content space-between
                    .p
                        font-size 26px
                        color $colorred
                    .van-tag

                        font-size 20px
                        color  #FEB831
                    .stock
                        font-size 24px
                        color $color333
</style>
