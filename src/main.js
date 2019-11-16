import Vue from 'vue'
import App from './App.vue'

// css 样式
import '../public/stylus/common.styl'

// 路由
import router from './router/router'

import 'vant/lib/index.css'


import vant from 'vant'

import { Notify } from 'vant';


import { Checkbox, CheckboxGroup } from 'vant';

Vue.use(Checkbox).use(CheckboxGroup);

Vue.use(vant)
// 全局配置
Vue.config.productionTip = false

;(Vue.prototype::function (url) {
  this.fetch = function (u,opt = {}) {
    return fetch(url + u,opt)
  }
})(`http://127.0.0.1:8000`)

Vue.prototype.Events = {
  events:{},
  add(name,fn) {
    this.events[name] = fn
  },
  emit(name,opt) {
    this.events[name](opt)
  }
}

Vue.filter(`fmtTime`,v => {
  console.log(v)
})

const route = router()

window.TABBERH = `13.0666666667vw`

window.routesTabsClose = [
    '/detailedProduct',
    '/login',
    '/transfer',
    '/addBankCard',
    '/cashWithdrawal',
    '/treaty',
    '/myInfo',
    '/applicationAgent',
    '/agentAudit',
    '/subAgent',
    '/confirmOrder',
    '/order',
    '/resetPwd'
]

const vm = new Vue({
  render: h => h(App),
  router:route,
  data() {
    return {
      path:[], // 路由路径
      pathFlag:false ,// 返回不要添加
      v:0,
      tabberH:window.TABBERH,
      flagH:true,
    }
  },
  methods:{

    scroll(v) {
      const bar = document.querySelector(`.my_nav_top`)
      if(!v.isFixed) {
        bar.style.height = ``
      } else {
        bar.style.height = `10.666666667vw`
      }
    },

    copy(t) {
      const ipt = document.createElement(`input`)
      ipt.value = t
      document.body.appendChild(ipt)
      ipt.select()
      ipt.style.position = `fixed`
      ipt.style.left = `-10000px`
      const d = document.execCommand('Copy')
      const opt = {
        type:'success',
        message: '复制成功',
        duration: 500,
        className:'copy_info'
      }
      if(d) {

        opt.type = 'success'

      } else {
        opt.type = 'danger'
        opt.message = '复制失败'
      }

      document.body.removeChild(ipt)
      Notify(opt)

    },

    isH({fullPath}) {
      console.log(fullPath)
      for(let i = 0;i <window.routesTabsClose.length; ++i) {
        if(fullPath.includes(routesTabsClose[i]) ) {
          console.log(`feawf`)
          return true
        }
      }
    }

  },
  created() {
    if(this.isH(this.$route)) {
      this.tabberH = 0
    }
  },
  watch:{
    $route:function (from,to) { // 不好的代码

      console.log(from,to)


      if(this.isH(this.$route)) {
        this.tabberH = 0
      } else {
        this.tabberH = window.TABBERH
      }


      if(from.fullPath.includes(`/home`)) {
        this.v = 0
        this.path = []
        return;
      }


      if(from.fullPath.includes(`/more`)) {
        this.v = 1
      }

      if(from.fullPath.includes(`/inventory`)) {
        this.v = 2
      }

      if(from.fullPath.includes(`/my`)) {
        this.v = 3
      }

      if(this.pathFlag)  {
        this.pathFlag = false
        return
      }
      this.pathFlag = false
      this.path.unshift(to.fullPath)

    }
  },



}).$mount('#app')

vm.Events.add(`changes`,function (url) {
  console.log(url)
})

/*window.addEventListener(`contextmenu`,v => {
  v.preventDefault()
})*/
