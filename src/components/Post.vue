<script setup>
    import NewComment from './NewComment.vue'
    import CommentContainer from './CommentContainer.vue'
    import user from '../store/users.js' 
    import { deletePost } from '../firebase/posts';
    
    const props = defineProps({
        post: {},
        typeof: Object
    })
    
</script>
<template>
    <div class="postContenedor mx-3">
        <div class="nomYimg d-flex">
            <img class="imgPerfil" :src="post.photo? post.photo : 'https://media.istockphoto.com/id/1332100919/vector/man-icon-black-icon-person-symbol.jpg?s=612x612&w=0&k=20&c=AVVJkvxQQCuBhawHrUhDRTCeNQ3Jgt0K1tXjJsFy1eg='" />
            <h3 class="nomUser ">{{post.name}}</h3>
        </div>
        <p class="post p-2">{{post.message}}</p>
        <div class="botones d-flex">
            <font-awesome-icon class="like" icon="fa-solid fa-heart" /> 
            <!-- <span class="text-white text-sm">{{post.likes.length}}</span> -->
            <font-awesome-icon class="comment" icon="fa-solid fa-comment" />
            <!-- <span class="text-white text-sm">{{post.comments.length}}</span -->
                <font-awesome-icon class="share" icon="fa-solid fa-share" />
            <!-- <span class="text-white text-sm">{{post.share.length}}</span -->
        </div>
        <button @click="deletePost(post.id)">...</button>
        <NewComment v-if="user" :postId="post.id"/>
        <CommentContainer  :postId="post.id"/>
    </div>    
</template>
<style scoped>
    .botones{
        margin: auto;

    }
    img{
        border-radius: 50%;
        width: 2.5rem;
        margin-right: 1rem;
    }
    .nomUser{
        margin-top: .3rem;
    }
    .postContenedor{
        min-height: 2rem;
        padding: 1rem;
        margin-bottom: 1rem !important;
        border-radius: 2rem;
        background-color: white;
    }
    .post{
        border-bottom: 1px solid var(--primario);
    }
    .like, .share, .comment{
        height: 1.5rem;
        color: var(--primario);
        width: 100%;
    }

</style>