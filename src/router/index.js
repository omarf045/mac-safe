import { createRouter, createWebHistory } from "vue-router";
import Photos from "../components/PhotosComponent.vue";
import Leaks from "../components/LeaksComponent.vue";
import Trash from "../components/TrashComponent.vue";
import Settings from "../components/SettingsComponent.vue";

const routes = [
  {
    path: "/",
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
];

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes,
});

export default router;
