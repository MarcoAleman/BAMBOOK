<script setup>
import user from '../store/users.js'
</script>
<template>
    <div class="menuF d-flex align-items-center">
        <div class="d-flex flex-wrap optionFooter align-items-center ">
            <router-link to="/HomePosts"><font-awesome-icon class="icon"  icon="fa-solid fa-house" /></router-link>
            <router-link to="/CreatePost" v-if="!user"><font-awesome-icon class="icon" icon="fa-solid fa-circle-plus" /></router-link>
            <router-link to="/CreatePost" v-if="user"><font-awesome-icon class="icon mt-1" icon="fa-solid fa-circle-plus" /></router-link>
            <router-link  to="/Perfil" v-if="!user"><font-awesome-icon class="icon" icon="fa-solid fa-user" /></router-link>
            <router-link to="/Perfil" v-if="user"><img :src="user.photo" alt=""></router-link>
        </div>
    </div>
</template>
<style scoped>
    .icon{
        height: 1.5rem;
        color: var(--primario);
    }
    img{
        height: 1.8rem;
        border-radius: 50%;
        border: 1px solid var(--primario);
        width: 1.8rem;

    }
    .menuF{
        height: 2.7rem;
        width: 100%;
        background-color: black;
        position: fixed;
        bottom: 0;
        
    }
    .optionFooter{
        display: flex;
        width: 100%;
        justify-content: space-around;

    }
</style>