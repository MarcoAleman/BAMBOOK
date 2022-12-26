<script setup>
    import { ref, computed } from 'vue'
    import { addPost } from '../firebase/posts.js'
    import user from '../store/users.js'

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
    }
</script>
<template>
    {{updateData}}
    <h1 class="text-center text-dark mt-3">Crea tu post</h1>
    <form>
        <div class="formulario m-auto p-2">
            <div class="nYf d-flex align-items-center justify-content-center gap-2 flex-column">
                <img :src="user.photo? user.photo : 'https://media.istockphoto.com/id/1332100919/vector/man-icon-black-icon-person-symbol.jpg?s=612x612&w=0&k=20&c=AVVJkvxQQCuBhawHrUhDRTCeNQ3Jgt0K1tXjJsFy1eg='"  class="fotoPerfil d-flex justify-content-center align-items-center" />
                <h2 class="fs-5 ">{{user.name? user.name : newUserName}}</h2>
            </div>
            <textarea required @keyup.enter="addNewPost" minlength="6" maxlength="120" v-model="message"  placeholder="What are you thinking?"></textarea>
            <div class="d-flex justify-content-center">
                <button @click.prevent="addNewPost" class="text-align-center text-center mb-2">Post</button>
            </div>
            <RouterLink to="/RulesAndPolice" id="offcanva">
Read rules and policies</RouterLink>
        </div>
    </form>
</template>

<style scoped>
    input, textarea{
        width: 100%;
        height: 5.2rem;
        margin: auto;
    }
    button{
        border-radius: 10px;
        border: none;
        color: black;
        background-color: var(--primario);
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
        padding: 1.7rem;
    }
    img{
        border-radius: 50%;
        width: 4rem;
    }
</style>