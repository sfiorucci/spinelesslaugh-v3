<template>
  <div class="swiper-slide h-auto flex flex-col max-w-[446px] group">
    <router-link :to="release.slug">
      <div>
        <div class="absolute inset-0 -z-10">
          <img class="w-full h-full object-cover rounded-3xl" src="../images/carousel-01.png" width="446" height="200" alt="Carousel 01" />
        </div>
        <div class="p-5 pb-14">
          <div class="font-hkgrotesk font-extrabold text-white text-xl leading-tight mb-1">{{ release.title }}</div>
          <div class="font-hkgrotesk text-white font-medium text-sm opacity-80 mb-4">{{ release.category }} · {{ this.formatDate(release.date) }}</div>
          <img src="../images/play.svg" width="48" height="48" alt="Play" aria-hidden="true" />
        </div>
      </div>
    </router-link>
  </div>
</template>

<script>

import CategoryJSON from '../data/categories.json'
import formatDate from '../mixins/helpers'
import matchCategory from '../mixins/helpers'

export default {
  name: 'CarouselItem',
  props: {
    release: {
      type: Object,
      required: true
    }
  },
  mixins: [ formatDate, matchCategory ],
  computed: {
    categories() {
      return CategoryJSON
    },
  }
}

</script>