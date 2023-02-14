<template>
  <section>
    <div class="max-w-6xl mx-auto px-4 sm:px-6">
      <div class="relative">

        <!-- Background -->
        <div class="absolute inset-0 bg-slate-100 rounded-3xl -mx-20 -z-10" aria-hidden="true"></div>

        <div class="py-12 md:py-20 -mx-20 px-20 overflow-hidden">
          <!-- Carousel built with Swiper.js [https://swiperjs.com/] -->
          <!-- * Custom styles in src/css/additional-styles/theme.scss -->
          <div class="carousel swiper-container">
            <div class="swiper-wrapper">
              <!-- Carousel items -->
              <CarouselItem v-for="featuredRelease in getFeaturedReleases" :key="featuredRelease.slug"
                :release="featuredRelease"
              />
            </div>
          </div>

          <!-- Arrows -->
          <div class="flex mt-12 space-x-3 justify-end">
            <button class="carousel-prev relative z-20 w-11 h-11 rounded-full flex items-center justify-center group bg-white hover:bg-slate-100 transition duration-150 ease-in-out">
              <span class="sr-only">Previous</span>
              <svg class="w-4 h-4 fill-slate-500 transition duration-150 ease-in-out" viewBox="0 0 16 16" xmlns="http://www.w3.org/2000/svg">
                <path d="M6.7 14.7l1.4-1.4L3.8 9H16V7H3.8l4.3-4.3-1.4-1.4L0 8z" />
              </svg>
            </button>
            <button class="carousel-next relative z-20 w-11 h-11 rounded-full flex items-center justify-center group bg-white hover:bg-slate-100 transition duration-150 ease-in-out">
              <span class="sr-only">Next</span>
              <svg class="w-4 h-4 fill-slate-500 transition duration-150 ease-in-out" viewBox="0 0 16 16" xmlns="http://www.w3.org/2000/svg">
                <path d="M9.3 14.7l-1.4-1.4L12.2 9H0V7h12.2L7.9 2.7l1.4-1.4L16 8z" />
              </svg>
            </button>
          </div>

        </div>
      </div>
    </div>
  </section>
</template>

<script>
import { onMounted } from 'vue'
import CarouselItem from '../partials/CarouselItem.vue'
import ReleaseJSON from '../data/releases.json'
import FeaturedReleaseJSON from '../data/featured_releases.json'
import getFeatured from '../mixins/helpers'
 
// Import Swiper
import Swiper, { Navigation } from 'swiper'
import 'swiper/css'
Swiper.use([Navigation])

export default {
  name: 'Carousel',
  components: {
    CarouselItem
  },
  props: {
    category: {
      type: String,
      required: true
    }
  },
  computed: {
    releases() {
      return ReleaseJSON
    },
    featuredReleases() {
      return FeaturedReleaseJSON
    },
    getFeaturedReleases() {
      const featured = this.featuredReleases[this.category]
      return this.getFeatured(featured, this.releases)
    }
  },
  mixins: [ getFeatured ],
  setup() {
    onMounted(() => {
      const carousel = new Swiper('.carousel', {
        slidesPerView: 'auto',
        grabCursor: true,
        loop: false,
        centeredSlides: false,
        initialSlide: 0,
        spaceBetween: 24,
        watchSlidesProgress: true,
        navigation: {
          nextEl: '.carousel-next',
          prevEl: '.carousel-prev',
        },
      })
    })
  }
}
</script>