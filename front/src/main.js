import Vue from 'vue'
import App from './app.vue'
import store from './store'
import router from './router'

const app = new Vue({
  el: '#app',
  store,
  render: h => h(App),
  router
})

export default app
