<script setup>
const props = defineProps({
    cart: {},
    typeof: Object
})

const emits = defineEmits(['deleteItem', 'deleteCart'])

const eduContador = (cart) => {
            return cart.reduce((acc, prod) => acc + prod.unit, 0);
        }
</script>

<template>
    <div class="icon-cart" data-bs-toggle="modal" data-bs-target="#staticBackdrop">
        <font-awesome-icon icon="fas fa-cart-shopping" />
        <div v-cloak class="counter-cart">{{ eduContador(cart) }}</div>
    </div>

    <div class="modal fade" id="staticBackdrop" data-bs-backdrop="static" data-bs-keyboard="false" tabindex="-1"
        aria-labelledby="staticBackdropLabel" aria-hidden="true">
        <div class="modal-dialog">
            <div class="modal-content">
                <div class="modal-header">
                    <h1 class="modal-title fs-5 text-center w-100" id="staticBackdropLabel">Cart</h1>
                    <button type="button" class="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
                </div>
                <div v-if="cart.length != 0" class="modal-body">
                    <div v-for="product in cart" class="row d-flex flex-row justify-content-between align-items-center">
                        <p class="col-5 p-0">{{ product.name }}</p>
                        <p class="col-5 p-0">Price: ${{ product.price }}</p>
                        <p class="col-1 p-0">x {{ product.unit }}</p>
                        <p class="col-1 p-0 btn btn-danger text-center" @click="emits('deleteItem', { product })" >
                            <font-awesome-icon icon="fa-solid fa-trash" />
                        </p>
                    </div>
                    <p class="text-center">Total: ${{ cart.reduce((acc, prod) => acc + prod.unit * prod.price, 0) }}</p>
                </div>
                <div v-else class="modal-body text-center">
                    <p>Cart is empty!!!</p>
                </div>
                <div class="modal-footer justify-content-center">
                    <button type="button" class="btn btn-danger" @click="emits('deleteCart')">Empty Cart <font-awesome-icon icon="fa-solid fa-trash" /></button>
                    <a v-if="cart.length != 0" href="https://mpago.la/21PfTaN" target="_blank"><button type="button" class="btn btn-success">Buy <font-awesome-icon icon="fa-solid fa-money-bill" /></button></a>
                    <a v-if="cart.length == 0" href="https://mpago.la/21PfTaN" target="_blank"><button type="button" class="btn btn-success disabled">Buy <font-awesome-icon icon="fa-solid fa-money-bill" /></button></a>
                </div>
            </div>
        </div>
    </div>
</template>

<style scoped>
.icon-cart {
    width: 5rem;
    height: 5rem;
    background-color: white;
    border-radius: 50%;
    position: fixed;
    bottom: 48px;
    right: 15px;
    cursor: pointer;
    box-shadow: 0 1px 1px rgba(229, 103, 23, 0.075)inset, 0 0 8px black;
    z-index: 99999;
}

.icon-cart .fa-cart-shopping {
    width: 50%;
    font-size: 2rem;
    position: absolute;
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%);
}

.icon-cart div {
    height: 25px;
    display: flex;
    justify-content: center;
    align-items: center;
    position: absolute;
    top: 10%;
    left: 50%;
    background-color: var(--primario);
    border-radius: 50%;
    padding: 0.5rem;
}
</style>