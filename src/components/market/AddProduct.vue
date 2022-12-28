<script setup>
import user from '../../store/users';
import { ref } from 'vue';
import { addProduct } from '../../firebase/products';
//import Swal from 'sweetalert2'

const name = ref('');
const price = ref('');
const discount = ref('');
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
        $form.reset();
    }
</script>

<template>
    <main id="fondo">
    <form @submit.prevent="addNewProduct" class="ctn mt-2 mb-5 p-2 py-3 d-flex flex-column text-center rounded">
        <h2>Add a product</h2>
        <div class="input-ctn " data-validate="Name is required">
            <label for="name">Product's name</label>
            <input v-model="name" type="text" id="name" placeholder="Product's name" required>
        </div>
        <div class="input-ctn " data-validate="image is required">
            <label for="image">Image URL</label>
            <input v-model="image" type="text" id="image" placeholder="Product's image" required>
        </div>
        <div class="input-ctn" data-validate="price is required">
            <label for="price">Price</label>
            <input v-model="price" type="number" id="price" placeholder="Product's price" required>
        </div>
        <div class="input-ctn" data-validate="discount is required">
            <label for="discount">Discount</label>
            <input v-model="discount" type="number" id="discount" placeholder="Product's discount" required>
        </div>
        <div class="input-ctn" data-validate="stock is required">
            <label for="stock">Stock</label>
            <input v-model="stock" type="number" id="stock" placeholder="Product's stock" required>
        </div>
        <div class="input-ctn " data-validate="description is required">
            <label for="description">Description</label>
            <textarea v-model="description" type="text" id="description" placeholder="Product description" required></textarea>
        </div>
        <button class="btn btn-form">Add Product</button>
    </form>
</main>
</template>

<style scoped>
section.ctn,
form.ctn {
    margin: 0 auto;
    border-radius: 10px;
    background-color: #a9c957;
    width: 90%;
    border-radius: 10px 10px 0 0;
    box-shadow: 0 0 5px black;
}

/*------------------------FORMS---------------------------*/
form .input-ctn {
    width: 100%;
    margin-bottom: 15px;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
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
    background-color: var(--primario);
    color: white;
    align-self: center;
}

.btn-form:hover {
    background-color: var(--primario);
    color: white;
    box-shadow: white 0 0 5px;
}
#fondo {
    height:100%;
background-image:url('../img/fondo.jpg');
background-size:cover;
background-attachment: fixed;
padding-top: 1rem;
padding-bottom: 100%;
}
</style>