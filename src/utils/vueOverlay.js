import VueLoading from 'vue-loading-overlay'
import 'vue-loading-overlay/dist/vue-loading.css'

const install = app => {
  app.use(VueLoading)
}

export { install as default }
