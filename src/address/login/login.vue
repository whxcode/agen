<template>
    <article class="login">
        <pub-sty :title="'登陆'" :close="false" :btnInfo="'登陆'" @saves="saves">
            <template #body>
                <main class="main">
                    <van-field v-model="name" label="用户"  placeholder="name" />
                    <van-field v-model="pwd"  label="密码"  placeholder="pwd" />
                    <p class="sq" @click="$router.push('/applicationAgent')">申请代理</p>
                </main>

            </template>
        </pub-sty>
    </article>
</template>

<script>
    import pubSty from '../../components/publicStyle'
    export default {
        name: "login",
        data() {
            return {
                name:'',
                pwd:''
            }
        },
        methods:{
            saves() {
                this.$router.push('/home')
            }
        },
        components:{
            pubSty,
        },
    }
</script>

<style  lang="stylus">
.login
    .main
      .sq
        margin-top 40px
        text-align center
        color #666
        font-size 28px
      .van-cell
        height auto
        display flex
        align-items center
        margin 10px 0
        padding 44px 32px
        *
            width auto
            line-height inherit !important
            input,textarea,span
                height 100%
                width 100%

                font-size 32px !important
            input
                padding-left 20px !important

</style>
