import { createStore } from "vuex";
import {
  CogIcon,
  TrashIcon,
  HomeIcon,
  PhotographIcon,
  ChartSquareBarIcon,
} from "@heroicons/vue/outline";

export default createStore({
  components: {},
  state: {
    sidebarNavigation: [
      { name: "Photos", to: "/", icon: PhotographIcon, current: true },
      { name: "Leaks", to: "/leaks", icon: ChartSquareBarIcon, current: false },
      { name: "Trash", to: "/trash", icon: TrashIcon, current: false },
      { name: "Settings", to: "/settings", icon: CogIcon, current: false },
    ],
  },
  getters: {},
  mutations: {
    changeCurrent(state, index) {
      if (!state.sidebarNavigation[index].current) {
        state.sidebarNavigation[index].current = true;

        state.sidebarNavigation.forEach((element) =>
          element !== state.sidebarNavigation[index]
            ? (element.current = false)
            : {}
        );
      }
    },

    setCurrentAtRefresh(state) {
      state.sidebarNavigation.forEach((element, index) => {
        if (
          window.location.href.includes(element.to) &&
          element.to.length > 1
        ) {
          state.sidebarNavigation[index].current = true;
        } else if (window.location.href.endsWith("/")) {
          state.sidebarNavigation[0].current = true;
        } else {
          state.sidebarNavigation[index].current = false;
        }
      });
    },
  },
  actions: {},
  modules: {},
});
