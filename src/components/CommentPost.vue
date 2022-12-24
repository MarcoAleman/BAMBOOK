<script setup>
import { deleteComment } from '../firebase/comments';
import userMail from '../store/userMail.js'
    function recibirEmail(email) {
        userMail.value = email
    }
    const props = defineProps({
        comment: {},
        typeof: Object,
    })
</script>

<template>
    <div class="postContenedor mx-3">
        <div class="nomYimg d-flex">
            <div class="btn-group dropdown boton-contenedor">
                <button class="btn dropdown-toggle" data-bs-toggle="dropdown" aria-expanded="false">
                </button>
                <ul class="dropdown-menu ">
                    <button style="width: 100%; height: 100%; border: none; color: white; backgroud: white;" class="text-dark bg-light" @click="deleteComment(comment.id, comment.email)">Borrar comentario</button>
                </ul>
            </div>
            <!-- fin -->
            <img class="imgPerfil" referrerpolicy="no-referrer" :src="comment.photo? comment.photo : 'https://media.istockphoto.com/id/1332100919/vector/man-icon-black-icon-person-symbol.jpg?s=612x612&w=0&k=20&c=AVVJkvxQQCuBhawHrUhDRTCeNQ3Jgt0K1tXjJsFy1eg='" />
            <router-link to="/UserView"><button class="btn"
                @click="recibirEmail(comment.email)"><h3 class="nomUser fs-5">{{comment.name}}</h3></button></router-link>
        </div>
        <p class="post p-2">{{comment.text}}</p>
<!--         <button @click="deleteComment(comment.id, comment.email)">...</button> -->
    </div>
</template>
<style scoped>
.boton-contenedor{
    position: absolute;
    right: 0;
    margin-right: 3.1rem;
    padding-bottom: 6rem;
}
.botones{
    margin: auto;

}
img{
    border-radius: 50%;
    width: 2.5rem;
    height: 2.5rem;
    margin-right: 1rem;
}

.postContenedor{
    min-height: 2rem;
    padding: 1rem;
    margin-bottom: 1rem !important;
    border-radius: 2rem;
    background-color: white;
    border: 1px solid black;
}

.like, .share, .comment{
    height: 1.5rem;
    color: var(--primario);
    width: 100%;
}
</style>