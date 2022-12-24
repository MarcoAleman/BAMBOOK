import { createRouter, createWebHistory } from 'vue-router'
import HomeView from '../views/HomeView.vue'

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      name: 'Home',
      component: HomeView
    },
    {
      path: '/AboutUs',
      name: 'AboutUs',
      // route level code-splitting
      // this generates a separate chunk (About.[hash].js) for this route
      // which is lazy-loaded when the route is visited.
      component: () => import('../views/AboutUs.vue')
    },
    {
      path: '/Eventos',
      name: 'Eventos',
      // route level code-splitting
      // this generates a separate chunk (About.[hash].js) for this route
      // which is lazy-loaded when the route is visited.
      component: () => import('../views/Eventos.vue')
    },
    {
      path: '/Noticias',
      name: 'Noticias',
      // route level code-splitting
      // this generates a separate chunk (About.[hash].js) for this route
      // which is lazy-loaded when the route is visited.
      component: () => import('../views/Noticias.vue')
    },
    {
      path: '/RulesAndPolice',
      name: 'RulesAndPolice',
      // route level code-splitting
      // this generates a separate chunk (About.[hash].js) for this route
      // which is lazy-loaded when the route is visited.
      component: () => import('../views/RulesAndPolice.vue')
    },
    {
      path: '/market',
      name: 'market',
      // route level code-splitting
      // this generates a separate chunk (About.[hash].js) for this route
      // which is lazy-loaded when the route is visited.
      component: () => import('../views/MarketView.vue')
    },
    {
      path: '/CreatePost',
      name: 'CreatePost',
      // route level code-splitting
      // this generates a separate chunk (About.[hash].js) for this route
      // which is lazy-loaded when the route is visited.
      component: () => import('../views/CreatePost.vue')
    },
    {
      path: '/Perfil',
      name: 'Perfil',
      // route level code-splitting
      // this generates a separate chunk (About.[hash].js) for this route
      // which is lazy-loaded when the route is visited.
      component: () => import('../views/Perfil.vue')
    },
    {
      path: '/Donation',
      name: 'Donation',
      // route level code-splitting
      // this generates a separate chunk (About.[hash].js) for this route
      // which is lazy-loaded when the route is visited.
      component: () => import('../views/Donation.vue')
    },
    {
      path: '/HomePosts',
      name: 'HomePosts',
      // route level code-splitting
      // this generates a separate chunk (About.[hash].js) for this route
      // which is lazy-loaded when the route is visited.
      component: () => import('../views/HomePosts.vue')
    },
    {
      path: '/market',
      name: 'market',
      component: () => import('../views/MarketView.vue')
    },
    {
      path: '/addProduct',
      name: 'addProduct',
      component: () => import('../views/MarketView.vue')
    },
    {
      path: '/Users',
      name: 'Users',
      component: () => import('../views/Users.vue')
    },
    {
      path: '/userView',
      name: 'userView',
      component: () => import('../views/userView.vue')
    },
  ]
})

export default router
