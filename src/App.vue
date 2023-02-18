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

export default {
  metaInfo() {
    return {
      title: `Spineless Laugh's Music | Beats & Bytes`,
      description: `Audio editor, producer, and sound manipulator. Here you can find all songs, remixes, mixtapes, playlists, and any other music experiment by Spineless Laugh.`,
      charset: 'UTF-8',
      robots: { tag: 'meta', content: 'index, follow' },
      copyright: { tag: 'meta', content: 'Spineless Laugh' },
      keywords: { tag: 'meta', content: 'music, electro, mixes, remixes, mixtapes, playlists, spineless laugh, producer' },
      copyright: { tag: 'meta', content: 'Spineless Laugh' },
      viewport: { tag: 'meta', content: 'width=device-width, initial-scale=1.0' },
      language: { tag: 'meta', content: 'EN' },
      author: { tag: 'meta', content: 'Spineless Laugh, spineless@spinelesslaugh.com' },
      designer: { tag: 'meta', content: 'Spineless Laugh' },
      url: { tag: 'meta', content: 'https://www.spinelesslaugh.com' },
      og: {
        title: `Spineless Laugh's Music | Beats & Bytes`,
        description: `Audio editor, producer, and sound manipulator. Here you can find all songs, remixes, mixtapes, playlists, and any other music experiment by Spineless Laugh.`,
        image: './images/home-cover.jpg',
        type: 'website',
        url: 'https://www.spinelesslaugh.com'
      },
      twitter: {
        title: `Spineless Laugh's Music | Beats & Bytes`,
        description: `Audio editor, producer, and sound manipulator. Here you can find all songs, remixes, mixtapes, playlists, and any other music experiment by Spineless Laugh.`,
        image: './images/home-cover.jpg',
        card: 'summary_large_image',
        site: '@spineless_laugh'
      }
    }
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
