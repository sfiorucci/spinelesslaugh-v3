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
      <Releases />

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
import buildImagePath from '../../mixins/helpers'

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
    }
  },
  mixins: [ buildImagePath ]
}
</script>