// Global Imports
import Vue from 'vue'
import App from './App.vue'
import router from './router/routes'

// Third Party Imports
import jQuery from 'jquery'
import VeeValidate from 'vee-validate';
import VueSession from 'vue-session'

// Local Imports
import Request from './assets/js/requests'

//Jquery and Bootstrap
global.jQuery = jQuery
global.$ = jQuery
global.req = new Request()
let Bootstrap = require('bootstrap')
import 'bootstrap/dist/css/bootstrap.css'

// Import the custom theme from my less files
import './assets/less/index.less'

// Third Party Vue Apps Integration
Vue.use(VeeValidate);
Vue.use(VueSession)

//Vue Settings
Vue.config.productionTip = false
new Vue({
  el: '#app',
  router,
  render: h => h(App)
})
