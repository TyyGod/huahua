/**
 * 入口
 * @author LiQingSong
 */
import Vue from 'vue'

// CSS 重置 初始化
import 'normalize.css/normalize.css'

// 引入 ElementUI
import ElementUI from 'element-ui'
import '@/assets/css/element-variables.scss'

// 全局样式
import '@/assets/css/global.scss'

import App from './App.vue'
import router from './router'
import store from './store'

// 自定义svg icon
import '@/components/SvgIcon'

// 自定义directive
import directive from './directive' // directive

// plugins
import plugins from './plugins' // plugins
// 权限控制
import '@/router/permission'

import '@/assets/style/common.scss'
// 引入扩展内容
import '@/main.ext'
import './rem'
// eventBus 类的方式的使用方式
// 实现跨模块传参数
import { EventBus } from '@/utils/EventBus'

// 订阅事件
EventBus.getInstance().on('changePrice', (oldPrice, newPrice) => {
  console.log(oldPrice, newPrice)
})
// 发布 触发事件
EventBus.getInstance().emit('changePrice', 100, 200)

// 或者eventBus 注册方式
Vue.prototype.$EventBus = new Vue()

// 设置 ElementUI
Vue.use(ElementUI, { size: 'small' })
// 如果想要 设置语言，按照，如下方式声明
// import locale from 'element-ui/lib/locale/lang/en' // lang i18n
// Vue.use(ElementUI, { locale })

// 自定义指令 假如当前用户没有权限按钮 v-hasPermi
Vue.use(directive)
Vue.use(plugins)

Vue.config.productionTip = false

new Vue({
  router,
  store,
  render: h => h(App)
}).$mount('#app')
