<script setup>
</script>
<template>
    <template>
        <div class="d-flex lista align-items-center justify-content-center">
            <div class="d-flex flex-wrap optionFooter align-items-center justify-content-center">
                <img class="iconF"  alt="">
                <router-link style="text-decoration: none; color: var(--primario);" to="/">Home</router-link>
            </div>
            <div class="d-flex flex-wrap optionFooter align-items-center justify-content-center">
                <img class="iconF"  alt="">
                <router-link style="text-decoration: none; color: var(--primario);" to="/NewPost">New Post</router-link>
            </div>
            <div class="d-flex flex-wrap optionFooter align-items-center justify-content-center">
                <img class="iconF"  alt="">
                <router-link style="text-decoration: none; color: var(--primario); " to="/Perfil">Profile</router-link>
            </div>
        </div>
    </template>
</template>
<style scoped>

.lista{
    margin: auto;
    height: 5rem;
    background: var(--black);
    width: 100%;
    bottom: 0;
    position:fixed;
    display:none;
}
.optionFooter{
    margin: auto;
    width: 100%;
}
</style>