<script setup>
import { RouterLink, RouterView } from 'vue-router';
import nave from './components/Nav.vue'
import FooterMenu from './components/FooterMenu.vue'

</script>

<template>
  <nave />
  <RouterView />
  <FooterMenu class="sticky-bottom" />
</template>

<style scoped>

</style>
