<template>
  <div id="app" :style="{'padding-bottom':$root.tabberH}">
    <transition name="fade">
      <router-view />
    </transition>
    <van-tabbar
     active-color="#F21B1B"
                router
     v-model="$root.v"
     :style="{height:$root.tabberH}"
    >
      <van-tabbar-item :icon="ix.icon"
      v-for="(ix,i) in tabbar"
       :key="i"
       :to="ix.path"
       replace
      >{{ix.title}}
      </van-tabbar-item>

    </van-tabbar>

  </div>
</template>

<script>

import V from 'vconsole'

export default {
  name:`app`,
  data() {
    return {
      tabbar:[
        {
          title:'首页',
          path:'/home',
          icon:'warning',
        },
        {
          title:'消息',
          path:'/more',
          icon:'more',
        },
        {
          title:'订购',
          path:'/inventory',
          icon:'shopping-cart',
        },
        {
          title:'我的',
          path:'/my',
          icon:'manager',
        },
      ],
    }
  },
  created() {
    new V()
  }
}

</script>

<style lang="stylus" >
  #app
    padding-bottom

  .van-hairline--top-bottom
    transition all .2s
    overflow hidden
    *
      transition color .2s !important
    .van-icon
      font-size 48px
    .van-tabbar-item__text
      font-size 20px
  .van-tabbar
    background rgba(255,255,255,.9) !important
    backdrop-filter blur(10px) !important
  .fade-enter-active, .fade-leave-active {
      position fixed !important
      top 0 !important
      height 100%
      width 100% !important
      transition: opacity .2s;
    }
  .fade-enter, .fade-leave-to /* .fade-leave-active below version 2.1.8 */ {
    opacity: 0;
  }
  .van-uploader__wrapper
    display: flex;
    justify-content: space-around;
  .van-image__error,.van-image-preview__image
    background rgba(255,255,255,.1) !important
    backdrop-filter blur(10px) !important
  .van-image-preview__index
    font-size 36px !important
  .van-list__finished-text
    font-size 28px !important
  .van-area
    .van-icon
      font-size 28px !important
    .van-picker__toolbar
      display flex
      *
        font-size 30px
        align-items center
    .van-picker__columns
      *
        font-size 28px !important

</style>
