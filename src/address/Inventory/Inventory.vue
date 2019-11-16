<template>
    <section class="inventory">
      <van-sticky
       @scroll="$root.scroll"
        >

          <nav-top-search :title="title"></nav-top-search>
        </van-sticky>

        <main class="main">
            <inventory-list></inventory-list>
        </main>
    </section>
</template>

<script>
    import navTopSearch from '../../components/myNavTopSearch'
    import InventoryList from '../home/InventoryList'

    export default {
        name: "Inventory",
        data() {
          return {
              title:'商品订购',

          }
        },
        methods:{

        },
        components:{
            navTopSearch,
            InventoryList,
        }
    }
</script>

<style lang="stylus">
.inventory
    background #fff
</style>
