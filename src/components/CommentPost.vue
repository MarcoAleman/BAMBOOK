<script setup>
import { deleteComment } from '../firebase/comments';
import userMail from '../store/userMail.js'
import user from '../store/users.js';
import Swal from 'sweetalert2';

    function recibirEmail(email) {
        userMail.value = email
    }
    const props = defineProps({
        comment: {},
        typeof: Object,
    })

    const sureDeleteComment = (id, mail) => {
    Swal.fire({
        title: 'Are you sure?',
        text: "You won't be able to revert this!",
        icon: 'warning',
        showCancelButton: true,
        confirmButtonColor: '#3085d6',
        cancelButtonColor: '#d33',
        confirmButtonText: 'Yes, delete it!'
    }).then((result) => {
        if (result.isConfirmed) {
            deleteComment(id, mail)
            Swal.fire(
                {title: 'Deleted!',
                text: 'Your comment has been deleted.',
                showConfirmButton: false,
                timer: 1500,
                icon: 'success'}
            )
        }
    })
}
</script>

<template>
    <div class="postContenedor mx-3">
        <div class="nomYimg d-flex">
            <div v-if="user !== null && user.email == comment.email" class="btn-group dropdown boton-contenedor">
                <button class="btn dropdown-toggle" data-bs-toggle="dropdown" aria-expanded="false">
                </button>
                <ul class="dropdown-menu ">
                    <button style="width: 100%; height: 100%; border: none; color: white; backgroud: white;" class="text-dark bg-light" @click="sureDeleteComment(comment.id, comment.email)">Delete</button>
                </ul>
            </div>
            <!-- fin -->
                <img class="imgPerfil" referrerpolicy="no-referrer" :src="comment.photo? comment.photo : 'https://media.istockphoto.com/id/1332100919/vector/man-icon-black-icon-person-symbol.jpg?s=612x612&w=0&k=20&c=AVVJkvxQQCuBhawHrUhDRTCeNQ3Jgt0K1tXjJsFy1eg='" />
                <router-link to="/UserView" class="nombre"><button class="btn"
                    @click="recibirEmail(comment.email)"><h3 class="nomUser">{{comment.name}}</h3></button></router-link>
                    <p class="date">{{new Date(comment.date).toLocaleString("en-us", { dateStyle: "short" })}}</p>
                </div>

        <p class="post pt-3">{{comment.text}}</p>
<!--         <button @click="deleteComment(comment.id, comment.email)">...</button> -->
    </div>
</template>
<style scoped>
.date{
    font-size: 11px;
    position: absolute;
    margin-top: 1.8rem;
    margin-left: 3.3rem;
}
.nomUser{
    font-size: 16px !important;
}
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