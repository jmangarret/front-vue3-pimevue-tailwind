import axios from 'axios'
import { useStore } from '../store'

const install = app => {
  const store = useStore()

  axios.defaults.headers = {
    Authorization: `Bearer ${store.getters['auth/getToken']}`
  }

  app.config.globalProperties.$http = axios
}

export { install as default }
