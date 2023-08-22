<script setup lang="ts">
//
</script>

<template>
  <div class="content">
    <iframe
      id="inlineFrameExample"
      title="Inline Frame Example"
      frameborder="0"
      src="https://www.openstreetmap.org/export/embed.html?bbox=-0.004017949104309083%2C51.47612752641776%2C0.00030577182769775396%2C51.478569861898606&layer=mapnik"
    >
    </iframe>
  </div>
</template>

<style lang="scss" scoped>
.content {
  width: 100%;
  height: 100%;
  iframe {
    width: 100%;
    height: 100vh;
  }
}
</style>
