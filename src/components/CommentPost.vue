<script setup>
import { deleteComment } from '../firebase/comments';
    const props = defineProps({
        comment: {},
        typeof: Object,
    })
</script>

<template>
    <div class="postContenedor mx-3">
        <div class="nomYimg d-flex">
            <img class="imgPerfil" referrerpolicy="no-referrer" :src="comment.photo? comment.photo : 'https://media.istockphoto.com/id/1332100919/vector/man-icon-black-icon-person-symbol.jpg?s=612x612&w=0&k=20&c=AVVJkvxQQCuBhawHrUhDRTCeNQ3Jgt0K1tXjJsFy1eg='" />
            <h3 class="nomUser ">{{comment.name}}</h3>
        </div>
        <p class="post p-2">{{comment.text}}</p>
        <button @click="deleteComment(comment.id, comment.email)">...</button>
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