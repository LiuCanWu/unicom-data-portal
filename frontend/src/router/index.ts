import { createRouter, createWebHistory } from 'vue-router'

import HomeView from '../views/HomeView.vue'
import ProductsView from '../views/ProductsView.vue'
import ProductDetailView from '../views/ProductDetailView.vue'
import ExperienceView from '../views/ExperienceView.vue'
import SolutionsView from '../views/SolutionsView.vue'
import AboutView from '../views/AboutView.vue'
import NotFoundView from '../views/NotFoundView.vue'

const router = createRouter({
  history: createWebHistory(),

  routes: [
    {
      path: '/',
      name: 'home',
      component: HomeView,
    },

    {
      path: '/products',
      name: 'products',
      component: ProductsView,
    },

    {
      path: '/products/:slug',
      name: 'product-detail',
      component: ProductDetailView,
    },

    {
      path: '/experience',
      name: 'experience',
      component: ExperienceView,
    },

    {
      path: '/solutions',
      name: 'solutions',
      component: SolutionsView,
    },

    {
      path: '/about',
      name: 'about',
      component: AboutView,
    },

    {
      path: '/:pathMatch(.*)*',
      name: 'not-found',
      component: NotFoundView,
    },
  ],
})

export default router