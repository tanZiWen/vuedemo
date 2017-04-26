import Vue from 'vue'
import Element from 'element-ui'
import App from './App'
import store from './vuex/store'
import router from './router'
import './assets/element/index.css'
import './assets/ebro/css/style.css'
import './assets/ebro/css/ie.css'
import './assets/ebro/css/retina.css'
import './assets/ebro/img/flags/flags.css'
import './assets/ebro/theme/color_1.css'
import './assets/ebro/css/todc-bootstrap.min.css'
import './assets/ebro/bootstrap/css/bootstrap.min.css'
import './assets/ebro/css/font-awesome/css/font-awesome.min.css'
import { sync } from 'vuex-router-sync'

//sync the route with the vuex store.
//this registers 'store.state.route'

Vue.use(Element)

sync(store, router)

/* eslint-disable no-new */
const app = new Vue({
  router,
  store,
  ...App //Object spread copying everything form App.vue
})

app.$mount('#app')
