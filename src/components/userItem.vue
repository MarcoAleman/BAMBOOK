<script setup>
import userMail from '../store/userMail.js'

function recibirEmail(email) {
    userMail.value = email
    console.log(userMail)
}

const props = defineProps({
    userL: {},
    typeof: Object
})

</script>
<template>
    <div class="container-fluid">
        <div class="row">
            <img class="col-3 imgPerfil" :src=userL.photo referrerpolicy="no-referrer" />
            <p class="col-3 text-dark">{{ userL.name }}</p>
            <router-link to="/UserView"><button class="col-3 btn btn-success"
                    @click="recibirEmail(userL.email)">Profile</button></router-link>
            <button class="col-3 btn btn-danger">Menssage</button>
        </div>
    </div>
</template>
<style scoped>

</style>