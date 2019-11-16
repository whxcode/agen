<template>
    <article class="addr" style="z-index: 2">
       <header class="header">
           <nav-top :title="'我的地址'" />
       </header>
        <main class="container">
            <div class="addr_list">
                <ul>
                    <van-address-list
                            v-model="chosenAddressId"
                            :list="list"
                            @add="onAdd"
                            @edit="onEdit"
                            @click.native="selected"
                    />
                </ul>
            </div>
        </main>
        <van-popup
                v-model="show"
                round
                closeable
                position="bottom"
                :style="{height:'70%'}"
        >
            <div class="con">
            <van-address-edit
                    :area-list="areaList"
                    show-postal
                    show-delete
                    label-width="auto"
                    show-set-default
                    show-search-result
                    :search-result="searchResult"
                    :area-columns-placeholder="['请选择', '请选择', '请选择']"
                    @save="onSave"
                    @delete="onDelete"
                    @change-detail="onChangeDetail"
            />
            </div>
        </van-popup>
    </article>
</template>
<script>
    import navTop from '../../components/myNavTop'
    import {Checkbox,Notify} from 'vant'
    export default {
        name: "addr",
        data() {
            return {
                searchResult: [],
                radio:false,
                show:false,
                chosenAddressId: '1',
                flag:null,
                list: [
                    {
                        id: '1',
                        name: '张三',
                        tel: '13000000000',
                        address: '浙江省杭州市西湖区文三路 138 号东方通信大厦 7 楼 501 室'
                    },
                    {
                        id: '2',
                        name: '张三',
                        tel: '13000000000',
                        address: '浙江三路 13信大厦 7 楼 501 室'
                    },
                ],
                areaList:{
                    province_list: {
                        110000: '北京市',
                            120000: '天津市'
                    },
                    city_list: {
                        110100: '北京市',
                            110200: '县',
                            120100: '天津市',
                            120200: '县'
                    },
                    county_list: {
                        110101: '东城区',
                            110102: '西城区',
                            110105: '朝阳区',
                            110106: '丰台区',
                            120101: '和平区',
                            120102: '河东区',
                            120103: '河西区',
                            120104: '南开区',
                            120105: '河北区',

                    }
                }
            }
        },

        methods: {
            selected() {
              if(!this.flag)
                return
                const opt = {
                    type:'success',
                    message: '选择成功',
                    duration: 500,
                    className:'copy_info'
                }
                const paths = this.$root.path.shift() || '/home'
                this.$router.push({path:paths})
                this.$root.pathFlag = true
                Notify(opt)
            },
            onAdd() {
                this.show = !this.show
            },
            onEdit(item, index) {

            },
            onSave() {
                Toast('save');
            },
            onDelete() {
                Toast('delete');
            },
            onChangeDetail(val) {
                if (val) {
                    this.searchResult = [{
                        name: '黄龙万科中心',
                        address: '杭州市西湖区'
                    }];
                } else {
                    this.searchResult = [];
                }
            }
        },

        created() {
          this.flag = this.$route.query.flag
        },
        components:{
            navTop,
            [Checkbox.name]:Checkbox,
        },
    }
</script>
<style  lang="stylus">
.van-picker__toolbar
        height auto !important
        padding 20px 0
       button
            font-size 28px !important
       *
        line-height inherit !important
.addr
    position fixed
    width: 100%;
    height: 100%;
    z-index: 2;
    background rgba(255, 255, 255, .5)
    backdrop-filter blur(10px)
    .van-icon
        font-size 30px !important
    .header
        background #fff
        box-shadow 0 -2px 2px 4px rgba(0,0,0,.1)
    .container
        margin-top 10px
        .van-cell
            height 176px
        *
            line-height inherit !important
        .van-cell__value
            display flex
        .van-button
            height 100px
            font-size 36px
        .van-address-item__name
            font-size 32px
            line-height inherit !important
        .van-radio__label
            height: 100% !important;
            display: flex;
            width: 80%;
            left 10%
            position absolute
            margin: 0 auto;
            flex-flow: column;
            justify-content: space-around
        .van-address-item__address
            font-size 24px
        .van-icon-edit
            font-size 40px
        .van-radio__icon
            margin: 0 auto;
            .van-icon-success
                height 40px
                width 40px
                display: flex;
                font-size 32px
                align-items: center;
                justify-content: center;



    .con
        padding 0 24px
        margin-top 20px
        .van-address-edit-detail
            .van-cell__title
               display block
        *
            line-height inherit !important
        .van-switch
            font-size 50px !important
        .van-button
            height 88px
            font-size 38px
        .ce
            border-bottom 2px solid #ccc
        .van-cell
            height auto
            min-height 100px
        .van-cell__title
            display: flex;
            font-size 26px
            width 200px
            padding-left 10px
            align-items: center;

        .van-field__body
            font-size 26px
            height 100%
            input,textarea
              text-indent 20px
            textarea
                 height 100px !important

        .van-radio-group
            display flex
        .van-checkbox
            height 100%
        .van-radio
            margin 0 20px
            padding-top 30px
        .van-radio__label
            font-size 30px
        .box
            height 88px
        .addr_select
           margin-top 10px
           .van-picker__toolbar
              display: flex;
              align-items: center
              *
                text-decoration none
                font-size 30px
</style>
