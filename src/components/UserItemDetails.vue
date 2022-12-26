<script setup>
import UserFilterVue from './UserFilter.vue';

const props = defineProps({
    userLi: {},
    typeof: Object
})

</script>
<template>
    <div class="container-fluid">
        <div class="row">
            <img class="col-2 imgPerfil" :src=userLi.photo referrerpolicy="no-referrer" />
            <p class="col-7 text-dark">{{ userLi.name }}</p>
        </div>
        <postFilter />
    </div>
</template>
<style scoped>

</style>