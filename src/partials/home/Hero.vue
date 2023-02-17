<template>
  <section class="relative">
    <div class="max-w-6xl mx-auto px-4 sm:px-6">
      <div class="pt-0 pb-0 md:pt-20 md:pb-20">

        <!-- Content -->
        <div class="relative pb-0 max-w-xl mx-auto md:max-w-none text-center md:text-left flex flex-col md:flex-row">

          <!-- Background -->
          <div class="absolute inset-0 bg-gradient-to-br from-slate-900 to-slate-800 rounded-3xl -mx-20 -z-10 overflow-hidden mb-0 mt-0 md:mb-0" aria-hidden="true">

            <!-- Illustration -->
            <div class="absolute -top-16 left-1/2 -translate-x-1/3 md:-translate-x-1/2 pointer-events-none -z-10 blur-2xl">
              <svg xmlns="http://www.w3.org/2000/svg" width="2106" height="1327">
                <defs>
                  <filter id="hi-a" width="133.3%" height="131.3%" x="-16.7%" y="-15.6%" filterUnits="objectBoundingBox">
                    <feGaussianBlur in="SourceGraphic" stdDeviation="0" />
                  </filter>
                  <filter id="hi-b" width="133.3%" height="131.3%" x="-16.7%" y="-15.6%" filterUnits="objectBoundingBox">
                    <feGaussianBlur in="SourceGraphic" stdDeviation="0" />
                  </filter>
                  <filter id="hi-c" width="159.9%" height="145%" x="-29.9%" y="-22.5%" filterUnits="objectBoundingBox">
                    <feGaussianBlur in="SourceGraphic" stdDeviation="0" />
                  </filter>
                </defs>
                <g fill="none" fill-rule="evenodd">
                  <path fill="#6D28D9" fill-opacity=".72" d="M1110.164 893.257C1191.124 1079.102 1484 839.962 1484 626.315S883.228 0 669.507 0s40.54 412.668 40.54 626.315c0 213.647 319.156 81.096 400.117 266.942Z" filter="url(#hi-a)" transform="translate(0 -605)" />
                  <path fill="#67E8F9" fill-opacity=".64" d="M1732.164 1753.257c80.96 185.845 373.836-53.295 373.836-266.942S1505.228 860 1291.507 860s40.54 412.668 40.54 626.315c0 213.647 319.156 81.096 400.117 266.942Z" filter="url(#hi-b)" transform="translate(0 -605)" />
                  <path fill="#F472B6" fill-opacity=".8" d="M1191.108 871C1338.988 871 1631 635.765 1631 487.507 1631 339.248 1625.874 205 1477.994 205s-267.76 120.187-267.76 268.445c0 148.259-167.006 397.555-19.126 397.555Z" filter="url(#hi-c)" transform="translate(0 -605)" />
                </g>
              </svg>
            </div>

          </div>

          <!-- Content -->
          <div class="md:w-[640px] py-12 md:py-20 md:min-h-[480px]">

            <!-- Copy -->
            <h1 class="h1 font-hkgrotesk text-transparent bg-clip-text bg-gradient-to-r from-slate-400 to-white mb-8" data-aos="fade-right" data-aos-delay="100">All things<br/><span class="text-slate-50">Spineless Laugh</span></h1>
            <p class="text-xl text-transparent bg-clip-text bg-gradient-to-t from-slate-400 to-white mb-12" data-aos="fade-right" data-aos-delay="200">Spineless Laugh is beats & bytes: audio editor, producer, sound manipulator. This is the one and only place for all things SL: songs, remixes, mixtapes, playlists, and any other audio experiment.</p>

            <!-- Buttons -->
            <div class="max-w-xs mx-auto sm:max-w-none sm:flex sm:justify-center md:justify-start space-y-6 sm:space-y-0 sm:space-x-4" data-aos="fade-right" data-aos-delay="300">
              <Button v-for="category in categories" :key="category.slug"
                :label="category.name"
                :url="`/${category.slug}`"
                :backgroundColor="category.color.background"
                :hoverColor="category.color.buttonHover"
                :arrowColor="category.color.arrow"
              />
            </div>

          </div>

          <!-- Image -->
          <div class="max-w-sm mx-auto md:max-w-none md:absolute md:left-[36rem] md:top-1/2 md:-translate-y-1/2 md:ml-8 lg:ml-20 xl:ml-32">
            <div data-aos="fade-left" data-aos-duration="2000">
              <img src="../../images/dj-silhouette.png" class="hidden md:flex md:max-w-none" width="401" height="601" alt="studio" />
            </div>
          </div>

        </div>
      </div>
    </div>
  </section>
</template>

<script>

import CategoryJSON from '../../data/categories.json'
import Button from "../../components/HeroButton.vue"

export default {
  name: 'Hero',
  components: {
    Button
  },
  computed: {
    categories() {
      return CategoryJSON
    }
  }
}

</script>