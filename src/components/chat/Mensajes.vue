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
    <div>
        <!-- <div class="card" v-if="chat.email == user.value.email"> -->
            <div class="card fondoventana">
                <div class="d-flex align-items-center mb-2">
                    <img class="foto mt-1 mx-2" :src=chat.photo referrerpolicy="no-referrer" alt="">
                    <p class="text-center mt-2 mb-0 col-6">{{ chat.name }}</p>
                </div>
                <p class="border bg-white p-2 color-success">{{ chat.message }}</p>
                <p class="text-center">{{ chat.date }}</p>
            </div>
          </div>
        <!-- </div> -->
        <!-- <div class="card" v-if="chat.email == mail.value"> -->
            <!-- <div class="card fondoventana">
                <div class="d-flex align-items-center mb-2">
                    <img class="foto mt-1 mx-2" :src=chat.photo referrerpolicy="no-referrer" alt="">
                    <p class="text-center mt-2 mb-0 col-6">{{ chat.name }}</p>
                </div>
                <p class="border bg-white p-2 color-success">{{ chat.message }}</p>
                <p class="text-center">{{ chat.date }}</p>
            </div> -->
          <!-- </div> -->
</template>

<style scoped>
.fondoventana {
    background-color: #f7efed !important;
}

.foto {
    height: 8vh;
    width: 8vh;
    border-radius: 50%;
}
</style>