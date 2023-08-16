<script setup lang="ts">
import { ref } from 'vue'
import { showImagePreview } from 'vant'

const image = ref('')
const onSubmit = (e: any) => {
  image.value = e.image
}
const showImage = () => {
  showImagePreview([image.value])
}
const onClear = () => {
  console.log('onClear')
}
</script>

<template>
  <div class="article-page">
    <van-signature @submit="onSubmit" @clear="onClear" />
    <van-image @click="showImage" v-if="image" :src="image" />
  </div>
</template>

<style lang="scss" scoped></style>
