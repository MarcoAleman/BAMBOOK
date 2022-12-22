<script setup>
const props = defineProps({
    product: {},
    typeof: Object
})

const emmits = defineEmits
/* const addItem = (product) => {
    if (!this.cart.includes(event)) {
        this.cart.push(event)
        this.cart[this.cart.length - 1].unit = 1
    } else {
        this.cart.map(prod => {
            prod == event ? prod.unit += 1 : ''
        })
    }
    console.log(this.cart);
    localStorage.setItem('Cart', JSON.stringify(this.cart));
}

const deleteItem = (product) => {
    this.cart = this.cart.filter(eventf => eventf != event);
    localStorage.setItem('Cart', JSON.stringify(this.cart));
}
const deleteCart = () => {
    this.cart.length = 0;
    localStorage.setItem('Cart', JSON.stringify(this.cart));
} */
</script>
<template>
    <!-- <div class="card" style="width: 18rem;">
        <img src="https://picsum.photos/200" class="card-img-top" alt="...">
        <div class="card-body">
            <h5 class="card-title">Card title</h5>
            <p class="card-text">Some quick example text to build on the card title and make up the bulk of the card's
                content.</p>
            <a href="#" class="btn btn-primary">Go somewhere</a>
        </div>
    </div> -->

    <div class="">
        <section class="product-box">
            <a href="#">
                <div class="product-box_image d-flex justify-content-center">
                    <!-- <img src="/images/products/<%- product.image %>" alt="<%- product.name %>"> -->
                    <img class="rounded-top" src="https://picsum.photos/200" alt="...">
                </div>
                <article class="product-box_data">
                    <!-- <h2><%- finalPrice(product.price, product.discount) %> </h2>
                    <span><%- product.discount> 0 ? `${product.discount} % OFF` : "" %></span>
                    <p><%- product.name %></p> -->
                    <h2>{{ product.price }}</h2>
                    <span>{{ product.discount > 0 ? product.discount + ` % OFF` : '' }}</span>
                    <p>{{ product.name }}</p>
                    <font-awesome-icon class="icon p-1" icon="fas fa-truck" />
                    <button class="btn btn-success">BUY</button>
                </article>
            </a>
        </section>
    </div>
</template>

<style scoped>
a {
    text-decoration: none;
}

.products-wrapper {
    margin-top: 30px;
    margin-bottom: 30px;
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
    font-size: 1.5em;
    font-weight: 300;
    color: green;
    margin: 0 0 0 10px;
}

.product-box_data p {
    font-size: 1.5em;
    width: 100%;
    color: gray;
    margin: 0;
    height: 0;
    transition: 300ms;
    overflow: hidden;
}

.product-box_data .icon {
    color: green;
    font-size: 1.8em;
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
</style>