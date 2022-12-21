<script setup>
    import NewComment from './NewComment.vue'
    // import CommentContainer from './CommentContainer.vue'
    import user from '../store/users.js' 
    import CommentPostVue from './CommentPost.vue';
    import commentStore from '../store/commentStore.js'
    import { onMounted } from 'vue';
import { getComments } from '../firebase/comments';
    
    onMounted (() => {getComments})

    const props = defineProps({
        post: {},
        typeof: Object
    })
    
    const pruebas = () => {
        console.log(commentStore.value)
    }
</script>
<template>
    <div class="postContenedor">
        <div class="nomYimg d-flex pt-2 px-3">
            <img class="imgPerfil" :src="post.photo? post.photo : 'https://media.istockphoto.com/id/1332100919/vector/man-icon-black-icon-person-symbol.jpg?s=612x612&w=0&k=20&c=AVVJkvxQQCuBhawHrUhDRTCeNQ3Jgt0K1tXjJsFy1eg='" />
            <h3 class="nomUser ">{{post.name}}</h3>
        </div>
        <p class="post p-2">{{post.message}}</p>
        <div class="botones mx-2 my-3 ">
            <font-awesome-icon class="like" icon="fa-solid fa-heart" /> 
            <!-- <span class="text-white text-sm">{{post.likes.length}}</span> -->
            <font-awesome-icon class="comment" icon="fa-solid fa-share" />
            <!-- <span class="text-white text-sm">{{post.comments.length}}</span -->
            <font-awesome-icon class="share" icon="fa-solid fa-message-middle" />
            <!-- <span class="text-white text-sm">{{post.comments.length}}</span -->
        </div>
        <button @click="pruebas" >Prueba</button>
        <CommentPostVue v-for="comment in commentStore" :comment="comment" :key="comment.id" />
        <!-- <CommentContainer  :postId="post.id"/> -->
        <NewComment v-if="user" :postId="post.id"/>  </div>    
</template>
<style scoped>
    .nomUser{
        margin-top: .3rem;
    }
    .postContenedor{
        min-height: 2rem;
        padding: 10px;
        margin-bottom: 1rem !important;
        width: 100%;
    }
    .post{
        border-bottom: 1px solid var(--primario);
    }
    .share, .like, .comment{
        margin: auto;
        width: 1.2rem;
        height: 1.2rem;
        cursor: pointer;
    } 
</style>