import Vue from 'vue';
import App from './App.vue';

import store from './store';
import API from './api';

Vue.config.productionTip = false;

Vue.prototype.$appName = 'News Portal';
Vue.prototype.$api = API;

new Vue({
  store,
  render: h => h(App),
}).$mount('#app');
