import { createRouter, createWebHistory } from 'vue-router'
import HomeView from '../views/HomeView.vue'
import GalleryView from '../views/GalleryView.vue'
import PreviewView from '../views/PreviewView.vue'

const routes = [
  {
    path: '/',
    name: 'home',
    component: HomeView,
  },
  {
    path: '/category/:categorySlug',
    name: 'gallery',
    component: GalleryView,
    props: true,
  },
  {
    path: '/preview/:categorySlug/:templateSlug',
    name: 'preview',
    component: PreviewView,
    props: true,
  },
  {
    path: '/:pathMatch(.*)*',
    redirect: '/',
  },
]

export default createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes,
  scrollBehavior() {
    return { top: 0 }
  },
})
