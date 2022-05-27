import Vue from 'vue'
import App from './app.vue'
import 'bootstrap'
import 'bootstrap-vue'
import 'bootstrap/dist/css/bootstrap.css'
import 'bootstrap-vue/dist/bootstrap-vue.css'
import store from './store'
import router from './router'

const app = new Vue({
  el: '#app',
  store,
  render: h => h(App),
  router
})

export default app
