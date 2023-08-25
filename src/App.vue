<script setup lang="ts">
import { createRouter, createWebHistory } from 'vue-router'
const onClick = () => {}
</script>
<template>
  <audio autoplay loop muted>
    <source src="./assets/等你下课.mp3" type="audio/mpeg" />
  </audio>

  <router-view />
</template>

<style lang="scss" scoped></style>
<style>
@import './assets/font.css';
body {
  font-family: pingfang !important;
}
</style>
