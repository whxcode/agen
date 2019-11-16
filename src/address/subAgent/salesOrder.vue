<template>
    <article class="sales_order">
        <div class="sub_agent_card"
             v-for="(ix,i) in list"
             :key="i"
        >
            <h1 class="title">
                <span>订单号:</span><strong>{{ix.name}}</strong>
            </h1>
            <nav class="nav">
                <ul>
                    <li v-for="(ixx,i) in ix.profits" :key="i">
                        <strong>{{ixx.val}}</strong>
                        <p>{{ixx.title}}</p>
                    </li>

                </ul>
            </nav>
            <footer class="footer">
                <p class="tel">
                    <span>联系人 <strong>{{ix.username}}</strong></span>
                    <span>联系电话 <strong>{{ix.tel}}</strong></span>
                </p>
            </footer>
        </div>
    </article>
</template>
<script>
    export default {
        name: "salesOrder",
        data() {
          return {
              list:[
                  {
                      name:'01111111111',
                      profits:[
                          {
                              title:'提成比列',
                              val:'15%'
                          },
                          {
                              title:'本月贡献的收益',
                              val:'100元'
                          },
                          {
                              title:'累计贡献的收益',
                              val:'1000元'
                          }
                      ],
                      username:'王五',
                      tel:'17345241280',
                      yue:'100',
                      er:123,
                      san:1234,
                  },
                  {
                      name:'深圳市宝安区一级代理-1',
                      profits:[
                          {
                              title:'提成比列',
                              val:'15%'
                          },
                          {
                              title:'本月贡献的收益',
                              val:'100元'
                          },
                          {
                              title:'累计贡献的收益',
                              val:'1000元'
                          }
                      ],
                      username:'王五',
                      tel:'17345241280',
                      yue:'100',
                      er:123,
                      san:1234,
                  },
                  {
                      name:'02222222222',
                      profits:[
                          {
                              title:'提成比列',
                              val:'15%'
                          },
                          {
                              title:'本月贡献的收益',
                              val:'100元'
                          },
                          {
                              title:'累计贡献的收益',
                              val:'1000元'
                          }
                      ],
                      username:'王五',
                      tel:'17345241280',
                      yue:'100',
                      er:123,
                      san:1234,
                  },
                  {
                      name:'0333333333333',
                      profits:[
                          {
                              title:'提成比列',
                              val:'15%'
                          },
                          {
                              title:'本月贡献的收益',
                              val:'100元'
                          },
                          {
                              title:'累计贡献的收益',
                              val:'1000元'
                          }
                      ],
                      username:'王五',
                      tel:'17345241280',
                      yue:'100',
                      er:123,
                      san:1234,
                  },
              ],
          }
        },
    }
</script>
<style scoped lang="stylus">
.sales_order
    @import "../../../public/stylus/subAgent_info.styl"
</style>
