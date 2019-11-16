<template>
    <article class="operation_center agent_button_all">
        <van-field
                readonly
                clickable
                label="代理区域"
                :value="agentData.addrSelect.value"
                placeholder="选择区域"
                @click="agentData.addrSelect.show = true"
        >
            <van-button slot="button" size="small" type="primary">
                <van-icon name="arrow-down" />
            </van-button>
        </van-field>
        <!-- 选择地址 -->
        <change-addr :config="agentData.addrSelect" @getAddr="getAddr"/>
    </article>
</template>

<script>
    import changeAddr from '../../components/changeAddress'
    export default {
        name: "operationCenter",
        data() {
            return {
                addrConfig:{
                    show:false,

                },
                value:'',
            }
        },
        props:{
            agentData:Object,
        },
        methods:{
            getAddr(v) {
                this.agentData.addrSelect.value = v.map(v => v.name).join('/')
            }
        },
        components:{
            changeAddr,
        },
    }
</script>

<style scoped lang="stylus">

</style>
