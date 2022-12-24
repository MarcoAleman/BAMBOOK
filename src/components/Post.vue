<script setup>
    import NewComment from './NewComment.vue'
    import CommentContainer from './CommentContainer.vue'
    import { deletePost } from '../firebase/posts';
    
    //Experimento 
    import userMail from '../store/userMail.js'
    function recibirEmail(email) {
        userMail.value = email
    }

    //fin
    const props = defineProps({
        post: {},
        typeof: Object
    })
</script>
<template>
    <div class="postContenedor mx-3">
        <div class="nomYimg d-flex">
            <!-- nuevo -->
                    <!-- Default dropup button -->
        <div class="btn-group dropdown boton-contenedor">
            <button class="btn dropdown-toggle" data-bs-toggle="dropdown" aria-expanded="false">
            </button>
            <ul class="dropdown-menu ">
                <!-- Dropdown menu links -->
                <button  style="width: 100%; height: 100%; border: none; color: white; backgroud: white;" class="text-dark bg-light" @click="deletePost(post.id, post.email)">Borrar post</button>
            </ul>
        </div>
            <img class="imgPerfil" referrerpolicy="no-referrer" :src="post.photo? post.photo : 'https://media.istockphoto.com/id/1332100919/vector/man-icon-black-icon-person-symbol.jpg?s=612x612&w=0&k=20&c=AVVJkvxQQCuBhawHrUhDRTCeNQ3Jgt0K1tXjJsFy1eg='" />
            <router-link to="/UserView"><button class="btn"
                @click="recibirEmail(post.email)"><h3 class="nomUser">{{post.name}}</h3></button></router-link>
            
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
        <NewComment :postId="post.id"/>
        <CommentContainer  :postId="post.id"/>
    </div>    
</template>
<style scoped>
    .boton-contenedor{
        position: absolute;
        right: 0;
        margin-right: 2rem;
    }
    .botones{
        margin: auto;

    }

    img{
        border-radius: 50%;
        width: 3rem;
        height: 3rem;
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