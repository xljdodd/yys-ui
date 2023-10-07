import { createApp } from 'vue'
import App from './App.vue'
import ElementPlus from 'element-plus'
import i18n from '@/assets/language/index'

const app = createApp(App)
app.use(ElementPlus)
app.use(i18n)
app.mount('#app')
