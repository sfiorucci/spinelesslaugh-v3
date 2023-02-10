<template>
  <header class="hidden md:inline w-full z-30">
    <div class="max-w-6xl mx-auto px-4 sm:px-6">
      <div class="flex items-center justify-between h-16 md:h-36">
  
        <!-- Site branding -->
        <div class="shrink-0 mr-4 md:mt-4">
          <!-- Logo -->
          <router-link id="logo" class="group flex flex-row" to="/" aria-label="Spineless Laugh">
            <img src="../images/logo-gradient.svg" id="glyph" class="w-14 transition duration-500 ease-in-out delay-150 hover:rotate-180" alt="Logo" />
            <div id="logotype" class="text-3xl pl-4 pt-2 transition duration-500 ease-in-out font-bold font-hkgrotesk text-slate-800 hover:text-slate-500">Spineless Laugh</div>
            <!-- <div class="text-4xl pl-4 pt-2 transition duration-500 ease-in-out font-bold font-hkgrotesk text-slate-800 hover:text-transparent hover:bg-clip-text hover:bg-gradient-to-r hover:from-teal-500 hover:via-sky-500 hover:to-pink-500">Spineless Laugh</div> -->
          </router-link>
        </div>
  
      </div>
    </div>
  </header>
</template>

<script>
export default {
  name: 'Header',
}
</script>