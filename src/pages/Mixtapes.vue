<template>
  <div className="flex flex-col min-h-screen overflow-hidden">

    <!-- Site header -->
    <Header />

    <!-- Page content -->
    <CategoryPage :category="currentCategory" :list="filteredList"/>
    
    <!-- Site footer -->
    <Footer />    

  </div>
</template>

<script>
import Header from '../partials/layout/Header.vue'
import Footer from '../partials/layout/Footer.vue'
import CategoryPage from '../partials/category/CategoryPage.vue'
import CategoryJSON from '../data/categories.json'
import ReleaseJSON from '../data/releases.json'
import sortByDate from '../libraries/mixins'
import matchCategory from '../libraries/mixins'
import filterReleases from '../libraries/mixins'

export default {
  name: 'Mixtapes',
  components: {
    Header,
    CategoryPage,
    Footer
  },
  data() {
    return {
      categoryName: 'Mixtapes'
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
      description: this.currentCategory.seoDescription,
      url: { tag: 'meta', content: `https://www.spinelesslaugh.com/${this.currentCategory.slug}` },
      og: {
        title: this.currentCategory.seoTitle,
        description: this.currentCategory.seoDescription,
        image: this.buildImagePath(this.currentCategory.imagePath, 'cover', this.currentCategory.slug, 'jpg'),
        type: 'website',
        url: `https://www.spinelesslaugh.com/${this.currentCategory.slug}`
      },
      twitter: {
        title: this.currentCategory.seoTitle,
        description: this.currentCategory.seoDescription,
        image: this.buildImagePath(this.currentCategory.imagePath, 'cover', this.currentCategory.slug, 'jpg'),
        card: 'summary_large_image',
        site: '@spineless_laugh'
      }
    }
  },
  mixins: [ sortByDate, matchCategory, filterReleases ]
}
</script>