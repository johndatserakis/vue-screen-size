import Vue from 'vue'
import App from './App.vue'

// This is an example of loading it the gloabl way.
// import VueScreenSize from '../src/index.js'
// Vue.use(VueScreenSize)

new Vue({
  el: '#app',
  render: h => h(App)
})
