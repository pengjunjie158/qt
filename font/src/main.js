// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import App from './App'
import router from './router'

Vue.config.productionTip = false

import Vuex from "vuex"

Vue.use(Vuex)

import mintUi from "mint-ui"
import 'mint-ui/lib/style.css'

import axios from "axios"
import vueAxios from "vue-axios"

Vue.use(vueAxios, axios)

import ElementUI from 'element-ui'
import 'element-ui/lib/theme-default/index.css'

Vue.use(ElementUI)


/* eslint-disable no-new */


window.Bus=new Vue();
new Vue({
  el: '#app',
  router,
  template: '<App/>',
  components: { App }
})
