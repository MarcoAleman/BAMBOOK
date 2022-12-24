<script setup>
    const props = defineProps({
        userL: {},
        typeof: Object
    })
</script>
<template>
    <div class="nYf mt-4 d-flex align-items-center justify-content-center gap-2 flex-column">
        <img :src="userL? userL.photo : 'https://media.istockphoto.com/id/1332100919/vector/man-icon-black-icon-person-symbol.jpg?s=612x612&w=0&k=20&c=AVVJkvxQQCuBhawHrUhDRTCeNQ3Jgt0K1tXjJsFy1eg='"  class="fotoPerfil d-flex justify-content-center align-items-center" />
        <h2 class="fs-3 fw-bold">{{userL.name}}</h2>
        <div>
            <button class="btn button text-white" >Send Message</button>
        </div>
    </div>
</template>
<style scoped>
.button{
        background: var(--primario);
    }
    .perfil{
        margin: auto;
    }
    .nYf{
        margin: auto;
        margin-bottom: 1rem;
    }
    
    .fotoPerfil{
        width: 5.4rem;
        border-radius: 60%;

    }
    h2{
        color: black;
        padding-right: 10px;
        
    }
</style>