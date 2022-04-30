import { createRouter, createWebHashHistory } from 'vue-router'
const Home = () => import('../views/home/Home.vue')
const CateGory= () => import ('../views/category/CateGory.vue')
const Cart= () => import ('../views/cart/Cart.vue')
const ProFile= () => import ('../views/profile/ProFile.vue')
const routes = [
  {
    path: '/',
    name: 'home',
    component: Home
  },
  {
    path: '/home',
    name: 'home',
    component: Home
  },
  {
    path: '/category',

    component: CateGory
  },
  {
    path: '/cart',
    name: 'cart',
    component: CateGory
  },
  {
    path: '/profile',
    name: 'profile',
    component: ProFile
  },

]

const router = createRouter({
  history: createWebHashHistory(),
  routes
})

export default router
