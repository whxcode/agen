<template>
<article class="changes_address">
    <van-popup
            v-model="config.show"
            position="bottom"
            custom-style="height: 70%"
    >
        <van-area
                :area-list="areaList"
                :columns-placeholder=" ['请选择', '请选择', '请选择']"
                title="选择地址"
                @cancel="close"
                @confirm="confirm"
        />
    </van-popup>
</article>
</template>

<script>
    export default {
        name: "changeAddress",
        props:{
            config:Object,
        },
        data() {
          return {
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
        methods:{
            close() {
               this.config.show = !this.config.show
            },
            confirm(v) {
                this.config.show = !this.config.show
                this.$emit(`getAddr`,v)
            }
        },
    }
</script>

<style  lang="stylus">
  .changes_address
    .van-area
        .van-icon
            font-size 28px !important
        .van-picker__toolbar
            display flex
            *
                font-size 30px
            align-items center
        .van-picker__columns
            *
                font-size 28px !important
</style>
