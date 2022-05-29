import Vue from 'vue'
import app from "@/App";
import VueRouter from "vue-router";
import router from "@/router";

Vue.use(VueRouter)

import store from './store/index'


new Vue({
  el:'#app',
  store,
  render: h => h(app),
  router
})