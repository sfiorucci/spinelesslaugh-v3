<template>
  <div className="flex flex-col min-h-screen overflow-hidden">

    <!-- Site header -->
    <Header />

    <!-- Page content -->
    <main class="grow">

      <AudioPlayer ref="audio" />

      <!-- Content -->
      <section>
        <div class="max-w-6xl mx-auto px-4 sm:px-6">
          <div class="pb-12 md:pb-20">
      
            <div class="md:flex md:justify-between md:space-x-14">
      
              <!-- Main content -->
              <div class="md:grow space-y-8 mb-12 md:mb-0">
                <!-- Notes -->
                <div>
                  <h2 class="text-3xl md:text-4xl font-hkgrotesk font-extrabold mb-4">Notes</h2>
                  <p class="text-slate-500">
                    In this episode, It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the with the release of letraset sheets containing passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.
                  </p>
                </div>
                <!-- Topics -->
                <div>
                  <h3 class="h3 font-hkgrotesk mb-4">Topics</h3>
                  <ul>
                    <li>
                      <button class="w-full text-left py-1.5 group" @click="goToTime('0:25')">
                        <span class="text-slate-400 font-medium">›</span> <span class="text-slate-800 font-medium">0:25</span> <span class="text-slate-500 group-hover:text-blue-500 transition duration-150 ease-in-out">Jason's first podcast ever</span>
                      </button>
                      <button class="w-full text-left py-1.5 group" @click="goToTime('0:53')">
                        <span class="text-slate-400 font-medium">›</span> <span class="text-slate-800 font-medium">0:53</span> <span class="text-slate-500 group-hover:text-blue-500 transition duration-150 ease-in-out">Helen's been on other podcasts: Startups for the Rest of Us, Indie Bites, Indie Worldwide</span>
                      </button>
                      <button class="w-full text-left py-1.5 group" @click="goToTime('1:22')">
                        <span class="text-slate-400 font-medium">›</span> <span class="text-slate-800 font-medium">1:22</span> <span class="text-slate-500 group-hover:text-blue-500 transition duration-150 ease-in-out">Should we invest in the "auto publish to YouTube" feature?</span>
                      </button>
                      <button class="w-full text-left py-1.5 group" @click="goToTime('1:48')">
                        <span class="text-slate-400 font-medium">›</span> <span class="text-slate-800 font-medium">1:48</span> <span class="text-slate-500 group-hover:text-blue-500 transition duration-150 ease-in-out">The best features the ones that feel like "magic" when a customer uses them</span>
                      </button>
                      <button class="w-full text-left py-1.5 group" @click="goToTime('2:01')">
                        <span class="text-slate-400 font-medium">›</span> <span class="text-slate-800 font-medium">2:01</span> <span class="text-slate-500 group-hover:text-blue-500 transition duration-150 ease-in-out">The "wait and see" product development philosophy</span>
                      </button>
                      <button class="w-full text-left py-1.5 group" @click="goToTime('2:24')">
                        <span class="text-slate-400 font-medium">›</span> <span class="text-slate-800 font-medium">2:24</span> <span class="text-slate-500 group-hover:text-blue-500 transition duration-150 ease-in-out">A new podcast website builder CMS and website designs</span>
                      </button>
                      <button class="w-full text-left py-1.5 group" @click="goToTime('2:45')">
                        <span class="text-slate-400 font-medium">›</span> <span class="text-slate-800 font-medium">2:45</span> <span class="text-slate-500 group-hover:text-blue-500 transition duration-150 ease-in-out">Making a few new podcast website themes</span>
                      </button>
                      <button class="w-full text-left py-1.5 group" @click="goToTime('2:57')">
                        <span class="text-slate-400 font-medium">›</span> <span class="text-slate-800 font-medium">2:57</span> <span class="text-slate-500 group-hover:text-blue-500 transition duration-150 ease-in-out">How we run our weekly team meetings</span>
                      </button>
                    </li>
                  </ul>
                </div>
                <!-- Contributors -->
                <div>
                  <h3 class="h3 font-hkgrotesk mb-4">Contributors</h3>
                  <div class="text-slate-500 space-y-3">
                    <p>
                      <span class="text-slate-400">—</span> <a class="font-medium text-slate-800 underline hover:no-underline" href="#0">Jon Buda</a> lives in London, UK. He's been involved in the podcasting world since 2013, and has been building software since 2002.
                    </p>
                    <p>
                      <span class="text-slate-400">—</span> <a class="font-medium text-slate-800 underline hover:no-underline" href="#0">Mark Mitchel</a> lives in London, UK. He's been involved in the podcasting world since 2013, and has been building software since 2002.
                    </p>
                    <p>
                      <span class="text-slate-400">—</span> <a class="font-medium text-slate-800 underline hover:no-underline" href="#0">Mary James</a> lives in London, UK. He's been involved in the podcasting world since 2013, and has been building software since 2002.
                    </p>
                  </div>
                </div>
                <!-- Notes -->
                <div class="text-slate-500 italic">
                  If you liked this episode, popularised in the with the release of letraset sheets containing passages, and more recently with desktop <a class="font-medium text-slate-800 hover:underline" href="#0">@PublishingSoftware</a>.
                </div>
              </div>
      
              <!-- Sidebar -->
              <aside class="md:w-72 md:shrink-0">
                <div class="relative bg-slate-100 rounded-3xl p-6">
                  <div class="absolute top-0 right-0 -mt-8 mr-14 pointer-events-none" aria-hidden="true">
                    <svg xmlns="http://www.w3.org/2000/svg" width="70" height="50">
                      <path fill="#FCD34D" d="M.71 13.283A22.888 22.888 0 0 0 12.205.206c.125-.345 2.162 11.236 9.026 13.47 0 0-8.305 3.98-10.272 11.862.008.11-.47-6.26-10.249-12.255ZM48 36.768a24 24 0 0 0 12.06-13.76c.13-.36 2.26 11.8 9.5 14.14 0 0-8.71 4.18-10.78 12.45-.03.11-.53-6.57-10.78-12.83Z" />
                    </svg>
                  </div>
                  <h4 class="font-hkgrotesk font-extrabold text-slate-800 mb-4">Hosts & Guests</h4>
                  <ul class="space-y-3">
                    <li class="flex items-center">
                      <img class="shrink-0 rounded-full mr-3" src="../images/host-04.jpg" width="44" height="44" alt="Host 04">
                      <div>
                        <div class="font-hkgrotesk font-extrabold text-sm text-slate-800">Sarah Mendes</div>
                        <div>
                          <a class="block font-hkgrotesk font-medium text-blue-500 text-xs hover:underline" href="#0">@saramendes</a>
                        </div>
                      </div>
                    </li>
                    <li class="flex items-center">
                      <img class="shrink-0 rounded-full mr-3" src="../images/host-05.jpg" width="44" height="44" alt="Host 05">
                      <div>
                        <div class="font-hkgrotesk font-extrabold text-sm text-slate-800">Quentin Villard</div>
                        <div>
                          <a class="block font-hkgrotesk font-medium text-blue-500 text-xs hover:underline" href="#0">@quentin789</a>
                        </div>
                      </div>
                    </li>
                    <li class="flex items-center">
                      <img class="shrink-0 rounded-full mr-3" src="../images/host-06.jpg" width="44" height="44" alt="Host 06">
                      <div>
                        <div class="font-hkgrotesk font-extrabold text-sm text-slate-800">Oliver Martinez</div>
                        <div>
                          <a class="block font-hkgrotesk font-medium text-blue-500 text-xs hover:underline" href="#0">@OliverMarti</a>
                        </div>
                      </div>
                    </li>
                  </ul>
                </div>
              </aside>
      
            </div>
      
          </div>
        </div>
      </section>
      
      <Carousel />
      <div className="pb-12 md:pb-20" aria-hidden="true"></div>
      <Cta />

    </main>
    
    <!-- Site footer -->
    <Footer />    

  </div>
</template>

<script>
import { ref } from 'vue'

import Header from '../partials/layout/Header.vue'
import AudioPlayer from '../partials/AudioPlayer.vue'
import Carousel from '../partials/Carousel.vue'
import Cta from '../partials/Cta.vue'
import Footer from '../partials/layout/Footer.vue'

export default {
  name: 'Podcast',
  components: {
    Header,
    AudioPlayer,
    Carousel,
    Cta,
    Footer,
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
  }
}
</script>