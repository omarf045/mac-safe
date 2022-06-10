import { createStore } from "vuex";
import {
  CogIcon,
  TrashIcon,
  PhotographIcon,
  ChartSquareBarIcon,
} from "@heroicons/vue/outline";

import axios from "axios";
import VueCookies from "vue-cookies";

export default createStore({
  components: {},
  state: {

    form: {
      username: "",
      email: "",
      password: "",
      photos: {},
      trash: {},
      leaks: {},
      cookie_value: "",
    },

    // BarNavArray - sideBar component
    sidebarNavigation: [
      { name: "Photos", to: "/photos", icon: PhotographIcon, current: true },
      { name: "Leaks", to: "/leaks", icon: ChartSquareBarIcon, current: false },
      { name: "Trash", to: "/trash", icon: TrashIcon, current: false },
      // { name: "Settings", to: "/settings", icon: CogIcon, current: false },
    ],
    ////////////////////////////////////////////////////////////////////////////
    // Photos Array - Photos Page
    photos: [{}],
    //currenfFile - Photos Page
    currentFile: [],

    ////////////////////////////////////////////////////////////////////////////
    // trashArray - Trash Page
    trash: [{}],

    ////////////////////////////////////////////////////////////////////////////
    // leaksArray - Leaks Page
    leaks: [{}]
  },
  getters: {
    sharedPhotosCount(state) {
      let c = 0
      state.photos.map((element) => c += element.sharedWith.length)
      return c
    }
  },
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
      if (state.photos.length != 0) {
        state.photos[0].current = true;

        state.photos.forEach((element) =>
          element !== state.photos[0]
            ? (element.current = false)
            : {}
        );
        state.currentFile = state.photos[0]
      }
    },

    setCurrentAtRefresh(state) {
      state.sidebarNavigation.forEach((element, index) => {
        if (
          window.location.href.includes(element.to) &&
          element.to.length > 1
        ) {
          state.sidebarNavigation[index].current = true;
        } else {
          state.sidebarNavigation[index].current = false;
        }
      });
    },

    /////////////////////////////////////////////////////////

    deleteImage(state) {
      const index = state.photos.findIndex(element => element.current === true);

      //add element to trash array
      state.trash.push(state.photos[index])

      state.photos.splice(index, 1)

      if (state.photos.length != 0) {
        state.photos[0].current = true;

        state.photos.forEach((element) =>
          element !== state.photos[0]
            ? (element.current = false)
            : {}
        );
        state.currentFile = state.photos[0]
      }

      ////////////////////////////

      const path = "http://localhost:8000/api/v1/accounts/";
      axios
        .get(path)
        .then((response) => {
          const photosArray = response.data.find(
            (element) =>
              element.cookie_value === VueCookies.get("session_cookie")
          );

          state.form.username = photosArray.username
          state.form.email = photosArray.email
          state.form.password = photosArray.password
          state.form.cookie_value = photosArray.cookie_value
          state.form.photos = state.photos
          state.form.trash = state.trash
          state.form.leaks = state.leaks

          ////////////////////////////////
          axios
            .put(path + state.form.username + "/", state.form)
            .then((response) => {
              console.log(response.data)
            })
            .catch((error) => {
              console.log(error);
            });

        })
        .catch((error) => {
          console.log(error);
        });
      /////////////
    },

    uploadArrays(state, photosArray) {
      state.photos.push(photosArray)

      const path = "http://localhost:8000/api/v1/accounts/";
      axios
        .get(path)
        .then((response) => {
          const photosArray = response.data.find(
            (element) =>
              element.cookie_value === VueCookies.get("session_cookie")
          );

          state.form.username = photosArray.username
          state.form.email = photosArray.email
          state.form.password = photosArray.password
          state.form.cookie_value = photosArray.cookie_value
          state.form.photos = state.photos
          state.form.trash = photosArray.trash
          state.form.leaks = photosArray.leaks

          ////////////////////////////////
          axios
            .put(path + state.form.username + "/", state.form)
            .then((response) => {
              console.log(response.data)
            })
            .catch((error) => {
              console.log(error);
            });

        })
        .catch((error) => {
          console.log(error);
        });
    }

  },
  actions: {},
  modules: {},
});
