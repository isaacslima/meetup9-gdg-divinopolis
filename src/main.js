import './config/db';

import Vue from 'vue'
import App from './App.vue'
import VueFire from 'vuefire'
import Buefy from 'buefy'
import 'buefy/dist/buefy.css'

Vue.use(VueFire)
Vue.use(Buefy)
Vue.config.productionTip = false

new Vue({
  render: h => h(App),
}).$mount('#app')

