import _ from 'lodash'

export function extractSubset(items, field, key) {
  return _.filter(items, [ field, key])
}

export function createRoutes(items, modules, path) {
  let routes = []

  items.map(item => {
    let route = 
      {
        path: `/${path}${item.slug}`,
        component: modules[`./pages/${path}${item.componentName}.vue`]
      }
    routes = [ ...routes, route ]
  })

  return routes
}

export function createReleaseRoutes(set, subset, modules) {
  let releaseRoutes = []

  subset.map(s => {
    let categoryReleaseRoutes = createRoutes(extractSubset(set, 'category', s.name), modules, `${s.slug}/`)
    releaseRoutes = releaseRoutes.concat(categoryReleaseRoutes)
  })

  return releaseRoutes
}