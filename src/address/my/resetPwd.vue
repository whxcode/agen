<template>
    <article class="reset_pwd">
        <pub-sty :title="'重置密码'">
            <template #body>
                <main class="rest_pwd_main">
                    <div class="top">
                        <verification-phone :config="config"/>
                    </div>

                    <footer class="rest_pwd_footer">
                        <van-field
                                v-model="oldPwd"
                                label="旧密码"
                                width="100px"
                                label-width="auto"
                                label-class="l_c"
                                :border="false"
                                placeholder="请输入"
                                input-align="right"
                        />
                        <van-field
                                v-model="newPwd"
                                label="新密码"
                                width="100px"
                                input-align="right"
                                label-class="l_c"
                                label-width="auto"
                                :border="false"
                                placeholder="请输入"
                        />
                    </footer>
                </main>

            </template>
        </pub-sty>

    </article>
</template>

<script>
    import pubSty from '../../components/publicStyle'
    import  verificationPhone from '../../components/verification/verificationPhone'

    export default {
        name: "resetPwd",
        data() {
          return {
              config:{
                  sms:'',
              }
          }
        },
        components:{
            pubSty,
            verificationPhone,
        },
    }

</script>

<style  lang="stylus">
 @import "../../../public/stylus/publicFunc.styl"
.reset_pwd
   .rest_pwd_main
        .top
            padding 0 24px
            background #fff
        .rest_pwd_footer
            margin-top 20px
            padding 0 24px
            background #fff
            my-ven(32px,left,12px,#666)


</style>
