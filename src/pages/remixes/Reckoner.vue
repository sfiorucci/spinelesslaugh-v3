<template>
  <div className="flex flex-col min-h-screen overflow-hidden">

    <!-- Site header -->
    <Header />

    <!-- Page content -->
    <main class="grow">

      <AudioPlayer ref="audio" :release="getCurrentRelease" :category="getCurrentCategory" />

      <ReleaseDescription>
        Like ripples on a blank shore, synthetic tears separate into echoes of electric pianos and drum machines. No one's to blame. Melodic guitar samples are bittersweet distractors that fill some final gaps. Dedicated to all human beings, and robots too.
      </ReleaseDescription>

      <InfoBox title="Original version" icon="ph-copyright-fill ph-2x" :borderColor="getCurrentCategory.color.border">
          <ul class="text-lg">
           <li>
              <p class="text-lg pb-4 text-slate-500"><EmDashListStyle /><a class="text-slate-800 hover:underline" target="_blank" href="https://www.youtube.com/watch?v=2FMP-9bn9N8">Original tune</a> composed and recorded by Radiohead, featured on the album <a class="text-slate-800 hover:underline" target="_blank" href="https://open.spotify.com/album/5vkqYmiPBYLaalcmjujWxK">In Rainbows</a>, published by XL Recordings © 2007.</p>
            </li>
          </ul>
        </InfoBox>

      <InfoBox title="Samples" icon="ph-music-notes-plus-fill ph-2x" :borderColor="getCurrentCategory.color.border">
          <ul class="text-lg">
           <li>
              <p class="text-lg pb-4 text-slate-500"><EmDashListStyle />Guitar sample from <a class="text-slate-800 hover:underline" target="_blank" href="https://www.youtube.com/watch?v=bEExYwIZido">Distance</a> by Edwood, originally appearing on the album <a class="text-slate-800 hover:underline" target="_blank" href="https://open.spotify.com/album/0eK4vulHQ6NDfQ0NNayCS2">Like A Movement</a>, published by Ghost Records © 2006.</p>
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
      title: `Spineless Laugh's ${this.getCurrentCategory.name} | ${this.getCurrentRelease.title}`,
      description: this.getCurrentRelease.seoDescription,
      url: { tag: 'meta', content: `https://www.spinelesslaugh.com/${this.$route.path}` },
      og: {
        title: `Spineless Laugh's ${this.getCurrentCategory.name} | ${this.getCurrentRelease.title}`,
        description: this.getCurrentRelease.seoDescription,
        image: this.buildImagePath(this.getCurrentCategory.imagePath, 'cover', this.getCurrentSlug, 'jpg'),
        type: 'website',
        url: `https://www.spinelesslaugh.com/${this.$route.path}`
      },
      twitter: {
        title: `Spineless Laugh's ${this.getCurrentCategory.name} | ${this.getCurrentRelease.title}`,
        description: this.getCurrentRelease.seoDescription,
        image: this.buildImagePath(this.getCurrentCategory.imagePath, 'cover', this.getCurrentSlug, 'jpg')
      }
    }
  },
  mixins: [ matchItemBySlug, matchCategory ]
}
</script>