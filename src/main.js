import Vue from 'vue'
import App from './App.vue'
import router from './router'
import './plugins/element.js'

import echarts from 'echarts'
Vue.prototype.$echarts = echarts

import axios from 'axios'
import VueAxios from 'vue-axios'




Vue.use(VueAxios, axios)

import VueSocketIO from 'vue-socket.io'
 
Vue.use(new VueSocketIO({
    //debug: true,
    // 服务器端地址
    connection: 'http://localhost:3000',
    vuex: {
    }
}))






Vue.config.productionTip = false

new Vue({
  router,
  render: h => h(App)
}).$mount('#app')


