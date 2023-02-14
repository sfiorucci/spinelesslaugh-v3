<template>
  <CategoryPage :category="currentCategory" :list="filteredList"/>
</template>

<script>
import CategoryPage from '../partials/category/CategoryPage.vue'
import CategoryJSON from '../data/categories.json'
import ReleaseJSON from '../data/releases.json'
import sortByDate from '../mixins/helpers'
import matchCategory from '../mixins/helpers'
import filterReleases from '../mixins/helpers'

export default {
  name: 'Mixes',
  components: {
    CategoryPage,
  },
  data() {
    return {
      categoryName: 'Mixes'
    }
  },
  computed: {
    categories() {
      return CategoryJSON
    },
    releases() {
      return this.sortByDate(ReleaseJSON, 'desc')
    },
    currentCategory() {
      return this.matchCategory(this.categories, this.categoryName)
    },
    filteredList() {
      return this.filterReleases(this.categoryName, this.releases)
    }
  },
  mixins: [ sortByDate, matchCategory, filterReleases ]
}
</script>