import { createRouter, createWebHistory } from 'vue-router'
import HomeView from '../views/HomeView.vue'
import product from '../views/product.vue'
import xyz from '../views/xyz.vue'

import homelanding from '../views/homelanding.vue'

import payment from '../views/payment.vue'

import register from '../views/register.vue'
import thanku from '../views/thanku.vue'
import xoxo from '../views/xoxo.vue'





const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      name: 'home',
      component: HomeView
    }, 
    {
      path: '/xyz',
      name: 'xyz',
      component: xyz
    },

    {
      path: '/product',
      name: 'product',
      component: product
    },

    {
      path: '/xoxo',
      name: 'xoxo',
      component: xoxo
    },



    {
      path: '/homelanding',
      name: 'homelanding',
      component: homelanding
    },

    


    {
      path: '/register',
      name: 'register',
      component: register
    },

    {
      path: '/payment',
      name: 'payment',
      component: payment
    },

    {
      path: '/thanku',
      name: 'thanku',
      component: thanku
    },







    {
      path: '/about',
      name: 'about',
      // route level code-splitting
      // this generates a separate chunk (About.[hash].js) for this route
      // which is lazy-loaded when the route is visited.
      component: () => import('../views/AboutView.vue')
    }
  ]
})

export default router
