import Vue from 'vue';
import App from './App.vue';
import VueMeta from 'vue-meta';

import store from './store';
import API from './api';

import './assets/styles/main.scss';

Vue.config.productionTip = false;

Vue.prototype.$appName = 'News Portal';
Vue.prototype.$api = API;

Vue.use(VueMeta);

new Vue({
  store,
  render: h => h(App),
}).$mount('#app');
