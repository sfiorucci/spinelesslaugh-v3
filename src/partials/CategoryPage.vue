<template>
  <div className="flex flex-col min-h-screen overflow-hidden">

    <!-- Site header -->
    <Header />

    <!-- Page content -->
    <main class="grow">

      <HeroCategory
        :title="category.name"
        :description="category.excerpt"
        :imageUrl="buildImagePath(category.imagePath, 'category', category.slug, 'png')"
      />
      <Carousel />
      <Podcasts />

    </main>
    
    <!-- Site footer -->
    <Footer />    

  </div>
</template>

<script>
import Header from '../partials/Header.vue'
import HeroCategory from '../partials/HeroCategory.vue'
import Carousel from '../partials/Carousel.vue'
import Podcasts from '../partials/Podcasts.vue'
import Footer from '../partials/Footer.vue'
import buildImagePath from '../mixins/helpers'

export default {
  name: 'Home',
  components: {
    Header,
    HeroCategory,
    Carousel,
    Podcasts,
    Footer,
  },
  props: {
    category: {
      type: Object,
      required: true
    }
  },
  mixins: [ buildImagePath ]
}
</script>