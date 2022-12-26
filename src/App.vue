<script setup>
import { RouterLink, RouterView } from 'vue-router';
import nave from './components/Nav.vue'
import FooterMenu from './components/FooterMenu.vue'
import user from './store/users.js'

</script>

<template>
    <nave v-if="user" />
    <RouterView />
    <FooterMenu v-if="user" />
</template>

<style scoped>

</style>
