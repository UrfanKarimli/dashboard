import { createRouter, createWebHistory } from 'vue-router'
import ProductView from '../views/product-page/ProductView.vue'
import MyDashboard from '@/views/home/MyDashboard.vue'
const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      name: 'home',
      component: MyDashboard,
    },
    {
      path: '/products',
      name: 'about',
      // route level code-splitting
      // this generates a separate chunk (About.[hash].js) for this route
      // which is lazy-loaded when the route is visited.
      component: ProductView,
    },
  ],
})

export default router
