// Global Imports
import Vue from 'vue'
import App from './App.vue'
import router from './router/routes'

// Third Party Imports
import jQuery from 'jquery'
import VeeValidate from 'vee-validate';
import VueSession from 'vue-session'
var SlidingMarker = require('marker-animate-unobtrusive');

// Local Imports
import Request from './assets/js/requests'

//Jquery and Bootstrap
global.jQuery = jQuery
global.SlidingMarker = SlidingMarker
global.$ = jQuery
global.req = new Request()
let Bootstrap = require('bootstrap')
import 'bootstrap/dist/css/bootstrap.css'
SlidingMarker.initializeGlobally()
var RotateIcon = function(options){
  this.options = options || {};
  this.rImg = options.img || new Image();
  this.rImg.src = this.rImg.src || this.options.url || '';
  this.options.width = this.options.width || this.rImg.width || 52;
  this.options.height = this.options.height || this.rImg.height || 60;
  var canvas = document.createElement("canvas");
  canvas.width = this.options.width;
  canvas.height = this.options.height;
  this.context = canvas.getContext("2d");
  this.canvas = canvas;
};
RotateIcon.makeIcon = function(url) {
  return new RotateIcon({url: url});
};
RotateIcon.prototype.setRotation = function(options){
  var canvas = this.context,
      angle = options.deg ? options.deg * Math.PI / 180:
          options.rad,
      centerX = this.options.width/2,
      centerY = this.options.height/2;

  canvas.clearRect(0, 0, this.options.width, this.options.height);
  canvas.save();
  canvas.translate(centerX, centerY);
  canvas.rotate(angle);
  canvas.translate(-centerX, -centerY);
  canvas.drawImage(this.rImg, 0, 0);
  canvas.restore();
  return this;
};
RotateIcon.prototype.getUrl = function(){
  return this.canvas.toDataURL('image/png');
};
global.RotateIcon = RotateIcon

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
