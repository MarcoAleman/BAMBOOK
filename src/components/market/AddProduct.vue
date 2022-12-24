<script setup>
import user from '../stores/User.js';
import { addPost } from '../firebase/posts';
import { ref } from 'vue';
import Swal from 'sweetalert2'

const name = ref('');
const price = ref('');
const message = ref('');
</script>

<template>
    <form @submit.prevent="send" class="ctn contact p-2 py-3 d-flex flex-column text-center">
        <h2>Add a product</h2>
        <div class="input-ctn " data-validate="Name is required">
            <label for="name">Product`s name`</label>
            <input v-model="name" type="text" id="name" placeholder="Your name">
        </div>
        <div class="input-ctn" data-validate="price is required">
            <label for="price">price</label>
            <input v-model="price" type="text" id="price" placeholder="Your price">
        </div>
        <div class="input-ctn" data-validate="Name is required">
            <label for="name">Your Message</label>
            <textarea v-model="message" type="text" id="name" placeholder="Your message"></textarea>
        </div>
        <button class="btn btn-form">Send</button>
    </form>
</template>