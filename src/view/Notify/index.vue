<script setup lang="ts">
import { ref, nextTick } from 'vue' // 引入ref

import { gsap } from 'gsap' // 引入gsap

// 异步加载动画
nextTick(() => {
  gsap.set('svg', { opacity: 1 })

  gsap.to('.ball', {
    keyframes: {
      '0%': { yPercent: 0, scaleX: 1, scaleY: 1 },
      '7%': { yPercent: 5, scaleY: 0.9, scaleX: 1.1, ease: 'sine.in' },
      '25%': { yPercent: 100, scaleY: 1.15, scaleX: 0.9, ease: 'sine.in' },
      '50%': { yPercent: 500, scaleX: 1, scaleY: 1, ease: 'none' },
      '60%': { scaleX: 1.6, scaleY: 0.4, ease: 'none' },
      '65%': { yPercent: 500, scaleX: 1, scaleY: 1 },
      '100%': { yPercent: 0, scaleX: 1, scaleY: 1 },
      easeEach: 'sine.out'
    },
    duration: 0.8,
    repeat: -1,
    transformOrigin: 'center bottom'
  })

  gsap.to('.shadow', {
    scale: 0.7,
    duration: 0.4,
    repeat: -1,
    yoyo: true,
    ease: 'sine.inOut',
    transformOrigin: 'center'
  })
})
</script>

<template>
  <div class="body">
    <svg viewBox="0 0 100 200">
      <ellipse class="shadow" cx="50" cy="188" rx="15" ry="5" />

      <circle class="ball" cx="50" cy="22" r="15" />
    </svg>
  </div>
</template>

<style lang="scss" scoped>
body {
  padding: 0;
  height: 100vh;
  display: flex;
  align-items: center;
  justify-content: center;
  background-color: #262626;
  svg {
    width: 100vw;
    max-height: 90vh;
    max-width: 500px;
    opacity: 0;
  }

  circle {
    fill: #88ce02;
  }

  .shadow {
    opacity: 0.2;
  }
}
</style>
