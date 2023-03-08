<template>
  <div className="flex flex-col min-h-screen overflow-hidden">

    <!-- Site header -->
    <Header />

    <!-- Page content -->
    <main class="grow">

      <AudioPlayer ref="audio" :release="getCurrentRelease" :category="getCurrentCategory" />

      <ReleaseDescription>
        A deep dive from original chaos to unfaithful calm and sharp melodies. Everything following a quite long path of noisy but tight kickdrum danceability. A rich, dynamic collage of textures tightened by phenomenal control, blending rock percussion into massive walls of synth and wavering keys.
      </ReleaseDescription>

      <InfoBox title="Original version" icon="ph-copyright-fill ph-2x" :borderColor="getCurrentCategory.color.border">
          <ul class="text-lg">
           <li>
              <p class="text-lg pb-4 text-slate-500"><EmDashListStyle /><a class="text-slate-800 hover:underline" target="_blank" href="https://n5md.bandcamp.com/track/the-last-big-impezzo">Original tune</a> composed and recorded by port-royal, featured on the album <a class="text-slate-800 hover:underline" target="_blank" href="https://n5md.bandcamp.com/album/where-are-you-now">Where Are You Now</a>, published by n5MD Records © 2015.</p>
            </li>
          </ul>
        </InfoBox>

      <InfoBox title="Samples" icon="ph-music-notes-plus-fill ph-2x" :borderColor="getCurrentCategory.color.border">
          <ul class="text-lg">
           <li>
              <p class="text-lg pb-4 text-slate-500"><EmDashListStyle />Synth sample from <a class="text-slate-800 hover:underline" target="_blank" href="https://soundcloud.com/abstraxion/white-rain-feat-chloe-original">White Rain</a> by Abstraxion (feat. Chloé), originally appearing on the album <a class="text-slate-800 hover:underline" target="_blank" href="https://abstraxion.bandcamp.com/album/break-of-lights">Break of Light</a>, published by HAKT Records © 2013.</p>
            </li>
          </ul>
        </InfoBox>

      <Carousel class="my-12 md:my-20" :category="getCurrentCategory.slug" />
    
    </main> 
    
    <!-- Site footer -->
    <Footer />    

  </div>
</template>

<script>
import { ref } from 'vue'
import AudioPlayer from '../../partials/AudioPlayer.vue'
import Header from '../../partials/layout/Header.vue'
import ReleaseDescription from '../../components/ReleaseDescription.vue'
import InfoBox from '../../components/InfoBox.vue'
import EmDashListStyle from '../../components/EmDashListStyle.vue'
import Carousel from '../../partials/Carousel.vue'
import Footer from '../../partials/layout/Footer.vue'
import releases from '../../data/releases.json'
import categories from '../../data/categories.json'
import matchItemBySlug from '../../libraries/mixins'
import matchCategory from '../../libraries/mixins'

export default {
  name: 'Podcast',
  components: {
    Header,
    AudioPlayer,
    ReleaseDescription,
    InfoBox,
    EmDashListStyle,
    Carousel,
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
  setup() {
    const audio = ref(null)

    const goToTime = (time) => {
      audio.value.goToTime(time)
    }

    return {
      audio,
      goToTime,
    }
  },
  metaInfo() {
    return {
      title: `Spineless Laugh's ${this.getCurrentCategory.name} | ${this.getCurrentRelease.fullTitle}`,
      description: this.getCurrentRelease.seoDescription,
      url: { tag: 'meta', content: `https://www.spinelesslaugh.com/${this.$route.path}` },
      og: {
        title: `Spineless Laugh's ${this.getCurrentCategory.name} | ${this.getCurrentRelease.fullTitle}`,
        description: this.getCurrentRelease.seoDescription,
        image: this.buildImagePath(this.getCurrentCategory.imagePath, 'cover', this.getCurrentSlug, 'jpg'),
        type: 'website',
        url: `https://www.spinelesslaugh.com/${this.$route.path}`
      },
      twitter: {
        title: `Spineless Laugh's ${this.getCurrentCategory.name} | ${this.getCurrentRelease.fullTitle}`,
        description: this.getCurrentRelease.seoDescription,
        image: this.buildImagePath(this.getCurrentCategory.imagePath, 'cover', this.getCurrentSlug, 'jpg')
      }
    }
  },
  mixins: [ matchItemBySlug, matchCategory ]
}
</script>