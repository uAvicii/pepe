<script setup lang="ts">
import { createRouter, createWebHistory } from 'vue-router'
import { useUserStore } from './stores'
const onClick = () => {
  console.log(11)
}
</script>
<template>
  <audio autoplay loop muted>
    <source src="./assets/等你下课.mp3" type="audio/mpeg" />
  </audio>

  <router-view />
</template>

<style lang="scss" scoped></style>
