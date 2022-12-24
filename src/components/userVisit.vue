<script setup>
    // import user from '../store/users.js'
    import  posts  from '../store/postStore.js'
    import {  ref, computed } from 'vue'
    // import { onMounted } from 'vue'
    // import { getPosts } from '../firebase/posts'
    // import { getComments } from '../firebase/comments'
// import { type } from 'os'
    const newUserName = 'No user Name'
    const myPosts = ref([])
    
    const props = defineProps({
        user: {},
        typeof: Object
    })

    // onMounted(() => {
    //     getPosts()
    //     getComments()
    // })

    const updateMyPosts = computed(()=>{
    if(user.value){
        myPosts.value = posts.value.filter(element => element.email === user.value.email) 
    }
})
</script>
<template>
    {{updateMyPosts}}
    <div class="perfil">
        <div class="nYf d-flex align-items-center justify-content-center gap-2 flex-column">
            <img :src="user? user.photo : 'https://media.istockphoto.com/id/1332100919/vector/man-icon-black-icon-person-symbol.jpg?s=612x612&w=0&k=20&c=AVVJkvxQQCuBhawHrUhDRTCeNQ3Jgt0K1tXjJsFy1eg='"  class="fotoPerfil d-flex justify-content-center align-items-center" />
            <h2 class="fs-5 ">{{user? user.name : newUserName}}</h2>
        </div>
        <h2  v-if="user" class="text-center text-white fs-1 my-4">Tus Posts</h2>
        <h2 v-if="!user" class="text-center">Usted no tiene Posts. </h2>
        <p v-if="!user" class="text-center text-white">Cree una cuenta o Inicie Sesion</p>
        <div class="mt-2">
        <!-- <Post v-for="post in myPosts" :key="post.id" :post="post" /> -->
        </div>
    </div>
</template>
<style scoped>
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