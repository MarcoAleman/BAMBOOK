<script setup>
import userItemVue from '../components/userItem.vue';
import userList from '../store/userslist';
import { onMounted } from 'vue';
import { getUsers } from '../firebase/users';

onMounted(() => getUsers())

</script>

<template>

    <body id="fondo">
        <h1 class="text-dark text-center">UserList</h1>
        <userItemVue v-for="user in userList" :userL="user" :key="user.id" />
    </body>
</template>

<style scoped>
#fondo {
height:100%;
background-image:url('../assets/img/fondo.jpg');
background-size:cover;
background-attachment: fixed;
padding-bottom: 5rem;

}
</style>