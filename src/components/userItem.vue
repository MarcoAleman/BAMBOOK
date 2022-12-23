<script setup>

    // import user from '../store/users.js' 
    
    // const props = defineProps({
    //     user: {},
    //     typeof: Object
    // })
    
</script>
<template>
    <div class="container-fluid">
        <div class="row">
            <img class="col-3 imgPerfil" src='../assets/img/login.png' />
            <p class="col-3">Nombre de prueba</p>
            <button class="col-3 btn btn-success">Profile</button>
            <button class="col-3 btn btn-danger">Menssage</button>  
        </div>
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