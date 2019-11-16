<template>
    <article class="usb_agent_info">
      <div class="sub_agent_card"
      v-for="(ix,i) in list"
           :key="i"
      >
          <h1 class="title">
            {{ix.name}}
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
              <p class="m">
                  <span>本月累计销售额 </span><strong>{{ix.yue}}</strong>
              </p>
              <p class="er">
              <p class="tel">
                  <span>二级代理数 <strong>{{ix.er}}</strong></span>
                  <span>三级代理数 <strong>{{ix.san}}</strong></span>
              </p>
          </footer>
      </div>
    </article>
</template>
<script>
    export default {
        name: "usbAgentInfo",
        data() {
            return {
                list:[
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
                ],
            }
        }
    }
</script>
<style scoped lang="stylus">
.usb_agent_info
  @import "../../../public/stylus/subAgent_info.styl"
</style>
