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
import { useMeta } from 'vue-meta'

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
  setup () {
    useMeta({
      title: `Spineless Laugh's Music | Remixes and Mashups`,
      htmlAttrs: { lang: 'en', amp: true }
    })
  },
  mixins: [ sortByDate, matchCategory, filterReleases ]
}
</script>