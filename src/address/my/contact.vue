<template>
    <aside class="contact">
        <van-cell title="联系我们" is-link @click="f"

        >

        </van-cell>
        <van-popup
                closeable
                v-model="show"
                position="bottom"
                round
                :style="{ height: '60%',padding:'20px 0 0' }"
        >
            <van-cell title="客户微信"  @click="$root.copy()" />
            <van-cell title="客户电话"  @click="$root.copy()" />

        </van-popup>
    </aside>
</template>

<script>
    export default {
        name: "contact",
        data() {
            return {
                show:false,
            }
        },
        methods:{
            f() {
                this.show = !this.show
            },
        }
    }
</script>

<style  lang="stylus">
    .contact
        .van-icon-cross
            font-size 30px !important
</style>
