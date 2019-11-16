<template>
    <aside class="set_up">
        <van-cell title="设置" is-link @click="f" />
        <!-- 设置程序 -->
        <van-popup
                closeable
                v-model="show"
                position="bottom"
                round
                :style="{ height: '60%',padding:'20px 0 0' }"
        >
            <van-cell title="发票信息" is-link  @click="(config.show = !config.show ,show = false)"/>
            <van-cell to="/addr" title="我的地址" is-link />
            <van-cell title="设置交易密码" is-link to="/setPwd"/>
            <van-cell title="退出" is-link to="/login"/>

        </van-popup>
        <!-- fa -->
       <section class="fa_info">
           <invoice-information :config="config"/>
       </section>

    </aside>
</template>

<script>
    import invoiceInformation from './invoiceInformation'
    export default {
        name: "setUp",
        data() {
            return {

                show:false,
                config:{
                    show:false,
                },


            }
        },
        components:{
            invoiceInformation
        },
        methods:{
            f() {
              console.log(2)
              this.show = !this.show
            },
            o() {
                console.log(1)
            }
        }
    }
</script>

<style  lang="stylus">
.set_up
    .van-icon-cross
       font-size 30px !important

</style>
