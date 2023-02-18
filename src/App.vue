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
      description: `Audio editor, producer, and sound manipulator. Here you can find all songs, remixes, mixtapes, playlists, and any other music experiment by Spineless Laugh.`,
      htmlAttrs: { lang: 'en', amp: true },
      meta: [
        { charset: 'UTF-8' },
        { name: 'viewport', content: 'width=device-width, initial-scale=1.0' }
      ]
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
