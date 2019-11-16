<template>
    <article class="agentAudit">
        <header class="header">
            <nav-top :title="'代理审核'"/>
            <van-divider />
        </header>
        <main class="main">
            <h1 class="title">
                <van-icon name="info-o" />
            </h1>
            <h3>资料审核中!</h3>
            <p>等待审核、审核完成工人人员会联系您的</p>
        </main>
    </article>
</template>

<script>
    import navTop from '../../components/myNavTop'
    export default {
        name: "agentAudit",
        components:{
            navTop,

        },
        data() {
            return {

            }
        },
        methods:{

        },
    }
</script>

<style  lang="stylus">
  .agentAudit
        .header
            background #fff
        .main
            background #fff
            margin-top 10px
            padding 0 0 50px
            text-align center
            .title
                color #F21B1B
                padding 120px 0 60px
                font-size 150px
            h3
                color #333
                font-size 36px
                padding 0 0 80px
            p
                color #999
                font-size 28px

</style>
