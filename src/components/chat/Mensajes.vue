<script setup>
import { addId } from '../../firebase/addmsj';

const props = defineProps({
    chat: {},
    typeof: Object
})

</script>

<template>
    <div>
        <div class="card">
            <div class="card fondoventana">
                <div class="d-flex align-items-center mb-2">
                    <img class="foto mt-1 mx-2" :src=chat.photo referrerpolicy="no-referrer" alt="">
                    <p class="text-center mt-2 mb-0 col-6">{{ chat.name }}</p>
                </div>
                <p class="border bg-white p-2 color-success">{{ chat.message }}</p>
                <p class="text-center">{{ chat.date }}</p>
            </div>
        </div>
    </div>
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