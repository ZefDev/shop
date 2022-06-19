import Vue from 'vue'
import {Vuelidate} from 'vuelidate';
import App from './App.vue'
import { BootstrapVue, IconsPlugin } from 'bootstrap-vue'
import router from './router'
import AxiosPlugin from 'vue-axios-cors';



Vue.config.productionTip = false
Vue.use(BootstrapVue)
Vue.use(IconsPlugin)
Vue.use(Vuelidate)
Vue.use(AxiosPlugin)

new Vue({
  router,
  render: h => h(App)
}).$mount('#app')
