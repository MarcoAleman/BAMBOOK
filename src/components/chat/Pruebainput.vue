<script setup>
import { onMounted, ref } from 'vue';
import { global, idgenerada } from '../../firebase/chats.js'
import user from '../../store/users.js'
import mail from '../../store/userMail.js'
import { addMessage, getchats } from '../../firebase/addmsj';
import chats from '../../store/chatStore';
import MensajesVue from './Mensajes.vue';

let date = Date.now()

const texto = ref('')
const dato = ref(null)


//carga mensaje
const newMessage = () => {
    let messageNew = {
        id: crypto.randomUUID(),
        user: user.value.name,
        text: texto.value,
        dates: date
    }
    addMessage(idgenerada.value.toString(), messageNew)
}

</script>

<template>
    <div>
        <h1 class="text-center">Chat</h1>
        <MensajesVue v-for="chat in chats" :chat="chat" key="chat.id" />
        <form class="mb-3 submit">
            <div class="d-flex">
                <div class="col-9">
                    <label for="textoprueba" class="form-label"></label>
                    <input type="text" v-model="texto" class="form-control" id="textoprueba"
                        placeholder="Ingrese su mensaje">
                </div>
                <button @click.prevent="newMessage" class="btn btn-success col-3">Enviar</button>
            </div>
        </form>
    </div>
</template>

<style scoped>
.submit {
    position: fixed;
    bottom: 5vh;
}
</style>