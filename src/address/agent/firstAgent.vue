<template>
    <article class="first_agent">
        <operation-center :agentData="agentData"/>
        <!-- 选择地址 -->
        <van-field
                v-model="agentData.feiYong"
                label="费用"
                placeholder="请输入费用"
        />

    </article>
</template>

<script>
    import operationCenter from './operationCenter'
    export default {
        name: "firstAgent",
        data() {
            return {

            }
        },
        props:{
            agentData:Object,
        },
        components:{
            operationCenter,
        },
    }
</script>

<style scoped lang="stylus">

</style>
