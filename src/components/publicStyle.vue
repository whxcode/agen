<template>
    <article class="pub_sty">
        <header class="header">
            <nav-top :title="title" :close="close"/>
        </header>
        <div class="main" style="z-index: 22">
            <div class="body" :style="colors || ''">
                <slot name="body">

                </slot>
            </div>
            <div class="btn" @click="save">
                {{btnInfo ? btnInfo : info}}
            </div>
        </div>
    </article>
</template>

<script>
    import navTop from './myNavTop'
    export default {
        name: "pub_sty",
        components:{
            navTop,

        },
        data() {
          return {
              info:'保存'
          }
        },
        props:['title','colors','close','btnInfo'],
        methods:{
            save() {
                this.$emit(`saves`)
            }
        },
    }
</script>

<style  lang="stylus">
    .pub_sty
        .header
            background #fff
        .main
            color #fff
            width 100%
            position absolute
            height calc(100% - 128px)
            .body
                position absolute
                width 100%
                overflow-y scroll
                height calc(100% - 100px)
            .btn
                font-size 36px
                background rgb(242,27,27)
                backdrop-filter blur(10px)
                height 100px
                display flex
                justify-content center
                align-items center
                position absolute
                width 100%
                bottom 0

</style>
