<script setup>
import { ref, onMounted, computed } from 'vue';
import Card from './Card.vue';
import CartComponent from './Cart.vue';
import products from '../../store/productsStore';
import { getProducts } from '../../firebase/products';


const cart = ref([]);
const msjCarrito = ref({
    clases: {
        display: 'd-none',
        color: 'danger'
    },
    msj: ''
})

const addItem = (product) => {
    if (!cart.value.some(element => element.name == product.product.name)) {
        cart.value.push(product.product)
        cart.value[cart.value.length - 1].unit = 1

        msjCarrito.value.clases.display = 'd-flex';
        msjCarrito.value.clases.color = 'alert-success';
        msjCarrito.value.msj = 'The product was added to the cart.';
        setTimeout(() => {
            msjCarrito.value.clases.display = 'd-none';
        }, 1500);

    } else {
        cart.value.map(prod => {
            if (prod.name == product.product.name && prod.unit < product.product.stock) {
                prod.unit += 1;
                msjCarrito.value.clases.display = 'd-flex';
                msjCarrito.value.clases.color = 'alert-success';
                msjCarrito.value.msj = 'A unit has been added to the cart.';
                setTimeout(() => {
                    msjCarrito.value.clases.display = 'd-none';
                }, 1250);
            } else {
                msjCarrito.value.clases.display = 'd-flex';
                msjCarrito.value.clases.color = 'alert-danger';
                msjCarrito.value.msj = 'There are no more units in stock.';
                setTimeout(() => {
                    msjCarrito.value.clases.display = 'd-none';
                }, 1250);
            }
        })

    }
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
        cart.value = JSON.parse(localStorage.getItem('Cart'));
    }
    getProducts()
})

</script>

<template>
    <div  id="fondo">
    <h1 class="title text-center mt-2 mb-0 text-white text-shadow">Green  Market</h1>
    <div class="card-ctn d-flex justify-content-center align-items-center flex-wrap gap-3 mb-5">
        <Card @addItem="addItem" v-for="product in products" :product="product" />
    </div>
    <CartComponent :cart="cart" @deleteItem="deleteItem" @deleteCart="deleteCart" />

    <div :class="[msjCarrito.clases.display, msjCarrito.clases.color]"
        class="alert alert-success d-flex align-items-center justify-content-center w-50 fixed-bottom text-center mb-5" role="alert"
        id="mensaje-carrito" v-text="msjCarrito.msj"></div>
</div>
</template>

<style scoped>
.title {
    font-weight: 900;
}
#mensaje-carrito {
    margin: 0 auto 10px;
}
#fondo {
    height:100%;
background-image:url('../img/fondo.jpg');
background-size:cover;
background-attachment: fixed;
padding-top: 1rem;
padding-bottom: 1rem;
}
</style>