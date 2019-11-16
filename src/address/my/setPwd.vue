<template>
    <article class="set_pwd">
        <pub-sty :title="'设置密码'" :colors="colors" @saves="send">
            <template #body>
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
                <van-cell title="忘记密码" is-link to="/resetPwd" />
            </template>
        </pub-sty>
    </article>
</template>

<script>
    import pubSty from '../../components/publicStyle'
    import { Toast } from 'vant';
    export default {
        name: "setPwd",
        data() {
          return {
              colors:{
                  background:'#eee'
              },
              oldPwd:'',
              newPwd:'',
          }
        },
        methods:{
            send() {
                Toast.loading({
                    message: '修改中...',
                    forbidClick: true,
                    loadingType: 'spinner',
                    duration:100,
                    className:'set_pwd_tags'
                });
            }
        },
        components:{
            pubSty,
        },
    }
</script>

<style  lang="stylus">
.set_pwd
    .van-cell
        margin-top 22px
        display flex
        align-items center
        padding 20px 32px !important
        line-height  inherit !important
        .l_c
            margin-right 20px
        span,i,input,textarea
            font-size 36px !important
.set_pwd_tags
    background red
    .van-toast__text
       font-size 24px !important
       margin-top 4.333333vw!important
</style>
