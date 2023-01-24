<template>
  <header class="bg-primary-500 w-full">

    <div class="flex p-4 w-full md:max-w-5xl mx-auto">
      <div class="flex justify-start w-3/4 md:mt-2">
        <h1 class="text-lg md:text-2xl">RichardVerkerk.com</h1>
      </div>
      
      <!-- Navigation Menu -->
      <div class="hidden md:visible md:flex md:justify-end md:w-full">
        <router-link to="/" active-class="activeMobileNavItem" 
        class="inline-block px-3 py-3 mr-2 hover:text-primary-500 hover:bg-secondary-500">./Home</router-link>
      <!-- <router-link to="/about" active-class="activeMobileNavItem" 
        class="inline-block px-3 py-3 mr-2 hover:text-primary-500 hover:bg-secondary-500">./About</router-link>
      <router-link to="/contact" active-class="activeMobileNavItem" 
        class="inline-block px-3 py-3 hover:text-primary-500 hover:bg-secondary-500">./Contact</router-link> -->
      </div>
      <!-- /Navigation Menu -->

      <!-- Mobile Navigation Button-->
      <div class="visible md:hidden w-1/4 text-right -my-2 -mr-2">
        <button v-if="!this.showMobileNav" @click="toggleMobileNav()" type="button"
          class="inline-flex items-center justify-center rounded-md p-2 text-black  focus:outline-none focus:ring-2 focus:ring-inset focus:ring-indigo-500"
          aria-expanded="false">
          <span class="sr-only">Open menu</span>
          <!-- Heroicon name: outline/bars-3 -->
          <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="2"
            stroke="currentColor" class="w-8 h-8">
            <path stroke-linecap="" stroke-linejoin="" d="M3.75 6.75h16.5M3.75 12h16.5m-16.5 5.25h16.5" />
          </svg>

        </button>
        <button v-if="this.showMobileNav" @click="toggleMobileNav()" type="button"
          class="inline-flex items-center justify-center rounded-md p-2 text-black  focus:outline-none focus:ring-2 focus:ring-inset focus:ring-indigo-500"
          aria-expanded="false">
          <span class="sr-only">Open menu</span>
          <!-- Heroicon name: outline/bars-3 -->
          <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="2"
            stroke="currentColor" class="w-8 h-8">
            <path stroke-linecap="round" stroke-linejoin="round" d="M6 18L18 6M6 6l12 12" />
          </svg>

        </button>
      </div>
      <!-- /Mobile Navigation Button-->
    </div>

    <!-- Mobile Navigation Menu-->
    <div :class="this.showMobileNav ? 'visible' : 'hidden'"
      class="mobile-menu flex flex-col border-t border-primary-100">
      <router-link to="/" active-class="activeMobileNavItem" 
        class="mb-3 inline-block px-3 py-3 hover:text-primary-500 hover:bg-secondary-500">./Home</router-link>
      <!-- <router-link to="/about" active-class="activeMobileNavItem" 
        class="mb-3 inline-block px-3 py-3 hover:text-primary-500 hover:bg-secondary-500">./About</router-link>
      <router-link to="/contact" active-class="activeMobileNavItem" 
        class="mb-3 inline-block px-3 py-3 hover:text-primary-500 hover:bg-secondary-500">./Contact</router-link> -->
    </div>
    <!-- /Mobile Naviation Menu-->

  </header>
  <router-view></router-view>
</template>

<script>
export default {
  data() {
    return {
      showMobileNav: false
    }
  },
  methods: {
    toggleMobileNav() {
      this.showMobileNav = !this.showMobileNav;
    }

  },
  watch: {
    '$route'() {
      this.showMobileNav = false;
    }
  }
}
</script>

<style>
.activeMobileNavItem {
  @apply bg-secondary-900 text-primary-100
}
</style>