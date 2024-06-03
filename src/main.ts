import { createApp } from 'vue'
import { createPinia } from 'pinia'
import "./assets/style/main.css"
// 导入element-ui
import ElementPlus from 'element-plus'
import 'element-plus/dist/index.css'
import App from './App.vue'

const app = createApp(App)

app.use(createPinia())
app.use(ElementPlus)
app.mount('#app')
