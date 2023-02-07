import _ from 'lodash'
import format from 'date-fns/format'
import parseISO from 'date-fns/parseISO'

export default {
  methods: {
    formatDate(date) {
      return format(parseISO(date), 'MMMM d, yyyy')
    },
    sortByDate(items, order) {
      return _.orderBy(items, d => d.date, order);
    },
    matchCategory(categories, item) {
      return _.find(categories, [ 'name', item.category ])
    },
    getFeatured(keys, items) {
      let featuredItems = []
      keys.map(i => {
          let featuredItem = _.find(items, [ 'slug', i.slug ])
          featuredItems = [ ...featuredItems, featuredItem ]
        })
      
      return featuredItems
    },
    buildImagePath(path, slug, format) {
      return `https://www.spinelesslaugh.com/${path}/${slug}.${format}`
    }
  }
}