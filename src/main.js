import Vue from 'vue';
import { BootstrapVue, IconsPlugin } from 'bootstrap-vue';
import 'bootstrap/dist/css/bootstrap.css';
import 'bootstrap-vue/dist/bootstrap-vue.css';
import moment from 'moment';
import App from './App.vue';
import './registerServiceWorker';
import router from './router';

Vue.prototype.moment = moment;
Vue.use(BootstrapVue);
Vue.use(IconsPlugin);
Vue.config.productionTip = false;

new Vue({
  router,
  moment,
  render: (h) => h(App),
}).$mount('#app');
