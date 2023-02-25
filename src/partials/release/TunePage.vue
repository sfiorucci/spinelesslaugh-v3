<template>

    <!-- Page content -->
    <main class="grow">

      <AudioPlayer ref="audio" :release="release" :category="getReleaseCategory" />

      <div class="max-w-4xl mx-auto px-4 sm:px-6">
        <slot name="description"></slot>  
        <slot name="samples"></slot>
      </div>

      <ul class="text-lg">
            <li>
              <button class="w-full text-left py-1.5 group" @click="goToTime('0:00')">
                <span class="text-slate-300 font-medium pr-2">▶</span> <span class="text-slate-800 font-medium">0:00</span> <span class="text-slate-500 group-hover:text-slate-800 transition duration-150 ease-in-out">— Shikomi: the music of a simple kimono.</span>
              </button>
              <button class="w-full text-left py-1.5 group" @click="goToTime('2:42')">
                <span class="text-slate-300 font-medium pr-2">▶</span> <span class="text-slate-800 font-medium">2:42</span> <span class="text-slate-500 group-hover:text-slate-800 transition duration-150 ease-in-out">— Minarai: the swish of and obi, filled of kanzashi chimes.</span>
              </button>
              <button class="w-full text-left py-1.5 group" @click="goToTime('3:55')">
                <span class="text-slate-300 font-medium pr-2">▶</span> <span class="text-slate-800 font-medium">3:55</span> <span class="text-slate-500 group-hover:text-slate-800 transition duration-150 ease-in-out">— Maiko: a fully-fledged womand of dance.</span>
              </button>
            </li>
          </ul>

      <Carousel class="my-12 md:my-20" :category="getReleaseCategory.slug" />

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
  name: 'TunesPage',
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