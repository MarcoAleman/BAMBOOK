<script setup>
    import Post from '../components/Post.vue'
    import posts from '../store/postStore'
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
    <main>
        <div>
            <Login  v-if="!user" />
        </div>
        <div v-if="user">
        <h1 class="text-center text-dark">Post Recientes</h1>
        <Post v-for="post in posts" :post="post" :key="post.id"  />
        </div>
    </main>
</template>

<style scoped>
</style>