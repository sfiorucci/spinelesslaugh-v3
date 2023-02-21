<template>

    <!-- Page content -->
    <main class="grow">

      <AudioPlayer ref="audio" />

      <!-- <HeroCategory
        :title="category.name"
        :subtitle="category.byline"
        :description="category.excerpt"
        :imageUrl="buildImagePath(category.imagePath, 'category', category.slug, 'png')"
      /> -->
      <Carousel :category="getReleaseCategory.slug" />

    </main>
    
</template>

<script>
import { ref } from 'vue'
import AudioPlayer from '../../partials/AudioPlayer.vue'
import Carousel from '../../partials/Carousel.vue'
import categories from '../../data/categories.json'
import buildImagePath from '../../libraries/mixins'
import matchCategory from '../../libraries/mixins'

export default {
  name: 'Home',
  components: {
    AudioPlayer,
    Carousel
  },
  props: {
    release: {
      type: Object,
      required: true
    }
  },
  computed: {
    getReleaseCategory() {
      return this.matchCategory(categories, this.release.category)
    }
  },
  mixins: [ buildImagePath, matchCategory ],
  setup() {
    const audio = ref(null)

    const goToTime = (time) => {
      audio.value.goToTime(time)
    }

    return {
      audio,
      goToTime,
    }
  }
}
</script>