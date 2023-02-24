<template>
  <div className="flex flex-col min-h-screen overflow-hidden">

    <!-- Site header -->
    <Header />

    <!-- Page content -->
    <TunePage :release="getCurrentRelease"> 
      <template v-slot:description>
        <div class="text-xl">Have you ever had the experience of losing reference points through blurred memories and the now undefined shape of what you used to know? A trancestep dubtempo filled with tremolo synths, numbed beats, and pieces of words repeated as a ping-pong delayed mantra.</div>
      </template>
      <template v-slot:samples>
        <InfoBox title="Samples" icon="ph-music-notes-plus-fill ph-2x" :borderColor="getCurrentCategory.color.border">
          <p class="text-lg pb-4 text-slate-500"><span class="text-slate-300 pr-2">—</span>Vocal sample from <a class="text-slate-800 hover:underline" target="_blank" href="https://www.youtube.com/watch?v=bgodzGPAdQE">Friend or Foe</a> by t.A.T.u., originally appearing on the album <a class="text-slate-800 hover:underline" target="_blank" href="https://open.spotify.com/album/5OrPbTYn2h56ShSBTOp9WJ">Dangerous and Moving</a>, published by Universal Music © 2005.</p>
        </InfoBox>
      </template>
    </TunePage>  
    
    <Footer />    

  </div>
</template>

<script>
import Header from '../../partials/layout/Header.vue'
import TunePage from '../../partials/release/TunePage.vue'
import InfoBox from '../../components/InfoBox.vue'
import Footer from '../../partials/layout/Footer.vue'
import releases from '../../data/releases.json'
import categories from '../../data/categories.json'
import matchItemBySlug from '../../libraries/mixins'
import matchCategory from '../../libraries/mixins'

export default {
  name: 'Podcast',
  components: {
    Header,
    TunePage,
    InfoBox,
    Footer,
  },
  computed: {
    getCurrentSlug() {
      const slicedPath = this.$route.path.match(/[^\/]+/g)
      return slicedPath[slicedPath.length - 1]
    },
    getCurrentRelease() {
      return this.matchItemBySlug(releases, this.getCurrentSlug)
    },
    getCurrentCategory() {
      return this.matchCategory(categories, this.getCurrentRelease.category)
    }
  },
  metaInfo() {
    return {
      title: `Spineless Laugh's Music | ${this.getCurrentRelease.title}`,
      description: this.getCurrentRelease.seoDescription,
      url: { tag: 'meta', content: `https://www.spinelesslaugh.com/${this.$route.path}` },
      og: {
        title: `Spineless Laugh's Music | ${this.getCurrentRelease.title}`,
        description: this.getCurrentRelease.seoDescription,
        image: this.buildImagePath(this.getCurrentCategory.imagePath, 'cover', this.getCurrentSlug, 'jpg'),
        type: 'website',
        url: `https://www.spinelesslaugh.com/${this.$route.path}`
      },
      twitter: {
        title: `Spineless Laugh's Music | ${this.getCurrentRelease.title}`,
        description: this.getCurrentRelease.seoDescription,
        image: this.buildImagePath(this.getCurrentCategory.imagePath, 'cover', this.getCurrentSlug, 'jpg')
      }
    }
  },
  mixins: [ matchItemBySlug, matchCategory ]
}
</script>