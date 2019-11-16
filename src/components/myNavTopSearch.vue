<template>
    <div class="my_nav_top_search">
        <header class="header">
            <my-nav-top :title="title" />
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
    import myNavTop from './myNavTop'

    export default {
        name: "myNavTopSearch",
        props:{
            title:String,
        },
        data() {
          return {
              key:''
          }
        },
        methods:{
            c() {
                this.$emit('changeKey',this.key)
            }
        },
        components:{
            myNavTop,
        },
    }
</script>

<style  lang="stylus">
  .my_nav_top_search
    .header
        padding-bottom: 10px;
        background: rgba(255,255,255,.8);
        backdrop-filter blur(10px)
    .van-search
            padding-top  0 !important
            padding-bottom  0 !important
            height 70px !important
    .van-search__content,.van-field__body,.van-field__control
        font-size 28px !important
        height 100% !important
    .van-field__left-icon
        display: flex;
        align-items: center;
    .van-icon
        font-size: 40px !important;
    input
       display flex
       padding 0
       font-size 28px
       align-items center
</style>
