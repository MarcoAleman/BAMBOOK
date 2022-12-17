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
      <font-awesome-icon class="icon" icon="fa-solid fa-bars" />
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
