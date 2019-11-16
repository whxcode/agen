<template>
    <div class="my_nav_top_search_tables">

        <header class="header">
            <my-nav-top :title="title" />
            <div class="tables">
                <van-tabs v-model="active"
            swipeable
            animated
            sticky
            :swipe-threshold="5"
             >
                    <van-tab v-for="(ix,i) in navs" :title="ix"

                    >
                        <order-list></order-list>
                    </van-tab>
                </van-tabs>
            </div>
            <div class="search">
                <van-search placeholder=""
                            :border="false"
                            v-model="key"
                            shape="round"
                            @change="c"
                />
            </div>

        </header>

    </div>
</template>

<script>
    import myNavTop from '../../components/myNavTop'
    import orderList from './orderList'
    export default {
        name: "myNavTopSearchTables",
        props:{
            title:String,
            navs:Array,

        },
        data() {
            return {
                key:'',
                active:0,
            }
        },

        methods:{
            c() {
                this.$emit('changeKey',this.key)
            }
        },
        components:{
            myNavTop,
            orderList,
        },
        created() {
            console.log(this.$route)
            this.active = + this.$route.params.active
        }
    }
</script>

<style  lang="stylus">
    .my_nav_top_search_tables
        .search
            position absolute
            top 23.06667vw
            left 50%
            transform translateX(-50%)
            width calc(100% - 7.4333333333vw)
            .van-search
                padding 10px 0
                height 88px
                *
                    line-height inherit
                    height 100% !important
                    font-size 32px !important
                .van-icon
                    font-size 32px !important
                    display flex !important
                    align-items center !important

        .tables
            .van-tabs__wrap
                height auto !important
                *
                  height auto !!important
                  line-height inherit !important
            .van-tabs__nav
                font-size 30px !important
            .van-tab
                font-size 28px
                display: flex;
                line-height: 15.866667vw;
                justify-content: center;
                align-items: center;
                margin-bottom 20px
            .van-tabs__line
               height .8vw

</style>
