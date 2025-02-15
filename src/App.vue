<script setup lang="ts">
import { RouterLink, RouterView } from 'vue-router'
</script>

<template>
  <header>
    <div class="wrapper">
      <div class="box">
        Box
      </div>
    </div>
  </header>
  <!-- <RouterView /> -->
</template>

<style lang="scss" scoped>
.wrapper {
  width: 500px;
  height: 300px;
  border: 1px solid red;
  background-color: _vars.$primary-color;
  @include _mix.center;

  .box {
    width: 100px;
    height: 100px;
    border: 1px solid black;
  }
}
</style>
