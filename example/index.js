import Vue from 'vue'
import App from './App.vue'

Vue.config.debug = true

new Vue({
  el: '#app',
  render: h => h(App),
})
