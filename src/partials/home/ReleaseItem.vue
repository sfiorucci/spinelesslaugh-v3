<template>
  <div class="sm:flex items-center py-8 border-b border-slate-100" v-show="['All', item.category].includes(category)">
    <div class="flex flex-col sm:flex-row items-start">
      <div class="shrink-0 mb-8 sm:mb-0 sm:mr-8"><router-link :to="buildReleasePath(item)"><img class="rounded sm:w-36 sm:h-36" :src="buildImagePath(item.path.image, 'square', item.slug, 'jpg')" :alt="item.title" /></router-link></div>
      <div>
        <h3 class="font-hkgrotesk font-extrabold text-lg mb-1">
          <router-link :class="setCategoryInfo(filters, item).color.hover" class="text-slate-800 transition duration-150 ease-in-out" :to="buildReleasePath(item)">{{ item.title }}</router-link>
        </h3>
        <div class="font-hkgrotesk font-medium text-sm text-slate-500 mb-1">
          <a :class="setCategoryInfo(filters, item).color.text" class="hover:underline" :href="setCategoryInfo(filters, item).url">{{ item.category }}</a> <span class="text-slate-300">·</span> {{ formatDate(item.date) }} <span class="text-slate-300">·</span> {{ item.duration }}
        </div>
        <div class="text-sm text-slate-500">
          {{item.excerpt}}
        </div>
      </div>
    </div>
    <div class="hidden sm:flex shrink-0 sm:ml-10">
      <router-link :to="buildReleasePath(item)" aria-label="play">
        <svg xmlns="http://www.w3.org/2000/svg" width="40" height="40"><g fill="none" fill-rule="evenodd"><circle cx="20" cy="20" r="20" :fill="setCategoryInfo(filters, item).color.hex" /><path fill="#FFF" fill-rule="nonzero" d="M17.783 14.088A.5.5 0 0 0 17 14.5v11a.5.5 0 0 0 .783.412l8-5.5a.5.5 0 0 0 0-.824l-8-5.5Z"/></g></svg>
      </router-link>
    </div>
  </div>
</template>

<script>

import CategoryJSON from '../../data/categories.json'
import buildReleasePath from '../../libraries/mixins'
import buildImagePath from '../../libraries/mixins'
import formatDate from '../../libraries/mixins'
import setCategoryInfo from '../../libraries/mixins'

export default {
  name: 'ReleaseItem',
  props: {
    item: {
      type: Object,
      required: true
    },
    category: {
      type: String,
      required: true
    }
  },
  mixins: [ buildImagePath, buildReleasePath, formatDate, setCategoryInfo ],
  computed: {
    filters() {
      return CategoryJSON
    }
  }
}
</script>