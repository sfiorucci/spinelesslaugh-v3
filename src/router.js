import { createRouter, createWebHistory } from 'vue-router'
import Home from './pages/Home.vue'
import Tunes from './pages/Tunes.vue'
import Subscribe from './pages/Subscribe.vue'

const routerHistory = createWebHistory()

const router = createRouter({
  scrollBehavior(to) {
    if (to.hash) {
      window.scroll({ top: 0 })
    } else {
      document.querySelector('html').style.scrollBehavior = 'auto'
      window.scroll({ top: 0 })
      document.querySelector('html').style.scrollBehavior = ''
    }
  },  
  history: routerHistory,
  routes: [
    {
      path: '/',
      component: Home
    },
    {
      path: '/tunes',
      component: Tunes
    },
    {
      path: '/remixes',
      component: Tunes
    },
    {
      path: '/mixes',
      component: Tunes
    },
    {
      path: '/mixtapes',
      component: Tunes
    }     
  ]
})

export default router
