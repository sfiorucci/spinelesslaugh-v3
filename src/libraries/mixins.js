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
    matchItemCategory(categories, item) {
      return _.find(categories, [ 'name', item.category ])
    },
    matchCategory(categories, key) {
      return _.find(categories, [ 'name', key ])
    },
    filterReleases(key, items) {
      return _.filter(items, { 'category': key })
    },
    getFeatured(keys, items) {
      let featuredItems = []
      keys.map(i => {
          let featuredItem = _.find(items, [ 'slug', i.slug ])
          featuredItems = [ ...featuredItems, featuredItem ]
        })
      
      return featuredItems
    },
    buildReleasePath(item) {
      return `/${item.category.toLowerCase()}/${item.slug}`
    },
    buildImagePath(path, ratio, slug, format) {
      return `https://www.spinelesslaugh.com/${path}/${ratio}/${slug}.${format}`
    },
    setArchiveTitle(key, items) {
      let title = {
        'text': '',
        'count': ''
      }
      key === 'All' ? 
        title = {
          'text': 'releases',
          'count': items.length
        } : 
        title = {
          'text': key.toLowerCase(),
          'count': this.filterReleases(key, items).length
        } 
      
      return title
    },
    setCategoryInfo(categories, item) {
      const category = this.matchItemCategory(categories, item)
      
      let info = {
        color: {
          bg: '',
          text: '',
          hover: '',
          hex: ''
        },
        url: ''
      }
      
      category === undefined ?
        info = {
          color: {
            bg: 'bg-slate-500',
            text: 'text-slate-500',
            hover: 'text-slate-500',
            hex: '#64748b'
          },
          url: '/'
        } :
        info = {
          color: {
            bg: category.color.background,
            text: category.color.text,
            hover: category.color.textHover,
            hex: category.color.hex
          },
          url: category.url
        }
      
      return info
    }
  }
}