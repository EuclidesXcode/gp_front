import Vue from 'vue'
import Vuex from 'vuex'
import Admin from './modules/Admin'
import Business from './modules/Business'
import Customers from './modules/Customers'
import Report from './modules/Report'
import Scheduling from './modules/Scheduling'
import Users from './modules/Users'

Vue.use(Vuex)

export default new Vuex.Store({
  modules: { Admin, Business, Customers,Report, Scheduling, Users }
})