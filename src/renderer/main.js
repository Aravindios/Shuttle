import Vue from 'vue'
import axios from 'axios'

import App from './App'
import router from './router'
import store from './store'

import fontawesome from '@fortawesome/fontawesome'
import brands from '@fortawesome/fontawesome-free-brands'
import solid from '@fortawesome/fontawesome-free-solid'
import regular from '@fortawesome/fontawesome-free-regular'

fontawesome.library.add(brands, solid, regular)

if (!process.env.IS_WEB) Vue.use(require('vue-electron'))
Vue.http = Vue.prototype.$http = axios
Vue.config.productionTip = false

/* eslint-disable no-new */
var vueApp = new Vue({
  components: { App },
  router,
  store,
  template: '<App/>'
}).$mount('#app')
console.log(vueApp)
