<script setup>
import { ref, onMounted, computed } from 'vue';
import Card from './Card.vue';
import CartComponent from './Cart.vue';
import products from '../../store/productsStore';
import { getProducts } from '../../firebase/products';


const cart = ref([]);

const addItem = (product) => {
    //if (!cart.value.includes(product.product)) {
    if (!cart.value.some(element => element.name == product.product.name)) {
        cart.value.push(product.product)
        cart.value[cart.value.length - 1].unit = 1
        //console.log(cart.value[0].name)
        //console.log(cart.value.length.unit);
    } else {
        cart.value.map(prod => {
            if (prod.name == product.product.name/*  && prod.unit < product.product.stock */) {
                prod.unit += 1;
            }
        })

    }
    console.log(cart.value);
    localStorage.setItem('Cart', JSON.stringify(cart.value));
}

const deleteItem = (product) => {
    cart.value = cart.value.filter(productf => productf != product.product);
    localStorage.setItem('Cart', JSON.stringify(cart.value));
}

const deleteCart = () => {
    cart.value.length = 0;
    localStorage.setItem('Cart', JSON.stringify(cart.value));
}

onMounted(() => {
    if (localStorage.getItem('Cart')) {
        console.log('fdsfs')
        cart.value = JSON.parse(localStorage.getItem('Cart'));
    }
    getProducts()
})

</script>

<template>
    <div class="card-ctn d-flex justify-content-center flex-wrap gap-2 mt-5">
        <Card @addItem="addItem" v-for="product in products" :product="product" />
        <Card @addItem="addItem" v-for="product in products" :product="product" />
        <Card @addItem="addItem" v-for="product in products" :product="product" />
        <Card @addItem="addItem" v-for="product in products" :product="product" />
        <Card @addItem="addItem" v-for="product in products" :product="product" />
    </div>
    <CartComponent :cart="cart" @deleteItem="deleteItem" @deleteCart="deleteCart" />
</template>