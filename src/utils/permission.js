import { useStore } from 'vuex'

const can = (permission) => {
  const store = useStore()
  const user = store.getters['auth/user']
  if (!user.admin) {
    const permissions = store.getters['auth/getPermissions']
    if (permissions.some(a => a === permission)) return true
    return false
  }
  return true
}

const install = app => {
  app.config.globalProperties.$can = can
}

export { install as default, can }
