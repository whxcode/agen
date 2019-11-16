<template>
    <div class="message">
        <van-sticky
                @scroll="$root.scroll"
        >
            <header class="header">
                <my-nav-top :title="title" />
            </header>
        </van-sticky>
        <main class="main">
            <msg-list></msg-list>

        </main>
    </div>
</template>
<script>
    import msgList from '../home/messageList'
    import myNavTop from '../../components/myNavTop'
    export default {
        name: "message",
        data() {
          return {
              title:'订单消息列表'
          }
        },
        components:{
            myNavTop,
            msgList,
        },
    }
</script>
<style  lang="stylus">
    .message
        .header
           background #fff


        .main
            margin-top 20px

</style>
