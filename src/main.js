import { createApp } from 'vue'
import App from './App.vue'
import { createPinia } from 'pinia'
import piniaPluginPersistedstate from 'pinia-plugin-persistedstate'

import initSvgIcon from '@/icons/index'
import 'virtual:svg-icons-register'
// 初始化css，重置css默认样式
import 'normalize.css/normalize.css'
// 全局css
import '@/styles/index.scss'

import ElementPlus from 'element-plus' // 这里我们直接全量引入
import 'element-plus/dist/index.css'

import router from './router'

// 注册element-plus
import installElementPlus from './plugins/element'

import './permission'

const app = createApp(App)
const pinia = createPinia()
pinia.use(piniaPluginPersistedstate)
app.use(pinia)
// 安装element-plus
app.use(installElementPlus)
app.use(ElementPlus)
// 使用icon组件
app.use(initSvgIcon)
app.use(router)
app.mount('#app')
