import Vue from 'vue'
import App from './App.vue'
import router from './router'
import vuetify from './plugins/vuetify'
import echarts from 'echarts'
Vue.prototype.$echarts = echarts;
Vue.config.productionTip = false;
var app = new Vue({
  router,
  vuetify,
  render: h => h(App)
}).$mount('#app')
