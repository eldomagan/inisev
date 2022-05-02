import Vue from "vue";
import Vuex from "vuex";

Vue.use(Vuex);

export default new Vuex.Store({
  state: {
    users: [],
  },

  getters: {
    users: (state) => state.users,
    userById: (state) => (id) => state.users.find((user) => user.id === id),
  },

  mutations: {
    SET_USERS(state, users) {
      state.users = users;
    },
  },

  actions: {
    fetchUsers({ commit }) {
      return fetch("https://mock.follow.it/profiles.json")
        .then((response) => response.json())
        .then((users) => commit("SET_USERS", users));
    },
  },
});
