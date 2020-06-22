import Vue from 'vue'
import App from './App.vue'
import router from './router'
import vuetify from './plugins/vuetify';

import Navbar from '@/components/core/Navbar'
import NavbarAdmin from '@/components/admin/NavbarAdmin'

Vue.component('Navbar',Navbar)
Vue.component('NavbarAdmin',NavbarAdmin)

Vue.config.productionTip = false

new Vue({
  router,
  vuetify,
  render: h => h(App)
}).$mount('#app')
