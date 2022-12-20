<script setup>
import { RouterLink, RouterView } from 'vue-router'
import FooterMenu from './components/FooterMenu.vue'

</script>

<template>

  <header>
    <!-- Primer NAV -->
    <div class="fixed-top p-1" style="background-color: #ffffff;">
      <div class="d-flex justify-content-between align-item-center ">
        <div class="d-flex justify-content-center ">
        <div class="p-1">
          <img src="./img/logo.png" alt="LOGO" style="height: 30px;">
        </div>
        <div class="text-black d-flex">
          <a class="link" href="">
            <h1>B</h1>
          </a>
          <a class="link" href="">
            <h1>a</h1>
          </a>
          <a class="link" href="">
            <h1>m</h1>
          </a>
          <a class="link" href="">
            <h1>b</h1>
          </a>
          <a class="link" href="">
            <h1>o</h1>
          </a>
          <a class="link" href="">
            <h1>o</h1>
          </a>
          <a class="link" href="">
            <h1>K</h1>
          </a>
        </div>
        </div>
        <div class="d-flex justify-content-center ">
          <font-awesome-icon class="icon" icon="fa-solid fa-store" />
          <font-awesome-icon class="icon" icon="fa-solid fa-inbox" />
          <button type="button" class="btn " data-bs-toggle="offcanvas" data-bs-target="#offcanvasWithBothOptions"
            aria-controls="offcanvasWithBothOptions"><font-awesome-icon class="icon" icon="fa-solid fa-bars" /></button>
          <div class="offcanvas offcanvas-start " data-bs-scroll="true" tabindex="-1" id="offcanvasWithBothOptions"
            aria-labelledby="offcanvasWithBothOptionsLabel" style="width: 37vh; background-color: #a7c957;">
            <div class="offcanvas-header " style="width: 35vh;">
              <h5 class="offcanvas-title" id="offcanvasWithBothOptionsLabel">MENU</h5>
              <button type="button" class="btn-close" data-bs-dismiss="offcanvas" aria-label="Close"></button>
            </div>
            <div class="offcanvas-body">
              <nav class="p-3 d-flex flex-column justify-content-center align-item-center gap-4">
                <RouterLink to="/">Home</RouterLink>
                <RouterLink to="/Ventas">Marcketplace</RouterLink>
                <RouterLink to="/AboutUs">About Us</RouterLink>
                <RouterLink to="/Eventos">Events</RouterLink>
                <RouterLink to="/Donation">Donation</RouterLink>
                <RouterLink to="/RulesAndPolice">Rules and Polices</RouterLink>                
              </nav>
            </div>
          </div>
        </div>
      </div>
    </div>


  </header>
  <footer>
    <FooterMenu />
  </footer>
  <RouterView />
</template>

<style scoped>
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

h1 {
  font-size: 1.5rem;
  font-weight: bold;
  color: var(--primario);
  margin-left: .6rem;
}

.link {
  text-decoration: none;
  -webkit-transition: 1s ease;
}

.link:hover {
  text-decoration: none;
  -webkit-transform: scale(1.5);
}
</style>
