import { createRouter, createWebHistory } from 'vue-router'

import HomeView from "@/views/homeView.vue"
import MyListView from "@/views/MyListView.vue"
import WeekView from "@/views/WeekView.vue"

const routes = [
  {
    path: "/",
    name: "home",
    component: HomeView,
  },
  {
    path: "/my-list",
    name: "my-list",
    component: MyListView,
  },
  {
    path: "/week",
    name: "week",
    component: WeekView,
  },
]

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes,
})

export default router
