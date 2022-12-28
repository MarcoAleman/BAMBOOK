<script setup>
import user from '../../store/users';
import { ref } from 'vue';
import { addProduct } from '../../firebase/products';
import Swal from 'sweetalert2'

const name = ref('');
const price = ref('');
const discount = ref('0');
const stock = ref('');
const description = ref('');
const image = ref('');
const author = ref('');

const addNewProduct = () => {
    let newProduct = {
        id: crypto.randomUUID(),
        author: user.value.name,
        date: Date.now(),
        name: name.value,
        price: price.value,
        discount: discount.value,
        stock: stock.value,
        description: description.value,
        photo: image.value,
    }
    addProduct(newProduct)

    let $form = document.querySelector('form');
    console.log('producto agregado');
    create()
    $form.reset();
}

const create = () => {
    Swal.fire({
        icon: 'success',
        title: 'Product Created!',
        showConfirmButton: false,
        timer: 1500
    })
}
</script>

<template>
    <main id="fondo">
        <form @submit.prevent="addNewProduct" class="ctn mt-2 mb-5 p-2 py-3 d-flex flex-column text-center rounded text-white">
            <h2 class="fw-bold">Add a product</h2>
            <div class="input-ctn mt-3" data-validate="Name is required">
                <label for="name">Product's name</label>
                <input v-model="name" type="text" id="name" placeholder="Product's name" required>
            </div>
            <div class="input-ctn " data-validate="image is required">
                <label for="image">Image URL</label>
                <input v-model="image" type="text" id="image" placeholder="Product's image" required>
            </div>
            <div class="input-ctn number" data-validate="price is required">
                <label for="price">Price</label>
                <input v-model="price" type="number" id="price" placeholder="Product's price" required>
            </div>
            <div class="input-ctn number" data-validate="discount is required">
                <label for="discount">Discount</label>
                <input v-model="discount" type="number" id="discount" placeholder="Product's discount" min="0" max="99" required>
            </div>
            <div class="input-ctn number" data-validate="stock is required">
                <label for="stock">Stock</label>
                <input v-model="stock" type="number" id="stock" placeholder="Product's stock" required>
            </div>
            <div class="input-ctn description" data-validate="description is required">
                <label for="description">Description</label>
                <textarea v-model="description" type="text" id="description" placeholder="Product description"
                    required></textarea>
            </div>
            <button class="btn btn-form shadow">Add Product</button>
        </form>
    </main>
</template>

<style scoped>
section.ctn,
form.ctn {
    margin: 0 auto;
    border-radius: 10px;
    background-color: #e4dad4;
    width: 90%;
    border-radius: 10px 10px 0 0;
    box-shadow: 0 0 5px black;
}

/*------------------------FORMS---------------------------*/
h2 {
    text-shadow: 0 0 5px black;
}

form .input-ctn {
    width: 100%;
    margin-bottom: 15px;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    color: black;
    font-weight: bold;
    font-size: large;
}

.input-ctn input,
.input-ctn textarea {
    text-align: center;
    width: 90%;
    height: 45px;
    font-size: 15px;
    color: #555;
    background-color: var(--color5);
    line-height: 1.2;
    outline: none;
    border: none;
    border-radius: 10px 10px 0 0;
    border-bottom: 2px solid gray;
}

.input-ctn textarea {
    height: 90px;
    padding-top: 15px;
}

.btn-form {
    width: 80%;
    background-color: #43291f;
    color: white;
    align-self: center;
}

.btn-form:hover {
    background-color: var(--primario);
    color: white;
    box-shadow: white 0 0 5px !important;
}

#fondo {
    min-height: 90vh;
    background-image: url('../img/fondo.jpg');
    background-size: cover;
    background-attachment: fixed;
    padding-top: 1rem;
    padding-bottom: 1rem;
}

@media screen and (min-width: 768px) {
    form {
        flex-direction: row !important;
        flex-wrap: wrap;
    }

    form h2 {
        width: 100%;
    }

    form .input-ctn {
        flex-wrap: wrap;
        width: 50%;
    }

    form .number {
        width: 30% !important;
        margin: 0 auto 15px;
    }

    form .description {
        width: 75%;
        margin: 0 auto 20px;
    }

    .btn-form {
        margin: 0 auto;
    }
}
</style>