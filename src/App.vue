<script setup>
import { RouterLink, RouterView } from 'vue-router'
import FooterMenu from './components/FooterMenu.vue'

</script>

<template>



  <div class="d-flex align-items-center mx-3" style="height: 3rem;">
    <img class="logo" src="#" alt="">
    <h1 class="mt-2">BambooK</h1>
    <div class="m-auto iconos">
      <font-awesome-icon class="icon" icon="fa-solid fa-store" />
      <font-awesome-icon class="icon" icon="fa-solid fa-inbox" />

      <!-- Menu hamburguesa -->
      <button class="btn " type="button" data-bs-toggle="offcanvas" data-bs-target="#offcanvasRight" aria-controls="offcanvasRight"><font-awesome-icon class="icon" icon="fa-solid fa-bars" /></button>
<div class="offcanvas offcanvas-end" tabindex="-1" id="offcanvasRight" aria-labelledby="offcanvasRightLabel">
  <div class="offcanvas-header">
    <h5 class="offcanvas-title" id="offcanvasRightLabel">Offcanvas right</h5>
    <button type="button" class="btn-close" data-bs-dismiss="offcanvas" aria-label="Close"></button>
  </div>
  <div class="offcanvas-body">
    <nav class="p-3 d-flex flex-column justify-content-center align-item-center gap-4">
<RouterLink to="/">Home</RouterLink>
<RouterLink to="/AboutUs">About</RouterLink>
<RouterLink to="/Events">Events</RouterLink>
<RouterLink to="/Ventas">Marcketplace</RouterLink>
<RouterLink to="/Donation">Donation</RouterLink>
<RouterLink to="/RulesAndPolice">Rules and polices</RouterLink>
</nav>
  </div>
</div>

    </div>
  </div>
    <footer>
      <FooterMenu />
    </footer>
  <RouterView />
</template>

<style scoped>
  .logo{
    width: 2rem;
    height: 2rem;
    background-color: var(--primario);
    border-radius: 50%;
  }
  .iconos{
    margin-left: 4rem !important;
  }
  .icon{
    height: 1.3rem;
    color: var(--primario);
    margin-left: 1rem;
    margin-right: 0;
}
  h1{
    font-size: 1.5rem;
    font-weight: bold;
    color: var(--primario);
    margin-left: .6rem;
  }
</style>
