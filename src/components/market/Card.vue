<script setup>
const props = defineProps({
    product: {},
    typeof: Object
})

const emits = defineEmits(['addItem'])

const toThousand = n => n.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ".");

const finalPrice = (price, discount) => {
    if (discount > 0) {
        return toThousand(price - ((price * discount) / 100))
    } else {
        return toThousand(price)
    }
}
</script>
<template>
    <!-- <div class="d-flex justify-content-center"> -->
        <section class="product-box">
            <!-- <a href="#"> -->
            <div class="product-box_image d-flex justify-content-center">
                <img class="rounded-top" src="https://picsum.photos/200" :alt="product.name">
            </div>
            <article class="product-box_data">
                <h2>{{ finalPrice(product.price, product.discount) }}</h2>
                <span>{{ product.discount > 0 ? product.discount + ` % OFF` : '' }}</span>
                <p class="text-center">{{ product.name }}</p>
                <font-awesome-icon class="icon p-2" icon="fas fa-truck" />
                <button class="btn btn-success w-100" @click="emits('addItem', { product })">BUY</button>
            </article>
            <!-- </a> -->
        </section>
    <!-- </div> -->
</template>

<style scoped>
a {
    text-decoration: none;
}

.products-title {
    font-size: 2.4em;
    font-weight: 400;
    color: blue;
}

.product-box {
    background-color: #ffffff;
    border-radius: 5px;
    overflow: hidden;
    transition: 300ms;
    margin: 20px 0;
    width: 90%;
    max-width: 320px;
}

.product-box a {
    display: block;
}

.product-box_image {
    border-bottom: 1px solid gainsboro;
}

.product-box_data {
    padding: 15px;
    position: relative;
    display: flex;
    align-items: center;
    flex-wrap: wrap;
}

.product-box_data h2 {
    font-size: 2.4em;
    font-weight: 300;
    margin: 0;
}

.product-box_data span {
    font-size: 1.2em;
    font-weight: 300;
    color: green;
    margin: 0 0 0 10px;
}

.product-box_data p {
    font-size: 1.5em;
    width: 100%;
    color: gray;
    margin: 0;
    height: 40px;
    transition: 300ms;
    overflow: hidden;
}

.product-box_data .icon {
    color: green;
    font-size: 1.5em;
    width: 35px;
    height: 35px;
    text-align: center;
    border: solid 1px;
    border-radius: 50%;
    position: absolute;
    top: -15px;
    right: 15px;
    background-color: #ffffff;
    display: flex;
    justify-content: center;
    align-items: center;
    transition: 300ms;
}



/* MEDIA QUERYS */
@media screen and (min-width: 768px) {
    .product-box_data p {
        height: 0px;
    }
.product-box:hover {
    box-shadow: 0 0 5px rgba(0, 0, 0, 0.5);
}

.product-box:hover p {
    height: 40px;
    margin-top: 15px;
}

.product-box:hover .icon {
    transform: rotate(360deg);
    box-shadow: 0 0 5px var(--green);
}
}
</style>