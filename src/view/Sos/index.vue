<script setup lang="ts">
import logo from '@/assets/logo.svg'
import xhz from '@/assets/xhz.jpg'
import { ref } from 'vue'
const onIkun = (e: MouseEvent) => {}
</script>

<template>
  <img :src="logo" alt="" />
  <div class="kun"></div>
  <div class="shade"></div>
</template>

<style lang="scss" scoped>
.kun {
  width: 75px;
  height: 75px;
  background-color: #ff7802;
  border-radius: 50%;
  animation: ikun 1s infinite;
  position: absolute;
  top: 49%;
  left: 12%;
}
@keyframes ikun {
  0% {
    transform: scale(1);
  }
  50% {
    transform: scale(1.2);

    background-color: red;
    transform: translateY(120px);
  }
  100% {
    transform: scale(1);
  }
}

.shade {
  position: absolute;
  top: 79%;
  left: 17%;
  width: 40px;
  height: 20px;
  border-radius: 50%;
  background: radial-gradient(#666, transparent 50%);
  animation: shadeMove 1s infinite;
  transform: scale(2);
}
@keyframes shadeMove {
  0% {
    transform: scale(1);
  }
  50% {
    transform: scale(1.5);
  }
  100% {
    transform: scale(1);
  }
}
</style>
