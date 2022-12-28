<script setup>
import { ref, computed } from 'vue';
    import NewComment from './NewComment.vue'
    import CommentContainer from './CommentContainer.vue'
    import { deletePost } from '../firebase/posts';
    import comments from '../store/commentStore.js';
    import user from '../store/users.js'




    
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

    const commentsLength = ref([])

    const updateComments = computed(() => {
        commentsLength.value = comments.value.filter(comment => comment.postId === props.post.id)
    })
</script>
<template>
    {{ updateComments }}
    <div class="postContenedor mx-3">
        <div class="nomYimg d-flex">
            <!-- nuevo -->
                    <!-- Default dropup button -->
        <div v-if="user !== null && user.email == post.email" class="btn-group dropdown boton-contenedor">
            <button class="btn dropdown-toggle" data-bs-toggle="dropdown" aria-expanded="false">
            </button>
            <ul class="dropdown-menu ">
                <!-- Dropdown menu links -->
                <button  style="width: 100%; height: 100%; border: none; color: white; backgroud: white;" class="text-dark bg-light" @click="deletePost(post.id, post.email)">Delete</button>
            </ul>
        </div>
            <img class="imgPerfil" referrerpolicy="no-referrer" :src="post.photo? post.photo : 'https://media.istockphoto.com/id/1332100919/vector/man-icon-black-icon-person-symbol.jpg?s=612x612&w=0&k=20&c=AVVJkvxQQCuBhawHrUhDRTCeNQ3Jgt0K1tXjJsFy1eg='" />
            <router-link to="/UserView"><button class="btn"
                @click="recibirEmail(post.email)"><h3 class="nomUser">{{post.name}}</h3></button></router-link>
            
        </div>
        <p class="post p-2">{{post.message}}</p>
        <div class= "d-flex align-items-center">
            <div class="botones mx-2">
                <font-awesome-icon class="like" icon="fa-solid fa-heart" /> 
                <p class="p text-dark">2</p>
            </div>
            <div class="botones mx-2">
                <font-awesome-icon class="comment" icon="fa-solid fa-comment" />
                <p class="p text-dark">{{commentsLength.length}}</p>
            </div>
            <!-- <span class="text-white text-sm">{{post.likes.length}}</span> -->
            <!-- <span class="text-white text-sm">{{post.comments.length}}</span -->
            <div class="botones mx-2">
                <font-awesome-icon class="share" icon="fa-solid fa-share" />
                <p class="p text-dark">3</p>
            </div>
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
        background: var(--primario);
        width: 100%;
        height: 2rem;
        border-radius: 2rem;
        display: flex;
        align-items: center;
        justify-content: center;
        
    }

    img{
        border-radius: 50%;
        width: 3rem;
        height: 3rem;

    }
    .nomUser{
        margin-top: .3rem;
        font-size: 1.2rem;
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
        height: 1.3rem;
        color: white;
        padding: .4rem;
    }
    .p{
        padding-top: 1rem;
    }

</style>