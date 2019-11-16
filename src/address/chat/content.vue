<template>
    <article class="chat_content">
        <aside class="list_info">
            <ul>
                <li v-for="(ix,i) in msgInfo" :key="i"

                    :class="[ix.typeN || 'er']"
                >
                    <div class="icon_wrap">
                        <img :src="require('../../../public/1.jpeg')" alt="" class="icon">
                    </div>

                    <div>{{ix.info}}</div>
                </li>
            </ul>
        </aside>
    </article>
</template>

<script>
    export default {
        name: "content",
        props:{
            msgInfo:Array,
        },
    }
</script>

<style scoped lang="stylus">
.chat_content
     height 100%
     overflow-y scroll
    .list_info
            padding 0 24px
            width 100%
            top 0
            height calc(100% - (98px))
            position absolute
            background #FAFAF8
            ul
                overflow-y: scroll;
                height 100%
                li
                    margin 29px 0
                    display flex
                    .icon_wrap
                        width 92.5px
                        height 92.5px
                        border-radius 50%
                        overflow hidden
                        padding 0
                        .icon
                            width 100%
                    div
                        display flex
                        background #fff
                        padding 0 24px
                        align-items center
                        margin-left 16px
                .er
                    justify-content: flex-end;
                    .icon
                        order 1
</style>
