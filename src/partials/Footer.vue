<template>
  <footer>
    <div class="max-w-6xl mx-auto px-4 sm:px-6">
      <div class="py-8 md:py-12">

        <div class="flex flex-col md:flex-row items-center justify-center md:justify-between">
          <div class="mb-4 md:mb-0">
            <div class="shrink-0 flex flex-col md:flex-row items-center">
              <!-- Logo -->
              <router-link class="inline-flex mb-2 md:mb-0" to="/" aria-label="Spineless Laugh">
                <img src="../images/logo-gradient.svg" width="36" height="28" alt="Logo" />
              </router-link>
              <div class="text-sm text-slate-500 ml-4">Copyright © Spineless Laugh <span class="text-slate-300">·</span> All rights reserved <span class="md:hidden lg:inline"> <span class="text-slate-300">·</span>  2003<span class="text-slate-400 tracking-normal mx-1">-&gt;</span>{{ currentYear }}</span></div>
            </div>
          </div>
          <!-- Social links -->
          <ul class="inline-flex space-x-2">
            <li>
              <a class="flex justify-center items-center text-slate-500 hover:text-slate-600 transition duration-150 ease-in-out" href="https://soundcloud.com/spinelesslaugh" aria-label="Soundcloud">
                <svg class="w-8 h-8 fill-current" viewBox="0 0 32 32" xmlns="http://www.w3.org/2000/svg">
                  <path d="m14.41,18.36l-.14-4.92c0-.15-.13-.27-.27-.27-.15,0-.27.12-.27.27l-.13,4.92.13,2.37c0,.15.13.27.27.27.15,0,.27-.12.27-.27h0l.14-2.37h0Z"/><path d="m13.44,18.36l-.15-5.11c0-.14-.12-.25-.25-.25s-.25.11-.25.25l-.14,5.1.14,2.39c0,.14.12.25.25.25s.25-.11.25-.25h0l.15-2.38h0Z"/><path d="m11.34,13.29c0-.12-.1-.22-.22-.22s-.21.09-.22.22l-.15,5.07.15,2.42c0,.12.1.21.22.21s.21-.09.22-.22l.18-2.42-.18-5.06h0Z"/><path d="m12.31,13.12c0-.13-.11-.23-.23-.23s-.23.1-.23.23l-.14,5.24.14,2.4c0,.13.11.23.23.23s.23-.1.23-.23l.16-2.4-.16-5.24h0Z"/><path d="m7.41,20.93c.07,0,.13-.05.14-.14l.23-2.44-.23-2.52c0-.07-.06-.14-.14-.14s-.13.05-.14.14l-.21,2.52.21,2.44c0,.08.06.14.14.14h0Z"/><path d="m15.39,18.36l-.13-5.85c0-.1-.05-.19-.14-.24-.05-.03-.1-.05-.16-.05-.05,0-.11.02-.16.05-.08.05-.14.14-.14.24v.05l-.11,5.8.11,2.35h0c0,.07.03.14.07.18.05.06.14.11.23.11.08,0,.15-.04.21-.08.05-.05.09-.13.09-.21v-.23s.13-2.11.13-2.11h0Z"/><path d="m8.48,16.01c0-.09-.07-.15-.15-.15s-.15.06-.15.15l-.19,2.34.19,2.46c0,.09.07.15.15.15s.15-.06.15-.15l.22-2.46-.22-2.34h0Z"/><path d="m9.25,14.38c-.09,0-.17.07-.17.17l-.18,3.81.18,2.46c0,.1.08.17.17.17s.17-.07.17-.17h0l.21-2.46-.21-3.81c0-.09-.08-.17-.17-.17h0Z"/><path d="m10.37,20.81h0l.19-2.45-.19-4.68c0-.11-.09-.19-.2-.19s-.19.08-.2.19l-.17,4.68.17,2.45c0,.11.09.19.2.19.11,0,.19-.08.2-.19h0Z"/><path d="m16.1,11.71s-.1-.05-.16-.05c-.07,0-.14.03-.2.07-.07.05-.12.14-.12.24v.04l-.13,6.35.06,1.17.06,1.14c0,.17.14.31.32.31s.31-.14.32-.32h0l.14-2.31-.14-6.38c0-.12-.06-.22-.15-.27h0Z"/><path d="m4.74,19.7s.08-.04.09-.09l.2-1.26-.2-1.28c0-.05-.05-.09-.09-.09s-.09.04-.09.09l-.17,1.28.17,1.26c0,.05.05.09.09.09h0Z"/><path d="m5.59,20.47s.09-.04.1-.09l.26-2.03-.26-2.07c0-.05-.05-.09-.1-.09-.05,0-.09.04-.1.09l-.23,2.07.23,2.03c0,.05.05.09.1.09h0Z"/><path d="m6.49,20.84c.06,0,.11-.05.12-.12l.24-2.37-.24-2.46c0-.06-.05-.12-.12-.12s-.11.05-.12.12l-.22,2.46.22,2.37c0,.06.05.12.12.12h0Z"/><path d="m24.68,15.34c-.39,0-.76.08-1.1.22-.23-2.55-2.37-4.55-4.98-4.55-.64,0-1.26.13-1.81.34-.22.08-.27.17-.27.33v8.99c0,.17.14.31.31.32h7.86c1.57,0,2.84-1.25,2.84-2.82,0-1.57-1.28-2.84-2.84-2.84h0Z"/>
                </svg>
              </a>
            </li>
            <li>
              <a class="flex justify-center items-center text-slate-500 hover:text-slate-600 transition duration-150 ease-in-out" href="https://www.mixcloud.com/spineless" aria-label="Mixcloud">
                <svg class="w-8 h-8 fill-current" viewBox="0 0 32 32" xmlns="http://www.w3.org/2000/svg">
                  <polygon class="cls-1" points="21.51 22.82 24 22.82 24 9.18 19.07 9.18 16.32 22.18 15.68 22.18 12.93 9.18 8 9.18 8 22.82 10.49 22.82 10.49 11.44 10.05 9.82 10.83 9.82 13.72 22.82 18.3 22.82 21.17 9.82 21.97 9.82 21.51 11.44 21.51 22.82 21.51 22.82"/>
                </svg>
              </a>
            </li>
            <li>
              <a class="flex justify-center items-center text-slate-500 hover:text-slate-600 transition duration-150 ease-in-out" href="https://twitter.com/spineless_laugh" aria-label="Twitter">
                <svg class="w-8 h-8 fill-current" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 32 32"><path d="m24,11.5c-.6.3-1.2.4-1.9.5.7-.4,1.2-1,1.4-1.8-.6.4-1.3.6-2.1.8-.6-.6-1.5-1-2.4-1-1.7,0-3.2,1.5-3.2,3.3,0,.3,0,.5.1.7-2.7-.1-5.2-1.4-6.8-3.4-.3.5-.4,1-.4,1.7,0,1.1.6,2.1,1.5,2.7-.5,0-1-.2-1.5-.4,0,1.6,1.1,2.9,2.6,3.2-.3.1-.6.1-.9.1-.2,0-.4,0-.6-.1.4,1.3,1.6,2.3,3.1,2.3-1.1.9-2.5,1.4-4.1,1.4h-.8c1.5.9,3.2,1.5,5,1.5,6,0,9.3-5,9.3-9.3v-.4c.7-.5,1.3-1.1,1.7-1.8Z"/></svg>
              </a>
            </li>
            <li>
              <a class="flex justify-center items-center text-slate-500 hover:text-slate-600 transition duration-150 ease-in-out" href="mailto:info@spinelesslaugh.com" aria-label="Email">
                <svg class="w-8 h-8 fill-current" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 32 32"><path d="m16,16.51l-8-4.77v8.52c0,.78.58,1.42,1.29,1.42h13.42c.71,0,1.29-.64,1.29-1.42v-8.43l-8,4.67Z"/><path d="m16,15.49l7.78-4.54c-.23-.38-.63-.63-1.07-.63h-13.42c-.42,0-.79.22-1.03.56l7.74,4.61Z"/></svg>
              </a>
            </li>
          </ul>
        </div>

      </div>

    </div>
  </footer>
</template>

<script>
export default {
  name: 'Footer',
  computed: {
    currentYear(){
      const year = new Date().getFullYear()
      return year
    },
  }
}
</script>