<template>

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
    
</template>

<script>
import HeroCategory from '../../partials/category/Hero.vue'
import Carousel from '../../partials/Carousel.vue'
import Releases from '../../partials/category/Releases.vue'
import buildImagePath from '../../libraries/mixins'

export default {
  name: 'CategoryPage',
  components: {
    HeroCategory,
    Carousel,
    Releases
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