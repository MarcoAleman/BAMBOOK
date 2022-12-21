<script setup>
    import Post from '../components/Post.vue'
    import posts from '../store/postStore'
    import { getPosts } from '../firebase/posts.js'
    import { getComments } from '../firebase/comments.js'
    import { onMounted } from 'vue'

onMounted(() => {
    getPosts()
    // getComments()
})
</script>

<template>
 


    <div>
    <h1 class="text-center text-dark">Post Recientes</h1>
    <Post v-for="post in posts" :post="post" :key="post.id"  />
    </div>
</template>

<style scoped>
</style>