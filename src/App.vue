<script setup lang="ts">
import { RouterLink, RouterView } from 'vue-router'
import NavBar from "@/components/layout/NavBar.vue"
</script>

<template>
  <div class="app">
    <NavBar />
  </div>
  <!-- <RouterView /> -->
</template>

<style lang="scss" scoped>
.app {
  height: 2000px;
}
</style>
