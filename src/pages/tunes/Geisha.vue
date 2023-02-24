<template>
  <div className="flex flex-col min-h-screen overflow-hidden">

    <!-- Site header -->
    <Header />

    <!-- Page content -->
    <TunePage :release="getCurrentRelease"> 
      <template v-slot:description>
        <div class="text-xl">Yet <router-link to="/tunes/emotional-chrysalis" :class="getCurrentCategory.color.text" class="hover:underline">another</router-link> electronic triptych. A digital suite about beauty, slavery, misconception, and every other demon a relationship between humans can summon. Three parts, seamlessly blended, to match apprentice Geishas stages of training.</div>
      </template>
      <template v-slot:samples>
        <InfoBox title="Chapters" icon="ph-bookmarks-simple-fill ph-2x" :borderColor="getCurrentCategory.color.border">
          <ul class="text-lg">
            <li>
              <button class="w-full text-left py-1.5 group" @click="goToTime('0:00')">
                <span class="text-slate-300 font-medium pr-2">▶</span> <span class="text-slate-800 font-medium">0:00</span> <span class="text-slate-500 group-hover:text-slate-800 transition duration-150 ease-in-out">— Shikomi: the music of a simple kimono.</span>
              </button>
              <button class="w-full text-left py-1.5 group" @click="goToTime('2:42')">
                <span class="text-slate-300 font-medium pr-2">▶</span> <span class="text-slate-800 font-medium">2:42</span> <span class="text-slate-500 group-hover:text-slate-800 transition duration-150 ease-in-out">— Minarai: the swish of and obi, filled of kanzashi chimes.</span>
              </button>
              <button class="w-full text-left py-1.5 group" @click="goToTime('3:55')">
                <span class="text-slate-300 font-medium pr-2">▶</span> <span class="text-slate-800 font-medium">3:55</span> <span class="text-slate-500 group-hover:text-slate-800 transition duration-150 ease-in-out">— Maiko: a fully-fledged womand of dance.</span>
              </button>
            </li>
          </ul>
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