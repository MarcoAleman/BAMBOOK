<script setup>
import { addId } from '../../firebase/addmsj';
import user from '../../store/users';
import mail from '../../store/userMail';

const props = defineProps({
    chat: {},
    typeof: Object
})

</script>

<template>
    <div class="contenedor-chat">
        <div class="d-flex  mb-2">
            <img class="foto p-1" :src=chat.photo referrerpolicy="no-referrer" alt="">
            <h2 class="text-center pt-2 px-1 text-light">{{ chat.name }}</h2>
        </div>
        <p class="mx-4 pb-2 text-light">{{ chat.message }}</p>
        <p class="date text-white">{{new Date(chat.date).toLocaleString("en-us", { dateStyle: "short" })}}</p>
    </div>

</template>

<style scoped>

.contenedor-chat{
    width: 15rem;
    background: #202C33;
    border-radius: .7rem;

}
.foto {
    border-radius: 50%;
    height: 2rem;
    width: 2rem;
}
h2{
    font-size: 1rem;
}
.date{
    font-size: 11px;
    position: absolute;
    margin-top: 1.7rem;
    margin-left: 2.3rem;
}
</style>