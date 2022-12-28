<script setup>
import { onMounted, ref } from 'vue';
import { global, idgenerada } from '../../firebase/chats.js'
import user from '../../store/users.js'
import mail from '../../store/userMail.js'
import { addMessage, getchats } from '../../firebase/addmsj';
import chats from '../../store/chatStore';
import MensajesVue from './Mensajes.vue';

const texto = ref('')


//carga mensaje
const newMessage = () => {
    let messageNew = {
        id: crypto.randomUUID(),
        user: user.value.name,
        email: user.value.email,
        photo: user.value.photo,
        text: texto.value,
        dates: Date.now()
    }
    addMessage(idgenerada.value.toString(), messageNew)
    texto.value = ''
}

</script>

<template>
    <div class="container-fluid mb-5">
        <h1 class="text-center">Chat</h1>
        <div class="col-12 p-2 d-flex flex-column-reverse gap-2 msjcon">
            <MensajesVue v-for="chat in chats" :chat="chat" key="chat.id" />
        </div>
        <form class="mb-3 submit ">
            <div class="d-flex enviar-inbt">
                <div class="inp">
                    <input type="text" v-model="texto" class="form-control" id="textoprueba"
                        placeholder="Ingrese su mensaje">
                </div>
                <div class="btnn">
                    <button @click.prevent="newMessage" class="btn btn-success">Enviar</button>
                </div>
            </div>
        </form>
    </div>
</template>

<style scoped>
.msjcon{
    margin-bottom: 6.7rem;
}
.enviar-inbt{
    position: fixed;
    bottom: 0;
    margin-bottom: 3.4rem;
    width: 100%;
}
.inp, .btnn{
    padding-left: 1rem;
}

</style>