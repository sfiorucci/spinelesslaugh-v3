<template>
  <section>
    <div class="max-w-4xl mx-auto px-4 sm:px-6">
      <div class="py-12 md:py-20"> 

        <!-- Section title -->
          <h2 class="text-3xl md:text-4xl font-hkgrotesk font-extrabold mb-4">All {{ list[0].category }} ({{ list.length }})</h2>

        <!-- Releases -->
          <ReleaseItem v-for="release in list" :key="release.slug"
            :item="release"
            :category="release.category"
          />

      </div>
    </div>
  </section>
</template>

<script>
import ReleaseItem from '../../partials/home/ReleaseItem.vue'
import Filter from "../../components/FilterButton.vue"

export default {
  name: 'Releases',
  components: {
    ReleaseItem,
    Filter,
  },
  props: {
    list: {
      type: Array,
      required: true
    }
  }
}
</script>