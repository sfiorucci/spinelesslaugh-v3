import { createRouter, createWebHistory } from 'vue-router'
import Home from './pages/Home.vue'
import Tunes from './pages/Tunes.vue'
import Remixes from './pages/Remixes.vue'
import Mixes from './pages/Mixes.vue'
import Mixtapes from './pages/Mixtapes.vue'
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
      component: Remixes
    },
    {
      path: '/mixes',
      component: Mixes
    },
    {
      path: '/mixtapes',
      component: Mixtapes
    }     
  ]
})

export default router
