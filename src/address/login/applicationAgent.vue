<template>
    <article class="application_agent">
        <header class="header">
            <navTop  :title="'申请代理'"/>
            <van-divider />
        </header>
        <main class="main">
           <van-cell-group :border="false">

                <van-field
                        label="联系人"
                        placeholder="请输入联系人姓名"
                />

                <van-field
                        label="代理级别"
                        placeholder="选择要代理的级别"
                        :value="configSelected.value"
                        readonly
                        loading
                        :swipe-duration="2000"
                        @click="configSelected.show = true"

                />

            </van-cell-group>

            <div class="middle">

             <component :is="dynamic" :agentData="agentData">

             </component>

            </div>

            <verification-phone :config="config"/>

        </main>

        <footer class="footer">
            <div class="h_t">
                <strong>
                    <van-checkbox v-model="t" />
                </strong>
                <span>我已同意</span>
                <span @click="config.show = !config.show">《合作协议》</span>
            </div>
            <div class="btn">
                <van-button type="danger" :border="false" :disabled="!t"
                @click="$router.push('/agentAudit')"
                >
                    申请代理
                </van-button>
            </div>
        </footer>

        <cooperation-agreement :config="config"/>

        <d-selected :config="configSelected"  @confirm="confirm"/>

    </article>
</template>

<script>
    import navTop from '../../components/myNavTop'
    import pubBtn from '../../components/publicBtn'
    import cooperationAgreement from './cooperationAgreement.vue'
    import dSelected from '../../components/selected/dSelect'
    import verificationPhone from '../../components/verification/verificationPhone'
    import perationCenter from '../agent/operationCenter'

    import firstAgent from '../agent/firstAgent' // 二级代理
    import secondAgent from '../agent/secondAgent'

    const mapSelected = [
        {
            tit:'运营中心',
            val:'perationCenter',
        },
        {
            tit:'一级代理',
            val:'firstAgent',
        },
        {
            tit:'二级代理',
            val:'secondAgent',
        },
        {
            tit:'三级代理',
            val:'four',
        },
        {
            tit:'特约合作经济商',
            val:'five',
        },
    ]
    export default {
        name: "application_agent",
        data() {
            return {
                info:'发送验证码',
                flag:false,
                t:true,
                dynamic:'',
                config:{
                    show:false,
                    sms:-1,
                },
                configSelected:{
                    show:false,
                    value:'',
                    columns: ['运营中心', '一级代理', '二级代理', '三级代理', '特约合作经济商'],
                },
                agentData:{
                    addrSelect:{
                        show:false,
                        value:'',
                    },
                    feiYong:'',
                    shopName:'',
                    shopAddr:'',
                    addInfo:'',
                },
            }
        },
        methods:{
            confirm(v) {
                this.showPicker = !this.showPicker
                this.value = v
                for(let i = 0;i < mapSelected.length;++ i) {
                    if(v === mapSelected[i].tit) {
                        this.dynamic = mapSelected[i].val
                        return
                    }
                }
            }
        },
        components:{
            navTop,
            pubBtn,
            cooperationAgreement,
            dSelected,
            verificationPhone,
            perationCenter,

            firstAgent,
            secondAgent,
        }
    }
</script>

<style  lang="stylus">
    .application_agent
        background #fff
        .main
            padding 0 33px
            .van-cell
                display flex
                align-items center
                margin 10px 0
                padding 20px 0
                *
                    width auto
                    height auto !important
                    line-height inherit !important
                    input,textarea,span
                        width 100%
                        font-size 32px !important
                .van-cell__title
                    width 229px
            .tel
                .van-icon
                    font-size 30px !important
                .van-field__control
                   text-align center !important
                button
                   padding 10px 10px !important
            .h
                 height 50px
                 background red
        .footer
              padding 0 33px
              background #F7F7F7
             .h_t
                display flex
                align-items center
                padding 40px 0

                span
                   margin-left 20px
                   font-size 28xp
                   color #666
                   &:last-child
                      color #F21B1B
                .van-checkbox__icon
                     font-size 40px !important
                     height auto !important

            .btn
                margin-top 20px

                button
                 border-radius 12px
                 height 88px
                 width 100%
                 font-size 36px
</style>
