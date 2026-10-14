import { createRouter, createWebHistory } from 'vue-router'
import HomePage from '../pages/HomePage.vue'
import ServiceDetailPage from '../pages/ServiceDetailPage.vue'

const routes = [
  { path: '/', name: 'home', component: HomePage },
  { path: '/home', redirect: '/' },
  { path: '/services/:slug', name: 'service-detail', component: ServiceDetailPage },
]

const router = createRouter({
  history: createWebHistory(),
  routes,
})

export default router
