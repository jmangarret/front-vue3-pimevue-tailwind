import VueScrollTo from 'vue-scrollto'

const install = app => {
  app.directive('scroll-to', VueScrollTo)
}

export { install as default }
