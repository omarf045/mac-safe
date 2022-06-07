import { createStore } from "vuex";
import {
  CogIcon,
  TrashIcon,
  PhotographIcon,
  ChartSquareBarIcon,
} from "@heroicons/vue/outline";

export default createStore({
  components: {},
  state: {
    // BarNavArray - sideBar component
    sidebarNavigation: [
      { name: "Photos", to: "/", icon: PhotographIcon, current: true },
      { name: "Leaks", to: "/leaks", icon: ChartSquareBarIcon, current: false },
      { name: "Trash", to: "/trash", icon: TrashIcon, current: false },
      { name: "Settings", to: "/settings", icon: CogIcon, current: false },
    ],
    ////////////////////////////////////////////////////////////////////////////
    // Photos Array - Photos Page
    photos: [
      {
        name: "IMG_4985.HEIC",
        size: "3.9 MB",
        source:
          "https://images.unsplash.com/photo-1582053433976-25c00369fc93?ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=512&q=80",
        current: true,
        information: {
          Created: "May 1, 2022",
          "Last modified": "June 8, 2022",
          Dimensions: "4032 x 3024",
        },
        sharedWith: [
          {
            id: 1,
            name: "Orland Douglas"
          },
          {
            id: 2,
            name: "Andrea McMillan",
          },
        ],
      },
      {
        name: "IMG_3385.HEIC",
        size: "3.9 MB",
        source:
          "https://images.unsplash.com/photo-1582053433976-25c00369fc93?ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=512&q=80",
        current: false,
        information: {
          Created: "May 1, 2022",
          "Last modified": "June 8, 2022",
          Dimensions: "4032 x 3024",
        },
        sharedWith: [
          {
            id: 1,
            name: "Arr Douglas"
          },
          {
            id: 2,
            name: "Andrea McMillan",
          },
        ],
      },
      // More files...
    ],

    //currenfFile - Photos Page
    currentFile: []
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

    changeCurrentPhoto(state, index) {
      if (!state.photos[index].current) {
        state.photos[index].current = true;

        state.photos.forEach((element) =>
          element !== state.photos[index]
            ? (element.current = false)
            : {}
        );
        state.currentFile = state.photos[index]
      }
    },


    currentPhotoAtStart(state) {
      state.photos[0].current = true;

      state.photos.forEach((element) =>
        element !== state.photos[0]
          ? (element.current = false)
          : {}
      );
      state.currentFile = state.photos[0]
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
