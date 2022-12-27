<script setup>
import { onMounted } from 'vue';
import { RouterLink, RouterView } from 'vue-router';
import nave from './components/Nav.vue'
import FooterMenu from './components/FooterMenu.vue'
import user from './store/users.js'

onMounted(() => {
    let localUser = JSON.parse(localStorage.getItem('user'))
    if (localUser) {
        user.value = {
            ...localUser
        }
    }
})
</script>

<template>
    <nave v-if="user" />
    <RouterView />
    <FooterMenu />
</template>

<style scoped>

</style>
