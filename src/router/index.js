import { createRouter, createWebHistory } from "vue-router";
import Photos from "../components/PhotosComponent.vue";
import Leaks from "../components/LeaksComponent.vue";
import Trash from "../components/TrashComponent.vue";
import Settings from "../components/SettingsComponent.vue";
import SignUp from "../components/SignUpComponent.vue";
import LogIn from "../components/LogInComponent.vue";

import Landing from "../components/LandingComponent.vue"

const routes = [
  {
    path: "/",
    name: "landing",
    component: Landing,
  },
  {
    path: "/photos",
    name: "photos",
    component: Photos,
  },
  {
    path: "/leaks",
    name: "leaks",
    component: Leaks,
  },
  {
    path: "/trash",
    name: "trash",
    component: Trash,
  },
  {
    path: "/settings",
    name: "settings",
    component: Settings,
  },
  {
    path: "/signup",
    name: "signup",
    component: SignUp,
  },
  {
    path: "/login",
    name: "login",
    component: LogIn,
  },
];

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes,
});

export default router;
