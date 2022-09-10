<script setup>
import { RouterLink, RouterView } from "vue-router";
</script>

<template>
  <RouterLink to="/" class="router">Home</RouterLink>
  <RouterLink to="/about" class="router">About</RouterLink>
  <RouterLink to="/addCategory" class="router">addCategory</RouterLink>
  <RouterLink to="/Category" class="router">Category</RouterLink>
  <RouterView />
</template>

<style scoped>
.router {
  margin: 20px;
}
</style>
