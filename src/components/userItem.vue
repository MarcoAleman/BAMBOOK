<script setup>
import userMail from '../store/userMail.js'
function recibirEmail(email) {
    userMail.value = email
    console.log('user mail loco',userMail)
}
const props = defineProps({
    userL: {},
    typeof: Object
})

</script>
<template>
    <div class="d-flex contenedor-todo align-items-center mb-5">
        <div class="d-flex div-contenedor pt-2">
            <img class="imgPerfil" :src=userL.photo referrerpolicy="no-referrer" />
            <p class="text-dark nombre">{{ userL.name }}</p>
        </div>
        <div class="d-flex  contenedor-botones-2">
            <router-link to="/UserView"><button class="btn btn-success button"
                @click="recibirEmail(userL.email)">View Profile</button></router-link>
            <button class="btn btn-danger button">Message</button>
        </div>
    </div>
</template>
<style scoped>
    .contenedor-todo{
        height: 4rem;
        border-bottom: 1px var(--primario) solid;
        padding: 5px;
    }
    .nombre{
        font-size: 1rem;
        padding-left: 10px;
    }
    .imgPerfil{
        border-radius: 50%;
        width: 3rem;
        height: 3rem;
    }
    /* .contenedor-botones-2{
        margin-left: 7rem;
     
    } */
    .div-contenedor{
        width: 75%;
    }
    .button{
        font-size: 10px;
        width: 3.9rem;
    }
</style>