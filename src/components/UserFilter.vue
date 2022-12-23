<script setup>
import { ref, computed, onMounted } from 'vue'
import userItemVue from './userItem.vue';
import userList from '../store/userslist'
import { getUsers } from '../firebase/users';
import mail from '../store/userMail'; 

onMounted (() => getUsers())

const usersWithemail = ref(null)


const waitUser =  computed(() => {
    usersWithemail.value = userList.value.filter(usuario => usuario.email == mail.value)
})

</script>
<template>
    {{ waitUser }}
    <userItemVue v-for="user in usersWithemail" :userL="user" :key="user.id" />
</template> 
