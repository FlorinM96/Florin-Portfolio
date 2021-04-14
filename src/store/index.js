import { createStore } from "vuex";

export default createStore({
  state: {
    isMenuOpened: false,
  },
  mutations: {
    toggleMenuState(state) {
      state.isMenuOpened = !state.isMenuOpened;
    },
  },
  actions: {},
  modules: {},
});
