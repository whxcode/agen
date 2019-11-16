<template>
    <div class="my_nav_top">
        <h1>
            <van-icon name="arrow-left" @click="prev" v-show="close"/>
            <strong>{{title}}</strong>
        </h1>
    </div>
</template>

<script>
    export default {
        name: "myNavTop",
        props:{
            title:String,
            close:{
                type:Boolean,
                default:true,
            },
        },
        methods:{
            prev() {
              const paths = this.$root.path.shift() || '/home'
              this.$router.push({path:paths})
              this.$root.pathFlag = true
            }
        }
    }
</script>

<style scoped lang="stylus">
    .my_nav_top
      padding-left 28px
      height 128px
      display flex
      user-select none
      select none
      transition height .4s
      align-items center
      h1
        font-size 42px
        strong
          margin-left 10px
</style>
