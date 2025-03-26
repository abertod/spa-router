<template>
  <!--<h1 class="text-3xl font-bold underline">Hola Mi Mundo</h1>-->
  <!--<DomusPagina />-->
  <main class="bg-slate-100">
    <nav>
      <RouterLink to="#">Home</RouterLink>
      <RouterLink to="#/features">Features</RouterLink>
      <RouterLink to="#/pricing">Pricing</RouterLink>
      <RouterLink to="#/contact">Contact</RouterLink>
    </nav>
    <RouterView />
  </main>
</template>

<script setup lang="ts">
//import DomusPagina from './modulorum/landing/paginae/DomusPagina.vue';
import { RouterView, RouterLink } from 'vue-router';
</script>

<style scoped></style>
