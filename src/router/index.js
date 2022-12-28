import { createRouter, createWebHistory } from 'vue-router'


const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [

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
      path: '/',
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
      path: '/addproduct',
      name: 'addProduct',
      component: () => import('../views/AddProductView.vue')
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
    {
      path: '/pruebainput',
      name: 'pruebainput',
      component: () => import('../views/Pruebainput.vue')
    },
  ],
  scrollBehavior(to, from, savedPosition) {
    return { top: 0 }
  },
})

export default router
