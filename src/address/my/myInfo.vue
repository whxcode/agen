<template>
    <article class="my_info">
        <header class="header">
            <navTop  :title="'我的信息'"/>
            <van-divider />
        </header>
        <main class="main">
                <van-field
                        v-for="(ix,i) in list"
                        :border="true"
                        :label="ix.title"
                        :placeholder="ix.val"
                        disabled />
        </main>
    </article>
</template>

<script>
    import navTop from '../../components/myNavTop'
    export default {
        name: "my_info",
        data() {
            return {
                list:[
                    {
                      title:'联系人',
                      val:'可爱的鸭'
                    },
                    {
                        title:'注册手机号',
                        val:'17345241280'
                    },
                    {
                        title:'品牌',
                        val:'小米'
                    },
                    {
                        title:'代理级别',
                        val:'一级代理(区域)'
                    },
                    {
                        title:'代理区域',
                        val:'天朝',
                    },
                    {
                        title:'费用',
                        val:'10万'
                    }
                ],
            }
        },
        components:{
            navTop,
        }
    }
</script>

<style  lang="stylus">
    .my_info
        background #fff

        .main
            padding 0 33px
            .van-cell
                display flex
                align-items center
                margin 10px 0
                padding 30px 0
                *
                    width auto
                    line-height inherit !important
                    input,textarea,span
                        width 100%
                        font-size 32px !important
                    input
                        text-align right


</style>
