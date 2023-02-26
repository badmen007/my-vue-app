import { createApp } from 'vue'
import './style.css'
import App from './App.vue'
import { createPinia } from 'pinia'


import initSvgIcon from '@/icons/index'
import 'virtual:svg-icons-register'
// 初始化css，重置css默认样式
import "normalize.css/normalize.css";
// 全局css
import "@/styles/index.scss";

import ElementPlus from "element-plus"; // 这里我们直接全量引入
import "element-plus/dist/index.css";



const app = createApp(App)
app.use(createPinia())
app.use(ElementPlus)
// 使用icon组件
app.use(initSvgIcon)
app.mount('#app')
