<script setup>
const props = defineProps({
    userL: {},
    typeof: Object
})

</script>
<template>
    <div class="container-fluid">
        <div class="row">
            <img class="col-3 imgPerfil" :src=userL.photo />
            <p class="col-3 text-dark">{{ userL.name }}</p>
            <button class="col-3 btn btn-success">Profile</button>
            <button class="col-3 btn btn-danger">Menssage</button>
        </div>
    </div>
</template>
<style scoped>

</style>