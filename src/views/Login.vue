<script setup>
import { loginWithGoogle, logout } from '../firebase/login';
import user from '../store/users.js'
import userList from '../store/userslist.js'
import { getUsers } from '../firebase/users.js'
import { onMounted } from 'vue';


onMounted(() => getUsers())

const pruebas = () => {
  console.log(userList.value);
}



</script>

<template>
  <main  class="d-flex flex-column justify-content-center align-item-center p-2" id="contact">


    <form class="d-flex justify-content-center border border-white rounded " style=" background-color: #a7c957;">
      <div class="d-flex flex-column justify-content-center align-item-center p-1">

        <div class="userCard">
          <div class="card " style="max-width: 540px;">
            <div class=" d-flex flex-column justify-content-center align-item-center">
              <div class="  p-1 d-flex flex-column justify-content-center">
                <img src="https://picsum.photos/200" class="img-fluid rounded-circle " style="height: 150px; width: 150px;" alt="user photo">
              </div>
              <div class=" d-flex flex-column justify-content-center">
                <div v-if="user !== null" class="card-body d-flex flex-column justify-content-center align-item-center">
                  <h1>WELCOME!</h1>
                  <img :src="user ? user.photoURL : 'https://picsum.photos/200'" alt="">
                  <h2 class="card-title ">{{user.name}}</h2>
                  <p class="card-text"><small class="text-muted">{{user.email}}</small></p>
                </div>
              </div>
            </div>
          </div>
        </div>



        <div class="d-flex flex-column justify-content-center align-item-center p-1 ">
          <div class="hide-md-lg d-flex flex-wrap justify-content-center align-item-center ">
            <h2 style="text-align:center">Login with Social Media or Manually</h2>

            <h2 style="text-align:center">Or sign in manually</h2>
          </div>
          <div class="d-flex flex-column justify-content-center align-item-center gap-2 ">

            <input type="text" name="username" placeholder="Username" required>
            <input type="password" name="password" placeholder="Password" required>
          </div>
          <button class="btn "><input type="submit" value="Login"></button>

        </div>

      </div>
    </form>


    <div class="d-flex flex-wrap justify-content-center align-item-center p-1 gap-1">
      <button class="fb btn">
        <p class="fa fa-facebook fa-fw"></p> Login with Facebook
      </button>
      <button class="twitter btn">Login with Twitter</button>
      <button class="google btn" @click="loginWithGoogle">Login with Google</button>
    </div>
    <div class="d-flex flex-wrap justify-content-center align-item-center p-1 gap-1">
      <button class="google btn" @click="logout">Logout</button>
    </div>

    <button class="btn btn-danger" @click="pruebas">Prueba</button>



    <!-- <p>Prueba</p>
    <div v-if="user == null">
      <p>Nada</p>
    </div>
    <div v-else>
      <p>{{user.name }}</p>
      <p>{{user.email }}</p>
      <img :src=user.photo alt="fotoperfil">
    </div> -->


    <div class="d-flex flex-wrap justify-content-center align-item-center p-1">
      <div>
        <a href="#" style="color:white" class="btn">Sign up
          <!-- vemos -->
          <!-- <RouterLink to="/registro">Sign up</RouterLink> -->
        </a>
      </div>
      <div>
        <a href="#" style="color:white" class="btn">Forgot password
          <!-- vemos
          <RouterLink to="/registro">Forgot password?</RouterLink> -->
        </a>
      </div>
    </div>

  </main>
</template>
<style scoped>
#contact {
  height:100%;
background-image:url('../assets/img/fondo.jpg');
background-size:cover;
background-attachment: fixed;
}




.fb {
  background-color: #3B5998;
  color: white;
}

.twitter {
  background-color: #55ACEE;
  color: white;
}

.google {
  background-color: #dd4b39;
  color: white;
}


</style>
