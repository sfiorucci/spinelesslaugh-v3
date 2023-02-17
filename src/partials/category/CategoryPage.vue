<template>
  <div className="flex flex-col min-h-screen overflow-hidden">

    <!-- Site header -->
    <Header />

    <!-- Page content -->
    <main class="grow">

      <HeroCategory
        :title="category.name"
        :subtitle="category.byline"
        :description="category.excerpt"
        :imageUrl="buildImagePath(category.imagePath, 'category', category.slug, 'png')"
      />
      <Carousel :category="category.slug" />
      <Releases :list="list" />

    </main>
    
    <!-- Site footer -->
    <Footer />    

  </div>
</template>

<script>
import Header from '../../partials/layout/Header.vue'
import HeroCategory from '../../partials/category/Hero.vue'
import Carousel from '../../partials/Carousel.vue'
import Releases from '../../partials/category/Releases.vue'
import Footer from '../../partials/layout/Footer.vue'
import buildImagePath from '../../libraries/mixins'

export default {
  name: 'Home',
  components: {
    Header,
    HeroCategory,
    Carousel,
    Releases,
    Footer,
  },
  props: {
    category: {
      type: Object,
      required: true
    },
    list: {
      type: Array,
      required: true
    }
  },
  mixins: [ buildImagePath ]
}
</script>