import Vue from 'vue';
import Vuex from 'vuex';

import API from './api';

Vue.use(Vuex);

export default new Vuex.Store({
  state: {
    loading: false,
    news: [],
  },
  mutations: {
    SET_NEWS(state, items) {
      state.news = (items || []).sort((left, right) => {
        return left.published_at < right.published_at ? 1 : -1;
      });
    },
    SET_LOADING(state, value) {
      state.loading = Boolean(value);
    },
  },
  actions: {
    fetchNews({ commit }) {
      commit('SET_LOADING', true);
      return API.news.fetch().then(news => {
        commit('SET_NEWS', news);
        return news;
      }).finally(() => {
        commit('SET_LOADING', false);
      });
    },
  },
});
