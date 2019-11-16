<template>

<van-skeleton  :config.row="5" :loading="config.loading">

</van-skeleton>

</template>

<script>
    export default {
        name: "skeletion",
        props:{
            config:{
              required:true,
              type:Object,
            },
        },
    }
</script>

<style  lang="stylus">
    .van-skeleton
        height 304px !important
    .van-skeleton__content
        display flex
        flex-flow column
        justify-content space-between
        .van-skeleton__row
            flex 1
            border-radius 22px
</style>
