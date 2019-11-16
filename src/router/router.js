import {Vue,VueRouter} from './routerGuard'
import home from '../address/home/home'
import Inventory from '../address/Inventory/Inventory'
import message from '../address/message/message'
import more from '../address/more/more'
import chat from '../address/chat/chat'
import my from '../address/my/my'
import order from '../address/order/order'
import addr from '../address/addr/addr'
import editMy from '../address/my/editmy'
import setPwd from '../address/my/setPwd'
import detailedProduct from '../address/detailedProduct/detailedProduct'
import login from '../address/login/login'
import transfer from '../address/transferModule/transferModule'
import transferInfo from '../address/transferModule/transferInfo'
import transferRecord from '../address/transferModule/transferRecord'
import recharge from '../address/Recharge/recharge'
import cashWithdrawal from '../address/cashWithdrawal/cashWithdrawal.vue'
import cashWithdrawalInfo from '../address/cashWithdrawal/cashWithdrawalInfo'
import addBankCard from '../address/cashWithdrawal/addBankCard.vue'
import treaty from '../address/my/treaty'
import myInfo from '../address/my/myInfo'
import applicationAgent from '../address/login/applicationAgent' // 申请代理
import agentAudit from '../address/login/agentAudit'
import subAgent from '../address/subAgent/subAgent'
import confirmOrder from '../address/order/confirmOrder'
import orderDetails from '../address/order/orderDetails'
import resetPwd from '../address/my/resetPwd'

const routes = [
    {
        path:'/',
        redirect:'/home'
    },
    {
        path:'/subAgent',
        component:subAgent,
        props:true,
    },
    {
        path:'/resetPwd',
        component:resetPwd,
        props:true,
    },
    {
        path:'/orderDetails',
        component:orderDetails,
        props:true,
    },
    {
        path:'/confirmOrder/:id',
        component:confirmOrder,
        props:true,
    },
    {
        path:'/addBankCard',
        component:addBankCard,
        props:true,
    },
    {
        path:'/agentAudit',
        component:agentAudit,
        props:true,
    },
    {
        path:'/applicationAgent',
        component:applicationAgent,
        props:true,
    },
    {
        path:'/myInfo',
        component:myInfo,
        props:true,
    },
    {
        path:'/treaty',
        component:treaty,
        props:true,
    },
    {
        path:'/cashWithdrawalInfo',
        component:cashWithdrawalInfo,
        props:true,
    },
    {
      path:'/cashWithdrawal',
      component:cashWithdrawal,
      props:true,
    },
    {
        path:'/home',
        component:home,
    },
    {
        path:'/inventory',
        component:Inventory,
    },
    {
        path:'/message',
        component:message,
    },
    {
        path:'/more',
        component:more,
    },
    {
        path:'/chat/:id/:name',
        component:chat,
        props:true,
    },
    {
        path:'/my/',
        component:my,
        props:true,
    },
    {
        path:'/order/:active',
        component:order,
        props:true,
    },
    {
        path:'/addr',
        component:addr,
        props:true,
    },
    {
        path:'/edit',
        component:editMy,
        props:true,
    },
    {
        path:'/setPwd',
        component:setPwd,
        props:true,
    },
    {
        path:'/detailedProduct/:id',
        component:detailedProduct,
        props:true,
    },
    {
        path:'/login',
        component:login,
        props:true,
    },
    {
        path:'/transfer',
        component:transfer,
        props:true,
    },
    {
        path:'/transferInfo',
        component:transferInfo,
        props:true,
    },
    {
        path:'/transferRecord',
        component:transferRecord,
        props:true,
    },
    {
        path:'/recharge',
        component:recharge,
        props:true,
    },
]

export default () => new VueRouter({
    routes,
    linkActiveClass:'van-tabbar-item--active',
    mode:'hash',
})

