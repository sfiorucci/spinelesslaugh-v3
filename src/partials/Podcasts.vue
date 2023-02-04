<template>
  <section>
    <div class="max-w-6xl mx-auto px-4 sm:px-6">
      <div class="py-12 md:py-20">

        <!-- Section header -->
        <div class="md:flex justify-between items-center mb-8">
          <h2 class="text-3xl md:text-4xl font-hkgrotesk font-extrabold mb-4 md:mb-0">All {{ setArchiveTitle }}</h2>
          <p>{{ items.category }}</p>
          
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
          <PodcastItem v-for="item in items" :key="item.id"
            :item="item"
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

import PodcastImg01 from '../images/podcast-01.jpg'
import PodcastImg02 from '../images/podcast-02.jpg'
import PodcastImg03 from '../images/podcast-03.jpg'
import PodcastImg04 from '../images/podcast-04.jpg'
import PodcastImg05 from '../images/podcast-05.jpg'
import PodcastImg06 from '../images/podcast-06.jpg'
import PodcastImg07 from '../images/podcast-07.jpg'
import PodcastImg08 from '../images/podcast-08.jpg'

import CategoryJSON from '../data/categories.json'
import Filter from "../components/FilterButton.vue"

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
    setArchiveTitle() {
      let title = ''
      this.category === 'All' ? title = 'releases' : title = this.category.toLowerCase()
      
      return title
    }
  },
  setup() {
    const category = ref('All')

    const items = ref([
      {
        id: 0,
        image: PodcastImg01,
        title: 'Into Public Speaking as a Developer, Part 2',
        slug: '/podcast',
        date: 'Jan 24',
        episode: 234,
        category: 'Tunes',
        excerpt:
          "In today's show, we're excited to have Mike chats with Indie Dev Benedicte Ruiz about getting into public speaking. Mike was the CEO of Panoramic X, a pioneer web development studio.",
      },
      {
        id: 1,
        image: PodcastImg02,
        title: 'Talking Competitive Advantage and Moats for Small SaaSes, Part 1',
        slug: '/podcast',
        date: 'Jan 24',
        episode: 234,
        category: 'Tunes',
        excerpt:
          "In today's show, we're excited to have Mike chats with Indie Dev Benedicte Ruiz about getting into public speaking. Mike was the CEO of Panoramic X, a pioneer web development studio.",
      },
      {
        id: 2,
        image: PodcastImg03,
        title: 'Bootstrapping DevKit to $4.5k MRR',
        slug: '/podcast',
        date: 'Jan 24',
        episode: 234,
        category: 'Mixtapes',
        excerpt:
          "In today's show, we're excited to have Mike chats with Indie Dev Benedicte Ruiz about getting into public speaking. Mike was the CEO of Panoramic X, a pioneer web development studio.",
      },
      {
        id: 3,
        image: PodcastImg04,
        title: 'Focusing on one product in a strong market - For 15 years',
        slug: '/podcast',
        date: 'Jan 24',
        episode: 234,
        category: 'Remixes',
        excerpt:
          "In today's show, we're excited to have Mike chats with Indie Dev Benedicte Ruiz about getting into public speaking. Mike was the CEO of Panoramic X, a pioneer web development studio.",
      },
      {
        id: 4,
        image: PodcastImg05,
        title: 'How to build a brand for your indie product',
        slug: '/podcast',
        date: 'Jan 24',
        episode: 234,
        category: 'Mixes',
        excerpt:
          "In today's show, we're excited to have Mike chats with Indie Dev Benedicte Ruiz about getting into public speaking. Mike was the CEO of Panoramic X, a pioneer web development studio.",
      },
      {
        id: 5,
        image: PodcastImg06,
        title: 'Enterprise Sales as an Indie SaaS featuring Josh Luiz',
        slug: '/podcast',
        date: 'Jan 24',
        episode: 234,
        category: 'Remixes',
        excerpt:
          "In today's show, we're excited to have Mike chats with Indie Dev Benedicte Ruiz about getting into public speaking. Mike was the CEO of Panoramic X, a pioneer web development studio.",
      },
      {
        id: 6,
        image: PodcastImg07,
        title: 'Building a community of generalists on a remote island',
        slug: '/podcast',
        date: 'Jan 24',
        episode: 234,
        category: 'Mixtapes',
        excerpt:
          "In today's show, we're excited to have Mike chats with Indie Dev Benedicte Ruiz about getting into public speaking. Mike was the CEO of Panoramic X, a pioneer web development studio.",
      },
      {
        id: 7,
        image: PodcastImg08,
        title: 'Getting Started with Customer Interviews',
        slug: '/podcast',
        date: 'Jan 24',
        episode: 234,
        category: 'Mixes',
        excerpt:
          "In today's show, we're excited to have Mike chats with Indie Dev Benedicte Ruiz about getting into public speaking. Mike was the CEO of Panoramic X, a pioneer web development studio.",
      },
    ])    

    return {
      category,
      items,
    }
  },
}
</script>