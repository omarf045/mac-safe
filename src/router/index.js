import { createRouter, createWebHistory } from 'vue-router'
import HomeComponent from '../pages/HomeComponent.vue'
import FoldersComponent from '../pages/FoldersComponent.vue'
import LeaksComponent from '../pages/LeaksComponent.vue'
import TrashComponent from '../pages/TrashComponent.vue'

const routes = [
  {
    path: '/',
    name: 'home',
    component: HomeComponent
  },
  {
    path: '/folders',
    name: 'folders',
    component: () => FoldersComponent
  },
  {
    path: '/leaks',
    name: 'leaks',
    component: () => LeaksComponent
  },
  {
    path: '/trash',
    name: 'trash',
    component: () => TrashComponent
  }
]

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes
})

export default router
