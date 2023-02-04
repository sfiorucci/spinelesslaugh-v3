import _ from 'lodash'

export default {
  methods: {
    matchCategory(categories, item) {
      return _.find(categories, [ 'name', item.category ])
    }
  }
}