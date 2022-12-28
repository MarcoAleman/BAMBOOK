<script setup>
import user from '../store/users.js'
import {logout} from '../firebase/login.js'

</script>

<template>
  <header class="sticky-top bg-white container-fluid border">
    <div class="row">
      <div class="col-5 d-flex">
        <img src="../assets/img/logo.png" id="logo" alt="LOGO" class="col-3">
        <div class="col-4 d-flex">
          <a class="link" href="#">
            B
          </a>
          <a class="link" href="#">
            a
          </a>
          <a class="link" href="#">
            m
          </a>
          <a class="link" href="#">
            b
          </a>
          <a class="link" href="#">
            o
          </a>
          <a class="link" href="#">
          o
          </a>
          <a class="link" href="#">
            K
          </a>
        </div>
      </div>
      <div class="col-5 offset-2">
        <router-link to="/market" ><font-awesome-icon  class="icon col-2" icon="fa-solid fa-store" /></router-link> 
        <font-awesome-icon class="icon col-2" icon="fa-solid fa-inbox" />
        <button class="btn col-2" data-bs-toggle="offcanvas" data-bs-target="#offcanvasWithBothOptions"
          aria-controls="offcanvasWithBothOptions" id="iconooffcanva"><font-awesome-icon icon="fa-solid fa-bars" /></button>
        <div class="offcanvas offcanvas-start " data-bs-scroll="false" tabindex="-1" id="offcanvasWithBothOptions"
          aria-labelledby="offcanvasWithBothOptionsLabel" style="width: 37vh; background-color: #a7c957;">
          <div class="offcanvas-header " style="width: 35vh;">
            <img v-if="user" class="imgNav" :src=user.photo alt="">
            <h5 v-if="user" class="offcanvas-title name"  id="offcanvasWithBothOptionsLabel">{{user.name}}</h5>
            <button type="button" class="btn-close" data-bs-dismiss="offcanvas" aria-label="Close"></button>
          </div>
          <div class="offcanvas-body">
            <nav class="p-3 d-flex flex-column justify-content-center align-item-center gap-4">
              <li data-bs-dismiss="offcanvas"><RouterLink to="/" id="offcanva">Home</RouterLink></li>
              <li data-bs-dismiss="offcanvas"><RouterLink to="Users" id="offcanva">Users</RouterLink></li>
              <li data-bs-dismiss="offcanvas"><RouterLink to="/market" id="offcanva">Marketplace</RouterLink></li>
              <li data-bs-dismiss="offcanvas"><RouterLink to="/AboutUs" id="offcanva">About Us</RouterLink></li>
              <li data-bs-dismiss="offcanvas"><RouterLink to="/Eventos" id="offcanva">Events</RouterLink></li>
              <li data-bs-dismiss="offcanvas"><RouterLink to="/Donation" id="offcanva">Donation</RouterLink></li>
              <li data-bs-dismiss="offcanvas"><RouterLink to="/RulesAndPolice" id="offcanva">Rules and Polices</RouterLink></li>
            </nav>
            <div class="d-flex align-items-center justify-content-center">
              <button v-if="user" class="btn btn-danger" @click="logout">Logout</button>
            </div>

          </div>
        </div>
      </div>
    </div>
  </header>
</template>

<style scoped>
.imgNav{
  border-radius: 50%;
  width: 4rem;
  height: 4rem;
}
.name{
  font-size: 1rem;
  text-align: center;
  font-weight: 700;
  color: white;
  text-shadow: 0 0 8px black;
}
.header {
  height: 3vh !important;
}

.logo {
  width: 2rem;
  height: 2rem;
  background-color: var(--primario);
  border-radius: 50%;
}

.iconos {
  margin-left: 4rem !important;
}

.icon {
  height: 1.3rem;
  color: var(--primario);
  margin-left: 1rem;
  margin-right: 0;
}

.link {
  text-decoration: none;
  -webkit-transition: 1s ease;
  font-size: 1.5rem;
  font-weight: bold;
  color: var(--primario);
}

.link:hover {
  text-decoration: none;
  -webkit-transform: scale(1.5);
}
#logo {
height: 40px;
width: auto;
}

li {
  list-style-type: none;
  text-align: center;
}
#offcanva {
  text-decoration: none;
  color: black;
  font-weight: bold;
}
#iconooffcanva {
  color: #a7c957;
}
</style>

