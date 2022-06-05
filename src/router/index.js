import { createRouter, createWebHistory } from "vue-router";
import Home from "../components/HomeComponent.vue";
import Photos from "../components/PhotosComponent.vue";

const routes = [
  {
    path: "/",
    name: "home",
    component: Home,
  },
  {
    path: "/photos",
    name: "photos",
    component: Photos,
  },
];

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes,
});

export default router;
