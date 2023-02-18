<template>
  <CategoryPage :category="currentCategory" :list="filteredList"/>
</template>

<script>
import CategoryPage from '../partials/category/CategoryPage.vue'
import CategoryJSON from '../data/categories.json'
import ReleaseJSON from '../data/releases.json'
import sortByDate from '../libraries/mixins'
import matchCategory from '../libraries/mixins'
import filterReleases from '../libraries/mixins'

export default {
  name: 'Remixes',
  components: {
    CategoryPage,
  },
  data() {
    return {
      categoryName: 'Remixes'
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
  metaInfo() {
    return {
      title: this.currentCategory.seoTitle,
      description: this.currentCategory.seoDescription
    }
  },
  mixins: [ sortByDate, matchCategory, filterReleases ]
}
</script>