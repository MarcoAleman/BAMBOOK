<script setup>
import Swal from 'sweetalert2'

/* var modal = document.getElementById('id01');

// cierra el modal cuando se hace click en cualquier lugar
window.onclick = function (event) {
    if (event.target == modal) {
        modal.style.display = "none";
    }
} */
const donation = () => {
    Swal.fire({
        icon: 'success',
        title: 'Thanks for your donation!',
        text: 'We will be in touch soon',
        showConfirmButton: false,
        timer: 1500
    })
}
</script>
<template>
    <div id="donation">
        <form class="ctn mt-2 mb-5 p-2 py-3 d-flex flex-column text-center rounded text-white">
            <h2 class="fw-bold">Certify delivery address</h2>
            <div class="input-ctn " data-validate="Name is required">
                <label for="name">Full Name</label>
                <input type="text" id="name" placeholder="John M. Doe" required>
            </div>
            <div class="input-ctn " data-validate="Name is required">
                <label for="name">Email</label>
                <input type="email" id="name" placeholder="john@example.com" required>
            </div>
            <div class="input-ctn " data-validate="Name is required">
                <label for="name">Address</label>
                <input type="text" id="name" placeholder="542 W. 15th Street" required>
            </div>
            <div class="input-ctn " data-validate="Name is required">
                <label for="name">City</label>
                <input type="text" id="name" placeholder="New York" required>
            </div>
            <div class="input-ctn " data-validate="Name is required">
                <label for="name">State</label>
                <input type="text" id="name" placeholder="NY" required>
            </div>
            <div class="input-ctn " data-validate="Name is required">
                <label for="name">zip</label>
                <input type="number" id="name" placeholder="10001" required>
            </div>
            <h2 class="fw-bold mt-2">Payment</h2>
            <div class="input-ctn " data-validate="Name is required">
                <label for="name">Name on card</label>
                <input type="text" id="name" placeholder="Jhon More Doe" required>
            </div>
            <div class="input-ctn " data-validate="Name is required">
                <label for="name">Credit card number</label>
                <input type="number" id="name" placeholder="1111-2222-3333-4444" required>
            </div>
            <div class="input-ctn " data-validate="Name is required">
                <label for="name">Exp Month</label>
                <input type="text" id="name" placeholder="September" required>
            </div>
            <div class="input-ctn " data-validate="Name is required">
                <label for="name">Exp Year</label>
                <input type="number" id="name" placeholder="2023" required>
            </div>
            <div class="input-ctn inp-center" data-validate="Name is required">
                <label for="name">CVV</label>
                <input type="number" id="name" placeholder="352" required>
            </div>


            <!-- <button class="btn btn-form shadow" onclick="document.getElementById('id01').style.display='block'"> Donation
            </button> -->
            <button class="btn btn-form shadow" @click="donation"> Donation
            </button>
            <!-- MODAL -->
            <div id="id01" class="modal p-5">
                <span onclick="document.getElementById('id01').style.display='none'" class="close"
                    title="Close Modal">&times;</span>
                <form class="modal-content text-dark" action="/action_page.php" style="background-color: #ffffff;">
                    <div class="container">
                        <h1>Thanks for your donation</h1>
                        <p>We will be in touch soon</p>
                    </div>
                </form>
            </div>
        </form>

    </div>

</template>
<style scoped>
#donation {

    min-height: 100vh;
    display: flex;
    align-items: center;
    justify-content: center;
    background-size: cover;
    background-position: center;
    height: 83%;
    background-image: url('../assets/img/fondo.jpg');
    background-size: cover;
    background-attachment: fixed;
}



/* lalala */
h2 {
    text-shadow: 0 0 5px black;
}

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
    background-color: #43291f;
    color: white;
    align-self: center;
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

    form .inp-center {
        width: 50%;
        margin: 0 auto 20px;
    }

    .btn-form {
        margin: 10px auto 0;
    }
}

#fondo {
    height: 100%;
    background-image: url('../img/fondo.jpg');
    background-size: cover;
    background-attachment: fixed;
    padding-top: 1rem;
    padding-bottom: 100%;
}
</style>