<script setup>
import { ref, onMounted } from 'vue';
import Card from './Card.vue';
import products from '../../store/productsStore';
import { getProducts} from '../../firebase/products';

const cart =ref([]);

onMounted(() => {
    getProducts()
})
</script>

<template>
    <div class="card-ctn d-flex justify-content-center flex-wrap gap-2 mt-5">
        <Card v-for="product in products" :product="product"/>
        <Card v-for="product in products" :product="product"/>
        <Card v-for="product in products" :product="product"/>
        <Card v-for="product in products" :product="product"/>
        <Card v-for="product in products" :product="product"/>
    </div>
</template>