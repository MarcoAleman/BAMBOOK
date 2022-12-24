<script setup>
import userItemVue from '../components/userItem.vue';
import userList from '../store/userslist';
import { onMounted } from 'vue';
import { getUsers } from '../firebase/users';

onMounted(() => getUsers())

</script>

<template>

    <body>
        <h1 class="text-dark text-center">UserList</h1>
        <userItemVue v-for="user in userList" :userL="user" :key="user.id" />
    </body>
</template>

<style scoped>

</style>