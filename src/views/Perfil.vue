<script setup>
    import Post from '../components/Post.vue'
    import user from '../store/users.js'
    import  posts  from '../store/postStore.js'
    import {  ref, computed } from 'vue'
    import { onMounted } from 'vue'
    import { getPosts } from '../firebase/posts'
    import { getComments } from '../firebase/comments'
    const newUserName = 'No user Name'
    const myPosts = ref([])
    
    onMounted(() => {
        getPosts()
        getComments()
    })

    const updateMyPosts = computed(()=>{
    if(user.value){
        myPosts.value = posts.value.filter(element => element.email === user.value.email) 
    }
    console.log(myPosts, 'post gabi');
})
</script>
<template>
    {{updateMyPosts}}
    <div class="perfil mt-3">
        <div class="nYf d-flex align-items-center justify-content-center gap-2 flex-column">
            <img :src="user? user.photo : 'https://media.istockphoto.com/id/1332100919/vector/man-icon-black-icon-person-symbol.jpg?s=612x612&w=0&k=20&c=AVVJkvxQQCuBhawHrUhDRTCeNQ3Jgt0K1tXjJsFy1eg='"  class="fotoPerfil d-flex justify-content-center align-items-center" />
            <h2 class="fs-2 fw-bold text-black">{{user? user.name : newUserName}}</h2>
        </div>
        <div class="text-center">
            <h2  v-if="myPosts.length > 0" class="text-center text-black fs-1 my-4">Tus Posts</h2>
            <h2 v-if="!user? !user : myPosts.length <= 0" class="text-center text-dark">Usted no tiene Posts. </h2>
            <router-link  to="/CreatePost" v-if="myPosts.length <= 0" class="text-dark fs-3 fw-bold " style=" text-decoration: none; margin: auto;" >Cree uno ahora</router-link>
            <p v-if="!user" class="text-center text-dark">Inicie Sesion con Google </p>
        </div>
        <div class="mt-2">
        <Post v-for="post in myPosts" :key="post.id" :post="post" />
        </div>
    </div>
</template>
<style scoped>
a{
    text-align: center;
}
    .perfil{
        margin: auto;
    }
    .nYf{
        margin: auto;
        margin-bottom: 1rem;
    }
    
    .fotoPerfil{
        width: 5.4rem;
        border-radius: 60%;

    }
    h2{
        color: white;
        padding-right: 10px;
        
    }
</style>