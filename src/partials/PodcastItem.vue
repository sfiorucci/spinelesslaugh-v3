<template>
  <div class="sm:flex items-center p-5 border-b border-slate-100" v-show="['All', item.category].includes(category)">
    <div class="flex items-start mb-4 sm:mb-0">
      <div class="shrink-0 ml-5 sm:ml-0 sm:mr-8 order-1 sm:order-none"><router-link :to="item.slug"><img class="rounded" :src="this.buildImagePath(item.path.image, item.slug, 'square', 'jpg')" width="128" height="128" :alt="item.title" /></router-link></div>
      <div>
        <h3 class="font-hkgrotesk font-extrabold text-lg mb-1">
          <router-link :class="setCategoryInfo(this.filters, this.item).color.hover" class="text-slate-800 transition duration-150 ease-in-out" :to="item.slug">{{item.title}}</router-link>
        </h3>
        <div class="font-hkgrotesk font-medium text-sm text-slate-500 mb-1">
          <a :class="setCategoryInfo(this.filters, this.item).color.text" class="hover:underline" :href="setCategoryInfo(this.filters, this.item).url">{{item.category}}</a> <span class="text-slate-300">·</span> {{this.formatDate(item.date)}}
        </div>
        <div class="text-sm text-slate-500">
          {{item.excerpt}}
        </div>
      </div>
    </div>
    <div class="shrink-0 sm:ml-8">
      <router-link :to="item.slug" aria-label="play">
        <svg xmlns="http://www.w3.org/2000/svg" width="40" height="40"><g fill="none" fill-rule="evenodd"><circle cx="20" cy="20" r="20" :fill="setCategoryInfo(this.filters, this.item).color.hex" /><path fill="#FFF" fill-rule="nonzero" d="M17.783 14.088A.5.5 0 0 0 17 14.5v11a.5.5 0 0 0 .783.412l8-5.5a.5.5 0 0 0 0-.824l-8-5.5Z"/></g></svg>
      </router-link>
    </div>
  </div>
</template>

<script>

import CategoryJSON from '../data/categories.json'
import buildImagePath from '../mixins/helpers'
import formatDate from '../mixins/helpers'
import setCategoryInfo from '../mixins/helpers'

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
  mixins: [ buildImagePath, formatDate, setCategoryInfo ],
  computed: {
    filters() {
      return CategoryJSON
    }
  }
}
</script>