<script setup>
import { onMounted } from "vue";
import NavBar from "./components/NavBar.vue";
</script>

<template>
  <div class="app">
    <NavBar />
    <RouterView />
  </div>
</template>
