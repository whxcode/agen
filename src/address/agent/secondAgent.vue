<template>
    <article class="second_agent agent_button_all">
        <first-agent :agent-data="agentData"/>
        <van-field
                label="店铺名称"
                :value="agentData.shopName"
                @click="configSelected.show = true"
                placeholder="店铺名称"
                readonly

        >
            <van-button slot="button" size="small" type="primary">
                <van-icon name="arrow-down" />
            </van-button>
        </van-field>
        <van-field
                label="店铺地址"
                :value="agentData.shopAddr"
                @click="addSelected.show = true"
                placeholder="店铺地址"
                readonly

        >
            <van-button slot="button" size="small" type="primary">
                <van-icon name="arrow-down" />
            </van-button>
        </van-field>
            <van-field

                    v-model="agentData.addInfo"
                    rows="1"
                    autosize
                    label="店铺详细地址"
                    type="textarea"
                    placeholder="请输入"
            />
        <d-selected :config="configSelected"  @confirm="confirm" />
        <change-address :config="addSelected" @getAddr="getAddr"/>
    </article>
</template>

<script>
    import firstAgent from '../agent/firstAgent'
    import dSelected from '../../components/selected/dSelect'
    import changeAddress from '../../components/changeAddress'
    export default {
        name: "secondAgent",
        data() {
          return {
              configSelected:{
                  show:false,
                  value:'',
                  columns: ['php', 'java', 'c'],
              },
              addSelected:{
                  show:false,
              }
          }
        },
        methods:{
            confirm(v) {
                this.agentData.shopName = v
            },
            getAddr(v) {
                this.agentData.shopAddr = v.map(v => v.name).join('/')
                console.log(this.agentData)
            }
        },
        props:{
            agentData:Object,
        },
        components:{
            firstAgent,
            dSelected,
            changeAddress,
        },
    }
</script>

<style  lang="stylus">
.agent_button_all
    .van-field__button
        button
            border none
            color #999
            background none
    .van-field__body
        .van-cell__value
            textarea
              height 100px !important

</style>
