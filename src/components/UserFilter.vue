<script setup>
import { ref, computed, onMounted } from 'vue'
import userItemVue from './userItem.vue'
import userList from '../store/userslist'
import { getUsers } from '../firebase/users'
import mail from '../store/userMail';
//todo nuevo
import { getComments } from '../firebase/comments.js'
import { getPosts } from '../firebase/posts.js'
import posts from '../store/postStore'
import Post from './Post.vue'


const userPosts = ref([])
onMounted (() => {
    getUsers()
    getComments()
    getPosts()
})
const usersWithemail = ref(null)

const waitUser =  computed(() => {
    usersWithemail.value = userList.value.filter(usuario => usuario.email == mail.value)
})

const updateUserPosts = computed(()=>{
    if(userList.value){
        userPosts.value = posts.value.filter(element => element.email === mail.value) 
    }
})


console.log('componente post' , userPosts)
</script>
<template>
    {{ waitUser }}
    {{ updateUserPosts }}
    <userItemVue v-for="user in usersWithemail" :userL="user" :key="user.id" />
    <Post v-for="post in userPosts" :key="post.id" :post="post" />
    
</template> 
