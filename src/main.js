import Vue from 'vue'
import Vue2Touch from 'vue2-touch'
import App from './App.vue'

Vue.use(Vue2Touch);
Vue.config.productionTip = false

new Vue({
  render: h => h(App)
}).$mount('#app')
