<script setup>
    import { getPosts } from '../firebase/posts.js'
    import { getComments } from '../firebase/comments.js'
    import { onMounted } from 'vue'
    import Login from '../components/Login.vue'
    import user from '../store/users.js'

onMounted(() => {
    getPosts()
    getComments()
})
</script>
<template>
      <Login v-if="!user"/>
</template>
<style scoped>

</style>