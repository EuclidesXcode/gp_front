import Vue from 'vue'
import Router from 'vue-router'


Vue.use(Router)


export default new Router({
    mode: 'history',
    base: process.env.BASE_URL,
    routes: [
      {
        path: '/auth',
        name: 'auth',
        component: () => import(/* webpackChunkName: "about" */ './views/Admin/Auth.vue'),
        props: true
      }
    ]
  })