import _ from 'lodash'

export default {
  methods: {
    sortByDate(items, order) {
      return _.orderBy(items, d => d.date, order);
    }
  }
}