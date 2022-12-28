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
    <main id="fondo">
        <div>
            <Login v-if="!user" />
        </div>
        <div v-if="user">
            <h1 class="text-center text-dark mt-4 mb-5 fw-bolder ">Recent Posts</h1>
            <Post v-for="post in posts" :post="post" :key="post.id" />
        </div>
    </main>
</template>

<style scoped>
main {
    padding-bottom: 2.7rem;
}
h1{
    font-size: 2rem;
    
}

</style>