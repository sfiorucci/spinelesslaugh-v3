<template>
  <section>
    <div class="max-w-4xl mx-auto px-4 sm:px-6">
      <div class="py-12 md:py-20">

        <!-- Section header -->
        <div class="md:flex justify-between items-center mb-8">
          <h2 class="text-3xl md:text-4xl font-hkgrotesk font-extrabold mb-4 md:mb-0">All {{ setArchiveTitle(category, releases).text }} ({{ setArchiveTitle(category, releases).count }})</h2>
          
          <!-- Filters -->
          <div class="flex flex-wrap -m-1">
            <Filter @selectcategory="category = $event" v-for="filter in filters" :key="filter.slug"
              :label="filter.name"
              :textColor="filter.color.text"
              :category="category"
            />
            <button class="font-medium text-sm bg-white hover:bg-slate-100 px-3 py-0.5 rounded-full inline-flex transition duration-150 ease-in-out m-1 shadow-sm" :class="category === 'All' ? 'text-slate-800 !bg-white' : 'text-slate-500'" @click="category = 'All'">All</button>
          </div>
        </div> 

        <!-- Podcasts -->
        <div>
          <PodcastItem v-for="release in releases" :key="release.slug"
            :item="release"
            :category="category"
          />
        </div>

      </div>
    </div>
  </section>
</template>

<script>
import { ref } from 'vue'
import PodcastItem from '../partials/PodcastItem.vue'
import CategoryJSON from '../data/categories.json'
import ReleaseJSON from '../data/releases.json'
import Filter from "../components/FilterButton.vue"
import sortByDate from '../mixins/helpers'
import setArchiveTitle from '../mixins/helpers'

export default {
  name: 'Podcasts',
  components: {
    PodcastItem,
    Filter,
  },
  computed: {
    filters() {
      return CategoryJSON
    },
    releases() {
      return this.sortByDate(ReleaseJSON, 'desc')
    }
  },
  mixins: [ sortByDate, setArchiveTitle ],
  setup() {
    const category = ref('All')  

    return {
      category
    }
  },
}
</script>