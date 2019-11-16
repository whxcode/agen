<template>
    <section class="chat">
        <header class="header">
            <nav-top :title="name"></nav-top>

        </header>
        <main class="container" style="z-index: 2">
            <my-content :msg-info="msgInfo"/>
            <footer class="ipt" ref="ipt">
                <div class="header">
                    <div class="input" contenteditable="true" @keyup="changes" ref="text">

                    </div>

                    <van-button :disabled="!val" type="primary"
                                @click="send"
                                @keyup.enter="send">
                        发送</van-button>

                    <van-button type="primary" @click="add"> 更多</van-button>

                </div>
                <div class="body">
                    <div>
                        <van-icon name="photograph" @click="update">
                            <van-uploader v-model="fileList" multiple  :preview-image="false"/>
                        </van-icon>
                    </div>
                    <div>
                        <van-icon name="photograph" />
                    </div>
                </div>
            </footer>
        </main>
       <van-popup
                v-model="fileShow"
                position="bottom"
        >
            <div class="title">
                <h2><span>全部发送</span><span @click="close">取消</span></h2>
            </div>

            <div class="footer">
                <ul>
                    <li v-for="(ix,i) in fileList" :key="i" @click="tabbarImgs(ix.content,i)" >
                        <img :src="ix.content" alt="">
                        <van-icon name="clear" @click.stop="del(i)"/>
                    </li>
                </ul>
            </div>

           <van-image-preview
                   :startPosition="idx"
                   v-model="previewShow"
                   :images="fileList.map(v => v.content)"
           >
           </van-image-preview>
        </van-popup>
    </section>
</template>
<script>
    import navTop from '../../components/myNavTop'
    import myContent from './content'
    import $ from 'jquery'
    export default {
        name: "chat",
        props:['id','name'],
        data() {
          return {
              idx:2,
              previewShow:false,
              v:'',
              fileList:[],
              fileShow:false,
              addFlag:true,
              msgInfo:[
                  {
                      icon:'https://ss1.bdstatic.com/70cFvXSh_Q1YnxGkpoWK1HF6hhy/it/u=2952556147,1087486176&fm=26&gp=0.jpg',
                      info:'有大买卖、速来',
                      typeN:1,
                  },
                  {
                      icon:'https://ss0.bdstatic.com/70cFuHSh_Q1YnxGkpoWK1HF6hhy/it/u=315769001,2493122927&fm=26&gp=0.jpg',
                      info:'不来',
                      typeN:0,
                  },
                  {

                      icon:'https://ss1.bdstatic.com/70cFvXSh_Q1YnxGkpoWK1HF6hhy/it/u=2952556147,1087486176&fm=26&gp=0.jpg',
                      info:'坑货',
                      typeN:1,
                  },
              ],
              defaultImg:'',

          }
        },
        computed:{
          val:{
                get() {
                   return this.v
                },
                set(t) {
                    this.v = t
                }
            },
            showFlag() {
              return this.fileList.length
            }
        },
        methods:{
            del(i) {
                this.fileList.splice(i,1)
            },
            update() {
                const ipt = $('.van-uploader input')[0]
                ipt.click()
            },
            changes() {
                const t = window.event.currentTarget.innerText
                this.val = t
            },
            close() {
                this.fileList = []
            },
            add() {
               if(this.addFlag) {
                   this.$refs.ipt.style.transform = `translateY(0)`
               } else {
                   this.$refs.ipt.style.transform = ``
               }

               this.addFlag = !this.addFlag
            },
            send() {
                const d = this.val
                this.msgInfo.push({
                    icon:'https://ss0.bdstatic.com/70cFuHSh_Q1YnxGkpoWK1HF6hhy/it/u=315769001,2493122927&fm=26&gp=0.jpg',
                    info:d,
                    typeN:0,
                },)
                this.v = ''
                this.$refs.text.innerHTML = ``

            },
            tabbarImgs(src,i) {
                this.idx = i
                this.defaultImg = src
                this.previewShow = !this.previewShow
            }
        },
        watch:{
            fileList() {
                this.fileShow = !!this.fileList.length
                console.log(this.fileShow ,123123)
            }
        },
        components:{
            navTop,
            myContent,
        }
    }
</script>
<style  lang="stylus">
    .chat
        .header
           box-shadow 0 -1px 40px 4px rgba(255,255,255,.2)
           background #fff
        .container
           position fixed
           width 100%
           top 128px
           height calc(100% - 128px)
           background #fff
           .ipt
              transition all .4s
              transform: translateY(39.5vw);
              width 100%
              position absolute
              bottom 0
              background rgba(255,255,255,.5)
              backdrop-filter blur(20px)
              height 395px
              .header
                display flex
                padding 14px 10px
                height 98px
                .input
                 display flex
                 align-items center
                 background #EEF0F2
                 flex 1
                 color #333
                 text-indent 10px
                 line-height inherit
                .van-button
                  margin 0 12px
                  border-radius 6px
                  background #F21B1B
                  height 100%
                  border 0
                  font-size 28px !important
                  width 87px !important
                  &:last-child
                      margin-left 0
                      margin-right 0
              .body
                   height calc(100% - 98px)
                   display flex
                   align-items center
                   justify-content space-around
                   border-top 1px solid #ccc
                   .van-uploader
                      display none
                   div
                      border-radius 10px
                      border 1px solid #ccc
                      width 120px
                      height 120px
                      display flex
                      justify-content center
                      align-items center
                      .van-icon
                         font-size 70px

        .van-popup
            height 100%
            background rgba(255,255,255,.2)
            .title
                padding 0 24px
                position sticky
                z-index 2
                background rgba(255,255,255,.9)
                backdrop-filter blur(10px)
                top 0
                width 100%
                height 120px
                border 2px solid #efefef
                h2
                  display flex
                  height 100%
                  align-items center
                  justify-content space-between
                  font-size 32px
                  color #666
            .footer
                padding-top 10px
                max-height: 106vw;
                width 100%
                bottom 0
                ul
                    column-count:3;
                    column-gap: 9.666667vw;
                    li
                        position relative
                        margin 20px 0
                        max-width 200px
                        break-inside: avoid;
                        img
                            width 100% !important
                        .van-icon
                            position: absolute;
                            right: 0;
                            color #F21B1B
                            bottom: 0;
                            font-size: 32px;


</style>
