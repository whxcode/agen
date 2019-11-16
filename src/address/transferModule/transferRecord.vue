<template>
    <article class="transfer_record">
        <header class="header">
            <nav-top :title="title" />
            <h1 class="title_t" @click="show = !show">
                <strong>{{t}}</strong>
                <van-icon name="arrow-down" />
            </h1>
        </header>
        <main class="main">
            <ul>
                <router-link v-for="(ix,i) in list"
                :key="i"
                :to="'/transferInfo'"
                tag="li"
                >
                    <h3><strong>转账-{{ix.name}}</strong>
                        <span>{{ix.type_i}}</span>
                    </h3>
                    <h4><strong>转账-{{ix.time}}</strong>
                        <span :class="[ix.type ? 'add' : '']">{{ix.price}}</span>
                    </h4>
                </router-link>
            </ul>
        </main>
        <van-popup
                v-model="show"
                position="bottom"
                :style="{ height: 'auto' }"
        >
            <van-picker
                    @confirm="confirm"
                    show-toolbar
                    @cancel="cancel"
                    :columns="columns"
                    title="" />
        </van-popup>

    </article>
</template>

<script>
    import navTop from '../../components/myNavTop'
    const citys = {
        '浙江': ['2013', '2012', '2012', '2012', '2012'],
        '福建': ['福州', '厦门', '莆田', '三明', '泉州']
    };
    export default {
        name: "transferRecord",
        data() {
            return {
                title:'',
                show:false,
                t:'全部',
                columns: [
                    {
                        values:[],
                        className: 'column1'
                    },
                    {
                        values:[],
                        className: 'column2',
                        defaultIndex: 2
                    }
                ],
                list:[
                    {
                        id:0,
                        name:'小猪',
                        time:'6月6日 13：24',
                        type_i:'交易成功',
                        type:0,
                        price:'-1000',
                    },
                    {
                        id:1,
                        name:'小猪',
                        time:'6月6日 13：24',
                        type_i:'交易成功',
                        type:0,
                        price:'-1000',
                    },
                    {
                        id:2,
                        name:'小猪',
                        time:'6月6日 13：24',
                        type_i:'交易成功',
                        type:1,
                        price:'+1000',
                    }
                ],
            }
        },
        components:{
            navTop,
        },
        created() {
            for(let i = 1;i <= 12;++ i) {
                this.columns[0].values.push('201' + i + '年')
                this.columns[1].values.push(`${i} 月`)
            }

                this.title = this.$route.query.v
                console.log(this.title)

        },
        methods:{
            confirm(v) {
                this.t = v.join(' ')
                this.show = !this.show
            },
            cancel() {
                this.show = !this.show
            }
        },
    }
</script>

<style  lang="stylus">
.transfer_record
    .main
        ul
            li
                padding 42px 18px 36px
                border 2px solid #eee
                h3,h4
                    display flex
                    justify-content space-between
                h3
                    font-size 32px
                    span
                       font-weight 400
                       color #333
                h4
                    margin-top 35px
                    strong
                        font-size 28px
                        color #999
                    span
                        color #333
                        font-size 42px
                .add
                    color #F21B1B
    .van-picker__columns
        *
            font-size 30px !important
            line-height inherit
    .van-picker__toolbar
        padding 20px 0 30px
        height auto
        border 2px solid #eee

        *
            color #F21B1B !important
            font-size 35px !important
            line-height inherit
    .van-ellipsis
        padding 20px 0
        height auto !important
    .header
        background #fff
        .title_t
          background #efefef
          padding 41px 32px
          font-size 40px
          .van-icon
            margin-left 20px


</style>
