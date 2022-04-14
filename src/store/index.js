import Vue from "vue";
import Vuex from "vuex";

Vue.use(Vuex);

export default new Vuex.Store({
  state: {
    usersById: {},
    usersIds: [],
  },

  getters: {
    users: (state) => state.usersIds.map((id) => state.usersById[id]),
    userById: (state) => (id) => state.usersById[id],
  },

  mutations: {
    SET_USERS(state, users) {
      state.usersIds = users.map((user) => user.id);
      state.usersById = users.reduce((acc, user) => {
        acc[user.id] = user;
        return acc;
      }, {});
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
