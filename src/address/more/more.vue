<template>
    <div class="more">
        <van-sticky @scroll="$root.scroll">
        <nav-top-search :title="'客户消息'"></nav-top-search>
        </van-sticky>
        <main class="main">

            <van-list class="container"
                      v-model="loading"
                      :finished="finished"
            >

                <van-swipe-cell :on-close="onClose"
                                v-for="(ix,i) in list"
                                :key="i"

                >
                   <router-link    :to="'/chat/' + ix.id + '/' + ix.name" tag="li">
                            <div class="body">
                                <div class="left">

                                    <van-image
                                            :src="require('../../../public/1.jpeg')"
                                    />
                                </div>
                                <div class="right">

                                    <div class="title">
                                        <strong>{{ix.name}}</strong>
                                        <span>{{ix.time}}</span>
                                    </div>

                                    <div class="info">
                                        <span>{{ix.lastInfo}}</span>
                                        <span class="tags_info" v-if="ix.tags">{{ix.tags}}</span>
                                    </div>
                                </div>
                            </div>

                            <van-divider />
                        </router-link>

                    <template slot="right">
                        <van-button square type="danger" @click.stop="del(ix.id)" text="删除" />
                    </template>
                    <template slot="right">
                        <van-button square type="info" text="清除" @click.stop="clear(ix)" />
                    </template>
                </van-swipe-cell>
            </van-list>

        </main>
    </div>
</template>

<script>
    import navTopSearch from '../../components/myNavTopSearch'
    export default {
        name: "more",
        data() {
            return {
                list:[
                    {
                        id:1,
                        icon:'../../../public/1.jpeg',
                        name:'张大同',
                        lastInfo:'这个商品存库还有多少钱',
                        time:'2014-12-21',
                        tags:0,
                    },
                    {
                        id:2,
                        icon:'../../../public/1.jpeg',
                        name:'张大同',
                        lastInfo:'这个商品存库还有多少钱',
                        time:'2014-12-21',
                        tags:4,
                    },
                    {
                        id:3,
                        icon:'../../../public/1.jpeg',
                        name:'张大同',
                        lastInfo:'这个商品存库还有多少钱',
                        time:'2014-12-21',
                        tags:0,
                    },


                ],
                loading:true,
                finished:true,
            }

        },
        methods:{
            del(id) {
                const i = this.list.findIndex(v => v.id === id)
                this.list.splice(i,1)

            },
            clear(v) {
              v.tags = 0
            },
            onClose(v) {
                console.log(v)
            }
        },
        components:{
            navTopSearch,
        },
        created() {
            setTimeout(() => {
                this.loading = !this.loading
            },1000)
        }
    }
</script>

<style  lang="stylus">
.more
    .container
        background #fff
        padding 0 34px
        padding-right 0
        li
           padding-top 15px
           padding-right 34px
           cursor pointer
           background #fff
           .body
               display flex
           .left
               overflow hidden
               width 110px
               display flex
               align-items center
               justify-content center
               img
                  border-radius 8px
                  width 100%
                  vertical-align middle
           .right
               margin-left 31px
               display flex
               flex-flow column
               flex 1
               justify-content space-between
               .title,.info
                  display flex
                  justify-content space-between
               .title
                   strong
                     font-size 32px
                   span
                     font-size 28px
                     color #333
               .info
                 span
                   font-size 26px
                   color #333
                   margin-right: 20px;
                 .tags_info
                       width 30px
                       height 30px
                       color #fff
                       border-radius 50%
                       background #F21B1B
                       display flex
                       align-items center
                       justify-content center
        .van-button
           font-size 20px
           height 100%
           text-align: center;

</style>
