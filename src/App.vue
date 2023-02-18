<template>
  <div>
  <metainfo>
      <template v-slot:title="{ content }">{{ content }}</template>
    </metainfo>
  <router-view />
</div>
</template>

<script>
import AOS from 'aos'
import { useMeta } from 'vue-meta'

export default {
  setup () {
    useMeta({
      title: `Spineless Laugh's Music | Beats & Bytes`,
      htmlAttrs: { lang: 'en', amp: true }
    })
  },
  mounted() {
    AOS.init({
      once: true,
      disable: 'phone',
      duration: 700,
      easing: 'ease-out-cubic',
    }) 
  }
}
</script>
