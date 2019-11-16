<template>
    <article class="treaty">
        <van-sticky @scroll="$root.scroll">
        <header class="header">

            <navTop  :title="'我的合同'"/>
        </header>
        </van-sticky>
        <main class="main">
           
        </main>
    </article>
</template>

<script>
    import navTop from '../../components/myNavTop'
    export default {
        name: "treaty",
        components:{
            navTop,
        }
    }
</script>

<style scoped lang="stylus">
.treaty
    .header
        background rgba(255,255,255,.8)
        backdrop-filter blur(20px)
    .main
        img
           width 100%
</style>
