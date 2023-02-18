import { createApp } from 'vue'
import router from './router'
import App from './App.vue'
import { createMetaManager, plugin as metaPlugin } from 'vue-meta'

import 'aos/dist/aos.css';
import './css/style.css'

const metaManager = createMetaManager()

const app = createApp(App)
app.use(router)
app.use(metaManager)
app.use(metaPlugin)
app.mount('#app')
