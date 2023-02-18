<template>
  <div className="flex flex-col min-h-screen overflow-hidden">

    <!-- Site header -->
    <Header />

    <!-- Page content -->
    <main class="grow">

      <Hero />
      <Carousel category="all" />
      <Releases />

    </main>
    
    <!-- Site footer -->
    <Footer />    

  </div>
</template>

<script>
import Header from '../partials/layout/Header.vue'
import Hero from '../partials/home/Hero.vue'
import Carousel from '../partials/Carousel.vue'
import Releases from '../partials/home/Releases.vue'
import Footer from '../partials/layout/Footer.vue'
import { useMeta } from 'vue-meta'

export default {
  name: 'Home',
  components: {
    Header,
    Hero,
    Carousel,
    Releases,
    Footer,
  }
  // setup () { 
  //   useMeta({
  //     meta: [
  //       { 
  //         name: 'description',
  //         content: 'Overrided by Home meta'
  //       }
  //     ]
  //   })
  // }
}
</script>