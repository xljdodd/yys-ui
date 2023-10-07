// src/i18n.js
import { createI18n } from 'vue-i18n'

export default createI18n({
    locale: 'zh', // 默认语言
    messages: {
        en: {
            // 英文翻译
        },
        zh: {
            // 中文翻译
            hello: '你好'
        }
        // 添加其他语言翻译
    }
})
