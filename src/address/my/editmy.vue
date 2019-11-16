<template>
    <article class="edit_my" >
        <van-sticky>
        <header class="header">
            <nav-top :title="'修改信息'"/>
        </header>
        </van-sticky>
        <main class="main" style="z-index:2">
                <van-field
                   label="店铺名称"
                   :border="true"
                   v-model="addrData.name"
                   placeholder="请输入名称"
                />

            <van-field
                    label="店铺描述"
                    :border="true"
                    v-model="addrData.name"
                    placeholder="描述"
            />

                <van-field
                        readonly
                        label="店铺地址"
                        v-model="addrData.addr"
                        @click="config.show = !config.show"
                        :border="true"
                        placeholder="地址"
                />


            <van-cell-group>
                <van-field
                        label="留言"
                        v-model="addrData.message"
                        rows="2"
                        autosize
                        :border="true"
                        type="textarea"
                        maxlength="50"
                        placeholder="请输入留言"
                        show-word-limit
                />
            </van-cell-group>

            <div class="add_logo">
                <van-uploader v-model="fileList" multiple />
            </div>
            <change-address @getAddr="getAddr" :config="config" />
            <div class="btn">
                <van-button type="danger" :border="false"
                >
                    确定
                </van-button>
            </div>
        </main>
    </article>
</template>

<script>
    import navTop from '../../components/myNavTop'
    import changeAddress from '../../components/changeAddress'
    export default {
        name: "editmy",
        data() {
            return {
                addrData:{
                    name:'',
                    addr:'',
                    message:'',
                },
                config:{show:false,},
                fileList: [],
            }
        },
        methods:{
            fopen() {

            },
            getAddr(v) {
              this.addrData.addr = v.map(v => v.name).join('/')
            }
        },
        components:{
            navTop,
            changeAddress,
        },
    }
</script>

<style  lang="stylus">
.edit_my

    .header
        background #fff
    .main
        padding 0 24px
        position: absolute;
        overflow-y scroll
        height: calc(100% - 128px);
        background: rgba(255,255,255,.8);
        backdrop-filter blur(20px)
        width: 100%;
        .van-cell
            margin 10px 0
            padding 44px 0
            .van-address-edit-detail
                .van-cell__title
                    display block
            *
                width auto
                line-height inherit !important
                input,textarea,span
                    width 100%
                    font-size 32px !important
            .van-cell__title
                font-size 26px
                width 200px
                padding-left 10px
      .add_logo
          margin-top 60px
      .van-uploader__upload
          width 200px
          height 200px
      .van-image
          width 200px
          height 200px
      .btn
              margin-top 20px
              button
                  border-radius 12px
                  height 88px
                  width 100%
                  font-size 36px

</style>
