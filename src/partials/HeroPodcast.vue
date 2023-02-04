<template>
  <section>
    <div class="max-w-6xl mx-auto px-4 sm:px-6">
      <div class="pb-12 pt-16 md:pb-20 md:pt-40">
        <div class="relative">

          <!-- Background -->
          <div class="absolute inset-0 bg-gradient-to-br from-slate-900 to-slate-800 rounded-3xl -mx-20 -z-10 overflow-hidden" aria-hidden="true">
            <img class="w-full h-full object-cover rounded-3xl" src="../images/podcast-single.png" width="1270" height="408" alt="Podcast image">
          </div>

          <!-- Content -->
          <div class="py-12 md:py-20 -mx-20 px-20">
            <div class="md:flex justify-between items-center text-center md:text-left">
              <!-- Left content -->
              <div class="max-w-3xl">
                <!-- Copy -->
                <h1 class="h2 font-hkgrotesk text-slate-100 mb-4">Super Excited (aka The Saturday Edition)</h1>
                <div class="font-hkgrotesk text-white font-medium opacity-80 mb-8">Indie Stories · Jan 24 · Episode 234</div>
                <!-- Player -->
                <div></div>
              </div>
            </div>
          </div>

        </div>
      </div>
    </div>
  </section>
</template>

<script>
export default {
  name: 'Hero',
}
</script>