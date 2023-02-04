import { createRouter, createWebHistory } from 'vue-router'
import Home from './pages/Home.vue'
import Podcast from './pages/Podcast.vue'
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
      component: Podcast
    },
    {
      path: '/remixes',
      component: Podcast
    },
    {
      path: '/mixes',
      component: Podcast
    },
    {
      path: '/mixtapes',
      component: Podcast
    }     
  ]
})

export default router
