<template>
  <div class="swiper-slide h-auto flex flex-col max-w-[446px] group">
    <router-link :to="buildReleasePath(release)" class="hover:translate-y-2 transition duration-500 ease-in-out">
      <div>
        <div :class="matchCategory(categories, release.category).color.background" class="absolute inset-0 -z-10 rounded-3xl mix-blend-multiply">
          <img class="w-full h-full object-cover rounded-3xl mix-blend-multiply opacity-80" :src="buildImagePath(release.path.image, 'bw-fade/small', release.slug, 'jpg')" width="446" height="200" alt="Carousel 01" />
        </div>
        <div class="p-5 pb-14">
          <div class="font-hkgrotesk font-extrabold text-white text-xl leading-tight mb-1">{{ release.title }}</div>
          <div class="font-hkgrotesk text-white font-medium text-sm opacity-80 mb-4">{{ release.category }} · {{ formatDate(release.date) }}
          </div>
          <img src="../images/play.svg" width="48" height="48" alt="Play" aria-hidden="true" />
        </div>
      </div>
    </router-link>
  </div>
</template>

<script>

import CategoryJSON from '../data/categories.json'
import formatDate from '../libraries/mixins'
import matchCategory from '../libraries/mixins'
import buildReleasePath from '../libraries/mixins'

export default {
  name: 'CarouselItem',
  props: {
    release: {
      type: Object,
      required: true
    }
  },
  mixins: [ formatDate, matchCategory, buildReleasePath ],
  computed: {
    categories() {
      return CategoryJSON
    }
  }
}

</script>