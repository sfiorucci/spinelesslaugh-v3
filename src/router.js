import { createRouter, createWebHistory } from 'vue-router'
import categories from './data/categories.json'
// import Home from './pages/Home.vue'
// import Tunes from './pages/Tunes.vue'
// import Remixes from './pages/Remixes.vue'
// import Mixes from './pages/Mixes.vue'
// import Mixtapes from './pages/Mixtapes.vue'
// import Subscribe from './pages/Subscribe.vue'

const modules = import.meta.glob('./pages/*.vue')

for (const path in modules) {
  modules[path]().then((mod) => {
    console.log(path, mod)
  })
}

const homeRoute = [
  {
    path: '/',
    component: modules['./pages/Home.vue']
  }
]

console.log(categories)

let categoryRoutes = []
categories.map(cat => {
  let categoryRoute = 
    {
      path: cat.url,
      component: modules[`./pages/${cat.name}.vue`]
    }
  categoryRoutes = [ ...categoryRoutes, categoryRoute ]
  console.log(categoryRoutes)
})

console.log(homeRoute)
console.log(categoryRoutes)

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
  routes: homeRoute.concat(categoryRoutes)
})

console.log(router)

export default router
