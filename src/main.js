import Vue from 'vue'
import App from './App.vue'
import router from './router'
import vuebar  from 'vuebar'
import vuetify from '@/plugins/vuetify'
import '@mdi/font/css/materialdesignicons.css' // Ensure you are using css-loader
import Vuelidate from 'vuelidate'

Vue.use(vuebar, Vuelidate);


Vue.config.productionTip = false

new Vue({
  vuetify,
  router,
  render: function (h) { return h(App) }
}).$mount('#app')


