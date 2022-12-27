<script setup>
import { addId } from '../../firebase/addmsj';

const props = defineProps({
    chat: {},
    typeof: Object
})

</script>

<template>
    <div>
        <div class="card" style="width: 18rem;">
            <div class="card-body">
                <h5 class="card-title text-center">{{ chat.name }}</h5>
                <p class="card-text">{{ chat.message }}</p>
                <p class="text-center">{{ chat.date }}</p>
            </div>
        </div>
    </div>
</template>

<style scoped>

</style>