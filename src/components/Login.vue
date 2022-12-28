<script setup>
import { loginWithGoogle, logout } from '../firebase/login.js';


</script>
<template>
  <main>
    <div class="d-flex flex-wrap" id="home">
      <div class="d-flex flex-column">
        <div class="d-flex flex-wrap justify-content-center align-item-center mt-4">
          <a class="link" href="#">B</a>
          <a class="link" href="#">a</a>
          <a class="link" href="#">m</a>
          <a class="link" href="#">b</a>
          <a class="link" href="#">o</a>
          <a class="link" href="#">o</a>
          <a class="link" href="#">K</a>
        </div>
        <div class="p-3" id="bienvenidos">
          <h4> <strong> WELCOME</strong> to our global social network, intended for the exclusive connection for citizens, governments, companies or environmental institutions.</h4>
        </div>
      </div>
      <div class="d-flex m-auto">
        <div v-if="!user" class="d-flex flex-column justify-content-center align-item-center p-1 gap-1">
          <button class="fb btn">
            <i class="fa fa-facebook fa-fw"></i> Login with Facebook
          </button>
          <button class="twitter btn">
            <i class="fa fa-twitter fa-fw"></i> Login with Twitter
          </button> -->
          <router-link to="/HomePosts"><button class="twitter btn mb-1"><i class="fa fa-google fa-fw"></i> Login with Twitter</button></router-link> 
          <router-link to="/HomePosts"><button @click="loginWithGoogle" class="google btn mb-1"><i class="fa fa-google fa-fw"></i> Login with Google+</button></router-link> 
        </div>
      </div>

      <div>

      </div>
    </div>

  </main>

</template>
<style scoped>

#bienvenidos {
  text-shadow: 1px 1px 1px #afc957;
  display: flex;
  flex-wrap: wrap;
  text-align: center;

}

.link {
  text-decoration: none;
  -webkit-transition: 1s ease;
  font-size: 2.4rem;
  font-weight: bold;
  color: var(--primario);
}

.link:hover {
  text-decoration: none;
  -webkit-transform: scale(1.5);
}

.fb {
  background-color: #3B5998 ;
  color: white;
}
.fb:hover {
  -webkit-transform: scale(1.1);
  transition: .2s;
  background-color: #3B5998 ;
  color: white;
}

.twitter {
  background-color: #55ACEE !important;
  color: white !important;
}
.twitter:hover {
  -webkit-transform: scale(1.1);
  transition: .2s;
  background-color: #55ACEE ;
  color: white;
}

.google {
  background-color: #dd4b39;
  color: white;
}
.google:hover{
    -webkit-transform: scale(1.1);
  transition: .2s;
  background-color: #dd4b39;
  color: white;
}
button{
  margin-top: .4rem;
  width: 17rem;
  height: 3rem;
}

</style>