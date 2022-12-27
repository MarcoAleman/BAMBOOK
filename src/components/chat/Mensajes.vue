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
        <div class="d-flex align-items-center mb-2">
            <img class="foto mt-1 " :src=chat.photo referrerpolicy="no-referrer" alt="">
            <h2 class="text-center mt-2 mx-1">{{ chat.name }}</h2>
        </div>
        <p class="mx-4 pb-2">{{ chat.message }}</p>
<!--         <p class="text-center">{{ chat.date }}</p> -->
    </div>

</template>

<style scoped>

.contenedor-chat{
    width: 15rem;
    background: var(--primario);
    border-radius: 1.5rem;

}
.foto {
    border-radius: 50%;
    height: 2rem;
    width: 2rem;
}
h2{
    font-size: 1rem;
}
</style>