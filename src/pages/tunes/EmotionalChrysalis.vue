<template>
  <div className="flex flex-col min-h-screen overflow-hidden">

    <!-- Site header -->
    <Header />

    <!-- Page content -->
    <main class="grow">

      <AudioPlayer ref="audio" :release="getCurrentRelease" :category="getCurrentCategory" />

      <ReleaseDescription>
        An electronic opera in three parts, aiming to track down the ancient algorithm of building beauty from scratch. First, casting the caterpillar, bringing life into a cocoon. Then, editing chrysalis and contemplating the J-formation process. Last, mixing the final butterfly and watch it fly, in chaotic, random motion.
      </ReleaseDescription>

      <InfoBox title="Chapters" icon="ph-bookmarks-simple-fill ph-2x" :borderColor="getCurrentCategory.color.border">
          <ul class="text-lg">
            <li>
              <button class="w-full text-left py-1.5 group" @click="goToTime('0:00')">
                <PlayListStyle /><TimeCode time="0:00" /> <span class="text-slate-500 group-hover:text-slate-800 transition duration-150 ease-in-out">— Casting caterpillar.</span>
              </button>
            </li>
            <li>
              <button class="w-full text-left py-1.5 group" @click="goToTime('2:44')">
                <PlayListStyle /><TimeCode time="2:44" /> <span class="text-slate-500 group-hover:text-slate-800 transition duration-150 ease-in-out">— Editing chrysalis: the J-formation.</span>
              </button>
            </li>
            <li>
              <button class="w-full text-left py-1.5 group" @click="goToTime('9:00')">
                <PlayListStyle /><TimeCode time="9:00" /> <span class="text-slate-500 group-hover:text-slate-800 transition duration-150 ease-in-out">— Mixing butterfly in motion.</span>
              </button>
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
import PlayListStyle from '../../components/PlayListStyle.vue'
import TimeCode from '../../components/TimeCode.vue'
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
    PlayListStyle,
    TimeCode,
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
      title: `Spineless Laugh's Music | ${this.getCurrentRelease.fullTitle}`,
      description: this.getCurrentRelease.seoDescription,
      url: { tag: 'meta', content: `https://www.spinelesslaugh.com/${this.$route.path}` },
      og: {
        title: `Spineless Laugh's Music | ${this.getCurrentRelease.fullTitle}`,
        description: this.getCurrentRelease.seoDescription,
        image: this.buildImagePath(this.getCurrentCategory.imagePath, 'cover', this.getCurrentSlug, 'jpg'),
        type: 'website',
        url: `https://www.spinelesslaugh.com/${this.$route.path}`
      },
      twitter: {
        title: `Spineless Laugh's Music | ${this.getCurrentRelease.fullTitle}`,
        description: this.getCurrentRelease.seoDescription,
        image: this.buildImagePath(this.getCurrentCategory.imagePath, 'cover', this.getCurrentSlug, 'jpg')
      }
    }
  },
  mixins: [ matchItemBySlug, matchCategory ]
}
</script>
