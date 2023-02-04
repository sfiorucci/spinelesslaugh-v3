<template>
  <div class="sm:flex items-center p-5 border-b border-slate-100" v-show="['All', item.category].includes(category)">
    <div class="flex items-start mb-4 sm:mb-0">
      <img class="shrink-0 rounded ml-5 sm:ml-0 sm:mr-5 order-1 sm:order-none" :src="item.image" width="88" height="88" :alt="item.title" />
      <div>
        <h3 class="font-hkgrotesk font-extrabold text-lg mb-1">
          <router-link :class="setCategoryColor.hover" class="text-slate-800 transition duration-150 ease-in-out" :to="item.slug">{{item.title}}</router-link>
        </h3>
        <div class="font-hkgrotesk font-medium text-sm text-slate-500 mb-1">
          <a :class="setCategoryColor.text" class="hover:underline" :href=categoryUrl>{{item.category}}</a> <span class="text-slate-300">·</span> {{item.date}} <span class="text-slate-300">·</span> Episode {{item.episode}}
        </div>
        <div class="text-sm text-slate-500">
          {{item.excerpt}}
        </div>
      </div>
    </div>
    <div class="shrink-0 sm:ml-5">
      <router-link :to="item.slug" aria-label="play">
        <svg xmlns="http://www.w3.org/2000/svg" width="40" height="40"><g fill="none" fill-rule="evenodd"><circle cx="20" cy="20" r="20" :fill=setCategoryColor.hex /><path fill="#FFF" fill-rule="nonzero" d="M17.783 14.088A.5.5 0 0 0 17 14.5v11a.5.5 0 0 0 .783.412l8-5.5a.5.5 0 0 0 0-.824l-8-5.5Z"/></g></svg>
      </router-link>
    </div>
  </div>
</template>

<script>

import CategoryJSON from '../data/categories.json'
import matchCategory from '../mixins/matchCategory'

export default {
  name: 'PodcastItem',
  props: {
    item: {
      type: String,
      required: true
    },
    category: {
      type: String,
      required: true
    }
  },
  mixins: [ matchCategory ],
  computed: {
    filters() {
      return CategoryJSON
    },
    setCategoryColor() {
      const categories = this.filters
      const category = this.matchCategory(categories, this.item)
      
      let color = {
        text: '',
        hover: '',
        hex: ''
      }
      
      category === undefined ? color = {
        text: 'text-slate-500',
        hover: 'text-slate-500',
        hex: '#64748b'
      } : color = {
        text: category.color.text,
        hover: category.color.textHover,
        hex: category.color.hex
      }
      
      return color
    }
  }
}
</script>