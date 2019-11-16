<template>
    <section class="message_list">
        <ul class="msg_list">
            <message-list-card v-for="(ix,i) in msgList.data"
                           :key="i"
                           :ix="ix"
            >

            </message-list-card>
        </ul>
    </section>
</template>

<script>
    import messageListCard from '../message/messageListCard'
    export default {
        name: "messageList",
        data() {
          return {
              msgList:{
                  code: 0,
                  msg: "success",
                  data: [
                      {
                          oid: 427,
                          oencode: "201908028935207596",
                          price: 0,
                          commission: 0,
                          content: "广东省广州市萝岗区特约合作经销商购买了1件商品, 送货地址为:天津市天津市河东区来lol哦咯咯莫咯咯咯咯来咯哦哦咯哦咯了moonlight门口魔窟魔窟莫急磨砺D, 订单总计费用为1.60元",
                          status: "等待买家付款",
                          create_time: "2019-08-02 16:46:03",
                          type: 0,
                          type_n: "直销",
                          type_n_class:'bgr'
                      },
                      {
                          oid: 425,
                          oencode: "201907301737170088",
                          price: 0,
                          commission: 0,
                          content: "广东省广州市萝岗区特约合作经销商购买了1件商品, 送货地址为:天津市天津市河东区订天津市天津市河东区订单总计费用为1天津市天津市河东区订单总计费用为1单总计费用为1.60元",
                          status: "等待买家付款",
                          create_time: "2019-07-30 13:08:56",
                          type: 1,
                          type_n: "佣金",
                          type_n_class:'bgh'
                      }
                  ]
              },
          }
        },
        components:{
            messageListCard,
        }
    }
</script>

<style scoped lang="stylus">
.message_list
    padding 0 32px
</style>
