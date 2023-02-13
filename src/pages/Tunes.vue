<template>
  <CategoryPage :category="matchCategory(categories, 'Tunes')"/>
</template>

<script>
import CategoryPage from '../partials/category/CategoryPage.vue'
import CategoryJSON from '../data/categories.json'
import ReleaseJSON from '../data/releases.json'
import sortByDate from '../mixins/helpers'
import matchCategory from '../mixins/helpers'

export default {
  name: 'Tunes',
  components: {
    CategoryPage,
  },
  computed: {
    categories() {
      return CategoryJSON
    },
    releases() {
      return this.sortByDate(ReleaseJSON, 'desc')
    }
  },
  mixins: [ sortByDate, matchCategory ]
}
</script>