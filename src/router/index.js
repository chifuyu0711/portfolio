import { createRouter, createWebHistory } from 'vue-router'
import HomePage from '@/views/HomePage.vue'


const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    { path: '/', name: 'home', component: HomePage },
    { 
      path: '/about', 
      name: 'about', 
      component: () => import('@/views/InfoPage.vue')
    },
    { 
      path: '/portfolio', 
      name: 'portfolio', 
      component: () => import('@/views/PortfolioPage.vue')
    },
    { 
      path: '/contact',
      name: 'contact', 
      component: () => import('@/views/ContactsPage.vue')
    },
  ]
})

export default router
