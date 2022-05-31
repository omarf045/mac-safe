import { createStore } from 'vuex'

export default createStore({
  state: {
    navigation: [
      { name: "Home", to: "/", current: true },
      { name: "Folders", to: "/folders", current: false },
      { name: "Leaks", to: "/leaks", current: false },
      { name: "Trash", to: "/trash", current: false },
    ],
    tabs: [
      { name: "Add Photo", to: "/", current: true },
      { name: "Test Photo", to: "/folders", current: false },
    ],
  },
  getters: {
  },
  mutations: {
    changeCurrent(state, index) {
      if (!state.navigation[index].current) {
        state.navigation[index].current = true;

        state.navigation.forEach((element) =>
          element !== state.navigation[index] ? (element.current = false) : {}
        );
      }
    },

    setCurrentAtRefresh(state) {

      state.navigation.forEach((element, index) => {
        if (window.location.href.includes(element.to) && element.to.length > 1) {
          state.navigation[index].current = true;
        }
        else if (window.location.href.endsWith("/")) {
          state.navigation[0].current = true;
        }
        else {
          state.navigation[index].current = false;
        }
      });
    }
  },
  actions: {
  },
  modules: {
  }
})
