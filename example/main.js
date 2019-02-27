import Vue from 'vue'
import App from './App.vue'

import VueScreenSize from '../src/index.js'
Vue.use(VueScreenSize)

new Vue({
  el: '#app',
  render: h => h(App)
})
