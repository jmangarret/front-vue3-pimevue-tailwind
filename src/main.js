import { createApp } from 'vue'
import App from './App.vue'
import PrimeVue from 'primevue/config';
import utils from './utils'
import router from './router'

import './index.css'

const app = createApp(App)
app.use(router)
app.use(PrimeVue)

utils(app)

app.mount('#app')
