<script setup>
    import { ref, computed } from 'vue'
    import { addPost } from '../firebase/posts.js'
    import user from '../store/users.js'
    import Swal from 'sweetalert2';

    const name = ref('')
    const email = ref('') 
    const message = ref('')
    const photo = ref('')

    const updateData = computed(() =>{
        if(user.value){
            photo.value = user.value.photoURL 
            name.value = user.value.displayName
            email.value = user.value.email
        }
    })
    
    const addNewPost = () => {
        if(message.value.trim().length >= 6){
            let newPost = {
                id: crypto.randomUUID(),
                name: user.value.name,
                date: Date.now(),
                email: user.value.email,
                message: message.value,
                photo: user.value.photo,
            }
            addPost(newPost)
            message.value = ''
            create();
        } else {
            console.log('no se puede postear algo vacio');
            message.value = '';
            notCreate()
        }
        
}

const create = () => {
    Swal.fire({
        icon: 'success',
        title: 'Post Created!',
        showConfirmButton: false,
        timer: 1500
    })
}

const notCreate = () => {
    Swal.fire({
        icon: 'error',
        title: 'Oops...',
        text: 'Cannot create an empty post or less than 6 characters!'
    })
}
</script>
<template>
    <main id="fondo">
    {{updateData}}
    <h1 class="text-center text-light mt-3 text-shadow">Create your post</h1>
    <form @submit.prevent="addNewPost">
        <div class="formulario m-auto p-2">
            <div class="nYf d-flex align-items-center justify-content-center gap-2 flex-column">
                <img :src="user.photo? user.photo : 'https://media.istockphoto.com/id/1332100919/vector/man-icon-black-icon-person-symbol.jpg?s=612x612&w=0&k=20&c=AVVJkvxQQCuBhawHrUhDRTCeNQ3Jgt0K1tXjJsFy1eg='"  class="fotoPerfil d-flex justify-content-center align-items-center" />
                <h2 class="fs-5 text-light mt-3 text-shadow">{{user.name? user.name : newUserName}}</h2>
            </div>
            <textarea class="mt-2" required minlength="6" maxlength="160" v-model="message"  placeholder="What are you thinking?"></textarea>
            <div class="d-flex justify-content-center">
                <button class="text-align-center text-center mb-2">Post</button>
            </div>
        </div>
    </form>
</main>
</template>

<style scoped>
    input, textarea{
        width: 100%;
        margin: auto;
    }
    button{
        border-radius: 10px;
        border: none;
        color: white;
        background-color: #43291f;
        height: 3rem;
        font-weight: bold;
        font-size: .9rem;
        width: 10rem;
    }
    label{
        font-weight: medium;
        color: var(--terciario);
    }
    span{
        font-weight: 700;
        color: var(--terciario);
    }
    ::placeholder{
        text-align: center;
        padding: 2.7rem;
    }
    img{
        border-radius: 50%;
        width: 4rem;
    }
    #fondo {
        height:100%;
background-image:url('../assets/img/fondo.jpg');
background-size:cover;
background-attachment: fixed;
padding-top: 1rem;
padding-bottom: 100%;
    }
    textarea{
        border: 1.6px solid #43291f;
        border-radius: 10px;
        height: 8rem;
        
    }
</style>