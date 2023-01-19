<template>
  <div class="container mx-auto p-4 m-5 lg:max-w-4xl">

    <appLogo />

    <router-view></router-view>

  </div>
</template>

<script>
import appLogo from './components/AppLogo.vue';

export default {
  components: {
    appLogo
  },
}
</script>
