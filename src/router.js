import { createRouter, createWebHistory } from 'vue-router'
import categories from './data/categories.json'
import releases from './data/releases.json'
import { createRoutes } from './libraries/helpers'
import { createReleaseRoutes } from './libraries/helpers'

const pageModules = import.meta.glob('./pages/*.vue')
const tunesModules = import.meta.glob('./pages/tunes/*.vue')
const remixesModules = import.meta.glob('./pages/remixes/*.vue')
const mixesModules = import.meta.glob('./pages/mixes*.vue')
const mixtapesModules = import.meta.glob('./pages/mixtapes*.vue')
const releaseModules = { ...tunesModules, ...remixesModules, ...mixesModules, ...mixtapesModules }

const homeRoute = [
  {
    path: '/',
    component: pageModules['./pages/Home.vue']
  }
]

const categoryRoutes = createRoutes(categories, pageModules, '')

const releaseRoutes = createReleaseRoutes(releases, categories, releaseModules)

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
  routes: homeRoute.concat(categoryRoutes, releaseRoutes)
})

export default router
