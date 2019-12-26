import Vue from 'vue'
import './plugins/bootstrap-vue'
import App from './App.vue'
import router from './router'
import store from './store/store'
import './plugins/axios'
import styleDark from './styleDark.css'
import styleLight from './styleLight.css'
Vue.config.productionTip = false

new Vue({
  router,
  store,
  styleDark,
  styleLight,
  render: h => h(App)
}).$mount('#app')