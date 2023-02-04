<template>
  <div className="flex flex-col min-h-screen overflow-hidden">

    <!-- Site header -->
    <Header />

    <!-- Page content -->
    <main class="grow">

      <Hero />
      <Carousel />
      <Podcasts />
      <Hosts />
      <Testimonials />
      <Cta />

    </main>
    
    <!-- Site footer -->
    <Footer />    

  </div>
</template>

<script>
import Header from '../partials/Header.vue'
import Hero from '../partials/Hero.vue'
import Carousel from '../partials/Carousel.vue'
import Podcasts from '../partials/Podcasts.vue'
import Hosts from '../partials/Hosts.vue'
import Testimonials from '../partials/Testimonials.vue'
import Cta from '../partials/Cta.vue'
import Footer from '../partials/Footer.vue'

export default {
  name: 'Home',
  components: {
    Header,
    Hero,
    Carousel,
    Podcasts,
    Hosts,
    Testimonials,
    Cta,
    Footer,
  },
}
</script>