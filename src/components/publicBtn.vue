<template>
    <article class="public_btn">
        <van-button  type="primary" :disabled="!config.price" @click="saves">
            {{config.val}}
        </van-button>
    </article>
</template>
<script>
    export default {
        name: "publicBtn",
        props:{
            config:Object,
        },
        methods:{
            saves() {
                this.$emit('saves')
            }
        },
    }
</script>
<style scoped lang="stylus">
  .public_btn
     button
        border 0
        width 100%
        font-size 36px
        border-radius  10px
        height 88px
        background  #F21B1B
</style>
