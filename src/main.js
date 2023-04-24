import Vue from 'vue'
import App from './App.vue'
import router from './route/router'
import store from './store'

import "common.styles/global.import.scss";

new Vue({
  router,
  store,
  render: h => h(App)
}).$mount('#app')