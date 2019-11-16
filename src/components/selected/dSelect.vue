<template>
    <article class="d_selected">
    <van-popup v-model="config.show" position="bottom">
        <van-picker
                show-toolbar
                :columns="config.columns"
                @cancel="config.showPicker = false"
                @confirm="confirm"
        />
    </van-popup>
    </article>
</template>

<script>
    export default {
        name: "dSelect",
        props:{
            config:Object,
            columns:Array,
        },
        methods:{
            confirm(v) {
                this.config.value = v
                this.config.show = false
                this.$emit(`confirm`,v)
            }
        }
    }
</script>

<style  lang="stylus">
.d_selected
    .van-ellipsis
        padding 20px 0 !important
        height auto !important
        font-size 30px !important
</style>
