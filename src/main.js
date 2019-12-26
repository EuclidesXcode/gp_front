import Vue from 'vue'
import './plugins/bootstrap-vue'
import App from './App.vue'
import router from './router'
import store from './store/store'
import './plugins/axios'
import style from './style.css'
Vue.config.productionTip = false

new Vue({
  router,
  store,
  style,
  render: h => h(App)
}).$mount('#app')